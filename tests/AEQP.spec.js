 

const { test, expect } = require('@playwright/test');

const username = 'lsg_222';
const password = 'welcome';
const loginURL = 'https://uat-dxn.aviatorsms.com';
const dashboardURL = 'https://uat-dxn.aviatorsms.com/Menus.aspx';

test.describe('AviatorSMS Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(loginURL);
  });

  // TC01 - Positive login        
  test('Login with valid credentials', async ({ page }) => {
    await page.locator("//*[@id='txt_Username']").pressSequentially(username);
    await page.locator("//*[@id='txt_Password']").pressSequentially(password);
    await page.waitForTimeout(3000);
    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).toHaveURL(dashboardURL);
  });

  // TC02 - Invalid username
  test('Login with invalid username', async ({ page }) => {
    await page.locator("//*[@id='txt_Username']").fill('INVALID_USER_123');
    await page.locator("//*[@id='txt_Password']").fill(password);

    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='txt_Username']")).toBeVisible();
  });

  // TC03 - Invalid password
  test('Login with invalid password', async ({ page }) => {
    await page.locator("//*[@id='txt_Username']").fill(username);
    await page.locator("//*[@id='txt_Password']").fill('WrongPassword123');

    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='txt_Password']")).toBeVisible();
  });

  // TC04 - Both fields empty
  test('Login with empty credentials', async ({ page }) => {
    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='txt_Username']")).toBeVisible();
    await expect(page.locator("//*[@id='txt_Password']")).toBeVisible();
  });

  // TC05 - Username only
  test('Login with username only', async ({ page }) => {
    await page.locator("//*[@id='txt_Username']").fill(username);

    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).not.toHaveURL(dashboardURL);
  });

  // TC06 - Password only
  test('Login with password only', async ({ page }) => {
    await page.locator("//*[@id='txt_Password']").fill(password);

    await page.locator("//*[@id='btn_Login']").click();

    await expect(page).not.toHaveURL(dashboardURL);
  });

  // TC07 - Password masking
  test('Password should be masked', async ({ page }) => {
    const passwordField = page.locator("//*[@id='txt_Password']");

    await passwordField.fill(password);

    await expect(passwordField).toHaveAttribute('type', 'password');
  });

// TC08 - Login using Enter key
  test('Login using Enter key', async ({ page }) => {
    await page.locator("//*[@id='txt_Username']").fill(username);
    await page.locator("//*[@id='txt_Password']").fill(password);
   await page.keyboard.press('Enter')
    await expect(page).toHaveURL(dashboardURL);
  });
 
});
