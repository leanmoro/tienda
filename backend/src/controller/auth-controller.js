const Cliente = require("../models/Cliente");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerCliente = async (req, res) => {
  const {
    nombre,
    apellido,
    email,
    password,
    telefono,
    dni,
    direccion,
    localidad,
    codigoPostal,
    transporte,
    domicilioSucursal,
  } = req.body;

  const clienteExiste = await Cliente.findOne({ email });
  if (clienteExiste)
    return res.status(400).json({ message: "cliente ya registrado" });
  const nuevoCliente = new Cliente({
    nombre,
    apellido,
    email,
    password: await Cliente.encriptarPass(password),
    telefono,
    dni,
    direccion,
    localidad,
    codigoPostal,
    transporte,
    domicilioSucursal,
    pedidos,
  });

  try {
    const clienteGuardado = await nuevoCliente.save();

    const token = jwt.sign({ id: clienteGuardado._id }, process.env.SECRET, {
      expiresIn: 1800,
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const loginCliente = async (req, res) => {
  const clienteExiste = await Cliente.findOne(req.body.email).populate(
    "pedidos"
  );
  if (!clienteExiste) {
    return res.status(400).json({ message: "cliente no registrado" });
  }
  const matchPassword = await Cliente.validarPass(
    req.body.password,
    clienteExiste.password
  );
  if (!matchPassword) {
    return res
      .status(201)
      .json({ token: null, message: "error en email o contraseña" });
  }
  const token = jwt.sign({ id: clienteExiste._id }, process.env.SECRET, {
    expiresIn: 1800,
  });

  res.json({ token });
};

const registerUsuario = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const usuarioExiste = await Usuario.findOne({ email: email });
  if (usuarioExiste)
    return res.status(400).json({ message: "usuario ya registrado" });

  try {
    const nuevoUsuario = new Usuario({
      nombre,
      apellido,
      email,
      password: await Usuario.encriptarPass(password),
    });
    const userGuardado = await nuevoUsuario.save();

    const token = jwt.sign({ id: userGuardado._id }, process.env.SECRET, {
      expiresIn: 1800,
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const loginUsuario = async (req, res) => {
  const usuarioExiste = await Usuario.findOne({ email: req.body.email });
  if (!usuarioExiste) {
    return res.status(400).json({ message: "usuario no registrado" });
  }
  const matchPassword = await Usuario.validarPass(
    req.body.password,
    usuarioExiste.password
  );
  if (!matchPassword) {
    return res
      .status(201)
      .json({ token: null, message: "error en email o contraseña" });
  }
  const token = jwt.sign({ id: usuarioExiste._id }, process.env.SECRET, {
    expiresIn: 1800,
  });
  res.json({ token });
};

module.exports = {
  loginCliente,
  registerCliente,
  loginUsuario,
  registerUsuario,
};
