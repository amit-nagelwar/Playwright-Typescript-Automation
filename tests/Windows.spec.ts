import{test,expect, Page} from "@playwright/test"

test('Multiple windows',async({page,context})=>{
    await page.goto('https://demoqa.com/webtables');
    await expect(page.getByRole("heading",{name:'Web Tables'})).toBeVisible();

    const newPage= await context.newPage();
    await newPage.goto('https://store.steampowered.com/');
    await expect(newPage.getByRole("img").first()).toBeVisible();

    const newPage2=await context.newPage();
    await newPage2.goto('https://www.amazon.in/ref=nav_logo');
    await expect(newPage2.locator('#nav-logo')).toBeVisible();
    await newPage2.screenshot({path:'Screenshots/window2.png',fullPage:true});
    await newPage.screenshot({path:'Screenshots/window1.png',fullPage:true});

    const allpages:Page[]= context.pages();
    await allpages[0].bringToFront();
    console.log (allpages.length);


})