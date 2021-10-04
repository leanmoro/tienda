const express = require("express");
const router = express.Router();

const {
  registerCliente,
  loginCliente,
  registerUsuario,
  loginUsuario,
} = require("../controller/auth-controller");

router.post("/login", loginCliente);
router.post("/register", registerCliente);
router.post("/loginu", loginUsuario);
router.post("/registeru", registerUsuario);

module.exports = router;
