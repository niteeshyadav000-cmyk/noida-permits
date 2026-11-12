 

const { test, expect } = require('@playwright/test');

const username = 'hjkl@gmail.com';
const password = 'Pr0sp3cta@NI';
const loginURL = 'https://allocate.prospacta.org/home/schedule';
const dashboardURL = 'https://allocate.prospacta.org/home/AirportList';

test.describe('AviatorSMS Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(loginURL);
  });

  // TC01 - Positive login        
  test.only('Login with valid credentials', async ({ page }) => {
    await page.locator("//*[@id='mat-input-0']").pressSequentially(username);
    await page.locator("//*[@id='mat-input-1']").pressSequentially(password);
    await page.waitForTimeout(3000);
    await page.locator
    ("//span[(text() = 'Login' or . = 'Login')]").click();

    await expect(page).toHaveURL(dashboardURL);
  });

  // TC02 - Invalid username
  test('Login with invalid username', async ({ page }) => {
    await page.locator("//*[@id='mat-input-0']").fill('INVALID_USER_123');
    await page.locator("//*[@id='mat-input-1']").fill(password);

await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='mat-input-0']")).toBeVisible();
  });

  // TC03 - Invalid password
  test('Login with invalid password', async ({ page }) => {
    await page.locator("//*[@id='mat-input-0']").fill(username);
    await page.locator("//*[@id='mat-input-1']").fill('WrongPassword123');

await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='mat-input-1']")).toBeVisible();
  });

  // TC04 - Both fields empty
  test('Login with empty credentials', async ({ page }) => {
await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).not.toHaveURL(dashboardURL);
    await expect(page.locator("//*[@id='mat-input-0']")).toBeVisible();
    await expect(page.locator("//*[@id='mat-input-1']")).toBeVisible();
  });

  // TC05 - Username only
  test('Login with username only', async ({ page }) => {
    await page.locator("//*[@id='mat-input-0']").fill(username);

await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).not.toHaveURL(dashboardURL);
  });

  // TC06 - Password only
  test('Login with password only', async ({ page }) => {
    await page.locator("//*[@id='mat-input-1']").fill(password);

await page.getByRole('button', { name: 'Login', exact: true }).click();

    await expect(page).not.toHaveURL(dashboardURL);
  });

  // TC07 - Password masking
  test('Password should be masked', async ({ page }) => {
    const passwordField = page.locator("//*[@id='mat-input-1']");

    await passwordField.fill(password);

    await expect(passwordField).toHaveAttribute('type', 'password');
  });

// TC08 - Login using Enter key
  test('Login using Enter key', async ({ page }) => {
    await page.locator("//*[@id='mat-input-0']").fill(username);
    await page.locator("//*[@id='mat-input-1']").fill(password);
   await page.keyboard.press('Enter')
    await expect(page).toHaveURL(dashboardURL);
  });
 
});
    
