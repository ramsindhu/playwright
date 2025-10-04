import {test} from "@playwright/test";

test("Dropdown", async({page})=>{
    await page.goto("https://letcode.in/dropdowns");
    const fruits = page.locator("//select[@id='fruits']");
    await fruits.selectOption({label:"Mango"});
    const selectedFruits = await fruits.locator("option:checked").textContent();     //select single element .textContent
    console.log(selectedFruits);
    // await fruits.selectOption({value:"1"});
    // await fruits.selectOption({index:2});

    const heros = await page.locator("//select[@id='superheros']");
    await heros.selectOption([{label: "Ant-Man"}, {label: "Batman"}]);
    const selectHeros = await heros.locator("option:checked").allTextContents();
    console.log(selectHeros);

})