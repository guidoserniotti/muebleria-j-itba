# Semana 1 — Actividades

**NOTA**: Todos estos ejercicios fueron desarrollados en equipo en reuniónes síncronas.

## **Ejercicio 1: Tu Página de Presentación Personal**

**Objetivo**: Practicar la estructura básica de un documento, el uso de títulos, párrafos, imágenes y enlaces.

**Tareas**:

1. Creá un archivo llamado `mi_perfil.html`.
2. Dale una estructura HTML completa (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`).
3. En el `<head>`, poné un `<title>` que diga "Perfil de [Tu Nombre]".
4. En el `<body>`, añadí un título principal (`<h1>`) con tu nombre completo.
5. Debajo del título, insertá una foto tuya (o una imagen de placeholder) usando la etiqueta `<img>`. No olvides el atributo `alt` con una descripción.
6. Escribí una breve biografía de dos o tres párrafos usando la etiqueta `<p>`. En alguna parte de tu biografía, usá `<strong>` para resaltar tu principal habilidad o interés.
7. Añadí un subtítulo (`<h2>`) que diga "Mis Proyectos".
8. Creá una lista no ordenada (`<ul>`) donde cada ítem de la lista (`<li>`) sea un enlace (`<a>`) a un proyecto ficticio en GitHub. Por ejemplo: `<a href="#">Proyecto Tienda Online</a>`. Hacé que estos enlaces se abran en una nueva pestaña.

## **Ejercicio 2: La Receta de tu Comida Favorita**

**Objetivo**: Dominar el uso de listas ordenadas, no ordenadas y el formato de texto.

**Tareas**:

1. Creá un archivo `receta.html`.
2. El `<h1>` de la página será el nombre de tu comida favorita.
3. Añadí una imagen (`<img>`) del platillo.
4. Creá una sección con un `<h2>` que diga "Ingredientes".
5. Debajo, usá una lista no ordenada (`<ul>`) para enumerar todos los ingredientes necesarios.
6. Creá otra sección con un `<h2>` que diga "Instrucciones".
7. Debajo, usá una lista ordenada (`<ol>`) para detallar, paso a paso, cómo se prepara la receta.
8. Dentro de las instrucciones, usá la etiqueta `<em>` para dar énfasis a palabras clave como "con cuidado", "lentamente" o "hasta que dore".

## **Ejercicio 3: Estructura Semántica de un Blog**

**Objetivo**: Practicar el uso correcto de las etiquetas semánticas de HTML5 para estructurar una página. No te preocupes por el estilo, solo por la estructura correcta.

**Tareas**:

1. Creá un archivo `blog.html`.
2. Usá la etiqueta `<header>` para la parte superior de la página. Dentro, colocá el `<h1>` del blog (ej: "Mi Blog de Aventuras") y una etiqueta `<nav>` con una lista de enlaces ("Inicio", "Acerca de", "Contacto").
3. Usá la etiqueta `<main>` para envolver el contenido principal.
4. Dentro de `<main>`, usá una etiqueta `<article>` para el post del blog. Este artículo debe tener su propio título (`<h2>`), varios párrafos (`<p>`) y una imagen.
5. Dentro del `<article>`, creá dos sub-secciones temáticas usando `<section>`, cada una con su propio `<h3>` (ej: "El Viaje" y "La Comida").
6. Al lado del `<article>` (pero todavía dentro de `<main>`), añadí una barra lateral usando `<aside>`. Dentro, poné un `<h3>` que diga "Artículos Populares" y una lista de enlaces a otros posts.
7. Finalmente, usá la etiqueta `<footer>` al final del `<body>` para la información de copyright.

## **Ejercicio 4: Tabla Comparativa de Laptops**

**Objetivo**: Construir una tabla de datos bien estructurada, utilizando sus etiquetas semánticas y atributos para fusionar celdas.

**Tareas**:

1. Creá un archivo `comparativa.html`.
2. Insertá una `<table>` con un `<caption>` que diga "Comparativa de Laptops 2025".
3. Usá `<thead>` para la fila de encabezado. La fila (`<tr>`) debe contener celdas de encabezado (`<th>`) para "Modelo", "Procesador", "Memoria RAM" y "Almacenamiento". No olvides el atributo `scope="col"`.
4. Usá `<tbody>` para añadir al menos tres laptops diferentes, cada una en su propia fila (`<tr>`) con sus datos en celdas `<td>`.
5. Añadí una última fila que represente una "Oferta Especial". En esta fila, la primera celda (`<td>`) contendrá el texto de la oferta y deberá expandirse a lo ancho de 4 columnas usando el atributo `colspan`.

## **Ejercicio 5: Formulario de Inscripción a un Evento**

**Objetivo**: Crear un formulario completo y accesible, utilizando una variedad de campos de entrada.

**Tareas**:

1. Creá un archivo `inscripcion.html`.
2. Envolvé todo en una etiqueta `<form>`.
3. Creá los siguientes campos, asegurándote de que cada uno tenga una etiqueta `<label>` asociada correctamente con los atributos `for` e `id`:
   - **Nombre Completo**: un `<input type="text">`.
   - **Correo Electrónico**: un `<input type="email">`.
   - **Crear Contraseña**: un `<input type="password">`.
   - **Taller de Interés**: un menú desplegable (`<select>`) con al menos tres talleres como opciones (`<option>`).
   - **Tipo de Asistencia**: usá dos `<input type="radio">` con el mismo `name` para las opciones "Presencial" y "Virtual".
   - **Acepto los términos y condiciones**: un `<input type="checkbox">`.
   - **Comentarios adicionales**: un `<textarea>` con 5 filas de alto.
4. Añadí un botón de envío al final: `<button type="submit">Inscribirme</button>`.
