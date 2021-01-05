const SKU = {
	GOOGLE_HOME: '120P90',
	MACBOOK_PRO: '43N23P',
	RPI_B: '234234',
	ALEXA_SPEAKER: 'A304SD'
}

const PRODUCT = {}
PRODUCT[SKU.GOOGLE_HOME] = {name: 'Google Home', unitPrice: 49.99}
PRODUCT[SKU.MACBOOK_PRO] = {name: 'MacBook Pro', unitPrice: 5399.99}
PRODUCT[SKU.RPI_B] = {name: 'Raspberry Pi B', unitPrice: 30}
PRODUCT[SKU.ALEXA_SPEAKER] = {name: 'Alexa Speaker', unitPrice: 109.5}

const STORE = {}
STORE[SKU.GOOGLE_HOME] = 10
STORE[SKU.MACBOOK_PRO] = 5
STORE[SKU.RPI_B] = 2
STORE[SKU.ALEXA_SPEAKER] = 10

module.exports = {SKU, PRODUCT, STORE}