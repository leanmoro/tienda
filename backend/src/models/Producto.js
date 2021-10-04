const mongoose = require("mongoose");
//const {appConfig}= require('../config')

const productoSchema = mongoose.Schema(
  {
    categoria: { type: String, required: true, trim: true },
    marca: { type: String, required: true, trim: true },
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    precio_de_venta: { type: Number, required: true },
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
