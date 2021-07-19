const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
  /**
   * define selectors using getter methods
   */
   get itemOne() {
    return $("#item_1_title_link");
  }

  get itemFive() {
    return $("#item_5_title_link");
  }

  get boltLabsTshirt() {
      return $("#remove-sauce-labs-bolt-t-shirt");
  }

  async removeBoltLabsTshirt() {
    await (await this.boltLabsTshirt).click();
  }

  get continueShopping() {
      return $("#continue-shopping");
  }

  async backToProducts() {
    await (await this.continueShopping).click();
  }

  get checkoutBtn() {
      return $("#checkout");
  }

  async goToCheckout() {
      await (await this.checkoutBtn).click();
  }

}

module.exports = new CartPage();