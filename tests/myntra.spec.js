import {expect, test} from "@playwright/test";

test("MYNTRA Test", async({page})=>{
    await page.goto("https://www.myntra.com/");
    await expect(page).toHaveURL("https://www.myntra.com/");
    const title = page.title();
    console.log(title);
    // await expect(page).toHaveTitle("");
    //const searchbox = await page.locator("//input[@id='twotabsearchtextbox']");
    await page.locator("//input[@class='desktop-searchBar']").fill("tops");
    //const searchbtn = await page.locator("//input[@id='nav-search-submit-button']");
    await page.locator("//a[@class='desktop-submit']").click();
    // const urlredirect = await page.url();
    // console.log(urlredirect);
    
})