// seed.js — carga categorías y productos en MongoDB. Se corre con: npm run seed
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose";
import Product from "./models/Product.js";
import Categoria from "./models/Categoria.js";
import productos from "./data/productos.js";

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany({});
  await Categoria.deleteMany({});

  const nombres = [...new Set(productos.map((p) => p.categoria).filter(Boolean))];
  const categorias = await Categoria.insertMany(
    nombres.map((nombre) => ({ nombre })),
  );
  const idPorNombre = Object.fromEntries(
    categorias.map((c) => [c.nombre, c._id]),
  );

  // El array usa "imagen", "id" y el nombre de categoría; el modelo usa
  // "imagenUrl", el _id de Mongo y una referencia a Categoria.
  const documentos = productos.map(({ id, imagen, categoria, ...resto }) => ({
    ...resto,
    imagenUrl: imagen,
    categoria: idPorNombre[categoria],
  }));

  const creados = await Product.insertMany(documentos);
  console.log(
    `🌱 ${categorias.length} categorías y ${creados.length} productos cargados en ${mongoose.connection.name}`,
  );

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(":x: Falló el seed:", error.message);
  process.exit(1);
});
