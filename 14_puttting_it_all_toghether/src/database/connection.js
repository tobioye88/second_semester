import mongoose from "mongoose";

export const connect = async () => {
  const { MONGODB_URI } = process.env;

  if (MONGODB_URI) {
    return await mongoose.connect(MONGODB_URI);
  }
};
