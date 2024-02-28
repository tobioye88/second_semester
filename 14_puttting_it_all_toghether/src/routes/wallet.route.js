import { Router } from "express";
import * as walletController from "../controllers/wallet.controller.js";

const walletRoute = Router();

walletRoute.get("/", walletController.getAll);
walletRoute.post("/", walletController.create);
walletRoute.get("/:walletId", walletController.getOne);
walletRoute.post("/transfer", walletController.transfer);

export default walletRoute;
