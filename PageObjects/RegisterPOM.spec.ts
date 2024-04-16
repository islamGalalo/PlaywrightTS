const {  test } = require("@playwright/test");
const {  Register } = require("../PageObjects/Register");

test('k', async ({ page }) => {
    const register = new Register(page);
   await register.goTo();
    await register.validLogin();
})