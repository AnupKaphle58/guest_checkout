// Packages
import express from "express";

// Controllers
import { productController } from "../controller/index.js";

// Middlewares
import protect from "../middleware/protect.js";

const { addproduct } = productController;

const router = express.Router();

router.post("/", addproduct);

export default router;
