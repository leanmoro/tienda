const Usuario = require("../models/Usuario");
const Cliente = require("../models/Cliente");

//GET TODOS LOS USUARIOS
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.json({ message: err });
  }
};

//GET TODOS LOS CLIENTES
const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(productos);
  } catch (err) {
    res.json({ message: err });
  }
};

//DELETE CLIENTE_ID
const deleteClienteXid = async (req, res) => {
  try {
    const clienteDeleted = await Cliente.remove({ _id: req.params.prodId });
    res.json(clienteDeleted);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getUsuarios,
  getClientes,
  deleteClienteXid,
};
