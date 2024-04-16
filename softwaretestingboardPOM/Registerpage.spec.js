import { test } from '@playwright/test'
import { RegisterPage } from './RegisterPage';
test('verify user can register ', async ({page}) => {
    const register = new RegisterPage(page);
    await register.goto();
    await register.registration();
    


});
