const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

const {
  updateClienteXid,
  getOrdersCust,
} = require("../controller/clientes-controller");

//UPDATE CLIENTE
router.patch("/:cliId", verifyToken, updateClienteXid);

//GET PEDIDOS DEL CLIENTE
//router.get("/:cliId", verifyToken, getOrdersCust);
router.get("/pedidos/:cliId", getOrdersCust);

module.exports = router;
