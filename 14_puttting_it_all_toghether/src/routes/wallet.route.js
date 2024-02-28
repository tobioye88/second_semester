import { Router } from "express";
import * as walletController from "../controllers/wallet.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { createWalletMiddleware } from "../middlewares/wallet.middleware.js";

const walletRoute = Router();

walletRoute.get("/", walletController.getAll);
walletRoute.post("/", createWalletMiddleware, walletController.create);
walletRoute.get("/:walletId", walletController.getOne);
walletRoute.post(
  "/transfer",
  validationMiddleware(["sourceId", "destinationId", "amount"]),
  walletController.transfer
);

export default walletRoute;
