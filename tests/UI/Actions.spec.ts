import {test, expect, Locator} from "@playwright/test";
import {faker} from "@faker-js/faker";

test.only('Verify radio button',async( { page } )=>{
     
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.getByPlaceholder('First Name').fill(faker.person.firstName());
    await page.getByPlaceholder('Last Name').fill(faker.person.lastName());

    const radiobtn: Locator = page.getByLabel('Male', { exact: true });

    await expect(radiobtn).toBeVisible();
    await radiobtn.check();
    await expect(radiobtn).toBeChecked();

    //checkboex
    await page.locator("#checkbox1").check();
    

    await page.getByRole('textbox').nth(3).fill(faker.internet.email());
    await  page.waitForTimeout(2000);
    
    })


test('DemoQA site form',async( { page } )=>
    {
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder('First Name').fill("Amit");
        const email:Locator=page.locator('#userEmail-label')

        expect(email).toHaveText('Email');

    })    
