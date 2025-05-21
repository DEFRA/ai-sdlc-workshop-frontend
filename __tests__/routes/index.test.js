const request = require('supertest');
const app = require('../../src/app');

describe('Index Routes', () => {
  test('GET / should render the homepage', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('This is the home page for Ministry of Unnecessary Paperwork.');
  });
}); 