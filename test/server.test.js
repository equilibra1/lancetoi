const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with html', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });
});
