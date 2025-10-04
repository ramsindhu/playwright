import {test} from "@playwright/test";
test("Element Handle", async({page})=>{
    await page.goto("https://www.instagram.com/")
    const email = page.locator("//input[@name='username']");
    await email.fill("abcd")
    const pwd = page.locator("//input[@name='password']");
    await pwd.fill("abc@123");               //await pwd.type("") --->old/privous method for fill
    const loginbtn = page.locator("//button[@name='login']");
    await loginbtn.click();
})


