import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://awesomeqa.com/hr/web/index.php/auth/login');

    //  action fill  : Fill the form field, input text
    await page.locator("").fill("");
    await page.locator("").click();
    await page.locator("").focus();
    await page.locator("").check()
    await page.locator("").uncheck()
    await page.locator("").hover()
    //   Press single key
    await page.locator("").press("enter", { delay: 2000 })
    // Pick files to upload
    await page.locator("").setInputFiles("")
    // Select option in the drop down
    await page.locator("").selectOption("")

});
