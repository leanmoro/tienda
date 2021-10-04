const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

const {
  getPedidoXid,
  getPedidos,
  postNuevoPedido,
  updatePedidoXid,
  deletePedidoXid,
  getItemsXPedidoId,
} = require("../controller/pedidos-controller");

//GET
router.get("/", getPedidos);
router.get("/:id", getPedidoXid);
router.get("/:id/items", getItemsXPedidoId);

//DELETE PEDIDO_ID
router.delete("/:id", [verifyToken], deletePedidoXid);

//UPDATE PEDIDO_ID
router.patch("/:id", [verifyToken], updatePedidoXid);

//POST DE PEDIDO
//router.post("/new", [verifyToken], postNuevoPedido);
router.post("/new", postNuevoPedido);

module.exports = router;
