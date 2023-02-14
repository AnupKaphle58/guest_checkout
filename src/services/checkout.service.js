//Models
import { Checkout } from "../models/index.js";

export const checkout = async (body, cart) => {
  const { name, email, phone, shippingAddress } = body;
  const { product, price } = cart;
  if (!name || !email || !phone || !shippingAddress) {
    return {
      type: "Error",
      message: "Fields cannot be empty",
      statusCode: 400,
    };
  }
  if (!product || !price) {
    return {
      type: "Error",
      message: "Something went wrong with your cart. Please try adding again.",
      statusCode: 400,
    };
  }
  try {
    const order = await Checkout.create({
      name: name,
      email: email,
      phone: phone,
      shippingAddress,
      cart,
    });
    return {
      type: "Success",
      message:
        "Your order is placed. Please use the order id for refrencce in future. Thank you!",
      statusCode: 201,
      order_id: order._id,
    };
  } catch (error) {
    return {
      type: "Error",
      message: error,
      statusCode: 400,
    };
  }
};
