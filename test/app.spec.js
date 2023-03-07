const request = require("supertest");

let app = require("../src/app");

describe("GET /", () => {
  it("responds with json", (done) => {
    // prettier-ignore
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
