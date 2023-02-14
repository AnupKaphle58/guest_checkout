//model
import { Product } from "../models/index.js";

export const addproduct = async (body) => {
  const { name, price } = body;

  if (!name || !price) {
    return {
      type: "Error",
      message: "Name and price is required",
      statusCode: 400,
    };
  }
  try {
    const product = await Product.create({ name, price });
    return {
      type: "Success",
      message: "Product added successfully",
      statusCode: 201,
      product,
    };
  } catch (error) {
    return {
      type: "Error",
      message: error,
      statusCode: 201,
    };
  }
};
