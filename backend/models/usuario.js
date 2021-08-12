const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const usuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

usuarioSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
    _id: this._id,
    name: this.name,
    iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};

const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = usuario;
