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

export const deleteProduct = async (req, res) => {
  const { type, message, statusCode } = await productService.deleteProduct(
    req.params.prodId
  );

  if (type === "Error") {
    return res.status(statusCode).json({
      type,
      message: message,
    });
  }

  return res.status(statusCode).json({
    type,
    message: message,
  });
};

export const updateProduct = async (req, res) => {
  const { type, message, statusCode, result } =
    await productService.updateProduct(req.params.prodId, req.body);

  if (type === "Error") {
    return res.status(statusCode).json({
      type,
      message: message,
    });
  }

  return res.status(statusCode).json({
    type,
    message: message,
    result,
  });
};
