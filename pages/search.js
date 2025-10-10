export class SearchHotel {
    constructor(page) {
        this.page = page;
        this.location = page.locator("//select[@id='location']")
        this.srchbtn = page.locator("//input[@id='Submit']")
         
    }
async search(HotelLoaction) {
const print =  await this.location.selectOption({label: HotelLoaction})
//console.log(print)
await this.srchbtn.click()

  
}
}








// await this.hotel.selectOption({label: htlname})
//    await this.roomtype.selectOption({label: rmtype})
//    await this.noofroom.selectOption({label: rmcount})
//    await this.checkindate.selectOption({label: indate})
//    await this.checkoutdate.selectOption({label: outdate})
//    await this.adultperroom.selectOption({label: prsncount})