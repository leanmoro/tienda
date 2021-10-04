const Item = require("../models/ItemPedido");

//GET Item_id
const getItemXid = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    res.json(item);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET Items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
};

//DELETE ITEM_ID
const deleteItemXid = async (req, res) => {
  try {
    const itemDeleted = await Item.deleteOne({
      _id: req.params.id,
    });
    res.json({ message: "item eliminado", itemDeleted });
  } catch (err) {
    res.json({ message: err });
  }
};

//UPDATE ITEM_ID
const updateItemXid = async (req, res) => {
  const { cant, precTot } = req.body;
  try {
    const itemUpdated = await Item.updateOne(
      { _id: req.params.id },
      { $set: { cantidad: cant, precioTotal: precTot } }
    );
    res.status(204).json(itemUpdated);
  } catch (err) {
    res.json({ message: err });
  }
};

//POST DE ITEM
const postNuevoItem = async (req, res) => {
  const prodExiste = await Producto.findOne({ _id: req.params.id }).populate(
    "producto"
  );
  const quantity = Number.parseInt(req.body.cantidad);
  const pTotal = prodExiste.precio_de_venta * cantidad;

  const nuevoItem = new Item({
    cantidad: quantity,
    producto: prodExiste,
    precioTotal: pTotal,
  });
  try {
    const itemGuardado = await nuevoItem.save();
    res.status(201).json(itemGuardado);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getItemXid,
  deleteItemXid,
  updateItemXid,
  postNuevoItem,
  getItems,
};
