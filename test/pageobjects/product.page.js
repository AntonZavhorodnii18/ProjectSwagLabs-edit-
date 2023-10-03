class ProductPage { // Product buttons and Add to Cart 
    
    
    // Backpack
    get BackpackItem() {
        return $('#item_4_title_link > div')
    }

    async clickBackpackItem() {
        await this.BackpackItem.click()
    }


    get AddToBackpackItem() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    async clickAddToBackpackItem() {
        await this.AddToBackpackItem.click()
    }
    
    // BikeLight
    get BikeLightItem() {
        return $('#item_0_title_link > div')
    }

    async clickBikeLightItem() {
        await this.BikeLightItem.click()
    }

    get AddToBikeLightItem() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    async clickAddToBikeLightItem() {
        await this.AddToBikeLightItem.click()
    }

    
    
    // Bolt TShirt
    get BoltTShirtItem() {
        return $('#item_1_title_link > div')
    }

    async clickBoltTShirtItem() {
        await this.BoltTShirtItem.click()
    }

    get AddBoltTShirtItem() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    async clickAddBoltTShirtItem() {
        await this.AddBoltTShirtItem.click()
    }

    // Fleece Jacket
    get FleeceJacketItem() {
        return $('#item_5_title_link > div')
    }

    async clickFleeceJacketItem() {
        await this.FleeceJacketItem.click()
    }

    get AddToCartFleeceJacket() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    async clickAddFleeceJacketItem() {
        await this.AddToCartFleeceJacket.click()
    }

    // SauceLabsOnesie
    get OnesieItem() {
        return $('#item_2_title_link > div')
    }

    async clickOnesieItem() {
        await this.OnesieItem.click()
    }

    get AddOnesieItem() {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    async clickAddOnesieItem() {
        await this.AddOnesieItem.click()
    }

    // Test.allTheThings() T-Shirt (Red)
    get RedTShirtItem() {
        return $('#item_3_title_link > div')
    }

    async clickRedTShirtItem() {
        await this.RedTShirtItem.click()
    }

    get AddRedTShirtItem() {
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }

    async clickAddRedTShirtItem() {
        await this.AddRedTShirtItem.click()
    }

    // Buy after viewing
    get BuyAfterViewingButton() {
        return $('button.btn.btn_primary.btn_small.btn_inventory')
    }

    async clickBuyAfterViewing() {
        await this.BuyAfterViewingButton.click()
    }


    async getAllProductDetails() {
        const inventoryItems = await $$('.inventory_item')
        const itemDetails = await Promise.all(inventoryItems.map(async (item) => {
            const nameText = await item.$('.inventory_item_name').getText()
            const priceText = await item.$('.inventory_item_price').getText()
            return `${nameText} - ${priceText}`
        }));
        return itemDetails.join('\n')
    }

    async getRandomProduct() {
        const inventoryItems = await $$('.inventory_item')
        const randomIndex = Math.floor(Math.random() * inventoryItems.length)
        const randomItem = inventoryItems[randomIndex]
        const addToCartButton = await randomItem.$('button[data-test^="add-to-cart"]')
        const selectedName = await randomItem.$('.inventory_item_name').getText()
        const selectedPrice = await randomItem.$('.inventory_item_price').getText()
        console.log(`Selected Item: ${selectedName} - ${selectedPrice}`)
        return { randomItem, addToCartButton, selectedName, selectedPrice }
    }

    async addToCartRandomProduct() {
        const { addToCartButton, selectedName, selectedPrice } = await this.getRandomProduct()
        await addToCartButton.click()
        console.log(`Added to cart: ${selectedName} - ${selectedPrice}`)
    }

    async addRandomProductsToCart(quantity) {
        const selectedProducts = [];
        
        while (selectedProducts.length < quantity) {
          const { addToCartButton, selectedName, selectedPrice } = await this.getRandomProduct()
          
          if (!selectedProducts.some(product => product.name === selectedName)) {
            await addToCartButton.click()
            selectedProducts.push({ name: selectedName, price: selectedPrice })
            console.log(`Added to cart: ${selectedName} - ${selectedPrice}`)
          }
        }
        return selectedProducts;
    }

    async checkCart() {
        const cartItem = await $('.cart_item')
        const isNotEmptyCart = !(await cartItem.getAttribute('class')).includes('removed_cart_item')

        if (isNotEmptyCart) {
            const itemName = await cartItem.$('.inventory_item_name').getText()
            console.log(`Item in the cart: ${itemName}`)
        } else {
            console.log('The cart is empty.')
        }
    }
}

module.exports = new ProductPage()
