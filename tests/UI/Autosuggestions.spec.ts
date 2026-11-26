import {test,expect, Locator} from "@playwright/test"

test('autosuggestions dropdown',async ({page})=>{
    await page.goto('https://www.youtube.com/');
    await page.getByPlaceholder('Search').fill('ps5');
    await page.waitForSelector('.ytSuggestionComponentSuggestion');
    const autosuggestions:Locator[]=await page.locator('.ytSuggestionComponentSuggestion').all();

  

    for(let suggestions of autosuggestions)
        {
            const text=await suggestions.innerText();

            if(text==='ps5 controller')
                {
                    await suggestions.click();
                    break;
                }
            
        }

        await page.waitForTimeout(5000);


    
})