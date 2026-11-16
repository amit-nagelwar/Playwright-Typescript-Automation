import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');
  if(await page.getByRole('button', { name: 'Continue shopping' }).isVisible())
    {
      await page.getByRole('button', { name: 'Continue shopping' }).click();
    }
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
    await page.screenshot({path:'Screenshots/fullpage.jpeg',fullPage:true});
  await page.getByRole('link', { name: 'Amazon.in' }).screenshot({path:'Screenshots/logo.jpeg'});
  await expect.soft(page.getByRole('searchbox', { name: 'Search Amazon.in' })).toBeVisible();
 
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('ps5 ');
  await page.screenshot({path:'Screenshots/ps5.png'});
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  await page.locator('#a-autoid-3').getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByText('1').nth(4)).toBeVisible();
  await expect(page.locator('fieldset[name="sc-quantity"]')).toContainText('1');
});