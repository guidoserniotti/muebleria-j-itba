import express from "express";
import cors from "cors";
import logger from "./middlewares/logger.js";
import Producto from "./models/Product.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = 3001;
mongoose.connect(process.env.MONGO_URI, { dbName: "muebleriaJotaDB" })
  .then(() => console.log("¡Conectado a MongoDB Atlas!"))
  .catch(err => console.error("Error conectando a Mongo:", err));

app.use(cors());
app.use(logger);
app.use(express.json());

// Aquí deben registrarse las rutas de la aplicación.
// (PUT) Editar un producto existente
app.put("/api/productos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const datosNuevos = req.body;
    
    // El { new: true } devuelve el objeto ya actualizado
    const productoActualizado = await Producto.findByIdAndUpdate(id, datosNuevos, { new: true });
    
    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json(productoActualizado);
  } catch (error) {
    next(error); // Deriva el error al middleware de la línea 18
  }
});

// (GET) Traer todos los productos
app.get("/api/productos", async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

// (DELETE) Eliminar un producto
app.delete("/api/productos/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);
    
    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
