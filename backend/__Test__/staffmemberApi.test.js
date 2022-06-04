const request = require("supertest");
const app = require("../app");

describe("undergratuate students API testing", () => {
  test("testing get api method in students collection", async () => {
    const res = await request(app)
      .get("/staffMember")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(res.statusCode).toEqual(200);
  });

  test("testing post api method in students collection", async () => {
    const res = await request(app).post("/staffMember").send({
      username: "It20124526",
      name: "D.J Sunil",
      role: "supervisor",
      component: "",
      email: "sunil@gmail.com",
      mobileNo: "0900000000",
      password: "hjd^&ni",
      grpid: "REG_09",
      topic: "AI",
    });
    expect(res.statusCode).toEqual(201);
  });

  test("testing delete api method in students collection", async () => {
    const res = await request(app)
      .delete("/staffMember/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(res.statusCode).toEqual(404);
  });
});
