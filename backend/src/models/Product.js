import { Schema, model } from "mongoose";
//const {appConfig}= require('../config')

const productSchema = new Schema(
  {
    category: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    size: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
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

export default model("Product", productSchema);
