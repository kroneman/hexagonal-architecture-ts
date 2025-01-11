import request from 'supertest';
import app from '../buckpal/app';

describe('endpoint test', () => {
  it('returns a response', async () => {
    const response = await request(app).get('/endpoint');

    expect(response.body).toEqual(
      expect.objectContaining({
        foo: 'bar',
      }),
    );
  });

  it('sends some money', async () => {
    const response = await request(app).post(
      '/accounts/send/123/456/1234500000000000',
    );
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      success: true,
    });
  });
});
