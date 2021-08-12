const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.ObjectId, ref: "producto" },
  usuarioId: { type: mongoose.Schema.ObjectId, ref: "usuario" },
  fecha: { type: Date, default: Date.now },
  precio: String,
  codigo: String,
});

const venta = mongoose.model("venta", ventaSchema);

module.exports = venta;
