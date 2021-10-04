const Pedido = require("../models/Pedido");
const getOrderAmount = require('../data/getOrderAmount')

//GET TODOS LOS PEDIDOS
const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET TODOS LOS ITEMS
const getItemsXPedidoId = async (req, res) => {
  try {
    const items = await Pedido.findById(
      { _id: req.params.id }.populate('itemPedido')
    );
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET PEDIDO_id
const getPedidoXid = async (req, res) => {
  try {
    const pedido = await Pedido.findOne({ _id: req.params.id });
    res.json(pedido);
  } catch (err) {
    res.json({ message: err });
  }
};

//DELETE PEDIDO_ID
const deletePedidoXid = async (req, res) => {
  try {
    const pedidoDeleted = await Pedido.deleteOne({
      _id: req.params.id,
    });
    res.json({ message: "pedido eliminado", pedidoDeleted });
  } catch (err) {
    res.json({ message: err });
  }
};

//UPDATE PEDIDO_ID
const updatePedidoXid = async (req, res) => {
  if (req.body.cantidadItems != null) {
  }
  const { cantidadItems, precioTotal, itemsPedido } = req.body;
  try {
    const pedidoUpdated = await Pedido.updateOne(
      { _id: req.params.id },
      { $set: { marca: req.body.marca } }
    );
    res.status(204).json(pedidoUpdated);
  } catch (err) {
    res.json({ message: err });
  }
};

//POST DE PEDIDO
const postNuevoPedido = async (req, res) => {
  const { items } = req.body.items;
  pTotal = await getOrderAmount(items);
  const nuevoPedido = new Pedido({
    numero,
    cantidadItems: items.lenght,
    precioTotal: pTotal,
    itemPedido: items,
    cliente,
  });
  try {
    const pedidoGuardado = await nuevoPedido.save();
    res.status(201).json(pedidoGuardado);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getPedidos,
  getPedidoXid,
  deletePedidoXid,
  updatePedidoXid,
  postNuevoPedido,
  getItemsXPedidoId,
};
