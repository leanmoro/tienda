import { Schema, model } from "mongoose";
const { ObjectId } = Schema;
//const {appConfig}= require('../config')

const cartSchema = Schema(
  {
    client: { type: ObjectId, ref: "Client" },
    cart_items: [
      { cartItem: { type: ObjectId, ref: "Product" } },
      { quantity: { type } },
    ],
    delivery: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default model("Cart", cartSchema);
