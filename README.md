# guest_checkout

This app allows guest user to place an order with creating an account. The admin of the app has access to add, delete and update the products.

## Key Features

- Authentication
  - Login [Public]
  - SignUp [Public]
  - Tokens [User]
- Product
  - View Producy[Public]
  - Create product[Admin]
  - Update product [Admin]
  - Delete product [Admin]
  - Place an order [Public]

## Run the server

```
npm install
cd /src
node server.js
```

## Built With

List of any major frameworks used to build the project.

- [NodeJS](https://nodejs.org/) - JS runtime environment
- [ExpressJS](https://expressjs.com/) - The NodeJS framework used
- [MongoDB](https://www.mongodb.com/) - NoSQL Database uses JSON-like documents with optional schemas
- [Mongoose](https://mongoosejs.com/) - Object Data Modeling (ODM) library for MongoDB and NodeJS
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Encryption & Decryption Algorithm
- [JWT](https://jwt.io/) - Compact URL-safe means of representing claims to be transferred between two parties
- [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for NodeJS
- [Winston](https://www.npmjs.com/package/winston) - A logger for just about everything.
- [Validator](https://www.npmjs.com/package/validator) - A library of string validators and sanitizers.
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header with an object keyed by the cookie names.
- [JOI](https://www.npmjs.com/package/joi) - The most powerful schema description language and data validator for JavaScript.
