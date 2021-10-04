const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcrypt");
//const {appConfig}= require('../config')

const usuarioSchema = mongoose.Schema(
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
    rol: { type: String, default: "admin" },
    //hash_password: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

usuarioSchema.statics.encriptarPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

usuarioSchema.statics.validarPass = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

/*
//otra version de encriptado antes de hacer SAVE

UsuarioSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});
*/

module.exports = mongoose.model("usuarios", usuarioSchema);
