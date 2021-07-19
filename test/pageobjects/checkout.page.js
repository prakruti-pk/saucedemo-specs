const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
  /**
   * define selectors using getter methods
   */

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

  get checkoutItemOne() {
    return $("#item_5_title_link");
  }
  
  get checkoutItemTwo() {
    return $("#item_3_title_link");
  }

  get summarySubtotal() {
    return $(".summary_subtotal_label");
  }

  get summaryTax() {
    return $(".summary_tax_label");
  }

  get summaryTotal() {
    return $(".summary_total_label");
  }

  async checkTotal() {
    (await this.summarySubtotal.getValue()) + this.summaryTax.getValue();
  }

  get finishBtn() {
      return $("#finish");
  }

  async finish() {
    await (await this.finishBtn).click();
  }

  //   async checkTotal() {
  //     await (this.summarySubtotal.getValue() + this.summaryTax.getValue());
  //   }
}

module.exports = new CheckoutPage();
