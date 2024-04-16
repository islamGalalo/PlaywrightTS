
exports.TodayDealsPage = class TodayDealsPage {
  constructor(page) {
    this.page = page;
    this.todayDeals = page.locator("//a[@class='nav-a  '][1]");
    this.choose2ndCategory = page.locator("//li[2]//a[1]//span[1]//img[1]");
    this.choose1stProduct = page.locator(
      "(//div[@class='DealCard-module__cardImageVertical_1m9E6mjbE6UbrGJwvn6GKM DealCard-module__imageWithPadding_Qk9F2b8bUeXPk8FUBnSVG'])[1]"
    );
    this.choose2ndItemProduct = page.locator(
      "(//div[@class='a-section octopus-pc-item-hue-shield octopus-pc-item-image-background-v3'])[2]"
    );

    this.productTitle = page.locator("#productTitle");
    this.productPrice = page.locator(
      "//div[@class='a-section a-spacing-micro']"
    );
    this.productQty = page.locator("#quantity");
    this.addToCart = page.locator("#add-to-cart-button");
    this.goToCart = page.locator("//a[@href='/-/en/cart?ref_=sw_gtc']");
    this.verifyProductName = page.locator("//span[@class='a-truncate-cut'][1]");
    this.verifyProductPrice = page.locator(
      "//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold']"
    );
    this.verifyProductQty = page.locator("//span[@class='a-dropdown-prompt']");

    this.verifySubtotal = page.locator(
      "//span[@id='sc-subtotal-amount-activecart']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap'] "
    );
  }
async clickOnTodayDeals (){
      await this.todayDeals().click();
}

async clickOnCategory (){
    await this.choose2ndCategory.click();
      
}
async clickOnProduct (){
    await this.choose1stProduct.click();
}
async clickOnItemProduct (){
    await this.clickOnItemProduct().click()
}
async getProductName (){
    await this.productTitle.textContent()
}
async getProductPrice (){
  await this.productPrice.textContent()
    
}
async selectProductQTY (){
  await this.productQty.textContent()
    
}
async addProductToCart (){
  await this.addToCart.click();
    
}
async goToCart (){
  await this.goToCart.click()
    
}
async verifyProdName (){
    await this.verifyProductName.textContent()
  
}
async verifyProdPrice (){
  await this.verifyProductPrice.textContent()
    
}
async verifyProdQty (){
  await this.verifyProductQty.textContent()
    
}
async verifySubTotal (){
    await this.verifySubtotal.textContent()
}

};
