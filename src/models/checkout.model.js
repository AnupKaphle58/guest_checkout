import mongoose from "mongoose";
import validator from "validator";

const checkoutSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: String,
    required: [true, "Please provide phone number"],
    trim: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("Invalid Phone Number");
      }
    },
  },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  cart: {
    product: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

export default Checkout;
