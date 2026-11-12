# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AEQP_flow.spec.js >> aviator sms >> Request Application
- Location: tests\AEQP_flow.spec.js:63:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://uat-dxn.aviatorsms.com/MainForm.aspx?hId=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&cId=T6Ia2UTKDsOMFLuHtWS53A%3d%3d&catID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&pid=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&fid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&RecordID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&Module=aUao64M1406FsLsG4U77iQ%3d%3d&Mode=C9JBk%2fbs%2fvrFlXdmvmTEmQ%3d%3d&startup=QxBOUNf0JJJ%2f148VsXLtRg%3d%3d&strtfid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&pName=oTuStdZzDdMbd2HKFqgP8A%3d%3d", waiting until "load"

```

# Test source

```ts
  1  | const{test,expect} = require ('@playwright/test')
  2  | 
  3  | const loginURL = 'https://uat-dxn.aviatorsms.com/';
  4  | const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';
  5  | 
  6  | const username = 'lsg_222';
  7  | const password = 'welcome';
  8  | //zoom size
  9  |     /**
  10 |  * @param {import('@playwright/test').Page} page
  11 |  */
  12 | async function setZoom80(page) {
  13 |     await page.evaluate(() => {
  14 |         document.documentElement.style.zoom = '90%';
  15 |     });
  16 | }
  17 | // Equipment Management navigation
  18 | /**
  19 |  * @param {import('@playwright/test').Page} page
  20 |  */
  21 | async function openEquipmentManagement(page) {
  22 | 
  23 |     await page.locator('xpath=//*[@id="form1"]/div[4]/div[4]').click();
  24 | 
  25 |     await page.locator('xpath=//*[@id="div5_Liparent1"]/a').click();
  26 | 
  27 |     await page.locator('xpath=//*[@id="div5_ul1"]/li[1]/a/span').click();
  28 | 
  29 |     await setZoom80(page);
  30 |     
  31 | }
  32 |  function generateVehicleNumber(){
  33 | const state='AP';
  34 | const distrit='31';
  35 | const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  36 | const letter1 = letters[Math.floor(Math.random()*26)];
  37 | const letter2 = letters[Math.floor(Math.random()*26)];
  38 | const number = Math.floor(Math.random()*1000).toString().padStart(4,'0');
  39 | return`${state} ${distrit} ${letter1}${letter2} ${number}`;
  40 |  }
  41 |     //login 
  42 |     /**
  43 |  * @param {import('@playwright/test').Page} page
  44 |  */
  45 |     async function login(page) {
  46 |       await page.goto(loginURL);
  47 |       await  setZoom80(page);
  48 |       await page.locator("//*[@id='txt_Username']").fill(username);
  49 |        await page.locator("//*[@id='txt_Password']").fill(password);
  50 |   await page.locator("//*[@id='btn_Login']").click();
  51 |   await expect(page).toHaveURL(dashboardURL);
  52 | //   await setZoom80(page);
  53 |   await  openEquipmentManagement(page);
  54 |     }
  55 |     test('login function', async ({ page }) => {
  56 |       await login(page);
  57 |     })
  58 |     test.describe('aviator sms', ()=>{
  59 | test.beforeEach(async ({page}) =>{
  60 | await login(page);
  61 | })
  62 | 
  63 |  test.only('Request Application', async ({ page }) => {
  64 | 
  65 |     const vehicleNumber = generateVehicleNumber();
  66 |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_3988_OF']").fill(vehicleNumber);
  67 |      await page.waitForTimeout(3000);
  68 |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5747_ME_842']").selectOption({index:2});
  69 |     await page.waitForTimeout(3000);
  70 |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_ddl_5749_ME_844']").selectOption({index:2});
  71 |     await page.waitForTimeout(5000);
  72 |     await page.locator("//*[@id='ctl00_ContentPlaceHolder1_Pane_1_content_txt_2157_OF']").pressSequentially('CRANE');
  73 |    await page.waitForTimeout(3000);
  74 |     await page.evaluate(() => {
  75 |     window.scrollBy(0,1100);
  76 | });
  77 | const page1Promise = page.waitForEvent('popup');
  78 |   await page.getByRole('button', { name: 'Attach' }).click();
  79 |   const page1 = await page1Promise;
  80 | await page1.locator('#ctl00_ContentPlaceHolder1_txt_1992_OF').fill('Aadhar');
  81 | const fileInput = page1.locator('input[type="file"]');
  82 | await fileInput.waitFor({ state: 'attached', timeout: 15000 });
  83 | await fileInput.setInputFiles( 'C:\\Users\\niteeshi\\Pictures\\Screenshots\\Screenshot 2026-07-01 141938.png');
  84 | await page1.locator('#ctl00_ContentPlaceHolder1_btn_AddAttachment').click();
> 85 | await page.goto('https://uat-dxn.aviatorsms.com/MainForm.aspx?hId=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&cId=T6Ia2UTKDsOMFLuHtWS53A%3d%3d&catID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&pid=Td2JymWwcgX%2f7+3o%2fYKJmA%3d%3d&fid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&RecordID=QStsOI%2fExXVAhFe3B9H2Zg%3d%3d&Module=aUao64M1406FsLsG4U77iQ%3d%3d&Mode=C9JBk%2fbs%2fvrFlXdmvmTEmQ%3d%3d&startup=QxBOUNf0JJJ%2f148VsXLtRg%3d%3d&strtfid=3q1NX9aF9UV5LJyv+4yCbQ%3d%3d&pName=oTuStdZzDdMbd2HKFqgP8A%3d%3d');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  86 |  await page.waitForTimeout(3000);
  87 |  await page.evaluate(() => {
  88 |     window.scrollBy(0,1100);
  89 | });
  90 | 
  91 | 
  92 | });
  93 | 
  94 |  });
  95 | 
  96 | 
  97 | 
```