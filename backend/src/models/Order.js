import { Schema, model } from "mongoose";
const { ObjectId } = Schema;
//const {appConfig}= require('../config')

const orderSchema = Schema(
  {
    order_num: { type: Number },
    dateOrder: { type: Date, default: Date.now },
    total_amount: { type: Number },
    order_items: [{ type: ObjectId, ref: "OrderItem" }],
    client: { type: ObjectId, ref: "Client" },
    delivery: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default model("Order", orderSchema);
