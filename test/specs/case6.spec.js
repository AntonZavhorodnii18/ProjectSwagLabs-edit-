const loginPage = require ('../pageobjects/login.page')
const filtersPage = require ('../pageobjects/filters.page')

describe('Sorting', function(){

    before(async () => {
        await browser.maximizeWindow()
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.ClickLoginButton()
    })

    it('Products', async () => {

        filtersPage.clickSelectButton()

        // Display all filters in console
        const availableOptions = await filtersPage.getAvailableSortingOptions()
        console.log('Available sorting:\n' + availableOptions.join('\n'))

        // Click filters 
        await filtersPage.clickSortingLowToHigh()
        await filtersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(L-H).png')

        await filtersPage.clickSortingHighToLow()
        await filtersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(H-L).png')
    
        await filtersPage.clickSortingA_Z()
        await filtersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(A-Z).png')

        await filtersPage.clickSortingZ_A()
        await filtersPage.logSelectedFilter()
        browser.saveScreenshot('./screen/case6.filter(Z-A).png')
    })
})