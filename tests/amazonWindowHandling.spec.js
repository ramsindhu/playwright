import {test, expect} from "@playwright/test";

test("Amazon Window Handling", async({browser})=>{
    const browserWindow1 = await browser.newContext();
    const page1 = await browserWindow1.newPage();
    await page1.goto("https://www.amazon.in/");
    await page1.locator("//input[@id='twotabsearchtextbox']").fill("computer")
    await page1.locator("//input[@id='nav-search-submit-button']").click()
    await page1.waitForLoadState('domcontentloaded')
    await page1.screenshot({path: "screenshot/computer.png"})

const [page2] = await Promise.all([
    browserWindow1.waitForEvent('page'),
    await page1.locator("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[2]//descendant::a[3]").click()
    
    ])
const check = await page2.locator("(//div[@id='desktop-breadcrumbs_feature_div']//descendant::a)[1]") 
const print = await check.textContent();
console.log(print);
await expect(check).toHaveText("Computers & Accessories")

await page2.waitForLoadState('domcontentloaded')
await page2.screenshot({path: "screenshot/newpage.png"})
await page1.bringToFront()
await page2.close()

})