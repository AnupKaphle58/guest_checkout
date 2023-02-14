import { productService } from "../services/index.js";

export const addproduct = async (req, res) => {
  const { type, message, statusCode, product } =
    await productService.addproduct(req.body);

  if (type === "Error") {
    return res.status(statusCode).json({
      type,
      message: message,
    });
  }

  return res.status(statusCode).json({
    type,
    message: message,
    product,
  });
};
