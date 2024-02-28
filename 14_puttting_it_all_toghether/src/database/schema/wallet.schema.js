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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model
const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
