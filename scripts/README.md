# scripts/ — API interna

Funciones disponibles en `data.js` y `carrito.js`. Son scripts clásicos
(sin `type="module"`), pensados para incluirse con `<script>` en cada
página y consumirse desde variables/funciones globales.

## data.js

### `obtenerCatalogo()`
- **Parámetros:** ninguno.
- **Retorno:** `Promise<Array<Producto>>` — resuelve con el catálogo completo (11 productos).
- Simula una petición asíncrona (`setTimeout` de 300ms envuelto en `Promise`). Consumir con `await` o `.then()`.

### `obtenerProductoPorId(id)`
- **Parámetros:** `id` (`number|string`) — id del producto buscado.
- **Retorno:** `Promise<Producto|undefined>` — resuelve con el producto, o `undefined` si el id no existe.

### Modelo `Producto`
```js
{
  id: number,
  nombre: string,
  precio: number,      // en ARS, sin decimales
  categoria: string,    // "Living" | "Comedor" | "Dormitorio" | "Oficina"
  imagen: string,       // ruta relativa, ej. "img/products/sofa-patagonia.png"
  descripcion: string,
  stock: number,
  destacado: boolean,
}
```

## carrito.js

Persiste el carrito en `localStorage` bajo la clave `carrito`, como un
array de `{ id: number, cantidad: number }`.

### `obtenerCarrito()`
- **Retorno:** `Array<{id, cantidad}>` — el carrito actual, o `[]` si no hay nada guardado (o el valor guardado es inválido).

### `guardarCarrito(carrito)`
- **Parámetros:** `carrito` (`Array<{id, cantidad}>`).
- Serializa y escribe el carrito en `localStorage`.

### `agregarAlCarrito(idProducto, cantidad = 1)`
- **Parámetros:** `idProducto` (`number|string`), `cantidad` (`number`, default `1`).
- Si el producto ya está en el carrito, suma la cantidad; si no, lo agrega. Guarda el resultado.

### `obtenerCantidadTotalCarrito()`
- **Retorno:** `number` — suma de las cantidades de todos los items.

### `actualizarContadorHeader()`
- Lee el carrito y escribe el total en el elemento `#cart-count` del header.
- **Debe llamarse después de que `layout.js` haya inyectado el header en el DOM** (esperar la Promise de `cargarLayout()`).

## Orden de carga recomendado en el HTML

```html
<script src="scripts/data.js"></script>
<script src="scripts/carrito.js"></script>
<script src="scripts/layout.js"></script>
<script>
  cargarLayout().then(() => actualizarContadorHeader());
</script>
```
