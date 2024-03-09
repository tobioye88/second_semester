export const generateMiddleWare = (schema) => {
  return (req, res, next) => {
    // Middleware logic
    if (schema) {
      const result = schema.validate(req.body, (err, value) => {});
      console.log("here", result);
      if (result.error) {
        return res
          .status(400)
          .json({ message: "Validation error", errors: result.error });
      }
      // const errors = [];
      // for (let el of schema) {
      //   if (!req.body[el]) {
      //     errors.push(`${el} is required`);
      //   }
      // }
      // if (errors.length > 0) {
      //   return res.status(400).json({ message: "Validation error", errors });
      // }
    }
    next();
  };
};
