const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Producto = require("./routes/producto");
const Stock = require("./routes/stock");
const Usuario = require("./routes/usuario");
const Venta = require("./routes/venta");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/producto", Producto);
app.use("/api/Stock", Stock);
app.use("/api/Usuario", Usuario);
app.use("/api/Venta", Venta);


app.listen(process.env.PORT, () =>
    console.log("Backend server running OK, on ports: ", process.env.PORT)
);

dbConnection();