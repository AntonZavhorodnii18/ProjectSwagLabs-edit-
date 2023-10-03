const loginPage = require ('../pageobjects/login.page')
const passwordGenerator = require('../pageobjects/passwordgenerator')
const { expect } = require('chai')
describe('Login with invalid password', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
    });

    it('Login', async () => {
        // Random Password
        const RandomPassword = passwordGenerator.generateRandomPassword()
        await loginPage.login('standard_user', RandomPassword)

        const passwordFieldType = await loginPage.Password.getAttribute('type')
        expect(passwordFieldType).to.equal('password')

        await loginPage.ClickLoginButton()

        const usernameError = await loginPage.UserName.getAttribute('class')
        const passwordError = await loginPage.Password.getAttribute('class')

        expect(usernameError).to.include('error')
        expect(passwordError).to.include('error')

        const isErrorMessageVisible = await loginPage.isErrorMessageVisible()
        expect(isErrorMessageVisible).to.be.true

        browser.saveScreenshot('./screen/case2.login_page_error.png')
    })
})