// Packages
import express from "express";

// Controllers
import { productController } from "../controller/index.js";

// Middlewares
import protect from "../middleware/protect.js";
import restrictedTo from "../middleware/restrictedTo.js";

const { addproduct, deleteProduct, updateProduct } = productController;

const router = express.Router();

router.use(protect);

router.post("/", restrictedTo("admin"), addproduct);

router.delete("/:prodId", restrictedTo("admin"), deleteProduct);

router.patch("/:prodId", restrictedTo("admin"), updateProduct);

export default router;
