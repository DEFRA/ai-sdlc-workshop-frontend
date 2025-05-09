/**
 * Helper functions for testing GOV.UK Frontend components
 */

/**
 * Check if a GOV.UK error summary is present on the page
 * @param {import('@playwright/test').Page} page - Playwright page
 * @returns {Promise<import('@playwright/test').Locator>} - The error summary locator
 */
function getErrorSummary(page) {
  return page.locator('.govuk-error-summary');
}

/**
 * Get field error message
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} fieldId - The ID of the field
 * @returns {Promise<import('@playwright/test').Locator>} - The error message locator
 */
function getFieldError(page, fieldId) {
  return page.locator(`#${fieldId}-error`);
}

/**
 * Get a GOV.UK button by its text
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} text - Button text
 * @returns {Promise<import('@playwright/test').Locator>} - The button locator
 */
function getButtonByText(page, text) {
  return page.locator('.govuk-button', { hasText: text });
}

/**
 * Fill a GOV.UK input field
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} fieldId - The ID of the field
 * @param {string} value - The value to enter
 */
async function fillGovukInput(page, fieldId, value) {
  await page.locator(`#${fieldId}`).fill(value);
}

/**
 * Select a GOV.UK radio button
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} fieldId - The ID of the radio button
 */
async function selectGovukRadio(page, fieldId) {
  await page.locator(`#${fieldId}`).check();
}

/**
 * Check a GOV.UK checkbox
 * @param {import('@playwright/test').Page} page - Playwright page
 * @param {string} fieldId - The ID of the checkbox
 * @param {boolean} shouldCheck - Whether to check or uncheck
 */
async function toggleGovukCheckbox(page, fieldId, shouldCheck = true) {
  if (shouldCheck) {
    await page.locator(`#${fieldId}`).check();
  } else {
    await page.locator(`#${fieldId}`).uncheck();
  }
}

module.exports = {
  getErrorSummary,
  getFieldError,
  getButtonByText,
  fillGovukInput,
  selectGovukRadio,
  toggleGovukCheckbox
}; 