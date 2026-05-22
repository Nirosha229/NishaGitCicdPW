import {test, expect} from '@playwright/test'


test("login test", async ({browser})=>{
 const context = await  browser.newContext();
 const page = await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
const user = page.locator("#username");
const pwd = page.locator("#password");
const signin = page.locator("#signInBtn");
await user.fill("rahulshettyacademy");
await pwd.fill("Learning@830$3mK2");
await signin.click();
 const products = page.locator(".card-body a");
 
 await products.first().waitFor();
 console.log(await products.allTextContents());



}

)