import { test,expect} from "@playwright/test"

test('Handling of select Dropdown',async( {page} )=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Textfileds
    await expect(page.getByRole("heading",{name:'Automation Testing Practice'})).toBeVisible();
    await page.getByRole("textbox",{name:'Enter Name'}).fill("Amit Nagelwar");
    await page.getByRole("textbox",{name:'Enter EMail'}).fill("anagelwar@gmail.com");
    await page.getByRole("textbox",{name:'Enter Phone'}).fill("9881580585");
    await expect(page.getByRole("textbox",{name:'Address:'})).toBeEnabled();
    await page.getByRole("textbox",{name:'Address:'}).fill("Yavatmal");

    //Radio Button
    await expect(page.getByRole("radio",{name:'Male'}).first()).toBeVisible();
    await page.getByRole("radio",{name:'Male'}).first().click();

    //checkbox
    await expect(page.getByRole("checkbox",{name:'Thursday'})).toBeEnabled();
    await page.getByRole("checkbox",{name:'Thursday'}).check();
    await page.getByRole("checkbox",{name:'Sunday'}).check();
    await page.getByRole("checkbox",{name:'Monday'}).check();

    //DropDown
    await page.getByRole("combobox").selectOption('France');
    await page.getByRole("combobox",{name:'Country:'}).selectOption({index:6});

    //Multi select 
    await page.getByRole('listbox', { name: 'Colors:' }).selectOption(['Red','Green']);
    await page.getByRole('listbox', { name: 'Sorted List:' }).scrollIntoViewIfNeeded();
    await page.getByRole('listbox', { name: 'Sorted List:' }).selectOption(['Cat','Dog']);

    //Datepicker
    await page.locator('#datepicker').focus();
    await page.waitForTimeout(2000);
    await page.getByRole("link",{name:'19'}).click();
    await page.getByRole("link",{name:'4'}).first().click();

    //Dynamic  Button 
    await page.getByText('START').click();
    await page.getByText('STOP').waitFor({state:"visible"});
    await expect(page.getByText('STOP')).toBeVisible();
    await page.waitForTimeout(2000);
})