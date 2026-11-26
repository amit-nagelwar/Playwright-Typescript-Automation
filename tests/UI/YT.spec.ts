import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle("demosite");
});

test('Check titile', async({ page }) =>
{
   await page.goto("https://demoqa.com/automation-practice-form");
   await page.waitForTimeout(2000);
   console.log("Amit is executing tests");
   await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");
})

test('Check element is displayed', async({ page }) =>
{
   await page.goto("https://demoqa.com/automation-practice-form");
   await page.waitForTimeout(2000);
   
   
})
