import { Locator, Page } from "@playwright/test";

export default class Login {
    // variables 
    readonly page: Page
    readonly getStartedButton: Locator;
    // constructors
    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByText("");
    }
    // methods
    async getStartedclick() {
        await this.getStartedButton.click();
    }

}