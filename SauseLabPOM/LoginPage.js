const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {



    constructor(page) {
        this.page = page;
        this.addUserName = page.locator("//input[@id='user-name']");
        this.addPassword = page.locator("//input[@id='password']");
        this.clickLogin = page.locator("//input[@id='login-button']");
        this.loginSuccess = page.url();
        

    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html');
    }

    async loginVerify() {
        await this.addUserName.fill("standard_user");
        await this.addPassword.fill("secret_sauce");
        await this.clickLogin.click();
        await expect(this.page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
    

    } 
   
    }


