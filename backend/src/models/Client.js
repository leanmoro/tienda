import { Schema, model } from "mongoose";
const { ObjectId } = Schema;
import { genSalt, hash, compare } from "bcrypt";
//const {appConfig}= require('../config')

const clientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, min: 2, max: 20 },
    lastName: { type: String, required: true, trim: true, min: 3, max: 20 },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    mobile: { type: String, required: true, trim: true, max: 20 },
    dni: { type: String, required: true, trim: true },
    address: [
      {
        street: { type: String, required: true, trim: true, min: 3, max: 20 },
        localidad: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 20,
        },
        zip: { type: String, required: true, trim: true },
      },
    ],
    transporte: { type: String, required: true, trim: true },
    domicilioSucursal: { type: String, enum: ["domicilio", "sucursal"] },
    orders: [{ type: ObjectId, ref: "Order" }],
    //hash_password: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

clientSchema.statics.encriptarPass = async (password) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

clientSchema.statics.validarPass = async (password, receivedPassword) => {
  return await compare(password, receivedPassword);
};

//otra version de encriptado antes de hacer SAVE
clientSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

export default model("Client", clientSchema);
