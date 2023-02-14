import { signup, signin, logout } from "./auth.controller.js";
import { addproduct } from "./product.controller.js";
import { createcart } from "./cart.controller.js";
import { checkout } from "./checkout.controller.js";

const authController = {
  signup,
  signin,
  logout,
};

const productController = {
  addproduct,
};

const cartController = {
  createcart,
};

const checkoutController = {
  checkout,
};

export {
  authController,
  productController,
  cartController,
  checkoutController,
};
