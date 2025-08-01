# ShoppyGlobe Backend API

This is the backend API for the ShoppyGlobe e-commerce application, built with Node.js, Express.js, and MongoDB.

---

## Features

- User registration and login with JWT authentication
- Product listing and detail retrieval
- Shopping cart management (add, update, delete, view)
- MongoDB integration for data persistence
- Input validation and error handling

---

## Setup Instructions

1. **Clone the repository:**
   git clone https://github.com/mohitbisht007/ShopifyGlobe-Backend
   cd ShopifyBackend

2. **Install dependencies:**
   npm install


3. **Start the server:**
   npm start
   The server will run on `http://localhost:5051` by default.

---


## API Endpoints

### Product Routes

| Method | Endpoint              | Description                        | Auth Required |
|--------|----------------------|------------------------------------|--------------|
| GET    | `/products`          | Get all products                   | No           |
| GET    | `/products/:id`      | Get product by ID                  | No           |
| POST   | `/seeder`            | Seed products into database        | No           |

---

### Cart Routes

(You can use default user (username: mohit, password: Mohit123@) or can register yourself for testing of all cart routes) 
> **All cart routes require JWT authentication. Pass the token in the `Authorization` header as `Bearer <token>`.**

| Method | Endpoint         | Description                          | Body Params                |
|--------|-----------------|--------------------------------------|----------------------------|
| GET    | `/cart`         | View all items in user's cart        | -                          |
| POST   | `/cart`         | Add a product to cart                | `{ "productId", "quantity" }` |
| PUT    | `/cart/:id`     | Update quantity of a cart item       | `{ "quantity" }`           |
| DELETE | `/cart/:id`     | Remove a product from cart           | -                          |

---

### User Routes

| Method | Endpoint     | Description                | Body Params                       |
|--------|-------------|----------------------------|-----------------------------------|
| POST   | `/register` | Register a new user        | `{ "username", "password" }`      |
| POST   | `/login`    | Login and get JWT token    | `{ "username", "password" }`      |

---

## Authentication

- Register a user via `/register`.
- Login via `/login` to receive a JWT token.
- For protected routes (cart), include the token in the `Authorization` header:

  Authorization: JWT <your_token>

---

## Notes

PROJECT BY - Mohit Bisht