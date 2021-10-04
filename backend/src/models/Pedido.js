const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
//const {appConfig}= require('../config')

const pedidoSchema = mongoose.Schema(
  {
    numero: Number,
    fechaPedido: { type: Date, default: Date.now },
    cantidadItems: { type: Number },
    precioTotal: { type: Number },
    itemsPedido: [{ type: ObjectId, ref: "ItemPedido" }],
    cliente: { type: ObjectId, ref: "Cliente" },
    enviado: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pedidos", pedidoSchema);
