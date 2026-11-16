import { test ,expect, Page} from "@playwright/test"

test('Handling of multiple tabs and windoes',async({page,context})=>{
  
    await page.goto("https://www.flipkart.com/");
    console.log(await page.title());
    //new tab 
    const newPage:Page=await context.newPage();    //new tab instance  means created new tab 
    await newPage.waitForLoadState()              //wait statement for loading new tab

    await newPage.goto("https://www.amazon.in/ref=nav_logo");

    console.log(await newPage.title());            //printing new page title

    const alltabs=context.pages();                //from context gettting all pages under the same context
    console.log(alltabs.length);

  //  await newPage.close();
 //   await page.waitForTimeout(3000);

    await page.bringToFront();
    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).first().fill("Ps5");
    await page.waitForTimeout(3000);
    
   // await alltabs[1].bringToFront();
    newPage.bringToFront();
    await page.waitForTimeout(3000);

})


test('verify when click on link new tab opens or not ',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");

    await page.getByRole("button",{name:'New Tab'}).click();
    await expect.poll(() => context.pages().length).toBe(2);

    await page.waitForTimeout(3000);
    const allpages:Page[]=context.pages();
    console.log(allpages.length);

    await page.waitForTimeout(3000);

    await allpages[0].bringToFront();
    await page.waitForTimeout(3000);
    await allpages[1].bringToFront(); 
    await page.waitForTimeout(3000);

})