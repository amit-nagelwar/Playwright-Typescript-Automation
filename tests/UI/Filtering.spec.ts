import{test,expect} from "@playwright/test"

test('Practsing filter method',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    console.log(await page.title());
    await expect(page.getByRole("heading",{name:'Buttons'})).toBeVisible();
    const buttons= page.getByRole("button");
    console.log(buttons.count());
    const attribute=await buttons.filter({hasText:'Right Click Me'}).getAttribute('id');
    await page.waitForTimeout(3000);
    await buttons.filter({hasText:'Right Click Me'}).click({button:'right'});
    console.log(attribute);
    await page.waitForTimeout(3000);
})

test('Practsing filter method with webtable',async({page})=>{
    await page.goto('https://demoqa.com/webtables');
    console.log(await page.title());
    await expect(page.getByRole("heading",{name:'Web Tables'})).toBeVisible();

    console.log(await page.getByRole("row").nth(0).innerText());

    await page.getByRole("row").filter({hasText:'Alden'}).locator(`#edit-record-2 > svg > path`).click();
    await page.waitForTimeout(3000);

   
})