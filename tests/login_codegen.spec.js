
import { test, expect } from '@playwright/test';

const URL = 'https://allocate.prospacta.org/uat/auth';

test.describe('Negative Signup Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    await page.getByText('SignUp', { exact: true }).click();
    await page.getByText('Select Option', { exact: true }).click();
    await page.getByText('Airport Operater', { exact: true }).click();
  });

  test('Signup with all fields empty', async ({ page }) => {
    await page.getByRole('button', { name: 'Signup' }).click();

    // Verify required-field validation appears
    await expect(page.getByText(/required/i).first()).toBeVisible();
  });

  test('Signup with invalid email', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('Niteesh');

    await page.getByPlaceholder('Email Address').fill('niteesh123');

    await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');

    await page.getByPlaceholder('Password', { exact: true }).fill('Niteesh@222');

    await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Niteesh@222');

    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test('Signup with password mismatch', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('Niteesh');

    await page.getByPlaceholder('Email Address').fill('niteesh.negative@example.com');

    await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');

    await page.getByPlaceholder('Password', { exact: true }).fill('Niteesh@222');

    await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Different@222');

    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText(/password.*match|match.*password/i)).toBeVisible();
  });

});

test.describe('Negative Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Login with empty fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText(/required/i).first()).toBeVisible();
  });

  test('Login with invalid email', async ({ page }) => {
    await page.locator('#mat-input-0').fill('invalidemail');

    await page.getByPlaceholder('Enter Password').fill('Niteesh@222');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test('Login with incorrect password', async ({ page }) => {
    await page.locator('#mat-input-0').fill('niteesh.negative@example.com');

    await page.getByPlaceholder('Enter Password').fill('WrongPassword@123');

    await page.getByRole('button', { name: 'Login' }).click();

    // Replace this with the actual error message shown by your application
    await expect(page.getByText(/invalid credentials|incorrect password/i)).toBeVisible();
  });

test('Same email should not register with another dropdown option', async ({ page }) => {

  const username = 'Niteesh';
  const email = 'niteesh.duplicate@example.com';
  const phone = '1234567890';
  const password = 'Niteesh@222';

  // First registration
  await page.goto(URL);

  await page.getByText('SignUp', { exact: true }).click();
  await page.getByText('Select Option', { exact: true }).click();
  await page.getByText('Airport Operater', { exact: true }).click();

  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByPlaceholder('Email Address').fill(email);
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(phone);
  await page.getByPlaceholder('Password', { exact: true }).fill(password);
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);

  await page.getByRole('button', { name: 'Signup' }).click();

  // Wait for the first registration to complete.
  // Add an assertion here for your application's actual success message.

  // Second registration with the same details
  await page.getByText('SignUp', { exact: true }).click();

  await page.getByText('Select Option', { exact: true }).click();

  // Replace SECOND_OPTION with the exact name of your second dropdown option.
  await page.getByText('SECOND_OPTION', { exact: true }).click();

  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByPlaceholder('Email Address').fill(email);
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(phone);
  await page.getByPlaceholder('Password', { exact: true }).fill(password);
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);

  await page.getByRole('button', { name: 'Signup' }).click();

  // Verify duplicate email validation
  await expect(
    page.getByText(/email.*already|already.*email|email.*exists/i)
  ).toBeVisible();

});

});
