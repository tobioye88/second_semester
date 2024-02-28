import User from "../database/schema/user.schema.js";
import Wallet from "../database/schema/wallet.schema.js";
import { Types, isValidObjectId } from "mongoose";

export const getAll = async () => {
  return Wallet.find().populate("user");
};

export const create = async (userId) => {
  if (!isValidObjectId(userId)) {
    throw new Error("Invalid user id");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const existingWallet = await Wallet.findOne({
    user: new Types.ObjectId(userId),
  });
  if (existingWallet) {
    throw new Error("Wallet already exists");
  }
  return Wallet.create({ user: new Types.ObjectId(userId) });
};

export const getOne = async (walletId) => {
  return Wallet.findOne({ _id: new Types.ObjectId(walletId) });
};

export const transfer = async (sourceId, destinationId, amount) => {
  // Get source wallet ✓
  // Check if source wallet has enough balance ✓
  // Get destination wallet ✓
  // Deduct amount from source wallet ✓
  // Add amount to destination wallet ✓
  const sourceWallet = await Wallet.findOne({
    _id: new Types.ObjectId(sourceId),
  });
  const destinationWallet = await Wallet.findOne({
    _id: new Types.ObjectId(destinationId),
  });
  if (sourceWallet.balance < amount) {
    throw new Error("Insufficient balance");
  }

  sourceWallet.balance -= Number(amount);
  destinationWallet.balance += Number(amount);

  await sourceWallet.save();
  await destinationWallet.save();

  // Add transaction history x
  return { sourceWallet, destinationWallet, amount };
};
