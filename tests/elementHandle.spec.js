import {test} from "@playwright/test";
test("Element Handle", async({page})=>{
    await page.goto("https://www.facebook.com/")
    const email = page.locator("//input[@id='email']");
    await email.fill("abcd")
    const pwd = page.locator("//input[@name='pass']");
    await pwd.fill("abc@123");               //await pwd.type("") --->old/privous method for fill
    const loginbtn = page.locator("//button[@name='login']");
    await loginbtn.click();
})


