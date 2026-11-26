import{test,expect} from "@playwright/test"

test('practising i frames',async({page})=>{
    await page.goto("https://demoqa.com/nestedframes");
    const text1=await page.frameLocator('#frame1').getByText('Parent frame').innerText();
    console.log(text1);
    const text=await page.frameLocator('#frame1').frameLocator('iframe').getByText('Child Iframe').innerText();
    console.log(text);
    console.log(page.frames().length);
})



test.describe('==============Popup alerts Handling==============',()=>{

    test('Handle simple alert popup', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe('alert');
        await dialog.accept();

    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();

 
})

test('Handle confiramation alert popup', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',(dialog)=>{
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe('confirm');
        dialog.dismiss();
        
    })

    await page.locator('#confirmBtn').click();

    expect(await page.locator('#demo').innerText()).toBe('You pressed Cancel!');

    console.log(await page.locator('#demo').innerText());
    
 
})



test('Handle alert2 popup', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        if (dialog.type() === 'alert') {
            await dialog.accept();
        }
        else if (dialog.type() === 'confirm') {
            await dialog.dismiss();
        }

    });

    // Handle Simple Alert
    await page.getByRole('button', { name: 'Simple Alert' }).click();

    // Handle Confirmation Alert
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    
})

test('prompt alert handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async(dialog)=>{
        console.log('Default value is: ',dialog.defaultValue());
        console.log('Popup Type is: ',dialog.type());
        console.log(dialog.message());
        dialog.accept('Amit');
    
     })

    await page.getByRole("button",({name:'Prompt Alert'})).click();
    expect(await page.locator('#demo').innerText()).toBe('Hello Amit! How are you today?');
    console.log(await page.locator('#demo').innerText());


})


})