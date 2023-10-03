const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')
const burgerMenu = require('../pageobjects/burger.page')
const productPage = require('../pageobjects/product.page')

describe('Saving the card after logout ', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    })

    it('CartVariant1', async () => {
        // Check Product items and his price
        const allItemsAndPrices = await productPage.getAllProductDetails()
        console.log(`All products and their prices:\n${allItemsAndPrices}`)

        // random items add to shopping cart
        await productPage.addToCartRandomProduct()
        browser.saveScreenshot('./screen/case5.ShoppingCartAdd.png')

        // Logout
        await mainPage.clickBurgerMenuButton()
        await burgerMenu.isLogoutButtonVisible()
        await burgerMenu.clickLogoutButton()

        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
        await mainPage.clickShoppingCartButton()

        browser.saveScreenshot('./screen/case5.ShoppingCart.png')
    
        // Checking items in the cart
        await productPage.checkCart()
    })
})