import{test,expect} from "@playwright/test"
import loginData from "../../testData/loginData.json"; //!(../../) is used beacause the spec.ts.file is in test/swags Lab not directely in tests

test('@smoke verify user able to lgin with valid credentials',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
   
     
})
test('@sanity verify user should not able to login with invalid credentials',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.inValidUser.username);
    await page.getByPlaceholder('Password').fill(loginData.inValidUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
   
     
})

test('@smoke verify Products page',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    
    await expect(page).toHaveTitle('Swag Labs');

})

test('@regression verify count of Products',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    await expect(page.locator('.inventory_item')).toHaveCount(6);

    console.log('all Products Name',await page.locator('.inventory_item').allInnerTexts());
    

})

test('@sanity Print Name of Products',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    await expect(page.locator('.inventory_item')).toHaveCount(6);

    console.log('all Products Name',await page.locator('.inventory_item_name').allTextContents());
    

})

test('@smoke add one Product to cart',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    await page.locator('.inventory_item').filter({hasText:'Sauce Labs Fleece Jacket'}).getByRole("button",{name:'Add to cart'}).click();
    expect(page.locator('.shopping_cart_link')).toHaveText('1');

    await page.locator('.shopping_cart_link').click();

    expect(page.getByText('Your Cart')).toBeVisible();

    expect(await page.locator('.cart_quantity').innerText()).toBe('1');

})

test('@regression add Multiple Products to cart',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    //adding Products
    const Products:string[]=[
        'Sauce Labs Backpack',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Bike Light',
        'Sauce Labs Onesie'];

    const quntity:number=Products.length;

    for(let product of Products)
    {

    await page.locator('.inventory_item')
    .filter({hasText:product})
    .getByRole("button",{name:'Add to cart'})
    .click();

    }
    expect(page.locator('.shopping_cart_link')).toHaveText('4');

    await page.locator('.shopping_cart_link').click();

    expect(page.getByText('Your Cart')).toBeVisible();

    expect(page.locator('.inventory_item_name')).toHaveCount(quntity);

    console.log('Products In cart:',await page.locator('.inventory_item_name').allInnerTexts());
    console.log('Quantity of Products',await page.locator('.inventory_item_name').count());




})

test('@sanity Remove Multiple Products from cart',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    //adding Products
    const Products:string[]=[
        'Sauce Labs Backpack',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Bike Light',
        'Sauce Labs Onesie'];

    const quntity:number=Products.length;

    for(let product of Products)
    {

    await page.locator('.inventory_item')
    .filter({hasText:product})
    .getByRole("button",{name:'Add to cart'})
    .click();

    }
    expect(page.locator('.shopping_cart_link')).toHaveText('4');

    await page.locator('.shopping_cart_link').click();

    expect(page.getByText('Your Cart')).toBeVisible();

    expect(page.locator('.inventory_item_name')).toHaveCount(quntity);

    console.log('Products In cart:',await page.locator('.inventory_item_name').allInnerTexts());
    console.log('Quantity of Products',await page.locator('.inventory_item_name').count());


      const RemoveProducts:string[]=[
        'Sauce Labs Bike Light',
        'Sauce Labs Onesie'];

    for(let product of RemoveProducts)
    {

    await page.locator('.cart_item')
    .filter({hasText:product})
    .getByRole("button",{name:'Remove'})
    .click();

    }

    console.log('Quantity of Products',await page.locator('.inventory_item_name').count());
    console.log('Products Removed successfully');
    

})

test('@smoke Complete checkout of Products',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(loginData.validUser.username);
    await page.getByPlaceholder('Password').fill(loginData.validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveTitle('Swag Labs');

    //adding Products
    const Products:string[]=[
        'Sauce Labs Backpack',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Bike Light',
        'Sauce Labs Onesie'];

    const quntity:number=Products.length;

    for(let product of Products)
    {

    await page.locator('.inventory_item')
    .filter({hasText:product})
    .getByRole("button",{name:'Add to cart'})
    .click();

    }
    expect(page.locator('.shopping_cart_link')).toHaveText('4');

    await page.locator('.shopping_cart_link').click();

    expect(page.getByText('Your Cart')).toBeVisible();

    expect(page.locator('.inventory_item_name')).toHaveCount(quntity);

    console.log('Products In cart:',await page.locator('.inventory_item_name').allInnerTexts());
    console.log('Quantity of Products',await page.locator('.inventory_item_name').count());

    //Removing  Products from Cart

      const RemoveProducts:string[]=[
        'Sauce Labs Bike Light',
        'Sauce Labs Onesie'];

    for(let product of RemoveProducts)
    {

    await page.locator('.cart_item')
    .filter({hasText:product})
    .getByRole("button",{name:'Remove'})
    .click();

    }

    console.log('Quantity of Products After Removing',await page.locator('.inventory_item_name').count());
    console.log('Products Removed successfully');

    //clicking on Continue button
    await page.getByRole("button",{name:'Checkout'}).click();

    //Completing Form
    await page.getByPlaceholder('First Name').fill('Virat');
    await page.getByPlaceholder('Last Name').fill('Kohali');
    await page.getByPlaceholder('Zip/Postal Code').fill('445305');

    await page.getByRole("button",{name:'Continue'}).click();

    await expect(page.getByText('Checkout: Overview')).toBeVisible();

    await page.getByRole("button",{name:'Finish'}).click();

    await expect(page.getByText('Thank you for your order!')).toBeVisible();

    console.log(await page.getByText('Thank you for your order!').innerText());
    


})