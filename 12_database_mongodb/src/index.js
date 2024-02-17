import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI;

// mogodb
// create a connection
// const db = await mongodb.connect(url)
// const users = db.collection('users')
// const user = await users.findOne({ _id: 1 })
// const newUser = await users.insertOne({ name: 'John' })
// await users.updateOne({ _id: 1 }, { $set: { name: 'Doe' } })

// Middleware
app.use(express.json());

// Schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Model
const User = mongoose.model("User", userSchema);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// ORM - Object Relational Mapping
// ODM - Object Document Mapping

app.get("/user", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const users = await User.findOne({ _id: userId });
  res.json(users);
});

app.post("/user", async (req, res) => {
  const user = new User({
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    password: "password",
  });
  const savedUser = await user.save();
  // const savedUser = await User.create({
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john@email.com",
  //   password: "password",
  // });
  res.json(savedUser);
});

app.delete("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const deletedUser = await User.deleteOne({
    _id: userId,
  });
  res.json({ message: "User Deleted", deletedUser });
});

app.patch("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "First Name or Last Name is required" });
  }

  const payload = {};
  if (firstName) {
    payload.firstName = firstName;
  }
  if (lastName) {
    payload.lastName = lastName;
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    {
      $set: payload,
    },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(400).json({ message: "User not found" });
  }
  res.json({ message: "User Updated", user: updatedUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
