const Cliente = require("../models/Cliente");

//UPDATE PRODUCTO_ID
const updateClienteXid = async (req, res) => {
  try {
    const clienteUpdated = await Cliente.updateOne(
      { _id: req.params.cliID },
      { $set: { marca: req.body.marca } }
    );
    res.status(204).json(clienteUpdated);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET PEDIDOS
const getOrdersCust = async (req, res) => {
  try {
    const pedidos = await Cliente.find({ cliente: req.params._id }).populate(
      "pedidos"
    );
    res.json(pedidos);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { updateClienteXid, getOrdersCust };
