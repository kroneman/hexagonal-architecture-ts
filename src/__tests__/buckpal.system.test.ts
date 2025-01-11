import request from 'supertest';
import app from '../buckpal/app';

describe('endpoint test', () => {
  it('is successful when validation passes', async () => {
    const response = await request(app).post(
      '/accounts/send/123/456/12345',
    );
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      success: true,
    });
  });

  it('returns with bad request, when validation fails', async () => {
    const response = await request(app).post(
      '/accounts/send/123/456/1234500000000000',
    );
    expect(response.status).toEqual(400);
  });
});
