# Semana 2 — Actividades

**NOTA**: Todos estos ejercicios fueron desarrollados en equipo en reuniónes síncronas.

## **Ejercicio 1: Estilizando una Biografía**

**Objetivo**: Practicar el uso de selectores básicos (tipo, clase, ID) y las propiedades fundamentales de texto.

**Tareas**:

1. Creá un archivo `biografia.html` y un `estilos.css` enlazado a él.
2. En el HTML, creá una página simple sobre tu personaje histórico o artista favorito. Debe incluir un `<h1>` para el nombre, un `<h2>` para "Biografía", varios párrafos `<p>` y otro `<h2>` para "Obras Notables" con una lista `<ul>`.
3. En tu CSS:
   - Usá un selector de tipo para que todos los párrafos (`p`) tengan una `font-family` y `font-size` específicas.
   - Dale al `<h1>` un `id` único (ej: `id="titulo-principal"`) y usá un selector de ID para centrar el texto (`text-align: center`) y darle un color único.
   - Dale a los `<h2>` una misma `class` (ej: `class="subtitulo"`) y usá un selector de clase para cambiarles el color y añadirles un `font-weight: bold;`.
   - Usá un selector descendente (`ul a`) para quitarle el subrayado a cualquier enlace que esté dentro de una lista (`text-decoration: none;`).

## **Ejercicio 2: Creando una Tarjeta de Presentación**

**Objetivo**: Enfocarse y dominar el Modelo de Cajas (`padding`, `border`, `margin`).

**Tareas**:

1. Creá un `<div>` principal en tu HTML con la clase `tarjeta-presentacion`.
2. Dentro de la tarjeta, añadí un `<h2>` con un nombre, un `<p>` con un cargo y otro `<p>` con un email.
3. En tu CSS, seleccioná la clase `.tarjeta-presentacion` y:
   - Dale un `width` fijo de `350px`.
   - Añadí un `padding` de `25px` para que el contenido no esté pegado a los bordes.
   - Creá un `border` sutil, por ejemplo: `1px solid #cccccc;`.
   - Añadí una sombra suave para que parezca que "flota" con la propiedad `box-shadow: 5px 5px 10px #e0e0e0;`.
   - Finalmente, usá `margin: 40px auto;` para centrar la tarjeta horizontalmente en la página y darle un espacio superior.

## **Ejercicio 3: Maquetando una Galería de Imágenes Fluida**

**Objetivo**: Practicar el uso de `display: flex` para crear un layout básico y el uso de porcentajes para un diseño fluido.

**Tareas**:

1. En tu HTML, creá un `<div>` contenedor con la clase `galeria`. Dentro, colocá tres de las "tarjetas" del ejercicio anterior (podés usar un `<div>` con la clase `tarjeta-foto` para cada una). Cada tarjeta debe contener una imagen `<img>` y un pie de foto `<p>`.
2. En tu CSS:
   - Aplicá la regla universal `box-sizing: border-box;` al inicio de tu archivo.
   - Seleccioná `.galeria` y aplicale `display: flex;` para que sus hijos (las tarjetas) se pongan uno al lado del otro. Usá `gap: 20px;` para crear un espacio entre ellas.
   - Seleccioná `.tarjeta-foto` y dale un `width` en porcentaje (ej: `30%`) para que el layout sea fluido.
   - Añadí una regla para que las imágenes (`img`) dentro de las tarjetas nunca se desborden: `width: 100%; height: auto;`.

## **Ejercicio 4: Adaptando la Galería (Diseño Responsivo)**

**Objetivo**: Implementar Media Queries para que el diseño del ejercicio anterior se adapte a pantallas de móvil.

**Tareas**:

1. Asegurate de tener la meta etiqueta `viewport` en tu HTML.
2. Adoptá un enfoque Mobile-First. En tus estilos base (fuera de cualquier media query), hacé que `.galeria` se apile verticalmente: `flex-direction: column;`. Las tarjetas (`.tarjeta-foto`) deberían ocupar casi todo el ancho, por ejemplo `width: 95%;`.
3. Ahora, añadí una Media Query al final de tu archivo CSS: `@media (min-width: 768px) { ... }`. Este será nuestro "breakpoint" para tablets y escritorios.
4. Dentro de la media query, sobreescribí los estilos para pantallas grandes:
   - Cambiá `.galeria` para que vuelva a ser horizontal: `flex-direction: row;`.
   - Ajustá el ancho de `.tarjeta-foto` a un porcentaje más pequeño para que quepan varias en una fila, por ejemplo `width: 31%;`.
5. Abrí la página en tu navegador y cambiá el tamaño de la ventana. ¡Observá cómo el layout cambia de una columna a varias!

## **Ejercicio 5: Creando un "Hero Banner" de Pantalla Completa**

**Objetivo**: Combinar todos los conceptos, incluyendo unidades de viewport (`vh`) y `display: flex` para centrado vertical y horizontal.

**Tareas**:

1. Creá una sección `<header>` con la clase `hero-banner`. Dentro, colocá un `<h1>` y un `<p>` con un llamado a la acción.
2. En tu CSS:
   - Usá el reseteo universal `* { margin: 0; padding: 0; box-sizing: border-box; }`.
   - Seleccioná `.hero-banner` y hacé que ocupe el 100% de la altura de la ventana del navegador con `height: 100vh;`.
   - Dale un color de fondo o una imagen de fondo.
   - Para centrar el texto perfectamente, usá la "magia" de Flexbox:

     ```css
     .hero-banner {
       /* ... otros estilos ... */
       display: flex;
       flex-direction: column;
       justify-content: center; /* Centra verticalmente */
       align-items: center; /* Centra horizontalmente */
     }
     ```

3. Estilizá el `<h1>` y el `<p>` dentro del banner (color, tamaño de fuente, etc.). Usá una media query para reducir el `font-size` del `<h1>` en pantallas pequeñas y que no se vea desproporcionado.
