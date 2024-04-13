import bcrypt from "bcrypt";
import request from "supertest";
import { connect } from "../src/database/connection.js";
import app from "../src/index.js";

const TEST_DB = "mongodb://localhost:55003/alt_app_test";

describe("E2E tests", () => {
  let mongodb;

  const clearDB = async () => {
    if (mongodb) {
      const collections = await mongodb.connection.db.collections();
      for (let collection of collections) {
        await collection.deleteMany();
      }
    }
  };

  beforeAll(async () => {
    mongodb = await connect(TEST_DB);
  });

  beforeEach(async () => {
    jest.resetAllMocks();
  });

  afterAll(async () => {
    await mongodb.connection.close();
  });

  it("should not be able to login", async () => {
    await clearDB();
    const res = await request(app).post("/auth/login").send({
      email: "test@yopmail.com",
      password: "password",
    });
    console.log(res.body);
    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual("User not found");
  });

  it("should be able to register", async () => {
    await clearDB();
    const res = await request(app).post("/auth/register").send({
      email: "test@yopmail.com",
      password: "password",
      name: "Test User",
      role: "ADMIN",
    });

    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("User created successfully");
    expect(res.body.data.user).toHaveProperty("_id");
    expect(res.body.data.user).toHaveProperty("name");
    expect(res.body.data.user.name).toEqual("Test User");
    expect(res.body.data.user).toHaveProperty("email");
    expect(res.body.data.user.email).toEqual("test@yopmail.com");
  });

  it("should be able to login", async () => {
    // to set header add .set({ 'Authorization': 'Bearer ' + token }) before .send
    await clearDB();
    mongodb.connection.db.collection("users").insertOne({
      email: "test@yopmail.com",
      password: await bcrypt.hash("password", 10),
      name: "Test User",
      role: "ADMIN",
    });

    const res = await request(app).post("/auth/login").send({
      email: "test@yopmail.com",
      password: "password",
    });

    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Login successful");
    expect(res.body.data).toHaveProperty("accessToken");
    expect(res.body.data).not.toHaveProperty("password");
  });

  it("should not be able to login - invalid payload", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "test@yopmail.com",
    });

    console.log(res.body);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Validation error");
    expect(res.body).toHaveProperty("errors");
  });
});
