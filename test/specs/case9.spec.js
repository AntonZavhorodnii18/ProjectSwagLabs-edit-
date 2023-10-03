const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')
const basketPage = require('../pageobjects/basket.page')
const { expect } = require('chai');

describe('Checkout without products', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    })

    
    it('Checkout', async () => {
        // Go to Shoping Cart
        await mainPage.clickShoppingCartButton()

        // Сhecking cart
        const isCartEmpty = await basketPage.isCartEmpty()
        expect(isCartEmpty).to.be.true

        // Сhecking cart Checkout
        await basketPage.clickCheckoutButton()
        await basketPage.login('Igor', 'Sebruk', '04665')
        await basketPage.clickContinueButton()
        await basketPage.clickFinishButton()
        
        // Checking the purchase and displaying the producs
        const isCompleteHeaderExisting = await basketPage.isCompleteHeaderExisting()
        expect(isCompleteHeaderExisting).to.be.true
        await basketPage.clickBackToHomeButton()
    })
})
