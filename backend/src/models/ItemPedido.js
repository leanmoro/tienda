const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
//const {appConfig}= require('../config')

const itemPedidoSchema = mongoose.Schema(
  {
    producto: { type: ObjectId, ref: "Producto" },
    cantidad: Number,
    precioTotal: Number,
  },
  {
    timestamps: true,
  }
);

/* para subir imagenes

ProductSchema.methods.setImgUrl(filename) = function setImgUrl(){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}*/

module.exports = mongoose.model("itemsPedido", itemPedidoSchema);
