
import { test } from '@playwright/test';

test('array methods',async()=>
    {
        let numbers:number[]=[1,2,3,4,5];
        // let table=numbers.map((num)=>num*2);
        // console.log(table);

        let  evennum:boolean=numbers.some((num)=>num%2==0);
        console.log(evennum);

        let total=numbers.reduce(((total,num)=>total+num),0)
        console.log(total);

       let twomultiply= numbers.forEach((num)=>{
        console.log(num);
       });
       
    })