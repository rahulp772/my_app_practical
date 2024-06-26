# Social login API

This Node.js application provides APIs to signup using google, managing users, including CRUD operations.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: npm install
4. Set up environment variables as needed

## Usage
Start the server: npm start

Access the APIs using a tool like Postman or a web browser.

## Modules

## API Endpoints

### User Endpoints

- `GET /`: Open up social login page
- `GET /logout`: Destroy current session and logging out user
- `GET /auth/google`: Passport authentication
- `GET /auth/google/callback`: Callback API when signup is successful
- `GET /users/`: Get list of all registered users
- `GET /users/:id`: Get user details by id
- `GET /users/:id/edit`: Edit user
- `POST /users/:id`: Update user
- `DELETE /users/:id`: Delete user