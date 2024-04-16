const { expect } = require('@playwright/test');
exports.AddProduct = class AddProduct {



    constructor(page) {
        this.page = page;
        this.selectProduct = page.locator("//div[normalize-space()='Sauce Labs Backpack']");
        this.getProductName = page.locator("//img[@class='inventory_details_img']");
        this.addToCart = page.locator("//button[@class='btn_primary btn_inventory']");
        this.cartNotify = page.locator("//span[@class='fa-layers-counter shopping_cart_badge']");
        this.clickonCart = page.locator("//a[@class='shopping_cart_link fa-layers fa-fw']//*[name()='svg']");



    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/inventory.html');
    }

    async clickOnProduct() {
        await this.selectProduct.click();
        await expect(this.getProductName).toBeVisible();

    }
    async addToCarts() {
        await this.addToCart.click();
        await expect(this.cartNotify).toBeEnabled()
    }
    async openCart() {
        await this.clickonCart.click();
       }


}


