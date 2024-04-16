import { test } from '@playwright/test'
import { LoginPage } from './LoginPage';
test('verify user can Login ', async ({page}) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.Login();


});
