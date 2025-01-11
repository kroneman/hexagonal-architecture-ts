import request from "supertest";
import app from "../buckpal/app";

describe('endpoint test', () => {
  it('returns a response', async () => {
    const response = await request(app).get('/endpoint');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expect.objectContaining({
      foo: 'bar'
    }))
  });
});
