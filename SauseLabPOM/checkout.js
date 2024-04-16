const { expect } = require('@playwright/test');
exports.checkout = class checkout {



    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator("//a[@class='btn_action checkout_button']");
        this.addFirstName = page.locator("//input[@id='first-name']");
        this.addLastName = page.locator("//input[@id='last-name']");
        this.addPostal = page.locator("//input[@id='postal-code']");
        this.continueBtn = page.locator("//input[@value='CONTINUE']");
        this.getShippingTxt = page.locator("//div[normalize-space()='FREE PONY EXPRESS DELIVERY!']")
        this.finishBtn = page.locator("//a[@class='btn_action cart_button']");
        this.orderSuccess = page.locator("//h2[@class='complete-header']");


    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/cart.html');
    }

    async clickOnProduct() {
        await this.checkoutBtn.click();

    }
    async addUserInfo() {
        await this.addFirstName.type("islam");
        await this.addLastName.type("galal");
        await this.addPostal.type("15678");
        await this.continueBtn.click();
        const getText = await this.getShippingTxt.textContent();
        expect(getText).toContain("EXPRESS DELIVERY!");
    }
    async finishShopping() {
        await this.finishBtn.click();
        const getfinalTxt = await this.orderSuccess.textContent();
        expect(getfinalTxt).toBe("THANK YOU FOR YOUR ORDER");

    }

}


