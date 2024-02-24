import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// Middleware
app.use(express.json());

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URI;

MongoClient.connect(url)
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db("alt_school");
    const usersCollection = db.collection("users");

    app.get("/users", async (req, res) => {
      const users = await usersCollection.find({}).toArray();
      res.json(users);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.json(result);
    });

    app.listen(4433, () => {
      console.log("Server is running on port 4433");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });
