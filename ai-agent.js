
const { chromium } = require('@playwright/test');
const { Ollama } = require('ollama');
const readline = require('readline/promises');
const { stdin, stdout } = require('process');
const fs = require('node:fs');
require('dotenv').config();

const ai = new Ollama({
  host: 'http://127.0.0.1:11434'
});

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

const MODEL = 'qwen2.5:7b';

async function ask(question) {
  return rl.question(question);
}

// Safely locate an element by its ID.
function byId(page, id) {
  return page.locator(`[id="${String(id).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"]`);
}

// Click a supplied XPath and wait for the page/menu to update.
async function clickXPath(page, name, xpath) {
  const locator = page.locator(`xpath=${xpath}`).first();

  await locator.waitFor({
    state: 'visible',
    timeout: 15000
  });

  await locator.click();
  await page.waitForLoadState('domcontentloaded').catch(() => { });
  await page.waitForTimeout(800);

  console.log(`PASS: Clicked ${name}`);
  console.log('Current URL:', page.url());
}

// Inspect visible native form controls.
async function inspectRequestForm(page) {
  const fields = await page.locator(
    'input:visible, select:visible, textarea:visible'
  ).evaluateAll(elements =>
    elements.map((el, index) => {
      const type = (el.type || el.tagName).toLowerCase();

      const label =
        el.labels?.[0]?.innerText?.trim() ||
        el.getAttribute('aria-label') ||
        el.getAttribute('placeholder') ||
        el.name ||
        el.id ||
        `Field ${index + 1}`;

      return {
        index,
        tag: el.tagName.toLowerCase(),
        type,
        label,
        id: el.id,
        name: el.name,
        required: Boolean(el.required),
        disabled: Boolean(el.disabled),
        readOnly: Boolean(el.readOnly),
        options: el.tagName === 'SELECT'
          ? Array.from(el.options).map(option => ({
            label: option.text.trim(),
            value: option.value,
            disabled: option.disabled
          }))
          : []
      };
    })
  );

  console.log('\n========== REQUEST FORM FIELDS ==========');

  if (!fields.length) {
    console.log(
      'No visible native form controls found. ' +
      'The page may use custom controls or an iframe.'
    );
  }

  fields.forEach((field, index) => {
    console.log(`\n${index + 1}. ${field.label}`);
    console.log(`   Type: ${field.type}`);
    console.log(`   ID: ${field.id || '(none)'}`);
    console.log(`   Required: ${field.required}`);
    console.log(`   Disabled: ${field.disabled}`);

    if (field.options.length) {
      console.log('   Dropdown options:');
      field.options.forEach(option => {
        console.log(
          `   - ${option.label}` +
          (option.disabled ? ' (disabled)' : '')
        );
      });
    }
  });

  // Identify custom dropdowns when the page uses ARIA roles.
  const customDropdowns = await page.locator(
    '[role="combobox"]:visible, [aria-haspopup="listbox"]:visible'
  ).evaluateAll(elements =>
    elements.map(el => ({
      tag: el.tagName,
      text: (el.innerText || '').trim(),
      label: el.getAttribute('aria-label') || '',
      id: el.id || '',
      role: el.getAttribute('role') || ''
    }))
  ).catch(() => []);

  if (customDropdowns.length) {
    console.log('\nCustom dropdown controls:');
    console.log(JSON.stringify(customDropdowns, null, 2));
  }

  return fields;
}

// Ask the user for values, then fill only the values they provide.
async function askForFieldValues(page, fields) {
  const results = [];

  console.log('\nEnter the values you want to test.');
  console.log('Press Enter to skip any field.');
  console.log('The agent will NOT submit the request.');

  for (const field of fields) {
    if (
      field.disabled ||
      field.readOnly ||
      [
        'hidden', 'password', 'submit', 'button',
        'reset', 'file', 'image'
      ].includes(field.type)
    ) {
      continue;
    }

    const target = field.id
      ? byId(page, field.id)
      : field.name
        ? page.locator(
          `${field.tag}[name="${field.name.replace(/"/g, '\\"')}"]`
        )
        : page.locator(field.tag).nth(field.index);

    // Ask whether a checkbox should be checked.
    if (field.tag === 'input' && field.type === 'checkbox') {
      const answer = (
        await ask(`Check "${field.label}"? Enter yes/no, or Enter to skip: `)
      ).trim().toLowerCase();

      if (!answer) {
        results.push({
          field: field.label,
          status: 'SKIPPED'
        });
        continue;
      }

      if (!['yes', 'y', 'no', 'n'].includes(answer)) {
        console.log('Please enter yes or no. Field skipped.');
        results.push({
          field: field.label,
          status: 'SKIPPED'
        });
        continue;
      }

      if (answer === 'yes' || answer === 'y') {
        await target.check();
      } else {
        await target.uncheck();
      }

      results.push({
        field: field.label,
        status: 'PASS',
        checked: answer === 'yes' || answer === 'y'
      });
      continue;
    }

    // Ask for a value and show native dropdown options.
    let question = `Enter value for "${field.label}"`;

    if (field.required) {
      question += ' (required)';
    }

    if (field.options.length) {
      const options = field.options
        .filter(option => !option.disabled)
        .map(option => option.label);

      question += ` [${options.join(' | ')}]`;
    }

    const answer = (await ask(question + ': ')).trim();

    if (!answer) {
      results.push({
        field: field.label,
        status: 'SKIPPED'
      });
      continue;
    }

    // Validate and select a native dropdown option.
    if (field.tag === 'select') {
      const option = field.options.find(item =>
        !item.disabled &&
        (
          item.label.toLowerCase() === answer.toLowerCase() ||
          item.value.toLowerCase() === answer.toLowerCase()
        )
      );

      if (!option) {
        console.log('That value is not in the dropdown options.');
        results.push({
          field: field.label,
          status: 'FAIL',
          reason: 'Value does not match an available option'
        });
        continue;
      }

      await target.selectOption(option.value);

      const actual = await target.inputValue();

      results.push({
        field: field.label,
        status: actual === option.value ? 'PASS' : 'FAIL',
        selectedOption: option.label
      });

      continue;
    }

    // Do not guess how to fill radio groups, date widgets, or
    // custom controls; handle ordinary text-like inputs first.
    if (
      field.type === 'radio' ||
      field.type === 'date' ||
      field.type === 'datetime-local' ||
      field.type === 'time' ||
      field.type === 'file'
    ) {
      console.log(
        `Special control "${field.label}" needs a dedicated handler; skipped.`
      );

      results.push({
        field: field.label,
        status: 'SKIPPED',
        reason: 'Special control requires a dedicated handler'
      });

      continue;
    }

    await target.fill(answer);

    const actual = await target.inputValue().catch(() => '');

    results.push({
      field: field.label,
      status: actual === answer ? 'PASS' : 'FAIL',
      value: answer
    });
  }

  return results;
}

async function main() {
  let browser;

  try {
    // 1. Read login details from .env.
    const url = process.env.UAT_URL;
    const username = process.env.UAT_USERNAME;
    const password = process.env.UAT_PASSWORD;

    if (!url || !username || !password) {
      throw new Error(
        'Add UAT_URL, UAT_USERNAME and UAT_PASSWORD to your .env file.'
      );
    }

    if (!/^https?:\/\//i.test(url)) {
      throw new Error('UAT_URL must start with http:// or https://');
    }

    // 2. Open browser.
    browser = await chromium.launch({
      headless: false
    });

    const page = await browser.newPage({
      viewport: { width: 1536, height: 864 }
    });

    page.setDefaultTimeout(10000);

    await page.goto(url, {
      waitUntil: 'domcontentloaded'
    });

    console.log('\nLogin page:', page.url());
    console.log('Title:', await page.title());

    // 3. Login using your confirmed AviatorSMS selectors.
    await page.locator('#txt_Username').fill(username);
    await page.locator('#txt_Password').fill(password);

    await page.locator('#btn_Login').click();

    await page.waitForLoadState('domcontentloaded').catch(() => { });
    await page.waitForTimeout(1500);

    console.log('\nAfter login:', page.url());
    console.log('Title:', await page.title());

    // 4. Navigate using your exact XPaths.
    const navigationResults = [];

    const navigation = [
      {
        name: 'Permit',
        xpath: '//*[@id="form1"]/div[4]/div[4]'
      },
      {
        name: 'Airside Driving Permit',
        xpath: '//*[@id="div5_Liparent3"]/a'
      },
      {
        name: 'Request',
        xpath: '//*[@id="div5_ul3"]/li[1]/a/span'

      },


    ];

    console.log('\nNavigating to Permit > Airside Driving Permit > Request');

    for (const item of navigation) {
      try {
        await clickXPath(page, item.name, item.xpath);

        navigationResults.push({
          name: item.name,
          xpath: item.xpath,
          status: 'PASS'
        });
      } catch (error) {
        navigationResults.push({
          name: item.name,
          xpath: item.xpath,
          status: 'FAIL',
          reason: error.message
        });

        throw new Error(
          `Could not open "${item.name}". Check its XPath. ${error.message}`
        );
      }
    }

    console.log('\nRequest page URL:', page.url());
    console.log('Request page title:', await page.title());

    // 5. Let the local AI summarize the current page.
    await page.evaluate(() => {
      document.documentElement.style.zoom = '75%';
    });

    await page.waitForTimeout(1000);
    console.log('Request page zoom set to 75%');

    console.log('\nAsking local AI to summarize the page...');

    const response = await ai.chat({
      model: MODEL,
      format: 'json',
      messages: [
        {
          role: 'system',
          content:
            'You are a cautious QA assistant. Return JSON only with ' +
            '{"summary":"...","likelyPageHeading":"..."}. ' +
            'Use only information in the supplied page data. ' +
            'Do not invent headings or actions.'
        },
        {
          role: 'user',
          content: JSON.stringify(pageInfo)
        }
      ]
    });

    let aiSummary;

    try {
      aiSummary = JSON.parse(response.message.content);
    } catch {
      aiSummary = {
        summary: 'AI summary unavailable',
        likelyPageHeading: ''
      };
    }

    console.log('\nPage summary:');
    console.log(JSON.stringify(aiSummary, null, 2));

    // 6. Inspect fields and dropdowns.
    const fields = await inspectRequestForm(page);

    // 7. Ask permission before entering any values.
    const approval = (
      await ask(
        '\nType FILL to enter your chosen values, or anything else to skip filling: '
      )
    ).trim();

    let fieldResults = [];

    if (approval === 'FILL') {
      fieldResults = await askForFieldValues(page, fields);
    } else {
      console.log('Form filling skipped.');
    }

    // 8. Report results. Do not submit the permit.
    console.log('\nNavigation results:');
    console.log(JSON.stringify(navigationResults, null, 2));

    console.log('\nField results:');
    console.log(JSON.stringify(fieldResults, null, 2));

    console.log('\nSafety check: No permit was submitted or saved.');

    // 9. Save screenshot and JSON report.
    await page.screenshot({
      path: 'ai-agent-result.png',
      fullPage: true
    });

    fs.writeFileSync(
      'ai-agent-report.json',
      JSON.stringify({
        url: page.url(),
        title: await page.title(),
        summary: aiSummary.summary || '',
        navigation: navigationResults,
        fields: fields.map(field => ({
          label: field.label,
          tag: field.tag,
          type: field.type,
          required: field.required,
          disabled: field.disabled,
          options: field.options.map(option => option.label)
        })),
        fieldResults,
        submitted: false,
        timestamp: new Date().toISOString()
      }, null, 2)
    );

    console.log('\nScreenshot saved: ai-agent-result.png');
    console.log('Report saved: ai-agent-report.json');

    await ask('\nPress Enter to close the browser...');
  } finally {
    if (browser) {
      await browser.close();
    }

    rl.close();
  }
}

main().catch(error => {
  console.error('\nAgent error:', error.message);
  process.exitCode = 1;
});
