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
    // optionally, we could assert that items are sorted by checking that
    // all their prices are in descending order
  });

  it("navigates to and displays products in cart after adding them", async () => {
    await ProductsPage.addItemsOneAndFiveToCart();
    await ProductsPage.goToCart();
    await expectAsync(CartPage.title).toHaveTextContaining("YOUR CART");
    await expectAsync(CartPage.itemOne).toExist();
    await expectAsync(CartPage.itemFive).toExist();
  });

  it("removes item one from the cart and navigates back to products", async () => {
    await CartPage.removeItemOne();
    await CartPage.backToProducts();
    await expectAsync(ProductsPage.title).toHaveTextContaining("PRODUCTS");
  });

  it("adds item three and navigates back to the cart", async () => {
    await ProductsPage.addItemThreeToCart();
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
    await expectAsync(CheckoutPage.checkoutItemFive).toExist();
    await expectAsync(CheckoutPage.checkoutItemThree).toExist();
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
