import {test} from "@playwright/test";
import { expect } from "@playwright/test";


test("Window Handling", async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://demoqa.com/browser-windows");

   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
        page.click("#tabButton")
    
   ])
   const heading = await newPage.locator("//h1[@id=\'sampleHeading\']");
   const headTxt = await heading.textContent();
   console.log(headTxt);
   await expect(heading).toHaveText("This is a sample page");
   await page.waitForTimeout(5000);


   //await page.bringToFront();   For bring to first page
})