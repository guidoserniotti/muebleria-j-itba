# Mueblería Hermanos Jota — E-commerce

Sitio de e-commerce estático para la Mueblería Hermanos Jota, desarrollado como
proyecto grupal con HTML, CSS y JavaScript vanilla, sin frameworks ni build step.

🔗 **[Ver sitio publicado](https://guidoserniotti.github.io/muebleria-j-itba/)**

## Integrantes

| Integrante | Rol |
|---|---|
| Juli | Estructura base y layout |
| Guido | Datos y lógica core JS |
| Abby | Inicio y contacto |
| Fran | Catálogo completo |
| Santi | Detalle e interacción |

## Funcionalidad

**Inicio (`index.html`)** — Header con logo y navegación, hero de presentación y
productos destacados cargados dinámicamente desde el catálogo, filtrando por el
campo `destacado`. Cada tarjeta enlaza al detalle del producto.

**Catálogo (`productos.html`)** — Grilla con los 11 productos renderizada por DOM
a partir del array de `scripts/data.js`. Incluye un buscador que filtra por nombre
en tiempo real, sin recargar la página.

**Detalle (`producto.html`)** — Lee el `id` del producto desde el query string de
la URL (`producto.html?id=1`) y muestra imagen, descripción y precio. Permite
elegir cantidad y añadir al carrito, con feedback visual. Si el `id` no existe o
falta, muestra un estado de error con link de vuelta al catálogo.

**Contacto (`contacto.html`)** — Formulario de nombre, email y mensaje con
validación del lado del cliente: campos obligatorios y formato de email por
expresión regular. El resultado se comunica por DOM, sin recargar.

**Carrito** — Simulado con `localStorage`. El contador del header se actualiza al
agregar productos y persiste entre páginas y recargas.

## Tecnologías

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- **CSS3** vanilla: custom properties para el design system, Flexbox y Grid, responsive
- **JavaScript** vanilla: scripts clásicos (sin módulos), `async/await` sobre
  promesas con `setTimeout` para simular latencia de red, renderizado por DOM,
  `addEventListener` y `localStorage`
- **GitHub Pages** para el despliegue

## Estructura

```
├── index.html          Inicio
├── productos.html      Catálogo
├── producto.html       Detalle
├── contacto.html       Contacto
├── css/                Estilos globales y del detalle
├── scripts/            Datos, carrito, layout y lógica de cada página
├── partials/           Header y footer, inyectados con fetch
└── img/                Logo e imágenes de producto
```

## Cómo correr el sitio localmente

> ⚠️ No abras los `.html` directo desde el disco. El header y el footer se cargan
> con `fetch()` y el navegador bloquea esas peticiones bajo el protocolo `file://`.

1. Cloná el repo:
   ```bash
   git clone https://github.com/guidoserniotti/muebleria-j-itba
   ```
2. Levantá un servidor local desde la raíz del proyecto:
   - VS Code con la extensión **Live Server**, o
   - `python3 -m http.server`
3. Abrí `http://localhost:<puerto>` en el navegador.
