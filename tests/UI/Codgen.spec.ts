import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('samsung s25');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  
});