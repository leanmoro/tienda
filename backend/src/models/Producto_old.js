const mongoose = require("mongoose");
//const {appConfig}= require('../config')

const productoSchema = mongoose.Schema(
  {
    marca: { type: String, required: true, trim: true },
    linea: { type: String, required: true, trim: true },
    tipo: { type: String, required: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    contenido: { type: String, required: true, trim: true },
    precio_de_venta: { type: Number, required: true },
    precio_de_compra: { type: Number, required: true },
    beneficio: { type: Number, required: true },
    stock: { type: Number, required: true },
    //imgUrl: String,
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

module.exports = mongoose.model("productos", productoSchema);
