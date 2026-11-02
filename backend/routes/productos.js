import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productos = await Product.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "ID de producto inválido" });
  }

  try {
    const producto = await Product.findById(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
  } catch (error) {
    console.error("Error al obtener el producto:", error.message);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevoProducto = await Product.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errores = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ errores });
    }
    console.error("Error al crear el producto:", error.message);
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

// PUT para actualizar un producto
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  // Validación requerida por Guido
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "ID de producto inválido" });
  }

  try {
    const productoActualizado = await Product.findByIdAndUpdate(
      id, 
      req.body, 
      { 
        new: true, 
        runValidators: true 
      }
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(productoActualizado);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errores = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ errores });
    }
    console.error("Error al actualizar el producto:", error.message);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

// DELETE para eliminar un producto
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Validación requerida por Guido
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "ID de producto inválido" });
  }

  try {
    const productoEliminado = await Product.findByIdAndDelete(id);

    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

export default router;