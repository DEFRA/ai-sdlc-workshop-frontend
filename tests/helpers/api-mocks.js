/**
 * Helper functions for mocking API responses in tests
 */

/**
 * Mock an API response for testing
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} url - The URL to mock (can be a regex pattern)
 * @param {Object} responseData - The response data to return
 * @param {number} status - HTTP status code (default: 200)
 */
async function mockApiResponse(page, url, responseData, status = 200) {
  await page.route(url, (route) => {
    route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(responseData)
    });
  });
}

/**
 * Mock an API error response for testing
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} url - The URL to mock (can be a regex pattern)
 * @param {Object} errorData - The error data to return
 * @param {number} status - HTTP status code (default: 500)
 */
async function mockApiError(page, url, errorData, status = 500) {
  await page.route(url, (route) => {
    route.fulfill({
      status,
      contentType: 'application/json',
      body: JSON.stringify(errorData)
    });
  });
}

/**
 * Mock a network failure for testing
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} url - The URL to mock (can be a regex pattern)
 */
async function mockNetworkFailure(page, url) {
  await page.route(url, (route) => route.abort('failed'));
}

/**
 * Clear all API mocks
 * @param {import('@playwright/test').Page} page - Playwright page
 */
async function clearApiMocks(page) {
  await page.unrouteAll();
}

module.exports = {
  mockApiResponse,
  mockApiError,
  mockNetworkFailure,
  clearApiMocks
}; 