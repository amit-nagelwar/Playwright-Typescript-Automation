
import { test, expect, Locator } from "@playwright/test" ;

test('Mouse Actions',async( {page} )=>
{
//    Drag And Drop
     await page.goto("https://dev.automationtesting.in/dragdrop");
    // await page.locator("#site-logo").dragTo(page.locator("//div[@class='sc-gsnTZi GJlVg MuiBox-root css-15wxwvc']").nth(1));
     await page.locator("#selenium-logo").dragTo(page.locator("//div[@class='sc-gsnTZi GJlVg MuiBox-root css-15wxwvc']").nth(1));
    

//     //Press / Enter text Manually
     await page.goto("https://www.amazon.in/ref=nav_logo");

     await page.locator("#twotabsearchtextbox").pressSequentially('8bitDo',{delay:500});

    // //Mouse Actions
     await page.goto('https://vinothqaacademy.com/mouse-event/');
     await page.locator("#doubleBtn").dblclick();
     await page.waitForTimeout(2000);
     await page.locator("#rightBtn").click({button:'right'});
     await page.waitForTimeout(2000);
     await page.locator("#tooltipTarget").hover();
     await page.waitForTimeout(2000);

     expect(page.getByText('Tool Tip Text')).toHaveText("Tool Tip Text");

     console.log(await page.getByText('Tool Tip Text').innerText());

     await page.locator('#dragItem').hover();
     await page.mouse.down();
     await page.locator('#dropZone').hover();
     await page.mouse.up();
     await page.waitForTimeout(2000);
     await page.screenshot({path:"Screenshots/ss.png"})

    await page.goto('https://demoqa.com/text-box');
    await page.waitForTimeout(2000);
    await page.locator("#userName").focus();
    await page.waitForTimeout(2000);
    await page.locator("#userName").pressSequentially('Amit',{delay:100});
    await page.keyboard.press('Tab');
    await page.waitForTimeout(3000);


})


test('Text content methods',async({ page })=>{
    await page.goto('https://store.steampowered.com/');
    await page.getByPlaceholder('Search the store').fill("Red Dead Redemption 2");
    await page.keyboard.press('Enter');
    // page.waitForTimeout(5000);
    await page.locator('.title').first().waitFor({
    state: 'visible'
});
    // const Allnames:string[]=await page.locator('.title').allInnerTexts();
    // const Afternames:string[]=Allnames.map((text)=>text.trim());
    // console.log(Afternames);

    const Allelements:Locator[]=await page.locator('.title').all();
    
    for(let elemnts of Allelements)
        {
            console.log(await elemnts.innerText());

        }

    

})