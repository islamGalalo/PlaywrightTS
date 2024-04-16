exports.TabsNavigationPage = class TabsNavigationPage {
   
  constructor(page) {
    this.page = page;
    this.clickTap1 = page.locator("//a[@id='nav-link-amazonprime']");
    this.clickTap2 = page.locator("//a[normalize-space()='Mobile Phones']");
    this.clickTap3 = page.locator("//a[normalize-space()='Electronics']");
    this.clickTap4 = page.locator("//a[normalize-space()='Appliances']");
    this.clickTap5 = page.locator("//a[normalize-space()='Fashion']");
    this.clickTap6 = page.locator("//a[normalize-space()='Home']");
    this.clickTap7 = page.locator("//a[contains(text(),'Video Games')]");
    this.clickTap8 = page.locator("//a[normalize-space()='Toys & Games']");
    this.clickTap9 = page.locator("//a[normalize-space()='Grocery']");
    this.clickTap10 = page.locator("//a[normalize-space()='Perfumes']");

  }
 async tap1 (){
    await this.clickTap1.click();
 } 
 async tap2 (){
  await this.clickTap2.click();
} 
async tap3 (){
  await this.clickTap3.click();
} 
async tap4 (){
  await this.clickTap4.click();
} 
async tap5 (){
  await this.clickTap5.click();
} 
async tap6 (){
  await this.clickTap6.click();
} 
async tap7 (){
  await this.clickTap7.click();
} 
async tap8 (){
  await this.clickTap8.click();
} 
async tap9 (){
  await this.clickTap9.click();
} 
async tap10 (){
  await this.clickTap10.click();
} 
}