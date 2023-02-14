import { checkoutService } from "../services/index.js";

export const checkout = async (req, res) => {
  const cart = req.cookies?.cart;
  if (!cart) {
    return res.status(404).json({
      type: "Error",
      message: "Cart was not found",
    });
  }
  const { type, message, statusCode, order_id } =
    await checkoutService.checkout(req.body, cart);

  if (type === "Error") {
    return res.status(statusCode).json({
      type,
      message: message,
    });
  }

  return res.status(statusCode).json({
    type,
    message: message,
    order_id: order_id,
  });
};
