import {test, expect} from '@playwright/test';

let url: string = 'https://hqdev.it-cores.com:4400/';


test.beforeEach('login successfully', async ({page}) => {
    await page.goto(url);
 

});