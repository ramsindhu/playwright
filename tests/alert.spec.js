import {test} from "@playwright/test";

test("Alert Handling", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");

    await page.once("dialog", async(dialog)=>{
console.log("Simple Alert", dialog.message());
await dialog.accept();
    });
    const simpleAlert = await page.locator("//button[@onclick='alertbox()']")
   await simpleAlert.click();


const confirmAlert = await page.locator("//a[text()='Alert with OK & Cancel ']");
await confirmAlert.click();

await page.once("dialog", async(dialog)=>{
    console.log("Confirm ALert", dialog.message());
    await dialog.dismiss();

});
    const clickbtn = await page.locator("//button[@onclick='confirmbox()']");
await clickbtn.click();

const promptAlert = await page.locator("//a[text()= 'Alert with Textbox ']")
await promptAlert.click();

await page.once("dialog", async(dialog)=>{
    console.log("Prompt Message : ", dialog.message());
    console.log("Prompt default value : ", dialog.defaultValue());
     await dialog.accept("Prompt");
});

const promptBtn = await page.locator("//button[contains(text(), 'prompt box')]");
await promptBtn.click();

});

 //if didn't giving accept playwright auotomatically cancel 


 //added by Ram
 const promptBtn = await page.locator("//button[contains(text(), 'prompt box')]");
await promptBtn.click();
const check = await page.locator("//button[contains(text(), 'prompt box')]");
await check.click();




