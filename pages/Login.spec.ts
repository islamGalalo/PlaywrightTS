import test, { expect } from "@playwright/test";
import Login from "./login";
const url = '';
test ('login' , async ({page})=>{
    const login = new Login(page);
    await login.goto();
    login.getStartedclick();
    expect
})