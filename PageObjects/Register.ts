import { Locator, Page } from "@playwright/test";

 class Register {
    readonly page : Page ;
    readonly username : Locator ;
    readonly password : Locator ;
    readonly confirm : Locator ;
        
    constructor(page) {
        this.page;
        this.username = page.locator("input[placeholder='Username']");
        this.password = page.locator("//input[@placeholder='Password']");
        this.confirm = page.locator("button[type='submit']");
    }
    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async validLogin() {
        await this.username.fill('islam');
        await this.password.fill('donfad');
        await this.confirm.click();
    }
}
export default Register ;