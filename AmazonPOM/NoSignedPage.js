exports.NosignedPage = 
class NosignedPage {
    constructor(page) {
        this.page = page
        this.hoverToList = page.locator("//a[@id='nav-link-accountList']")
        this.yourOrders      = page.locator("//span[normalize-space()='Your Orders']");
        this.signInText  = page.locator("//h1[@class='a-spacing-small']");
        this.yourAddresses = page.locator("//span[normalize-space()='Your Addresses']");
        this.yourLists = page.locator ("//span[normalize-space()='Your Lists']");
        this.introScreen = page.locator("//div[@class='a-section al-intro-tab-content']");
    }

 async hoverAction (){
    await mouse(this.hoverToList).move()
 }
 async  clickOnOrder() {
    await  this.yourOrders.click()

 }
async shouldSignIn() {
  await this.signInText.textContent()
  
}
async clickOnAddresses() {
 await this.yourAddresses.click()
}
async clickOnALists() {
await this.yourLists().click()
}
async seeIntroScreen() {
await this.introScreen
}
}