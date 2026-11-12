import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://allocate.prospacta.org/auth');
  // await page.getByText('SignUp', { exact: true }).click();
  // await page.getByRole('combobox', { name: 'Select Operator' }).click();
  // await page.getByRole('listbox', { name: 'Select Operator' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('Niteesh');
  // await page.locator('div').filter({ hasText: /^Email Address$/ }).nth(1).click();
  // await page.getByPlaceholder('Email Address').fill('Niteesh@gmail.com');
  // await page.getByText('Phone Number').click();
  // await page.getByRole('textbox', { name: 'Phone Number' }).click();
  // await page.getByRole('textbox', { name: 'Phone Number' }).fill('1234567890');
  // await page.locator('div').filter({ hasText: /^Password$/ }).nth(1).click();
  // await page.getByPlaceholder('Password', { exact: true }).fill('Niteesh@222');
  // await page.getByText('Confirm Password').click();
  // await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  // await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Niteesh@222');
  // await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('#mat-input-0').click();
  await page.locator('#mat-input-0').fill('Niteesh@gmail.com');
  await page.locator('#mat-mdc-form-field-label-1 span').click();
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('Niteesh@222');
  await page.getByRole('button', { name: 'Login' }).click();
});