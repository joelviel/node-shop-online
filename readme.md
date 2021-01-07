# How to test the cartCheckout service
git clone https://github.com/joelviel/node-shop-online && cd node-shop-online
npm install
npm test

Example of test output

```
> node-shop-online@1.0.0 test C:\Users\username\Desktop\node-shop-online
> mocha

Unit tests
Cart {
  items: {
    '234234': Item {
      sku: '234234',
      qty: 1,
      name: 'Raspberry Pi B',
      unitPrice: 30,
      promoDiscount: 0,
      promoFreeQty: 1
    },
    '43N23P': Item {
      sku: '43N23P',
      qty: 1,
      name: 'MacBook Pro',
      unitPrice: 5399.99,
      promoDiscount: 0,
      promoFreeQty: 0
    }
  }
} Total $5399.99
    √ Scanned Items: MacBook Pro, Raspberry Pi B -> Total: $5,399.99

Cart {
  items: {
    '120P90': Item {
      sku: '120P90',
      qty: 3,
      name: 'Google Home',
      unitPrice: 49.99,
      promoDiscount: 49.99,
      promoFreeQty: 0
    }
  }
} Total $99.98
    √ Scanned Items: Google Home, Google Home, Google Home -> Total: $99.98

Cart {
  items: {
    A304SD: Item {
      sku: 'A304SD',
      qty: 3,
      name: 'Alexa Speaker',
      unitPrice: 109.5,
      promoDiscount: 32.85,
      promoFreeQty: 0
    }
  }
} Total $295.65
    √ Scanned Items: Alexa Speaker, Alexa Speaker, Alexa Speaker -> Total: $295.65


  3 passing (19ms)
```