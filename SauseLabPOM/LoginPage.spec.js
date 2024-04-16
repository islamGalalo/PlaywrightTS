import { test } from "@playwright/test"
import { LoginPage } from "./LoginPage";


test('verify user login successfully', async ({ page }) => {
     const Login = new LoginPage(page);
     await Login.goto();
     await Login.loginVerify();


})




