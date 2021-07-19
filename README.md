# Saucedemo UI Testing with WebDriverIO

This repository contains test specs relevant to https://www.saucedemo.com. The specs were written using Node.js-based WebDriverIO and the Jasmine framework for its BDD-style and in-built assertions.

To start testing, clone the repository, install its dependencies, then run the test command:
1. `git clone https://github.com/prakruti-pk/saucedemo-specs.git`
2. `npm install`
3. `npm run test`

**Note: The demo site is treated as if its data is static/pre-filled by the test suite. This allows the use of specific assertions (for ex: total price check on summary page) instead of dynamically calculating certain values in tests.** 

The current workflow being tested is as follows: 
* Log into the site
* Sort the items
* Add two or more items to the shopping cart
* Visit the shopping cart
    • Assert that the items that you added are in the cart
* Remove an item and then continue shopping
* Add another item
* Checkout
    • Assert you are purchasing the correct items
    • Assert the total price
    • Finish checkout
