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

- **Product Listing**: Retrieves all products available in the catalog.
- **User Registration**: Allows users to create accounts with encrypted passwords.
- **User Login**: Verifies credentials and returns a JWT token for authenticated access.
- **Product Details**: Returns detailed information about a specific product by its ID.
- **Shopping Cart Management**: Authenticated users can add or remove products from their cart using the product ID (protected route).

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
     git clone https://github.com/tulioanesio/e-commerce-API.git
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
     POSTGRES_USER: "your_postgres_user"
     POSTGRES_PASSWORD: "your_postgres_password"
     POSTGRES_DB: "your_postgres_database"
     ```

   - Replace `username`, `password`, `localhost`, `5432`, and `database_name` with your PostgreSQL credentials and database details.

   - You can generate a JWT_SECRET in the terminal using the following command:

     ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```
4. **Insert Database**:
   - To populates the database with initial product data, run:

     ```bash
     node prisma/seed.js
     ```

5. **Set up Docker**:
   - You can use Docker to run the PostgreSQL database by setting up a Docker container. If you haven't installed Docker, follow the instructions on the [Docker website](https://www.docker.com/get-started).

   - Once Docker is installed, run the following command to start a PostgreSQL container:

     ```bash
     docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -p 5433:5432 -d postgres
     ```

6. **Initialize Prisma**:
   - Run the following command to set up the Prisma client and database:

     ```bash
     npx prisma migrate dev
     npx prisma generate
     ```

7. **Start the server**:
   - To start the backend server, run:

     ```bash
     npm start
     ```

     The API will be available at: [http://localhost:3000](http://localhost:3000)

