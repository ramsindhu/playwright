import {test} from "@playwright/test";


test("Flipkart Online Shopping", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator("//input[@name='q']").fill("phone");
    await page.locator("//button[@type='submit']").click();
})