import express from "express";
import fs from "fs";
import cors from "cors";
// import usersRouter from './routes/userRoutes.js';
// import productsRouter from './routes/productRoutes.js';
import { logger } from "logger-express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(logger());


// app.use(productsRouter);
// app.use(usersRouter);

app.post("/home", (req, res) => {
  const { name } = req.params;
  const {id, nombre, price} = req.body;
  console.log(req.body);
  res.status(200).json({id, nombre, price});
});

app.get("/productos", (req, res) => {
  try {
    const productos = JSON.parse(fs.readFileSync("productos.json"));
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
});

app.post("/productos", (req, res) => {
  try {
    const producto = req.body;
    const productos = JSON.parse(fs.readFileSync("productos.json"));
    productos.push(producto);
    fs.writeFileSync("productos.json", JSON.stringify(productos));
    res.status(201).send("Producto agregado con éxito!");
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
});

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));
