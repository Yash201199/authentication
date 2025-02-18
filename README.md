# Authentication System

This is a full-stack authentication system built with **Express.js** for the backend and **JWT (JSON Web Token)** for authentication. The system allows users to **signup**, **signin**, **get user information**, and **logout**. It includes token-based authentication to protect sensitive routes.

## Features

- **Signup**: Create a new user by providing a unique username and password.
- **Signin**: Log in with your credentials to receive a JWT token for authentication.
- **Get User Information**: Retrieve user information by sending the token in the request header.
- **Logout**: Remove the token from local storage to log out the user.

## Tech Stack

- **Backend**: Express.js, JWT, CORS
- **Frontend**: HTML, JavaScript, Axios (for making HTTP requests)
- **Authentication**: JWT (JSON Web Token)
- **Storage**: Local Storage (for storing JWT)

## Installation

### Prerequisites

- Node.js and npm should be installed on your machine.

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yash201999/auth-system.git
