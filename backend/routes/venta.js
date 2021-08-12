const express = require("express");
const router = express.Router();
const VentaController = require("../controller/venta");

router.post("/registerVenta", VentaController.registerVenta);

router.get("/listVenta", VentaController.listVenta);

module.exports = router;