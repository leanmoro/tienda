const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

const {
  getOrderXid,
  getOrders,
  postNewOrder,
  updateOrderXid,
  deleteOrderXid,
  getItemsXOrderId,
} = require("../controller/pedidos-controller");

//GET
router.get("/", getOrders);
router.get("/:id", getOrderXid);
router.get("/:id/items", getItemsXOrderId);

//DELETE ORDER
router.delete("/:id", [verifyToken], deleteOrderXid);

//UPDATE ORDER
router.patch("/:id", [verifyToken], updateOrderXid);

//POST NEW ORDER
//router.post("/new", [verifyToken], postNuevoPedido);
router.post("/new", postNewOrder);

module.exports = router;
