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

## Testing with Playwright

This project uses [Playwright](https://playwright.dev/) for end-to-end testing.

### Setting Up Playwright on a New Machine

1. Install Playwright and its dependencies:

```bash
npx playwright install --with-deps
```

This installs browser binaries for Chromium, Firefox, and WebKit.

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode for debugging
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug
```

### Test Structure

- `tests/e2e/`: End-to-end test files
- `tests/helpers/`: Helper functions and utilities for testing

For more details on testing conventions and best practices, see [tests/README.md](./tests/README.md).

## Features

- GOV.UK Frontend styling and components
- Nunjucks templates
- Responsive design
- Accessible interface
- End-to-end testing with Playwright
