const express = require("express");
const router = express.Router();

const {
  getUsuarios,
  getClientes,
  deleteClienteXid,
} = require("../controller/usuarios-controller");

//GET
router.get("/", getUsuarios);
router.get("/clientes", getClientes);
router.get("/:id", deleteClienteXid);

module.exports = router;
