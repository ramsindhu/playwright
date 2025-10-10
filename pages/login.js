export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("//input[@id='username']")
        this.password = page.locator("//input[@id='password']")
        this.loginBtn = page.locator("//input[@id='login']")
    }
    async navigate() {
        await this.page.goto("https://adactinhotelapp.com/")
    }
    async LoginPage(email, pwd) {
        await this.userName.fill(email);
        await this.password.fill(pwd);
        await this.loginBtn.click();
    }
}