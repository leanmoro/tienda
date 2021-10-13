const Producto = require("../models/Product").default;

//GET TODOS LOS PRODUCTOS
const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET PRODUCTO_id
const getProductoXid = async (req, res) => {
  try {
    const producto = await Producto.findOne({ _id: req.params.prodId });
    res.json(producto);
  } catch (err) {
    res.status(404).json({ message: "producto no encontrado" });
  }
};

//DELETE PRODUCTO_ID
const deleteProductoXid = async (req, res) => {
  try {
    const productoDeleted = await Producto.deleteOne({
      _id: req.params.prodId,
    });
    res.json({ message: "producto eliminado", productoDeleted });
  } catch (err) {
    res.json({ message: err });
  }
};

//UPDATE PRODUCTO_ID
const updateProductoXid = async (req, res) => {
  try {
    const productoUpdated = await Producto.updateOne(
      { _id: req.params.prodId },
      { $set: { marca: req.body.marca } }
    );
    res.status(204).json(productoUpdated);
  } catch (err) {
    res.json({ message: err });
  }
};

//POST DE PRODUCTO
const postNuevoProducto = async (req, res) => {
  const { categoria, marca, nombre, descripcion, precio_de_venta, stock } =
    req.body;
  const nuevoProducto = new Producto({
    categoria,
    marca,
    nombre,
    descripcion,
    precio_de_venta,
    stock,
  });
  try {
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getProductos,
  getProductoXid,
  deleteProductoXid,
  updateProductoXid,
  postNuevoProducto,
};
