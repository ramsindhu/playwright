import {test} from "@playwright/test";
import { LoginPage } from "../pages/login";
import { SearchHotel } from "../pages/search";
import { selctHtl } from "../pages/selecthtl";
import { confirmbooking } from "../pages/confirmbooking";
// import { LoginPage, SearchHotel, selctHtl, confirmbooking } from "../pages";

test("Adactin POM", async({page})=>{
const login = new LoginPage(page);
const searchhtl = new SearchHotel(page);
const hotelnames = new selctHtl(page);
const bokngconfirm = new confirmbooking(page);


await login.navigate()
await login.LoginPage("ramsindhu", "ram$11");
await searchhtl.search("Melbourne")
// await page.waitForTimeout(5000)
await hotelnames.hotellist()
await bokngconfirm.bookingnow("Ram", "M", "Chennai", "3534272828546789", "Master Card", "February", "2029", "255" )
// await page.waitForTimeout(5000)
})