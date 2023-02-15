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

export const deleteProduct = async (prodId) => {
  const product = await Product.findById(prodId);

  if (!product) {
    return {
      type: "Error",
      message: `Product not found`,
      statusCode: 404,
    };
  }
  await Product.findByIdAndDelete(prodId);
  return {
    type: "Success",
    message: "successfulProductDelete",
    statusCode: 200,
  };
};

export const updateProduct = async (prodId, body) => {
  const product = await Product.findById(prodId);

  if (!product) {
    return {
      type: "Error",
      message: "Product not found",
      statusCode: 404,
    };
  }

  if (!body.name && !body.price) {
    return {
      type: "Error",
      message: "Please provide fields value to update",
      statusCode: 401,
    };
  }
  const result = await Product.findByIdAndUpdate(prodId, body, {
    new: true,
    runValidators: true,
  });

  return {
    type: "Success",
    message: "Successfully updated product details",
    statusCode: 200,
    result,
  };
};
