const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')
const basketPage = require('../pageobjects/basket.page')
const productPage = require('../pageobjects/product.page')
const { expect } = require('chai');
describe('Valid Checkout', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    })

    
    it('Checkout', async () => {
        // choice of three products
        await productPage.addRandomProductsToCart(3)
    
        // Purchase
        await mainPage.clickShoppingCartButton()
        await basketPage.clickCheckoutButton()
        await basketPage.login('Igor', 'Sebruk', '04665')
        await basketPage.clickContinueButton()

        // Compare products and check final price
        const cartItems = await basketPage.getCartItems()
        const itemDetails = await basketPage.getCartItemDetails(cartItems)
        console.log(`Items in cart:\n${itemDetails.join('\n')}`)

        await basketPage.clickFinishButton()

        const isCompleteHeaderExisting = await basketPage.isCompleteHeaderExisting()
        expect(isCompleteHeaderExisting).to.be.true
        await basketPage.clickBackToHomeButton()

        await mainPage.clickShoppingCartButton()
       
        const isCartEmpty = await basketPage.isCartEmpty()
        expect(isCartEmpty).to.be.true;
    })
})
