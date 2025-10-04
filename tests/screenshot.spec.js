import {test} from "@playwright/test";

test("Screenshot", async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.screenshot({path: "screenshot/amazon.png"});
    await page.screenshot({path: "screenshot/amazonfullpage.png", fullPage: true});
   const img1 = page.locator("//a[@id='nav-logo-sprites']");
 await img1.screenshot({path: "screenshot/logo.png"});


});