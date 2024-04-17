import {test, expect} from '@playwright/test';

 

test('login successfully', async ({page}) => {
    await page.goto("https://hqdev.it-cores.com:4400/");
    await page.pause();
    
});