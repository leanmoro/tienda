const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");
//const {appConfig}= require('../config')

const clienteSchema = mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true, min: 2, max: 20 },
    apellido: { type: String, required: true, trim: true, min: 3, max: 20 },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    telefono: { type: String, required: true, trim: true, max: 20 },
    dni: { type: String, required: true, trim: true },
    direccion: { type: String, required: true, trim: true, min: 3, max: 20 },
    localidad: { type: String, required: true, trim: true, min: 3, max: 20 },
    codigoPostal: { type: String, required: true, trim: true },
    transporte: { type: String, required: true, trim: true },
    domicilioSucursal: { type: String, enum: ["domicilio", "sucursal"] },
    pedidos: [{ type: ObjectId, ref: "Pedido" }],
    //hash_password: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

clienteSchema.statics.encriptarPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

clienteSchema.statics.validarPass = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

//otra version de encriptado antes de hacer SAVE
clienteSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

module.exports = mongoose.model("clientes", clienteSchema);
