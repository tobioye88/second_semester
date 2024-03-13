import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  // createdAt, updatedAt
});

// Model
const User = mongoose.model("User", userSchema, undefined, {
  timestamps: true,
});
export default User;
