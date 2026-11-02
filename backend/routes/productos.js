import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import Categoria from "../models/Categoria.js";

const router = express.Router();

async function asegurarCategoria(categoria, res) {
  if (categoria === undefined || categoria === null || categoria === "") {
    return true;
  }

  if (!mongoose.isValidObjectId(categoria)) {
    res.status(400).json({ error: "Id de categoría inválido" });
    return false;
  }

  const existe = await Categoria.findById(categoria);
  if (!existe) {
    res.status(400).json({ error: "La categoría no existe" });
    return false;
  }

  return true;
}

router.get("/", async (req, res) => {
  try {
    const filtro = {};
    const { categoria } = req.query;

    if (categoria) {
      if (!mongoose.isValidObjectId(categoria)) {
        return res.status(400).json({ error: "Id de categoría inválido" });
      }
      filtro.categoria = categoria;
    }

    const productos = await Product.find(filtro).populate("categoria", "nombre");
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
    const producto = await Product.findById(id).populate("categoria", "nombre");

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
  if (!(await asegurarCategoria(req.body.categoria, res))) {
    return;
  }

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

  if (!(await asegurarCategoria(req.body.categoria, res))) {
    return;
  }

  try {
    const productoActualizado = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
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