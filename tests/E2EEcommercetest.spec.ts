import {test, expect } from "@playwright/test"


test.only("E2E order test", async ({page}) =>{

   await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   const productName = "Nokia Edge"
  console.log(await page.title());
const user = page.locator("#username");
const pwd = page.locator("#password");
const signin = page.locator("#signInBtn");
await user.fill("rahulshettyacademy");
await pwd.fill("Learning@830$3mK2");
await signin.click();

const products = page.locator(".h-100");
const allprods = products.locator(".card-title a");


console.log(await allprods.first().textContent());
const allprodslist = await  allprods.allTextContents();
const count = await allprodslist.length;
console.log(count);
console.log(allprodslist);
 
for( let i=0; i<count ; i++){
    console.log(await allprods.nth(i).textContent())

    if( await allprods.nth(i).textContent()=== productName){
        await products.nth(i).locator(".zmdi-shopping-cart").click();
        break;
    }
}

 
await page.locator(".btn-primary").click()
console.log(await page.locator(".media-heading a").first().textContent());
const bool = await page.locator(".media-heading a").first().isVisible();
console.log(bool);
await expect(bool).toBeTruthy();

await page.locator(".btn-success").click();



await page.locator("#country").pressSequentially("ind",{ delay : 100});
 const suggestiondropdown =page.locator(".suggestions");
 await  suggestiondropdown.waitFor();
 const countrylist = await suggestiondropdown.locator("a").allTextContents()
 console.log(countrylist)
 console.log( countrylist.length)

 await suggestiondropdown.locator("a").first().waitFor()
 for (let i=0; i<countrylist.length; i++) {
    
    const text =await  suggestiondropdown.locator("a").nth(i).textContent();

    if ( text === "India"){
        await suggestiondropdown.locator("a").nth(i).click();
        break;

    }
    
 }
//await page.pause();
console.log(await page.locator("#country").inputValue());
await page.locator("[value='Purchase']").click();
 const successmsg =  await page.locator(".alert-success").textContent();
 console.log(successmsg)
await expect(successmsg).toContain(" Thank you! Your order will be delivered in next few weeks :-).")



 



})