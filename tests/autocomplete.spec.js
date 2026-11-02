import { test, expect } from '@playwright/test';

test('Autocomplete check', async ({ page }) => {

    await page.goto('https://www.google.com');

    await page.getByRole('button', { name: 'Google Search' }).click();

});