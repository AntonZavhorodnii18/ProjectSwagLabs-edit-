class BasketPage {

    // Checkout
    get checkoutButton() {
        return $('#checkout')
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click()
    }
    // FirstName
    get firstnameButton() {
        return $('#first-name')
    }

    async clickFirstNameButton() {
        await this.firstnameButton.click()
    }
    // LastName
    get lastnameButton() {
        return $('#last-name')
    }

    async clickLastNameButton() {
        await this.lastnameButton.click()
    }
    // PostalCode
    get postalcodeButton() {
        return $('#postal-code')
    }

    async clickPostalCodeButton() {
        await this.postalcodeButton.click()
    }
    // Continue
    get continueButton() {
        return $('#continue')
    }

    async clickContinueButton() {
        await this.continueButton.click()
    }
    // Finish
    get finishButton() {
        return $('#finish')
    }

    async clickFinishButton() {
        await this.finishButton.click()
    }
   
    // LOGIN for basket
    async login(FirstName, LastName, PostalCode){
        await this.firstnameButton.setValue(FirstName)
        await this.lastnameButton.setValue(LastName)
        await this.postalcodeButton.setValue(PostalCode)
    }
  
    async getCartItems() {
        const cartItemElements = await $$('.cart-item')
        const cartItems = []
    
        for (const cartItemElement of cartItemElements) {
          const nameElement = await cartItemElement.$('.cart-item-name')
          const priceElement = await cartItemElement.$('.cart-item-price')
    
          const itemName = await nameElement.getText()
          const itemPrice = await priceElement.getText()
    
          cartItems.push({ name: itemName, price: itemPrice })
        }
    
        return cartItems;
      }

    async getCartItemDetails(cartItems) {
        const itemDetails = [];
        for (const cartItem of cartItems) {
          // Определите логику извлечения деталей товара из cartItem
          const itemName = cartItem.name
          const itemPrice = cartItem.price
          
          // Добавьте детали в массив itemDetails
          itemDetails.push(`${itemName} - ${itemPrice}`)
        }
        return itemDetails;
    }

    async isCompleteHeaderExisting() {
        const completeHeader = await $('#checkout_complete_container > h2')
        return await completeHeader.isExisting()
    }

    get backToHomeButton () {
        return $('#back-to-products')
    }

    async clickBackToHomeButton() {
        await this.backToHomeButton.click()
    }

    async isCartEmpty() {
        const cartItems = await $$('.cart_item')
        return cartItems.length === 0;
    }
}


module.exports = new BasketPage();
