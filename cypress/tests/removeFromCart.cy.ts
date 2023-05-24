describe('Remove from cart', () => {
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

  before(function () {
    cy.visit('http://localhost:3000')
    cy.window().should('have.property', 'model');
    cy.window().its('model').invoke('addProduct',
      testProduct
    )
  })
  it('removes a product from the cart and checks for empty case', () => {
    cy.get('*[title="Products in cart quantity"]').click()
    cy.get('button[title="remove product from cart"]').click()
    cy.contains('Add some products in the cart')
  })
})