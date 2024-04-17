import {test, expect} from '@playwright/test';

let url: string = 'https://hqdev.it-cores.com:4400/';


test.beforeEach('login successfully', async ({page}) => {
    await page.goto(url);
    await page.locator("//input[@placeholder='Enter your Username...']").fill("admin");
    await page.locator("//input[@placeholder='Enter your password...']").fill("@dm!n@C0r$951%");
    await page.locator("//button[@type='submit']").click();

});
test('Add profession', async ({page}) => {
    await page.locator("//span[normalize-space()='Master Data']").click();
    await page.locator("//span[normalize-space()='Professions']").click();
    await page.locator("//span[normalize-space()='Create New']").click();
    await page.locator("(//input[@type='text'])[1]").fill("نيو برو");
    await page.locator("(//input[@type='text'])[2]").fill("prof");
    await page.locator("input[role='spinbutton']").fill("15");
    await page.locator("//span[@class='p-inputswitch-slider']").click()
    await page.locator('li').filter({ hasText: 'Save' }).first().click();

});
test('Edit profession', async ({page}) => {
    await page.locator("//span[normalize-space()='Master Data']").click();
    await page.locator("//span[normalize-space()='Professions']").click();
    await page.locator("//a[normalize-space()='0001']").click();
    await page.locator('li').filter({ hasText: 'Edit' }).click();
         await page.locator('div').filter({ hasText: /^English Description$/ }).getByRole('textbox').fill('profession_01');
    await page.locator('li').filter({ hasText: 'Save' }).first().click();
 
  })
  test('Delete profession', async ({page}) => {
    await page.locator("//span[normalize-space()='Master Data']").click();
    await page.locator("//span[normalize-space()='Professions']").click();
    await page.locator("(//actions[@class='ng-star-inserted'])[2]").click();
    await page.locator("//span[normalize-space()='Delete']").click();
    await page.locator("//span[normalize-space()='Yes']").click();
})