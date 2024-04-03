import { Locator, Page } from "@playwright/test";

export default class Login {
    // variables 
    readonly page: Page
    readonly getStartedButton: Locator;
    readonly url ="https://www.browserstack.com/";
    readonly productsMenu: Locator;
    // constructors
    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByText("");
        this.productsMenu = page.locator('#product-menu-toggle');
    }
    // methods
    async getStartedclick() {
        await this.getStartedButton.click();
    }
        async goto(){
            await this.page.goto(this.url);
            }
            async clickOnProducts(){
            await this.productsMenu.waitFor({state:"visible"});
            await this.productsMenu.click();
    }
  

 
}