import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  // confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  role: Joi.string().valid("USER", "ADMIN"),
});
