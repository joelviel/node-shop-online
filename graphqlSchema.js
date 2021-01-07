// Finally, imagine that adding items to cart and checking out was a backend API.
// Please design a schema file for GraphQL on how you would do this.

const schema = `
    type Item {
		sku: String!
		name: String!
		unitPrice: Float!
		qty: Int!
	}

	type Cart {
		id: ID!
		items: [Item]
		price: Float!
	}
	
	type Query {
        cart(id: ID!): Cart
    }
	
    type Mutation {
        updateCart(id: Int!, item: Item): Cart
		checkoutCart (id: Int!): cartCheckOutMutationResponse
    }
    
	type checkoutCartMutationResponse {
		success: Boolean!
		message: String!
		cart: Cart
	}
`

// When the mutation updateCart is invoked, call the service cartCheckout in services.js

// When the mutation updateCart is invoked, call a service that would take advantage of 
// addItem method of a cart object (cf. class Cart in models.js).
// While the user is selecting his or her items in the UI, the cart object would be persisted in memory with a specific id