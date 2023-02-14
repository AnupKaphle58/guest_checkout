// Packages
import express from "express";

// Controllers
import { cartController } from "../controller/index.js";

// Middlewares
import protect from "../middleware/protect.js";

const { createcart } = cartController;

const router = express.Router();

router.post("/", createcart);

export default router;
