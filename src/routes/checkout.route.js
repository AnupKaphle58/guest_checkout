// Packages
import express from "express";

// Controllers
import { checkoutController } from "../controller/index.js";

// Middlewares
import protect from "../middleware/protect.js";

const { checkout } = checkoutController;

const router = express.Router();

router.post("/", checkout);

export default router;
