import { test } from "@playwright/test"
import { AddProduct } from "./AddProduct";


test('verify user can add product to cart', async ({ page }) => {
     const addproduct = new AddProduct(page);
     await addproduct.goto();
     await addproduct.clickOnProduct();
     await addproduct.addToCarts();
   


})




