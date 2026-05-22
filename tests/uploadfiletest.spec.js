import {test, expect} from "@playwright/test";
test("file_upload", async ({page})=>{

    await page.goto("https://qa-practice.netlify.app/file-upload")
    await page.locator("#file_upload").setInputFiles("./TestData/readme.txt")
    console.log(await page.locator("#file_upload").inputValue())
    expect( await page.locator("#file_upload").inputValue() ).toContain("readme.txt")
})

test('Upload Multipel files',async({page})=>{
 await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//store path of files into two varibales
const path1 = "./TestData/playwright.txt"
const path2 = "./TestData/StockPOM.txt"
const path3 = "./TestData/Templates.txt"
await page.locator('#filesToUpload').setInputFiles([path1,path2,path3])
//await page.waitForTimeout(2000)
await expect( page.getByText('playwright.txt')).toContainText("playwright.txt");
 await expect ( page.getByText('StockPOM.txt')).toContainText('StockPOM.txt')
 await expect ( page.getByText('Templates.txt')).toContainText('Templates.txt')
 const firstfile = await page.getByText('playwright.txt').textContent();
 const secondfile= await page.getByText('StockPOM.txt').textContent();
 const thirdfile= await page.getByText('Templates.txt').textContent();
console.log(firstfile+"         "+secondfile+"     "+thirdfile)
await page.waitForTimeout(5000)

})
