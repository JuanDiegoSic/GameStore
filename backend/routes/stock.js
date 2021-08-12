const express = require("express");
const router = express.Router();
const StockController = require("../controller/stock");

router.post("/registerStock", StockController.registerStock);

router.get("/listStock", StockController.listStock);

module.exports = router;