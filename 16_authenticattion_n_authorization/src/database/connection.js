import mongoose from "mongoose";

export const connect = async (MONGODB_URI) => {
  if (MONGODB_URI) {
    return await mongoose.connect(MONGODB_URI);
  }
  return null;
};
