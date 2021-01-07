// https://bcgdveur.egnyte.com/dl/yauCUFsheo

const {SKU, PRODUCT, STORE} = require('./db')
const {Cart} = require('./models')


const cartCheckout = cartInfo => {
	
	const cart = new Cart()
	
	Object.keys(cartInfo).forEach(sku => cart.addItem(sku, cartInfo[sku]))
		
	const price = cart.price
	
	console.log(cart, 'Total $'+price)
	
	return price
	
}

module.exports = {cartCheckout}