import {test , expect} from '@playwright/test';
import { TodayDealsPage } from './TodayDealsPage';
test ('test', async ({page})=> {
const selectProduct = new TodayDealsPage (page);
selectProduct.clickOnTodayDeals()
selectProduct.clickOnCategory()
selectProduct.clickOnProduct()
selectProduct.clickOnItemProduct()
selectProduct.getProductName();
selectProduct.getProductPrice();

selectProduct.selectProductQTY()
getPName = selectProduct.getProductName();
getPPrice = selectProduct.getProductPrice();
selectProduct.addProductToCart()
selectProduct.goToCart().click();
 verPName = selectProduct.verifyProdName();
 verPPrice = selectProduct.verifyProdPrice();
 verPQty = selectProduct.verifyProductQty();
        selectProduct.verifyProdName();
        selectProduct.verifyProdPrice();
        selectProduct.verifyProductQty();
        selectProduct.verifySubTotal();
 expect (verPName , getPName)
 expect (verPQty , "2")


})