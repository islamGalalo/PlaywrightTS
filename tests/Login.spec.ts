import test from "@playwright/test";
import Login from "../pages/login";
const url = '';
test ('login' , async ({page})=>{
    await page.goto(url);
    const login = new Login(page);
    login.getStartedclick();
})