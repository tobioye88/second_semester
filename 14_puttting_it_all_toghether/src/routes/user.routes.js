import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.get("/:userId", userController.findById);

export default userRouter;
