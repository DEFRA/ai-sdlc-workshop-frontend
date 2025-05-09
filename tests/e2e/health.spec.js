const { test, expect } = require('@playwright/test');

test.describe('Health check endpoint', () => {
  test('should display health status information', async ({ page }) => {
    await page.goto('/health');
    
    // Check for the page title with a flexible regex
    await expect(page).toHaveTitle(/Health|Status|Service/i);
    
    // Check for key elements that should be on the health page
    // Using a more resilient approach with multiple potential elements
    const healthElements = [
      page.getByRole('heading', { name: /health|status|service/i }),
      page.locator('.govuk-panel'),
      page.locator('.govuk-summary-list')
    ];
    
    // The test passes if at least one health indicator is found
    let healthInfoFound = false;
    for (const element of healthElements) {
      if (await element.isVisible().catch(() => false)) {
        healthInfoFound = true;
        break;
      }
    }
    
    expect(healthInfoFound, 'Should display health information').toBeTruthy();
    
    // Additional specific assertions for API health page
    
    // Check for the API Health heading
    const apiHealthHeading = page.getByRole('heading', { name: 'API Health' });
    await expect(apiHealthHeading).toBeVisible();
    
    // Check for the status panel with "ok" message
    const statusPanel = page.locator('.govuk-panel');
    await expect(statusPanel).toBeVisible();
    const okStatus = page.locator('.govuk-panel__title', { hasText: 'ok' });
    await expect(okStatus).toBeVisible();
    
    // Check for the Database section
    const databaseHeading = page.getByRole('heading', { name: 'Database' });
    await expect(databaseHeading).toBeVisible();
    
    // Check database connection status
    const statusRow = page.getByText('Status').first();
    await expect(statusRow).toBeVisible();
    const connectedStatus = page.getByText('connected');
    await expect(connectedStatus).toBeVisible();
    
    // Check response time
    const responseTimeRow = page.getByText('Response Time');
    await expect(responseTimeRow).toBeVisible();
    const responseTimeValue = page.getByText(/\d+ms/);
    await expect(responseTimeValue).toBeVisible();
    
    // Check footer elements
    const managePrototype = page.getByText('Manage your prototype');
    await expect(managePrototype).toBeVisible();
    const clearData = page.getByText('Clear data');
    await expect(clearData).toBeVisible();
    
    // Check GOV.UK branding
    const govukLogo = page.locator('.govuk-header__logotype');
    await expect(govukLogo).toBeVisible();
    
    // Check ministry name
    const ministryName = page.getByText('Ministry of Unnecessary Paperwork');
    await expect(ministryName).toBeVisible();
  });
}); 