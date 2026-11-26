
import { test, expect } from '@playwright/test';

test('Verify GET user API', async ({ request }) => {

    // Send GET request
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    // Verify status code
    expect(response.status()).toBe(200);

    console.log('response code',response.status());
    

    // Get response body
    const responseBody = await response.json();

    // Validate response data
    expect(responseBody.id).toBe(1);
    expect(responseBody.name).toBe('Leanne Graham');
    expect(responseBody.email).toBe('Sincere@april.biz');

    console.log(responseBody);

})

test('queryy param',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users',{
        params:{
            id:'5'
        }
    })
    console.log(await response.json());
    

})
