it("Filters by status and asserts returned object properties", () => {
	const expectedProperties = ['id', 'category', 'name', 'photoUrls', 'tags', 'status'];
	cy.request("GET", "https://petstore.swagger.io/v2/pet/findByStatus?status=available").should((response) => {
		expectedProperties.forEach(property => {
			expect(response.body[0]).to.have.property(property)
		});
		expect(response.status).to.eq(200);
	});
});
it("Filters by invalid status and asserts response", () => {
	const expectedProperties = ['id', 'category', 'name', 'photoUrls', 'tags', 'status'];
	cy.request("GET", "https://petstore.swagger.io/v2/pet/findByStatus?status=invalid").should((response) => {
		expect(response.status).to.eq(400);
	});
});
it("Adds a new pet and asserts response", () => {
	const expectedObject = {
		"category": {
			"id": 0,
			"name": "string"
		},
		"name": "bird",
		"photoUrls": [
			"string"
		],
		"tags": [
			{
				"id": 0,
				"name": "string"
			}
		],
		"status": "available"
	};
	cy.request("POST", "https://petstore.swagger.io/v2/pet", {
		"category": {
			"id": 0,
			"name": "string"
		},
		"name": "bird",
		"photoUrls": [
			"string"
		],
		"tags": [
			{
				"id": 0,
				"name": "string"
			}
		],
		"status": "available"
	}).should((response) => {
		expect(response.body).to.deep.include(expectedObject)
		expect(response.status).to.eq(200);
	});
});