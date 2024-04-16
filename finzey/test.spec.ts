import {test, expect} from '@playwright/test';

let url: string = 'https://hqdev.it-cores.com:4400/';


test.beforeEach('login successfully', async ({page}) => {
    await page.goto(url);
    await page.locator("//input[@placeholder='Enter your Username...']").fill("admin");
    await page.locator("//input[@placeholder='Enter your password...']").fill("@dm!n@C0r$951%");
    await page.locator("//button[@type='submit']").click();

});
test('add profession', async ({page}) => {
    await page.locator("//span[normalize-space()='Master Data']").click();
    await page.locator("//span[normalize-space()='Professions']").click();
    await page.locator("//span[normalize-space()='Create New']").click();
    await page.locator("(//input[@type='text'])[1]").fill("نيو برو");
    await page.locator("(//input[@type='text'])[2]").fill("prof");
    await page.locator("input[role='spinbutton']").fill("15");
    await page.locator("//span[@class='p-inputswitch-slider']").click()

});
test('edit profession', async ({page}) => {
    await page.locator("//span[normalize-space()='Master Data']").click();
    await page.locator("//span[normalize-space()='Professions']").click();
    await page.locator("//a[normalize-space()='0001']").click();
    await page.locator("//span[normalize-space()='Edit']").click();
    await page.locator("(//input[@type='text'])[2]").clear();
    await page.locator("(//input[@type='text'])[2]").fill("profession_01");
    await page.locator("//span[normalize-space()='Save']").click()
    await page.locator("//span[normalize-space()='Back to list']").click()
    await page.locator("//a[normalize-space()='0001']").click();
    let en_desc = await page.locator("//span[contains(text(),'profession_01')]")
    await expect(en_desc).toHaveText("profession_01");
})
