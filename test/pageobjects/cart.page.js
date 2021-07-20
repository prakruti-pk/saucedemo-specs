const Page = require("./page");

class CartPage extends Page {
  get itemOne() {
    return $("#item_1_title_link");
  }

  get itemFive() {
    return $("#item_5_title_link");
  }

  get removeItemOneBtn() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }

  async removeItemOne() {
    await (await this.removeItemOneBtn).click();
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
