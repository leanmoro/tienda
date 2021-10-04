const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json({ error: "falta el token en el header" });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;

    const user = await Usuario.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "el usuario no existe" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: "sin autorizacion" });
  }
};

const isAdmin = async (req, res, next) => {
  const user = await Usuario.findById(req.userId);
  if (user.rol != "admin") {
    return res.status(403).json({ error: "requiere rol de administrador" });
  }
  next();
};

module.exports = { verifyToken, isAdmin };
