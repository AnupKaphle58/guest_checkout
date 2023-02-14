import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  products: Array,
  totalPrice: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
