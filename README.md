# Workshop Frontend Demo

This is a simple Node.js application that uses GOV.UK Frontend with Nunjucks templates.

## Prerequisites

- Node.js (v20 or higher)
- npm (v9 or higher)
- The application connects to a backend REST service at http://localhost:8000 that exposes REST API's

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

For development with automatic reload:

```bash
npm run dev
```

The application will be available at http://localhost:3000.

## Testing with Jest

This project uses Jest and Supertest for testing server-side functionality.

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage

# Run specific test file
npm test -- __tests__/routes/index.test.js
```

## Features

- GOV.UK Frontend styling and components
- Nunjucks templates
- Responsive design
- Accessible interface
- Unit and integration testing with Jest and Supertest
