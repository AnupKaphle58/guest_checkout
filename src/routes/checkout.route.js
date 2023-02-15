// Packages
import express from "express";

// Controllers
import { checkoutController } from "../controller/index.js";

// Middlewares
import protect from "../middleware/protect.js";
import restrictedTo from "../middleware/restrictedTo.js";

const { checkout, checkoutOrder } = checkoutController;

const router = express.Router();

router.post("/", checkout);

router.use(protect);

router.get("/", restrictedTo("admin"), checkoutOrder);

export default router;
