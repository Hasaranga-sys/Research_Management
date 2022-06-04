const request = require("supertest");
const app = require("../app");

describe("undergratuate students API testing", () => {
  test("testing get api method in students collection", async () => {
    const res = await request(app)
      .get("/student")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(res.statusCode).toEqual(200);
  });

  test("testing post api method in students collection", async () => {
    const res = await request(app).post("/student").send({
      username: "It20124526",
      name: "D.J Sunil",
      email: "sunil@gmail.com",
      mobileNo: "0703245899",
      password: "erW3eeV",
    });
    expect(res.statusCode).toEqual(201);
  });

  test("testing delete api method in students collection", async () => {
    const res = await request(app)
      .delete("/student/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(res.statusCode).toEqual(404);
  });
});
