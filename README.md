# E-commerce API

This repository contains the **backend** of an e-commerce system built with **Node.js**, **Express**, **Prisma ORM**, **PostgreSQL**, **JWT**, **Bcrypt**, and **Docker**.

## Technologies Used

- **Node.js** – JavaScript runtime for building backend services.
- **Express** – Minimalist web framework for Node.js.
- **Prisma ORM** – Type-safe ORM for interacting with PostgreSQL.
- **PostgreSQL** – Relational database system for managing data.
- **JWT (JSON Web Tokens)** – Authentication and authorization mechanism.
- **Bcrypt** – Secure hashing algorithm for password encryption.
- **Docker** – Containerization platform for building and running applications in isolated environments.

## Features

The API supports the following features:

- **User Registration**: Allows users to create accounts with encrypted passwords.
- **User Login**: Verifies credentials and returns a JWT token for authenticated access.
- **Product Management**: Allows adding, editing, deleting, and listing products in the e-commerce system.
- **Shopping Cart**: Authenticated users can add items to the cart and complete the purchase.
- **Protected Route**: Lists all orders made by an authenticated user (requires JWT token).

## Prerequisites

Make sure you have the following installed:

- **Node.js**: Download and install it from the [official Node.js website](https://nodejs.org/).
- **PostgreSQL**: Install PostgreSQL from [PostgreSQL official website](https://www.postgresql.org/download/).
- **Docker**: Install Docker from [Docker official website](https://www.docker.com/products/docker-desktop).

## Installation

To run this project locally, follow the steps below:

1. **Clone the repository**:
   - Clone the repository to your local machine using the command:

     ```bash
     git clone https://github.com/your-username/e-commerce-api.git
     ```

2. **Install the dependencies**:
   - Run the following command to install all the necessary dependencies:

     ```bash
     npm install
     ```

3. **Configure the environment variables**:
   - Create a `.env` file in the root of the project and add the following environment variables:

     ```env
     DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
     JWT_SECRET="your_jwt_secret_key"
     ```

   - Replace `username`, `password`, `localhost`, `5432`, and `database_name` with your PostgreSQL credentials and database details.

   - You can generate a JWT_SECRET in the terminal using the following command:

     ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```

4. **Set up Docker**:
   - You can use Docker to run the PostgreSQL database by setting up a Docker container. If you haven't installed Docker, follow the instructions on the [Docker website](https://www.docker.com/get-started).

   - Once Docker is installed, run the following command to start a PostgreSQL container:

     ```bash
     docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
     ```

   - Ensure your PostgreSQL container is running and accessible at `localhost:5432`.

5. **Initialize Prisma**:
   - Run the following command to set up the Prisma client and database:

     ```bash
     npx prisma migrate dev
     npx prisma generate
     ```

6. **Start the server**:
   - To start the backend server, run:

     ```bash
     npm start
     ```

     The API will be available at: [http://localhost:3000](http://localhost:3000)

## Live Demo

The project is deployed online via **Vercel**:

- [**E-commerce API**](https://e-commerce-api.vercel.app/)

## API Routes

### Users

- **POST /register**: Creates a user account.
- **POST /login**: Authenticates the user and returns a JWT.

### Products

- **POST /products**: Adds a new product to the catalog (requires authentication).
- **GET /products**: Lists all products.
- **GET /products/:id**: Shows details of a specific product.
- **PUT /products/:id**: Updates product information.
- **DELETE /products/:id**: Removes a product from the catalog.

### Cart

- **POST /cart**: Adds an item to the cart (requires authentication).
- **GET /cart**: Displays the user's cart items (requires authentication).
- **DELETE /cart/:productId**: Removes an item from the cart (requires authentication).

### Orders

- **POST /orders**: Creates an order from the cart items (requires authentication).
- **GET /orders**: Lists all orders made by an authenticated user.

## Contributing

Contributions are welcome! If you wish to improve or add features to the project, follow these steps:

1. Fork this repository.
2. Create a branch for your feature (`git checkout -b my-feature`).
3. Commit your changes (`git commit -am 'Adding new feature'`).
4. Push to your repository (`git push origin my-feature`).
5. Open a Pull Request.

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
