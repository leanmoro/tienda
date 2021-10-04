require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const conectarDB = require("../backend/db");

//importo Routes
const productosRoute = require("./src/routes/productos-routes");
const clientesRoute = require("./src/routes/clientes-routes");
const usuariosRoute = require("./src/routes/usuarios-routes");
const authRoute = require("./src/routes/auth-routes");
const pedidosRoute = require("./src/routes/pedidos-routes");
const itemsRoute = require("./src/routes/item-routes");

app.use(cors());
app.use(express.json());

//middleware
app.use("/productos", productosRoute);
app.use("/items", itemsRoute);
app.use("/pedidos", pedidosRoute);
app.use("/clientes", clientesRoute);
app.use("/usuarios", usuariosRoute);
app.use("/auth", authRoute);

//conectar a BD y levantar server
conectarDB();

app.listen(process.env.APP_PORT, () =>
  console.log(`listen on ${process.env.APP_PORT}`)
);
