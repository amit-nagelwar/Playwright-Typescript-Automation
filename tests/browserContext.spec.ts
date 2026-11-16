import {test,expect, chromium} from "@playwright/test"

test('opening browser and creating new context',async({page,context})=>{
   // const browser=await chromium.launch();     //launching a browser chromium
    //const context=await browser.newContext();    //creating context 
    //const page=await context.newPage();          //creating page     

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');

    const [newPage]=await Promise.all([context.waitForEvent('page'),
     page.getByRole("button",{name:'New Tab'}).click()]);


    const pages= context.pages();
    console.log(pages.length);

    console.log('title and link of parent page',await pages[0].title());
    console.log( pages[0].url());

    console.log('title and link of child page',await pages[1].title());
    console.log( pages[1].url());

    console.log(await newPage.title());

    for(let page of pages)
        {
            const title=await page.title();
            if(title.includes('SDET'))
                {
                    await page.getByRole("link",{name:'TypeScript For Playwright & Cypress'}).click();
                    await page.waitForTimeout(3000);
                }
        }

    

})