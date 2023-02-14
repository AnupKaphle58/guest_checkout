import { cartService } from "../services/index.js";

export const createcart = async (req, res) => {
  const { type, message, statusCode, product, price } =
    await cartService.createcart(req.body);
  return res
    .cookie(
      "cart",
      { product, price },
      {
        httpOnly: true,
        secure: false,
        path: "/",
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: false,
      }
    )
    .status(statusCode)
    .json({
      type,
      message: message,
    });
};
