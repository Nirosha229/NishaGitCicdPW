import test, { expect } from "@playwright/test";

test("locators test",async ({page})=>{
    await page.goto("https://demoqa.com/elements?utm_source=chatgpt.com")
    const textbox =  page.locator('#item-0').first()
    const button = page.getByText('Buttons')
    const checkbox = page.locator("//a[@href='/checkbox']")
    const elements = page.locator("text() = Elements")
    const name = page.getByPlaceholder("Full Name")
    const email =page.getByPlaceholder("name@example.com")
    const submit = page.getByText("Submit")



    console.log(await textbox.textContent())
    console.log(await button.textContent())
    console.log(await checkbox.textContent())
    

    await textbox.click()
    await name.fill("Nirosha")
    
    await email.fill("niroshachinthaparthi@gmail.com")
    await submit.click()

    const resNm= page.locator("#name").textContent()
    console.log(await resNm)
    expect( page.locator("#name")).toHaveText("Name:Nirosha")
   expect(page.locator("#email")).toHaveText("Email:niroshachinthaparthi@gmail.com")

   const menuitems = page.locator(".menu-list")
   console.log(await menuitems.allInnerTexts())
})


test("checkbox practice", async ({ page }) => {

    await page.goto("https://demoqa.com/checkbox");

    // Expand all folders
    await page.getByRole('button', { name: 'Expand all' }).click();


    // items that needs to be checked
    const items = ["desktop", "documents", "downloads"];

    const uiitems = await page.locator(".rc-tree-checkbox").getAttribute('aria-label')
    console.log(uiitems)
    // Locate Desktop checkbox
    const desktopCheckbox = page.locator("label[for='tree-node-desktop'] span.rct-checkbox");

    // Click checkbox
    await desktopCheckbox.click();

    // Verify result text appears
    await expect(page.locator("#result"))
        .toContainText("desktop");

});
