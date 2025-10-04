import {test} from "@playwright/test";

test("Frame Handling", async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html");
const frame = await page.frameLocator("//iframe[@id='singleframe']");
const frameTxtBox = await frame.locator("//input[@type='text']");
await frameTxtBox.fill("First Frame");
console.log("Frame name :", await frameTxtBox.inputValue());
await page.waitForTimeout(2000);

//await page.mainFrame(); But its naot mantatory in playwright
const clcBtn = await page.locator("//a[text()='Iframe with in an Iframe']");
await clcBtn.click();
const outFrame =  await page.frameLocator("//iframe[@src='MultipleFrames.html']");
const nestedFrame = await outFrame.frameLocator("//iframe[@src='SingleFrame.html']");
const innerFrameTxBox = await nestedFrame.locator("//input[@type='text']");
await innerFrameTxBox.fill("Inner Frame");
await page.waitForTimeout(2000);

});