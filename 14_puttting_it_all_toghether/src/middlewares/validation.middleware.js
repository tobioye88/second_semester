export const validationMiddleware = (schema) => {
  return (req, res, next) => {
    // console.log("Middleware");
    if (schema) {
      const errors = [];
      for (let el of schema) {
        if (!req.body[el]) {
          errors.push(`${el} is required`);
        }
      }
      if (errors.length > 0) {
        return res.status(400).json({ message: "Validation error", errors });
      }
    }
    next();
  };
};
