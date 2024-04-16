import {test , expect} from '@playwright/test';
import { TryLoginByEmailPage } from "./TryLoginByEmailPage";
test ('test', async ({page})=> {
    const login = new Homepage (page);
    await login.goToSignIn();
    await login.addEmail();
    await login.clickConfirm();
    await login.getEmail();



})