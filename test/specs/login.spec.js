const assert = require("assert");
const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");


describe("Login workflow", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    await expectAsync(ProductsPage.title).toHaveTextContaining("PRODUCTS");

    await ProductsPage.sortPriceHiToLow();

    await ProductsPage.addItemsToCart();
    await browser.pause(2000);

    await ProductsPage.goToCart();
    await expectAsync(CartPage.title).toHaveTextContaining("YOUR CART");
    await expectAsync(CartPage.itemOne).toExist();
    await expectAsync(CartPage.itemFive).toExist();
    await browser.pause(2000);

    await CartPage.removeBoltLabsTshirt();
    await CartPage.backToProducts();
    await browser.pause(2000);

    await ProductsPage.addItemToCart();
    await browser.pause(2000);
    await ProductsPage.goToCart();
    await browser.pause(3000);

    await CartPage.goToCheckout();
    browser.pause(2000)

    await CheckoutPage.checkout("Shruthi", "Rao", "10001");
    browser.pause(2000)
    
    await expectAsync(CheckoutPage.checkoutItemOne).toExist();
    await expectAsync(CheckoutPage.checkoutItemTwo).toExist();
    browser.pause(2000)
    
    await expectAsync(CheckoutPage.summaryTotal === CheckoutPage.checkTotal);
    browser.pause(2000)

    await CheckoutPage.finish();
    browser.pause(2000)
    

  });
});
