import {test, expect, Locator} from "@playwright/test";

test('Verify radio button',async( { page } )=>{
     
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.getByPlaceholder('First Name').fill("Amit");
    await page.getByPlaceholder('Last Name').fill("Nagelwar");

    const radiobtn: Locator = page.getByLabel('Male', { exact: true });

    await expect(radiobtn).toBeVisible();
    await radiobtn.check();
    await expect(radiobtn).toBeChecked();

    //checkboex
    await page.locator("#checkbox1").check();
    

    await page.getByRole('textbox').nth(3).fill('amit@gmail.com');
    await  page.waitForTimeout(2000);
    
    })


test('DemoQA site form',async( { page } )=>
    {
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder('First Name').fill("Amit");
    })    
