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
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // createdAt, updatedAt
});

// Model
const User = mongoose.model("User", userSchema, undefined, {
  timestamps: true,
});
export default User;
