import { signup, signin } from "./auth.service.js";
import { addproduct } from "./product.service.js";
import { createcart } from "./cart.service.js";
import { checkout } from "./checkout.service.js";

const authService = {
  signup,
  signin,
};

const productService = {
  addproduct,
};

const cartService = {
  createcart,
};

const checkoutService = {
  checkout,
};

export { authService, productService, cartService, checkoutService };
