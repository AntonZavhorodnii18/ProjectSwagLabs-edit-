const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')
describe('Valid Login', function(){

     before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
    })

    it('Login', async () => {
        // Login and check type field 
        await loginPage.login('standard_user', 'secret_sauce')

        const passwordFieldType = await loginPage.Password.getAttribute('type')
        expect(passwordFieldType).toBe('password')

        browser.saveScreenshot('./screen/case1.login_page.png')
        await loginPage.ClickLoginButton()
        
        // Visible shoping cart and products
        const isShoppingCartButtonVisible = await mainPage.isShoppingCartButtonVisible()
        expect(isShoppingCartButtonVisible).toBe(true)

        const isProductTextFound = (await mainPage.getTitleText()).includes('Product')
        expect(isProductTextFound).toBe(true)
    })
})