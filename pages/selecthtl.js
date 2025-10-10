export class selctHtl {
    constructor(page){
        this.page = page;
        this.htlname = page.locator("//table[@class='login']//descendant::input[32]")  //input[@id='radiobutton_4']
        this.continuebtn = page.locator("//input[@id='continue']")
    }
    async hotellist(htlnamelist){
        await this.htlname.check(htlnamelist)
        await this.continuebtn.click()
        
    }
}