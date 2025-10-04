import {test} from "@playwright/test";

test("Amazon Online Shopping", async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.reload();
    const dropdown = await page.locator("//select[@id='searchDropdownBox']");
   await dropdown.selectOption({label: "Computers"});
   const ddvalue = await dropdown.locator("Option:Checked").textContent();
   const select = await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone17");
   const clickbtn = page.locator("//input[@id='nav-search-submit-button']");
   await clickbtn.click();
   await page.waitForTimeout(5000)
   console.log(ddvalue);
   

});