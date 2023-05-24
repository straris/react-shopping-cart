describe('Add to cart', () => {
	const testProduct = {
		"availableSizes": [
			"X",
			"ML",
			"L"
		],
		"currencyFormat": "$",
		"currencyId": "USD",
		"description": "",
		"id": 11,
		"installments": 3,
		"isFreeShipping": true,
		"price": 13.25,
		"sku": 39876704341265610,
		"style": "Wine",
		"title": "Basic Cactus White T-shirt",
		"quantity": 1
	}

	beforeEach(function () {
		cy.visit('http://localhost:3000')
		cy.window().should('have.property', 'model');

	})
	it('Adds a product to the cart', () => {
		cy.get('*[data-testid="addToCart"]').first().click()
		cy.get('button[title="remove product from cart"]')
	})
	it('Checks correct information are rendered', () => {
    cy.window().its('model').invoke('addProduct',
      testProduct
    )
		cy.get('*[title="Products in cart quantity"]').click()
		cy.get('*[data-testid="productContainer"]').contains(testProduct.price)
		cy.get('*[data-testid="productContainer"]').contains(testProduct.title)
		cy.get('*[data-testid="productContainer"]').contains(testProduct.style)
		cy.get('*[data-testid="productContainer"]').contains(testProduct.quantity)
		cy.get('*[data-testid="productContainer"]').get('*[data-testId="increaseQuantity"]')
		cy.get('*[data-testid="productContainer"]').get('*[data-testId="decreaseQuantity"]').should('be.disabled')
	})
})