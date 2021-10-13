const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

const {
  updateClientXid,
  getOrdersCust,
} = require("../controller/clientes-controller");

//UPDATE CLIENTE
router.patch("/:id", verifyToken, updateClientXid);

//GET PEDIDOS DEL CLIENTE
//router.get("/:cliId", verifyToken, getOrdersCust);
router.get("/orders/:id", getOrdersCust);

module.exports = router;
