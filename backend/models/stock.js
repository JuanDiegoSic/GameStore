const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  productoId: {type: mongoose.Schema.ObjectId,ref: "producto"},
  cantidad: String,
  bodega: String,
  fecha: { type: Date, default: Date.now },
});

const stock = mongoose.model("stock", stockSchema);

module.exports = stock;
