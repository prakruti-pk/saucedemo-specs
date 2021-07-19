const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get sortDropDown() {
    return $(".product_sort_container");
  }

  async sortPriceHiToLow() {
    await (await this.sortDropDown).selectByAttribute("value", "hilo");
  }

  get addSauceLabsFleeceJacket() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get addSauceLabsBoltTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  async addItemsToCart() {
    await (await this.addSauceLabsFleeceJacket).click();
    await (await this.addSauceLabsBoltTshirt).click();
  }

  get ShoppingCartLink() {
    return $(".shopping_cart_link");
  }

  async goToCart() {
    await (await this.ShoppingCartLink).click();
  }

  get addTestAllTheThingsTshirt() {
    return $("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
  }

  async addItemToCart() {
    await (await this.addTestAllTheThingsTshirt).click();
  }

}

module.exports = new ProductsPage();
