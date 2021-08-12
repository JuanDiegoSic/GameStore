const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

const registerUsuario = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(401).send("Procces failed: Incomplete data");

  let existingUsuario = await Usuario.findOne({ email: req.body.email });
  if (existingUsuario)
    return res.status(400).send("Process failed: role alredy exist");

  let hash = await bcrypt.hash(req.body.password, 10);

  let usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });

  let result = await usuario.save();
  if (!result) return res.status(401).send("Failed to register Usuario");

  try {
    let jwt = usuario.generateJWT();
    return res.status(200).send({ jwt });
  } catch (e) {
    return res.status(400).send("Failed to register user");
  }
};

const listUsuario = async (req, res) => {
  let usuario = await Usuario.find({
    name: new RegExp(req.params["name"], "i")
  }).exec();
  if (!usuario || usuario.length === 0)
    return res.status(401).send("No Usuario");
  return res.status(200).send({ usuario });
};

module.exports = { registerUsuario, listUsuario };
