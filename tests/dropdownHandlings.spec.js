import {test} from "@playwright/test";

test("Dropdown Handling", async({page})=>{
    await page.goto("https://letcode.in/dropdowns");
    const selectelement = page.locator("//select[@id='superheros']");
    await selectelement.selectOption([{label: "Batman"},{label: "The Avengers"},{label: "Batwoman"}]);
    const selectFinal = await selectelement.locator("Option:checked").allTextContents();
    console.log(selectFinal);
})



// import {test} from "@playwright/test";

// test("Dropdown Handlings", async({page})=>{
//     await page.goto("https://letcode.in/dropdowns");
//      const selectelements = page.locator("//select[@id='superheros']");
//     await selectelements.selectOption([{label: "Ghost Rider"},{label:"Batman"},{label: "Hellboy"}]);
//     const selectFinal = await selectelements.locator("option:checked").allTextContents();
    
// console.log(selectFinal);
// })