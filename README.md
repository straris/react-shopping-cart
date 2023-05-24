## 🛍️ Simple ecommerce cart application [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart)

<p align="center">

  <img src="./readme-banner.png">
</p>

## Basic Overview - [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

<p align="left">

  <img src="./work-in-the-netherlands.png" width="380" height="90">
</p>

✈️ [Follow Jeremy Akeze](https://www.linkedin.com/in/jeremy-akeze-9542b396/)

This simple shopping cart prototype shows how React with Typescript, React hooks, react Context and Styled Components can be used to build a friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Features

- Add and remove products from the floating cart using Context Api
- Filter products by available sizes using Context Api
- Responsive design

<!--
## Getting started

Try playing with the code on CodeSandbox :)

[![Edit app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74rykw70qq)
 -->

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start the React app */
npm start

/* To run the tests */
npm run test

/* To run UI and API tests with cypress */
npx cypress run


```

#### Testing
##### Part 1: UI Automation
- Add to cart (cypress\tests\addToCart.cy.ts):
-- User can add a product in the cart and the cart always updates respectively
-- Information in the cart always match with user's selection

- Remove from cart (cypress\tests\removeFromCart.cy.ts):
-- User can remove a product in the cart and the cart always updates respectively

Notes: As the application is a demo and basic, the only suggestion that I noticed would be to extend the functionality in order for the right product size to be added to the cart based on the filters, but this functionality is just missing from the app at the moment.

##### Part 2: API Automation
I decided to focus on 2 of the pet endpoints (cypress\tests\api\pet.cy.ts):

One issue that the test uncovered, the endpoint "GET", "https://petstore.swagger.io/v2/pet/findByStatus?status=invalid" should return 400 due to the *invalid* status according to swagger's documentation, in reality the endpoint returns 200 and an empty object.
 
##### Part 3: Release Test

- Functional Testing:

-- core features like product search, product listing, shopping cart, checkout process.

-- user registration, login, and account management.
-- forms and inputs, such as shipping and billing addresses, payment methods, and gift cards.
-- customer reviews and ratings.

- Compatibility Testing:

-- all supported browsers and versions.
-- all supported OSs
-- all supported screen sizes

- Performance Testing:
-- load tests
-- response times

- Security Testing:
-- Validate SSL/TLS certificate.
-- cross-site scripting, SQL injection, cross-site request forgery.
-- encryption of sensitive customer information, such as passwords and payment details.
-- penetration testing.

- Usability Testing:
-- test the website's new features for intuitiveness and ease of navigation.
-- accessibility features for users with disabilities.

- Internationalization and Localization Testing:
-- language and currency support for different regions.
-- correct date, time, and address formats based on regional settings.

- Integration Testing:
-- integration with third-party services (payment gateways, shipping providers, etc.).

- Regression Testing

### Copyright and license

The MIT License (MIT). Please see License File for more information.

<br/>
<br/>

<p align="center"><img src="http://www.jeffersonribeiro.com/assets/img/apple-icon-180x180.png" width="35" height="35"/></p>
<p align="center">
<sub>A little project by <a href="http://www.jeffersonribeiro.com/">Jefferson Ribeiro</a></sub>
</p>
