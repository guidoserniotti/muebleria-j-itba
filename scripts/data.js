async function obtenerCatalogo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: "Silla Comedor Moderna",
            precio: 25000,
            imagen: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500"
          },
          {
            id: 2,
            nombre: "Mesa de Centro Nórdica",
            precio: 45000,
            imagen: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500"
          },
          {
            id: 3,
            nombre: "Sillón 2 Cueros Minimalista",
            precio: 120000,
            imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
          }
        ]);
      }, 300);
    });
  }