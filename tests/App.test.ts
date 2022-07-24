// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";

import server from "../src/index";
import app from "../src/App";

function sum(a: number, b: number) {
  return a + b;
}

describe("GET /task", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/task").send();
    expect(response.statusCode).toBe(200);
  });
  afterAll(() => server.close());
});

describe("Sum function", () => {
  test("Should respond 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
