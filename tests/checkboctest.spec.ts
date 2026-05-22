import test, { expect } from "@playwright/test";

test("checkbox practice", async ({ page }) => {

    await page.goto("https://demoqa.com/checkbox");

    // Expand all folders
    await page.locator('[title="Expand all"]').click();

    // Checkbox items
    const items = ["desktop", "documents", "downloads"];

    for (const item of items) {

        await page.locator(
            `label[for='tree-node-${item}'] span.rct-checkbox`
        ).click();

        await expect(page.locator("#result"))
            .toContainText(item);
    }

});