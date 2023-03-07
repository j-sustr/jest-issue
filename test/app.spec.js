describe("GET /", () => {
  it("responds with json", (done) => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
