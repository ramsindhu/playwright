import {test} from "@playwright/test";

test("", async({page})=>{
    const url = await page.goto("https://www.amazon.com/");
    page.reload();
    const menu1 = page.locator("//a[text()=\"Today's Deals\"]");
    const menu2 = page.locator("//a[text()=\"Today's Deals\"]//ancestor::li//following-sibling::li//descendant::a[text()= \"Registry\"]");
    await menu1.click();    
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.waitForTimeout(3000);
    await menu2.click();    
   await page.waitForTimeout(3000)
})

