exports.TryLoginByEmailPage = class TryLoginByEmailPage {
    
  constructor(page) {
    this.page = page;
    this.clickOnSignIn = page.locator(
      "//div[@id='nav-signin-tooltip']//span[@class='nav-action-inner'][normalize-space()='Sign in']"
    );
    this.email = page.locator("#ap_email");
    this.submit = page.locator("#continue");
    this.getEmail = page.locator(
      "//h4[normalize-space()='There was a problem']"
    );
  }
  async goToSignIn(){
    await this.clickOnSignIn.click();

  }
  async addEmail(){
    await this.email.type("isla_m@email.com");

  } 
  async clickConfirm(){
    await this.submit().click();
  }
  async getEmail (){
    await this.getEmail.textcontent();
  }




};
