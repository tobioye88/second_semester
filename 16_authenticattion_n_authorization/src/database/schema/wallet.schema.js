import mongoose from "mongoose";

// Schema
const walletSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
    required: true,
  },
});

// Model
const Wallet = mongoose.model("Wallet", walletSchema, {
  timestamps: true,
});
export default Wallet;
