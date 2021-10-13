const express = require("express");
const router = express.Router();

const {
  getUsers,
  getClientes,
  deleteClienteXid,
} = require("../controller/users-controller");

//GET
router.get("/", getUsers);
router.get("/clientes", getClientes);
router.get("/:id", deleteClienteXid);

module.exports = router;
