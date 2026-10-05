# Catálogo BIPA 3D

Catálogo de productos en 3D para el equipo de ventas de BIPA. Funciona en el celular y en la computadora, sin instalar nada.

## Archivos

- `index.html`: el catálogo (visor 3D, ficha, buscador y herramientas para mostrar; no toma pedidos). El botón "Catálogo en PDF" arma un archivo PDF real con todos los productos.
- `productos.js`: **los datos**. Es el único archivo que hay que editar para cambiar productos, precios, colores o aromas.
- `fotos/`: fotos reales de los productos, guardadas como referencia (campos `foto` y `fotos`). Por ahora la ficha no las muestra.
- `texturas/`: etiquetas y empaques reales (sacados de las fotos y del PDF) que se pegan sobre los modelos 3D.
- `modelos/` (opcional): modelos 3D `.glb`. Se enlazan con el campo `glb` y reemplazan al modelo dibujado.

## Cómo actualizar un producto

1. En GitHub abre `productos.js` y pulsa el lápiz (Edit).
2. Cambia lo que necesites, por ejemplo el precio: `precio: null` → `precio: 18.50`.
3. Pulsa **Commit changes**. En 1 o 2 minutos la página se actualiza sola.

Para agregar un producto, copia un bloque `{ ... }` completo, pégalo debajo y cambia su `id` (sin espacios ni tildes), nombre y datos.

## Publicar con GitHub Pages

1. Settings → Pages.
2. En **Source** elige *Deploy from a branch*, rama `main`, carpeta `/ (root)` y pulsa **Save**.
3. La dirección queda así: `https://<usuario>.github.io/<repositorio>/`.

Cada producto tiene su propio enlace, por ejemplo `.../#velon-5`, que se puede mandar por WhatsApp.
- `marca/`: logo BIPA vectorizado (logo.svg, logo-h.svg, hoja.svg) e íconos de la app. `sw.js` + `manifest.webmanifest`: el catálogo se puede instalar en el teléfono y funciona sin internet.
