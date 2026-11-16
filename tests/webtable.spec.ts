import {test,expect, Locator} from "@playwright/test"

test('Handling of webtable',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page.getByRole("heading",{name:'Automation Testing Practice'})).toBeVisible();

    await page.getByRole("heading",{name:'Static Web Table'}).scrollIntoViewIfNeeded();

    const column:Locator=page.locator("table[name='BookTable'] tr th");
    const ColCount=await column.count();
    console.log("Number of columns",ColCount);

    // const rows:Locator=page.locator("table[name='BookTable'] tr");            wrong aproach
    // const rowCount=await rows.count();
    // console.log("Number of rows",rowCount);

    // for(let i=1;i<rowCount;i++)
    //     {
    //         const text=await rows.filter({hasText:'Amit'}).locator('td').nth(3).innerText();   
    //         console.log(text);
    //     }                                                                      wrong aproach

    const rows: Locator = page.locator("table[name='BookTable'] tr");

    const amitRows = rows.filter({ hasText: 'Amit' });

    const count = await amitRows.count();
    console.log("Amit row count",count);

    for (let i = 0; i < count; i++) 
   {

    const bookName = await amitRows.nth(i).locator('td').nth(0).innerText();   //printing the Auther name using nth(0) cell 

    const subject = await amitRows.nth(i).locator('td').nth(2).innerText();    //printing the Subject name name using nth(2) cell

    console.log("Bookname and subject name of Amit",bookName,"    ", subject);
   }
})

test('checkbox check filtering name',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page.getByRole("heading",{name:'Automation Testing Practice'})).toBeVisible();

    await page.getByRole("heading",{name:'Pagination Web Table'}).scrollIntoViewIfNeeded();

    const rows=page.locator("table[id=productTable] tbody tr");
    //selecting checkbox of product
    await rows.filter({hasText:'Tablet'}).getByRole("checkbox").check();

    //getting price of product selected
    const price=await rows.filter({hasText:'Tablet'}).locator('td').nth(2).innerText();
    console.log("price of product selected",price)

    await page.waitForTimeout(3000);

    await page.locator('#productTable').screenshot({path:'Screenshots/table.png'});

    



})
