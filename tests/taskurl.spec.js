import {test} from "@playwright/test";

test("Amazon", async({page})=>{
    await page.goto("https://www.amazon.in/")
    const url = await page.url()
    const title = await page.title()
    console.log(url);
    console.log(title);
})

test("Trendnologies It Placement", async ({page})=>{
await page.goto("https://trendnologies.com")
const url = await page.url()
console.log(url);
const title = await page.title()
console.log(title);
})

test("Flipkart", async({page})=>{
await page.goto("https://www.flipkart.com/")
const url = await page.url()
 console.log(url);

const title = await page.title()
console.log(title);
})
