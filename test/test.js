const assert = require('assert')
const {cartCheckout} = require('../services')
const {SKU} = require('../db')

describe('Unit tests', () => {
    it('Scanned Items: MacBook Pro, Raspberry Pi B -> Total: $5,399.99', () => {
		const cartInfo = {}
		cartInfo[SKU.MACBOOK_PRO] = 1
		cartInfo[SKU.RPI_B] = 1
		const price = cartCheckout(cartInfo)
		assert.equal(price, 5399.99)
    }),
	
    it('Scanned Items: Google Home, Google Home, Google Home -> Total: $99.98', () => {
		const cartInfo = {}
		cartInfo[SKU.GOOGLE_HOME] = 3
		const price = cartCheckout(cartInfo)
		assert.equal(price, 99.98)
    }),
	
    it('Scanned Items: Alexa Speaker, Alexa Speaker, Alexa Speaker -> Total: $295.65', () => {
		const cartInfo = {}
		cartInfo[SKU.ALEXA_SPEAKER] = 3
		const price = cartCheckout(cartInfo)
		assert.equal(price, 295.65)
    })
	
    //it('Scanned Items: x3 Raspberry Pi B -> Error Not enough Stock', () => {
	//	const cartInfo = {}
	//	cartInfo[SKU.RPI_B] = 3
	//	assert.throws(() => cartCheckout(cartInfo))
    //})
	
})