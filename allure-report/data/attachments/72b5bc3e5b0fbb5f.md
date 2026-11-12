# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AEQP.spec.js >> AviatorSMS Login Tests >> Login with username only
- Location: tests\AEQP.spec.js:58:3

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//*[@id=\'txt_Username\']')

```

# Test source

```ts
  1  |  
  2  | 
  3  | const { test, expect } = require('@playwright/test');
  4  | 
  5  | const username = 'hjkl@gmail.com';
  6  | const password = 'Pr0sp3cta@NI';
  7  | const loginURL = 'https://allocate.prospacta.org/home/schedule';
  8  | const dashboardURL = 'https://allocate.prospacta.org/home/AirportList';
  9  | 
  10 | test.describe('AviatorSMS Login Tests', () => {
  11 | 
  12 |   test.beforeEach(async ({ page }) => {
  13 |     await page.goto(loginURL);
  14 |   });
  15 | 
  16 |   // TC01 - Positive login        
  17 |   test('Login with valid credentials', async ({ page }) => {
  18 |     await page.locator("//*[@id='txt_Username']").pressSequentially(username);
  19 |     await page.locator("//*[@id='txt_Password']").pressSequentially(password);
  20 |     await page.waitForTimeout(3000);
  21 |     await page.locator("//*[@id='btn_Login']").click();
  22 | 
  23 |     await expect(page).toHaveURL(dashboardURL);
  24 |   });
  25 | 
  26 |   // TC02 - Invalid username
  27 |   test('Login with invalid username', async ({ page }) => {
  28 |     await page.locator("//*[@id='txt_Username']").fill('INVALID_USER_123');
  29 |     await page.locator("//*[@id='txt_Password']").fill(password);
  30 | 
  31 |     await page.locator("//*[@id='btn_Login']").click();
  32 | 
  33 |     await expect(page).not.toHaveURL(dashboardURL);
  34 |     await expect(page.locator("//*[@id='txt_Username']")).toBeVisible();
  35 |   });
  36 | 
  37 |   // TC03 - Invalid password
  38 |   test('Login with invalid password', async ({ page }) => {
  39 |     await page.locator("//*[@id='txt_Username']").fill(username);
  40 |     await page.locator("//*[@id='txt_Password']").fill('WrongPassword123');
  41 | 
  42 |     await page.locator("//*[@id='btn_Login']").click();
  43 | 
  44 |     await expect(page).not.toHaveURL(dashboardURL);
  45 |     await expect(page.locator("//*[@id='txt_Password']")).toBeVisible();
  46 |   });
  47 | 
  48 |   // TC04 - Both fields empty
  49 |   test('Login with empty credentials', async ({ page }) => {
  50 |     await page.locator("//*[@id='btn_Login']").click();
  51 | 
  52 |     await expect(page).not.toHaveURL(dashboardURL);
  53 |     await expect(page.locator("//*[@id='txt_Username']")).toBeVisible();
  54 |     await expect(page.locator("//*[@id='txt_Password']")).toBeVisible();
  55 |   });
  56 | 
  57 |   // TC05 - Username only
  58 |   test('Login with username only', async ({ page }) => {
> 59 |     await page.locator("//*[@id='txt_Username']").fill(username);
     |                                                   ^ Error: locator.fill: Target page, context or browser has been closed
  60 | 
  61 |     await page.locator("//*[@id='btn_Login']").click();
  62 | 
  63 |     await expect(page).not.toHaveURL(dashboardURL);
  64 |   });
  65 | 
  66 |   // TC06 - Password only
  67 |   test('Login with password only', async ({ page }) => {
  68 |     await page.locator("//*[@id='txt_Password']").fill(password);
  69 | 
  70 |     await page.locator("//*[@id='btn_Login']").click();
  71 | 
  72 |     await expect(page).not.toHaveURL(dashboardURL);
  73 |   });
  74 | 
  75 |   // TC07 - Password masking
  76 |   test('Password should be masked', async ({ page }) => {
  77 |     const passwordField = page.locator("//*[@id='txt_Password']");
  78 | 
  79 |     await passwordField.fill(password);
  80 | 
  81 |     await expect(passwordField).toHaveAttribute('type', 'password');
  82 |   });
  83 | 
  84 | // TC08 - Login using Enter key
  85 |   test('Login using Enter key', async ({ page }) => {
  86 |     await page.locator("//*[@id='txt_Username']").fill(username);
  87 |     await page.locator("//*[@id='txt_Password']").fill(password);
  88 |    await page.keyboard.press('Enter')
  89 |     await expect(page).toHaveURL(dashboardURL);
  90 |   });
  91 |  
  92 | });
  93 |     
  94 | 
```