export class confirmbooking {
    constructor(page){
        this.page = page;
        this.firstname = page.locator("//input[@id='first_name']")
        this.lastname = page.locator("//input[@id='last_name']")
        this.billingaddress = page.locator("//textarea[@id='address']")
        this.crdtcrd = page.locator("//input[@id='cc_num']")
        this.crdtype = page.locator("//select[@id='cc_type']")
        this.expirymonth = page.locator("//select[@id='cc_exp_month']")
        this.expiryyear = page.locator("//select[@id='cc_exp_year']")
        this.cvv = page.locator("//input[@id='cc_cvv']")
        this.bkngnowbtn = page.locator("//input[@id='book_now']")
    }
    async bookingnow(fname,lname,badress,crd,cardtyp,expmnth,expyr,cvvno){
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.billingaddress.fill(badress);
        await this.crdtcrd.fill(crd);
        await this.crdtype.selectOption(cardtyp)
        await this.expirymonth.selectOption(expmnth);
        await this.expiryyear.selectOption(expyr);
        await this.cvv.fill(cvvno);
        await this.bkngnowbtn.click();

    }
}