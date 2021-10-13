const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");

const {
  getProductos,
  getProductoXid,
  deleteProductoXid,
  updateProductoXid,
  postNuevoProducto,
} = require("../controller/products-controller");

//GET
router.get("/", getProductos);
router.get("/:prodId", getProductoXid);

//DELETE PRODUCTO_ID
router.delete("/:prodId", [verifyToken, isAdmin], deleteProductoXid);

//UPDATE PRODUCTO_ID
router.patch("/:prodId", [verifyToken, isAdmin], updateProductoXid);

//POST DE PRODUCTO
router.post("/new", postNuevoProducto);
//router.post("/new", [verifyToken, isAdmin], postNuevoProducto);

module.exports = router;
