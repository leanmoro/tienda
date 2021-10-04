const mongoose = require("mongoose");
require("dotenv").config();

const conectarDB = async () => {
  try {
    const conex = await mongoose.connect(
      process.env.DB_CONNECTION,
      { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
      console.log("conectado a la bd!")
    );
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
};

module.exports = conectarDB;
