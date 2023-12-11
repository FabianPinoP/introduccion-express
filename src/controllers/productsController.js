import fs from "fs";

const getAllProducts = (req, res) => {
  try {
    const productos = JSON.parse(fs.readFileSync("productos.json"));
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const createProduct = (req, res) => {
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
}
export { getAllProducts, createProduct };