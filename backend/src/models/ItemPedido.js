import { Schema, model } from "mongoose";
const { ObjectId } = Schema;
//const {appConfig}= require('../config')

const itemPedidoSchema = Schema(
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

export default model("itemsPedido", itemPedidoSchema);
