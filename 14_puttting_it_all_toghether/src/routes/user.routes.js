import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { userValidationMiddleware } from "../middlewares/user.middleware.js";

const userRouter = Router();
userRouter.post("/", userValidationMiddleware, userController.create);
userRouter.get("/:userId", userController.findById);

export default userRouter;
