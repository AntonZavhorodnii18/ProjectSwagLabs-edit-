const loginPage = require ('../pageobjects/login.page')
const userNameGenerator = require('../pageobjects/usernamegenerator')
const { expect } = require('chai')
describe('Login with invalid login', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
    });
    it('Login', async () => {
        // RandomUserName
        const RandomUserName = userNameGenerator.generateRandomUserName()
        await loginPage.login(RandomUserName, 'secret_sauce')

        const passwordFieldType = await loginPage.Password.getAttribute('type')
        expect(passwordFieldType).to.equal('password')

        await loginPage.ClickLoginButton()

        const isErrorMessageVisible = await loginPage.isErrorMessageVisible();
        expect(isErrorMessageVisible).to.be.true

        browser.saveScreenshot('./screen/case3.login_page_error.png')
    }) 
})
