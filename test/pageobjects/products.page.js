const Page = require("./page");

class ProductsPage extends Page {
  get sortDropDown() {
    return $(".product_sort_container");
  }

  async sortPriceHiToLow() {
    await (await this.sortDropDown).selectByAttribute("value", "hilo");
  }

  get addItemOneBtn() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get addItemFiveBtn() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  async addItemsOneAndFiveToCart() {
    await (await this.addItemOneBtn).click();
    await (await this.addItemFiveBtn).click();
  }

  get ShoppingCartLink() {
    return $(".shopping_cart_link");
  }

  async goToCart() {
    await (await this.ShoppingCartLink).click();
  }

  get addItemThreeBtn() {
    return $("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)");
  }

  async addItemThreeToCart() {
    await (await this.addItemThreeBtn).click();
  }
}

module.exports = new ProductsPage();
