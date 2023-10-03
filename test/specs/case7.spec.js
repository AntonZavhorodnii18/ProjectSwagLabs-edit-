const loginPage = require ('../pageobjects/login.page')
const mainPage = require('../pageobjects/main.page')

describe('Footer Links', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    })

    
    it('Footer', async () => {
        // Main tabsSave
        const mainTab = await browser.getWindowHandle()
        // Click adn cosole log Url for buttons (Twiter, Facebook and Linkedin)
        await mainPage.clickTwiterButton()
        await mainPage.switchToNewTab(mainTab)
        const twitterUrl = await browser.getUrl()
        console.log('Twitter URL:', twitterUrl)
        await browser.closeWindow()

        await mainPage.switchToMainTab(mainTab)

        await mainPage.clickFacebookButton()
        await mainPage.switchToNewTab(mainTab)
        const facebookUrl = await browser.getUrl()
        console.log('Facebook URL:', facebookUrl)
        await browser.closeWindow()

        await mainPage.switchToMainTab(mainTab)

        await mainPage.clickLinkedinButton()
        await mainPage.switchToNewTab(mainTab)
        const linkedinUrl = await browser.getUrl()
        console.log('LinkedIn URL:', linkedinUrl)
        await browser.closeWindow()
    })
})
