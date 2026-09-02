# muebleria-j-itba
# Mueblería Hermanos Jota — E-commerce
Proyecto grupal de e-commerce estático para la Mueblería Hermanos
Jota.
## Integrantes
- Juli — Estructura Base y Layout
- Guido — Datos y Lógica Core JS
- Abby — Inicio y Contacto
- Fran — Catálogo Completo
- Santi — Detalle e Interacción
## Estructura de carpetas
- `css/` — estilos globales
- `scripts/` — lógica JS (catálogo, carrito, layout)
- `img/` — imágenes del sitio
- `partials/` — fragmentos de header y footer, cargados
dinámicamente
## Tecnologías
- HTML5 semántico
- CSS3 (Vanilla, Flexbox, Mobile First)
- JavaScript (Vanilla, scripts clásicos, async/await,
localStorage, fetch)
- GitHub Pages (despliegue)
## Cómo correr el sitio localmente
⚠ No abrir los archivos `.html` directo desde el disco — el
header/footer se cargan con `fetch()` y el navegador bloquea esas
peticiones bajo el protocolo `file://`.
1. Cloná el repo: `git clone https://github.com/guidoserniotti/muebleria-j-itba
2. Levantá un servidor local, por ejemplo:
- VS Code con la extensión Live Server, o
- `python3 -m http.server` desde la raíz del proyecto
3. Abrí `http://localhost:puerto` en el navegador
## Sitio desplegado
[Ver sitio en GitHub Pages](URL-que-anotaste-en-JULI-1)
2. Reemplazá el link final por la URL real de GitHub Pages
3. Commiteá: git commit -m "docs: README final"
