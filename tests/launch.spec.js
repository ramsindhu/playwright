import {test} from "@playwright/test";

test("Amazon", async({page})=>{
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=774088017322&hvpos=&hvnetw=g&hvrand=11305090913344206185&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061929&hvtargid=kwd-64107830&hydadcr=14452_2429115&gad_source=1")
    const url = page.url()
    console.log(url);

const title = await page.title()
console.log(title);

})