import express from "express";

import authRoute from "./auth.route.js";
import cartRoute from "./cart.route.js";
import checkoutRoute from "./checkout.route.js";
import productRoute from "./product.route.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/cart", cartRoute);
router.use("/checkout", checkoutRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);

export default router;
