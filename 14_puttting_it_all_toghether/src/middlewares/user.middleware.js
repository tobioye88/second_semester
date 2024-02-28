export const userValidationMiddleware = (req, res, next) => {
  const { email, name } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  next();
};
