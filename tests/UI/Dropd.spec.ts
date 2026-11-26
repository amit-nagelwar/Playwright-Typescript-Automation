
import { test, expect, Locator } from '@playwright/test';

test('Dropdown testing',async({ page })=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator("#country").selectOption( {index:1} );

        const ddoptions:Locator=page.locator("#country option");
        expect(ddoptions).toHaveCount(10);

        const optiontext:string[]=(await ddoptions.allTextContents()).map((word)=>word.trim());
        console.log(optiontext);
        
        expect(optiontext).toContain('Japan');

        for(const option of optiontext)
            {
                console.log(option);
            }

    })

test('Static dropdowns',async( { page } )=>
    {
        await page.goto('https://www.flipkart.com/');
        await page.waitForTimeout(3000);

        page.locator("//span[@role='button']").click();
        await page.locator("(//input[@title='Search for Products, Brands and More'])[1]").fill("smart");
        const options:Locator= page.locator("ul>li");

        await page.waitForTimeout(5000);

        const count:number=await options.count();

        console.log("Number of Option",count);


       for(let i=0;i<count;i++)
            {
                console.log(await options.nth(i).innerText());
            }

            
        for(let i=0;i<count;i++)
            {
                const test=await options.nth(i).innerText();
                //console.log(test);

                if(test==='smartphone')
                    {
                        options.nth(i).click();
                        break;
                    }
            }

    })    

test('Google Search Engine',async({page})=>
    {
        await page.goto("https://www.google.com/?zx=1793160306106");
        await page.locator("#ti6dpd").fill("ps5");
        await page.waitForTimeout(2000);

        const option:Locator=page.locator("ul>li");
        for(let i=0;i<10;i++)
            {
                const  text =await option.nth(i).innerText();
                console.log(text);

                if(text=="ps5 price")
                    {
                        await option.nth(i).click();
                        break;
                    }
            }

    })



    test('Select class dropdown',async({page})=>
        {
            await page.goto("https://demoqa.com/select-menu");
            const options:Locator= page.locator("#oldSelectMenu");
            const v=await options.selectOption({label:'White'});
            console.log(v);
            const text:String[]=await options.allTextContents(); 

            for(let t of text)
            {
                console.log(t," ");
            }
        })