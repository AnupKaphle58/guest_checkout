//model
import { Product } from "../models/index.js";

export const createcart = async (body) => {
  let totalPrice = 0;
  for (let i = 0; i < body.products.length; i++) {
    const product = await Product.findById(body.products[i]);
    if (!product) {
      return {
        type: "Error",
        message: "Product not found",
        statusCode: 400,
      };
    }
    totalPrice += product.price;
  }
  return {
    type: "Success",
    message: "cart created successfully",
    statusCode: 201,
    product: body.products,
    price: totalPrice,
  };
};
