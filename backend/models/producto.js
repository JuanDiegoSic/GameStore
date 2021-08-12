const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  name: String,
  precio: String,
  codigo: String,
  description: String,
  fecha: { type: Date, default: Date.now },
});

const producto = mongoose.model("producto", productoSchema);

module.exports = producto;
