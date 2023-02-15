import { signup, signin } from "./auth.service.js";
import { addproduct, deleteProduct, updateProduct } from "./product.service.js";
import { createcart } from "./cart.service.js";
import { checkout, checkoutOrder } from "./checkout.service.js";

const authService = {
  signup,
  signin,
};

const productService = {
  addproduct,
  deleteProduct,
  updateProduct,
};

const cartService = {
  createcart,
};

const checkoutService = {
  checkout,
  checkoutOrder,
};

export { authService, productService, cartService, checkoutService };
