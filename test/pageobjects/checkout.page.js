const Page = require("./page");

class CheckoutPage extends Page {
  get inputFirstName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $("#last-name");
  }

  get inputZipcode() {
    return $("#postal-code");
  }

  get continueBtn() {
    return $("#continue");
  }

  async checkout(firstName, lastName, zipcode) {
    await (await this.inputFirstName).setValue(firstName);
    await (await this.inputLastName).setValue(lastName);
    await (await this.inputZipcode).setValue(zipcode);
    await (await this.continueBtn).click();
  }

  get checkoutItemFive() {
    return $("#item_5_title_link");
  }

  get checkoutItemThree() {
    return $("#item_3_title_link");
  }

  get summarySubtotal() {
    return $(".summary_subtotal_label");
  }

  get summaryTotal() {
    return $(".summary_total_label");
  }

  get finishBtn() {
    return $("#finish");
  }

  get completeHeader() {
    return $(".complete-header");
  }

  async finish() {
    await (await this.finishBtn).click();
  }
}

module.exports = new CheckoutPage();
