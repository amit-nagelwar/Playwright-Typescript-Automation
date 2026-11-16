import { test, expect } from '@playwright/test';

/*test("Locaters Practise", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder('First Name').fill("Amit");
    await page.getByPlaceholder('Last Name').fill("Nagelwar");
    await page.getByPlaceholder('name@example.com').fill("anagelwar");
    await page.getByRole('radio', { name: 'Male' }).click;
    await page.locator('#subjectsInput').fill('English');

})

test('verfy flipkart logo', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    page.getByAltText('Image').isVisible;
})*/

test('verfy amazon logo', async ({ page }) => {
    await page.goto('https://www.amazon.com/ref=nav_logo');
    
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,1000);
    await page.waitForTimeout(1000);
    await page.screenshot({path:'Screenshots/screenshot3.png'});

})

test('frames test', async ({ page }) => {
    await page.goto('https://demoqa.com/frames');

    console.log(text);
    
})

