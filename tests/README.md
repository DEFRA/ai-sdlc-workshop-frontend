# End-to-End Tests with Playwright

This directory contains end-to-end tests using [Playwright](https://playwright.dev/) for the application.

## Test Structure

- `e2e/`: Contains end-to-end test files for specific features
  - `homepage.spec.js`: Tests for the application home page
  - `health.spec.js`: Tests for the health check endpoint
  - `error.spec.js`: Tests for error page handling
  - `form-example.spec.js`: Example for testing forms with GOV.UK components (skipped)
  - `api-mocking-example.spec.js`: Example for testing with mocked API responses (skipped)
- `helpers/`: Contains helper functions for testing
  - `govuk-helpers.js`: Utilities for testing GOV.UK Frontend components
  - `api-mocks.js`: Functions for mocking API responses in tests

## Setup on a New Machine

Ensure you have followed the main README.md setup instructions, then:

```bash
# Install Playwright browsers and dependencies
npx playwright install --with-deps
```

## Running Tests

You can run the tests using the following npm scripts:

```bash
# Run all tests
npm test

# Run tests with UI mode for debugging
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run specific test files
npx playwright test tests/e2e/homepage.spec.js

# Run tests with specific browser
npx playwright test --project=chromium
```

## Test Configuration

The Playwright configuration is defined in `playwright.config.js` in the project root. Key settings:

- Three test browsers: Chromium, Firefox, and WebKit
- Automatic test server startup with `npm run dev`
- Test server URL: http://localhost:3000
- Timeout settings for tests and server startup
- Screenshot and trace capture on test failures

## Test Conventions

### Naming Conventions

- Test files: `[feature-name].spec.js`
- Test descriptions: Use descriptive language like "should do something"
- Locators: Use semantic locators where possible (role, text, etc.)

### Best Practices

1. Keep tests independent - each test should not depend on other tests
2. Use the helpers in `helpers/` for common tasks
3. Focus on testing user flows and behaviors, not implementation details
4. Use comments to explain complex assertions or setups
5. For form testing, test both valid and invalid inputs

## API Mocking

For tests that need to interact with external APIs, use the API mocking helpers:

```javascript
const { mockApiResponse } = require('../helpers/api-mocks');

test('displays data from API', async ({ page }) => {
  // Mock API response
  await mockApiResponse(page, '**/api/data', { 
    result: 'success', 
    items: [{ id: 1, name: 'Test' }] 
  });
  
  // Continue with test...
});
```

## GOV.UK Frontend Testing

The application uses GOV.UK Frontend components. Use the GOV.UK helper functions for testing:

```javascript
const { fillGovukInput, getButtonByText } = require('../helpers/govuk-helpers');

test('submits a form', async ({ page }) => {
  await page.goto('/form-page');
  
  // Fill a GOV.UK input
  await fillGovukInput(page, 'name-field', 'Test User');
  
  // Click a GOV.UK button
  await getButtonByText(page, 'Continue').click();
  
  // Continue with test...
});
``` 