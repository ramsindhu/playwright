import {test} from "@playwright/test"

test("Web Table", async({browser})=>{
    const table = await browser.newContext()
    const page1 = await table.newPage()
    await page1.goto("https://qavbox.github.io/demo/webtable/");
    const temp= page1.locator("//table[@id='table02']/tbody/tr[1]/td[2]");
    console.log(await temp.textContent())
    const rowfulldata = await page1.locator("//table[@id='table02']/tbody/tr[2]/td")
    console.log(await rowfulldata.allTextContents())
    const clmnfulldata = await page1.locator("//table[@id='table02']/tbody/tr/td[3]")
    console.log(await clmnfulldata.allTextContents())
    const alldata = await page1.locator("//table[@id='table02']/tbody/tr/td")
    console.log(await alldata.allTextContents())

})