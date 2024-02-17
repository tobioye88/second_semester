import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI;
let connection = null;

// Middleware
app.use(express.json());
async function connectToDB() {
  const connection = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB");
  return connection;
}

async function doDBStuff(connection) {
  const altSchoolDB = connection.db("alt_school");
  const users = altSchoolDB.collection("users");
  await users.insertOne({ name: "John" });
  await users.insertOne({ name: "John", age: 25 });
  await users.insertOne({ name: "John", age: 25, email: "johnDoe@email.com" });
}

app.get("/user", async (req, res) => {
  const user = await users.findOne({ name: "John" });
  res.json(user);
});

app.listen(PORT, async () => {
  connection = await connectToDB();
  await doDBStuff(connection); //
  console.log(`Server is running on port ${PORT}`);
});
