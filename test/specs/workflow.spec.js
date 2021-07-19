const LoginPage = require("../pageobjects/login.page");
const ProductsPage = require("../pageobjects/products.page");
const CartPage = require("../pageobjects/cart.page");
const CheckoutPage = require("../pageobjects/checkout.page");

describe("Login, sort, add/remove cart items, and checkout workflow", () => {
  it("logs in with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expectAsync(ProductsPage.title).toHaveTextContaining("PRODUCTS");
  });

  it("sorts products from high to low prices", async () => {
    await ProductsPage.sortPriceHiToLow();
  });

  it("adds products and navigates to cart when the cart icon is clicked", async () => {
    await ProductsPage.addItemsToCart();
    await ProductsPage.goToCart();
    await expectAsync(CartPage.title).toHaveTextContaining("YOUR CART");
  });

  it("displays the correct cart items", async () => {
    await expectAsync(CartPage.itemOne).toExist();
    await expectAsync(CartPage.itemFive).toExist();
  });

  it("removes the BoltLabs T-shirt from the cart and navigates back to products", async () => {
    await CartPage.removeBoltLabsTshirt();
    await CartPage.backToProducts();
    await expectAsync(ProductsPage.title).toHaveTextContaining("PRODUCTS");
  });

  it("adds the TestAllTheThings T-shirt and navigates back to the cart", async () => {
    await ProductsPage.addItemToCart();
    await ProductsPage.goToCart();
  });

  it("navigates to checkout and fills out the form fields to proceed to cart summary", async () => {
    await CartPage.goToCheckout();
    await CheckoutPage.checkout("Shruthi", "Rao", "10001");
    await expectAsync(CheckoutPage.title).toHaveTextContaining(
      "CHECKOUT: OVERVIEW"
    );
  });

  it("displays the previously selected items with the correct item prices", async () => {
    await expectAsync(CheckoutPage.checkoutItemOne).toExist();
    await expectAsync(CheckoutPage.checkoutItemTwo).toExist();
    await expectAsync(CheckoutPage.summarySubtotal).toHaveTextContaining(
      "$65.98"
    );
  });

  it("displays the correct total price", async () => {
    await expectAsync(CheckoutPage.summaryTotal).toHaveTextContaining("$71.26");
  });

  it("finishes the checkout process", async () => {
    await CheckoutPage.finish();
    await expectAsync(CheckoutPage.title).toHaveTextContaining(
      "CHECKOUT: COMPLETE!"
    );
    await expectAsync(CheckoutPage.completeHeader).toExist();
  });
});
