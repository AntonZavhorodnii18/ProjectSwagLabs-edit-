class BurgerMenuPage {
    // Logout
    get LogoutButton() {
        return $('#logout_sidebar_link')
    }
    async isLogoutButtonVisible() {
        const isDisplayedLogout = await this.LogoutButton.isDisplayed()
        if (isDisplayedLogout) {
            console.log('Logout button is visible.')
        } else {
            console.log('Logout button is not visible.')
        }
        return isDisplayedLogout
    }

    async clickLogoutButton() {
        await this.LogoutButton.click()
    }

    // SidebarMenu
    get SidebarMenuLinks() {
        return $$('.bm-item.menu-item')
    }



}

module.exports = new BurgerMenuPage()