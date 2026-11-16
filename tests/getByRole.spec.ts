
import { test, expect, Locator } from '@playwright/test';

test('get by roles locaters practise',async( {page} )=>{
     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
     await expect(page.getByRole("textbox",{ name:'Search'})).toBeVisible(); 
     await expect(page.getByAltText('naveenopencart')).toBeVisible();
     await expect(page.getByRole("heading",{name:'Register Account'})).toBeVisible();
     await page.getByRole("textbox",{ name:'Search'}).fill("Amit");

     await page.getByLabel('First Name').type('Amit');
     await page.getByRole("textbox",{name:'Last Name'}).fill("Nagelwar");
     await page.getByLabel('Last Name').fill("Nagelwar");
     await page .getByRole("textbox",{name:'E-Mail'}).fill("anagelwar@gmail.com")
     await page.getByRole("radio",{name:'No'}).click();
     //await page.getByRole("checkbox").click();
     await page.getByRole("button",{name:'Continue'}).click();
     await expect(page.getByText('Warning: You must agree to the Privacy Policy!')).toBeVisible();
     await page.getByRole("link",{name:'Shopping Cart'}).click();
     await expect(page.getByRole("heading",{name:'Shopping Cart'})).toBeVisible();
     

     //New Page 
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20');
     await expect(page.getByRole('link', { name: 'Components' })).toHaveCount(2);
    // await page.getByRole('link', { name: 'Monitors (2)' }).click();
    console.log(await page.getByRole('link', { name: 'Components' }).count());
    
    const locator = page.getByRole('link', { name: 'Components' }).nth(0);

    await locator.evaluate(element => {
    (element as HTMLElement).style.border = '3px solid red';
    (element as HTMLElement).style.backgroundColor = 'yellow';
    });
     await page.waitForTimeout(3000);
     


})