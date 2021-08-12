const Stock = require("../models/stock");
const Producto = require("../models/producto");

const registerStock = async (req, res) => {
  if (!req.body.cantidad || !req.body.bodega)
    return res.status(400).send("Process failed: Incomplete data");

  let existingStock = await Stock.findOne({ bodega: req.body.bodega });
  if (existingStock)
    return res
      .status(400)
      .send("Process failed: The cellar  is alredy registered");

  let producto = await Producto.findOne({ name: "Dark Souls 3" });
  if (!producto)
    return res.status(400).send("Process failed: No role was assigned");

  let stock = new Stock({
    name: req.body.name,
    productoId: producto._id,
    cantidad: req.body.cantidad,
    bodega: req.body.bodega,
  });

  let result = await stock.save();
  if (!result) return res.status(401).send("Failed to register cellar");
  return res.status(200).send({ stock });
};

const listStock = async (req, res) => {
  const stock = await Stock.find().populate("productoId");

  if (!stock || stock.length === 0)
    return res.status(400).send("No stock");
  return res.status(200).send({ stock });
};

module.exports = { registerStock, listStock };
