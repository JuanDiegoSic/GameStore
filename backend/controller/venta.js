const Venta = require("../models/venta");
const Producto = require("../models/producto");
const Usuario = require("../models/usuario");

const registerVenta = async (req, res) => {
  if (!req.body.precio || !req.body.codigo)
    return res.status(400).send("Process failed: Incomplete data");

  let existingVenta = await Venta.findOne({ codigo: req.body.codigo });
  if (existingVenta)
    return res
      .status(400)
      .send("Process failed: The sale  is alredy registered");

  let producto = await Producto.findOne({ name: "Batlefield 3" });
  if (!producto)
    return res.status(400).send("Process failed: No role product was assigned");

  let usuario = await Usuario.findOne({ name: "Sebastian" });
  if (!usuario)
    return res.status(400).send("Process failed: No role user was assigned");

  let venta = new Venta({
    codigo: req.body.codigo,
    productoId: producto._id,
    usuarioId: usuario._id,
    precio: req.body.precio,
  });

  let result = await venta.save();
  if (!result) return res.status(401).send("Failed to register sale");
  return res.status(200).send({ venta });
};

const listVenta = async (req, res) => {
    const venta = await Venta.find().populate("productoId").populate("usuarioId");

    if (!venta || venta.length === 0)
    return res.status(400).send("No sale");
  return res.status(200).send({ venta });





};

module.exports = { registerVenta, listVenta };
