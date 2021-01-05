// https://bcgdveur.egnyte.com/dl/yauCUFsheo

const {SKU, PRODUCT, STORE} = require('./db')
const {Cart} = require('./models')


const cartCheckout = cartInfo => {
	
	const cart = new Cart()
	
	Object.keys(cartInfo).forEach(sku => cart.addItem(sku, cartInfo[sku]))
		
	console.log(cart, 'Total $'+cart.price)
	
	return cart.price
	
}

module.exports = {cartCheckout}