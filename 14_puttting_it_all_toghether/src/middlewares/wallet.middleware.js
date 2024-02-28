export const createWalletMiddleware = (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "userId is required" });
  }
  next();
};
