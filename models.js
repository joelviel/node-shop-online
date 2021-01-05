const {SKU, PRODUCT, STORE} = require('./db')

class Item {
	
	constructor(sku, qty) {
		this.sku = sku
		this.qty = qty
		this.name = PRODUCT[this.sku] && PRODUCT[this.sku].name
		this.unitPrice = PRODUCT[this.sku] && PRODUCT[this.sku].unitPrice
		this.promoDiscount = 0
		this.promoFreeQty = 0
	}
	
	
	get price () {
		return Math.max(this.qty - this.promoFreeQty, 0) * this.unitPrice - this.promoDiscount
	}
}



class Cart {
	
	constructor() {
		this.items = {}
	}
	
	addItem(sku, qty) {
		this.verifyStockIsAvailable(STORE, sku, qty)
		if (sku in this.items) this.items[sku].qty += qty
		else this.items[sku] = new Item(sku, qty)
	}
	
	verifyStockIsAvailable(store, sku, qty) {
		if (!PRODUCT[sku]) throw new Error(`Product not found for SKU ${sku}`)
		if (qty > store[sku]) throw new Error(`Not enough stock for SKU ${sku}`)
	}
	
	addFreeItem(sku, qty) {
		if (sku in this.items) this.items[sku].promoFreeQty += qty
		else {
			const newItem = new Item(sku, 0)
			newItem.promoFreeQty = qty
			this.items[sku] = newItem
		}
	}

	get price() {
		let price = 0
		this.applyPromo()
		for (let sku in this.items) {
			price += this.items[sku].price
		}
		return price.toFixed(2)
	}

	applyPromo() {
		
		// Each sale of a MacBook Pro comes with a free Raspberry Pi B
		if (this.items[SKU.MACBOOK_PRO] && this.items[SKU.MACBOOK_PRO].qty > 0) {
			this.addFreeItem(SKU.RPI_B, this.items[SKU.MACBOOK_PRO].qty)
		}
		
		// Buy 3 Google Homes for the price of 2
		if (this.items[SKU.GOOGLE_HOME] && this.items[SKU.GOOGLE_HOME].qty > 0) {
			this.items[SKU.GOOGLE_HOME].promoDiscount = Math.floor(this.items[SKU.GOOGLE_HOME].qty / 3) * this.items[SKU.GOOGLE_HOME].unitPrice
		}
		
		// Buying more than 3 Alexa Speakers will have a 10% discount on all Alexa speakers
		if (this.items[SKU.ALEXA_SPEAKER] && this.items[SKU.ALEXA_SPEAKER].qty > 0) {
			this.items[SKU.ALEXA_SPEAKER].promoDiscount = this.items[SKU.ALEXA_SPEAKER].qty * 0.1 * this.items[SKU.ALEXA_SPEAKER].unitPrice
		}
	}

}


module.exports = {Item, Cart}