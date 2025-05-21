const request = require('supertest');
const fetch = require('node-fetch');

// Mock node-fetch
jest.mock('node-fetch');

// Import app after mocking
const app = require('../../src/app');

describe('Health Routes', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('GET /health should render the health status page', async () => {
    // Mock successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        status: 'ok',
        database: {
          status: 'connected',
          responseTime: '15ms'
        }
      })
    });

    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('API Health');
    expect(response.text).toContain('ok');
  });

  test('GET /health should render error page when API fails', async () => {
    // Mock failed API response
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200); // Express still returns 200 as it renders an error page
    expect(response.text).toContain('Error');
  });
}); 