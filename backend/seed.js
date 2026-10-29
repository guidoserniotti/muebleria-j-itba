// seed.js — carga el array de productos.js en MongoDB. Se corre con: npm run seed
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose";
import Product from "./models/Product.js";
import productos from "./data/productos.js";

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  // El array usa "imagen" e "id"; el modelo usa "imagenUrl" y Mongo pone su propio \_id.
  const documentos = productos.map(({ id, imagen, ...resto }) => ({
    ...resto,
    imagenUrl: imagen,
  }));

  await Product.deleteMany({});
  const creados = await Product.insertMany(documentos);
  console.log(
    `🌱 ${creados.length} productos cargados en ${mongoose.connection.name}`,
  );

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error(":x: Falló el seed:", error.message);
  process.exit(1);
});
