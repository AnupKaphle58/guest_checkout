import { signup, signin, logout } from "./auth.controller.js";
import {
  addproduct,
  deleteProduct,
  updateProduct,
} from "./product.controller.js";
import { createcart } from "./cart.controller.js";
import { checkout, checkoutOrder } from "./checkout.controller.js";

const authController = {
  signup,
  signin,
  logout,
};

const productController = {
  addproduct,
  deleteProduct,
  updateProduct,
};

const cartController = {
  createcart,
};

const checkoutController = {
  checkout,
  checkoutOrder,
};

export {
  authController,
  productController,
  cartController,
  checkoutController,
};
