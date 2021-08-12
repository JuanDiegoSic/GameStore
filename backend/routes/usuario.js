const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/usuario");

router.post("/registerUsuario", UsuarioController.registerUsuario);

router.get("/listUsuario/:name?", UsuarioController.listUsuario);

module.exports = router;