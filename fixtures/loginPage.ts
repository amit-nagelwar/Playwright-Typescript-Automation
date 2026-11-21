import {test as base, expect} from "@playwright/test";
import loginData from "../testData/loginData.json"

type MyFixtures = {
    loginPage: void;
};

export const test=base.extend<MyFixtures>({

    loginPage:async({page},use)=>{
    //step1 Setup
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    //Step2 execution
    await use();

    //Step 3 
    console.log('application logged in succesfully');

    }
})

export {expect};