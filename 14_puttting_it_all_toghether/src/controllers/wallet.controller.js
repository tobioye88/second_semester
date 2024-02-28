import * as walletService from "../services/wallet.service.js";

export const getAll = async (req, res) => {
  const wallets = await walletService.getAll();
  res.json(wallets);
};

export const create = async (req, res) => {
  const { userId } = req.body;
  const wallet = await walletService.create(userId);
  res.json(wallet);
};

export const getOne = async (req, res) => {
  const { walletId } = req.params;
  const wallet = await walletService.getOne(walletId);
  res.json(wallet);
};

export const transfer = async (req, res) => {
  const { sourceId, destinationId, amount } = req.body;
  try {
    const data = await walletService.transfer(sourceId, destinationId, amount);
    res.json({ message: "Transfer Successful", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
