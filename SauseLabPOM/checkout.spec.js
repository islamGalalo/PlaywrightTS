import { test } from "@playwright/test"
import { checkout } from "./checkout"


test('verify user can finish his order successfully', async ({ page }) => {
     const check = new checkout(page);
     await check.goto();
     await check.clickOnProduct();
     await check.addUserInfo();
     await check.finishShopping();
   


})




