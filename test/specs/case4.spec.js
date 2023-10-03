const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')
const burgerMenu = require('../pageobjects/burger.page')
const assert = require('assert');

describe('Logout', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    });

    it('Login', async () => {
        
        await mainPage.clickBurgerMenuButton()
        await burgerMenu.isLogoutButtonVisible()
        await burgerMenu.clickLogoutButton()
        
        const usernameValue = await loginPage.UserName.getValue()
        const passwordValue = await loginPage.Password.getValue()
        assert.strictEqual(usernameValue, '', 'Username field should be empty')
        assert.strictEqual(passwordValue, '', 'Password field should be empty')
    })

})