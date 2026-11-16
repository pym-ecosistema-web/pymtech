# PyM Tech — sitio web corporativo

Sitio estático en HTML, CSS y JavaScript. Presenta soluciones tecnológicas para empresas, catálogo informativo, preguntas frecuentes y formulario de solicitud por WhatsApp.

## Estructura
- `index.html`: contenidos y estructura semántica.
- `styles.css`: estilos responsive, estados de foco y reducción de movimiento.
- `script.js`: menú móvil, animaciones accesibles y mensaje de WhatsApp.
- `assets/`: fotografías y logotipos.
- `favicon.svg`, `robots.txt`, `_headers`: configuración básica.
- `server.js` y `package.json`: servidor opcional con Node.js.

## Ejecución local
Abrir `index.html` en un navegador o ejecutar `npm start` si se dispone de Node.js 18 o superior.

## Despliegue en Cloudflare Pages
Conectar este repositorio a Cloudflare Pages, usar la rama `main` y no establecer comando de compilación. Directorio de salida: `/` (raíz del repositorio). Configurar dominio personalizado después de verificar su propiedad.

## Antes de publicar
- Confirmar razón social, dirección, correo, teléfono y número de WhatsApp con la empresa.
- Revisar textos de servicios y marcas; los logotipos son referenciales y no implican alianzas formales.
- Verificar formulario y enlaces en dispositivos móviles.
- Configurar el dominio canónico, sitemap y Open Graph con URL absoluta cuando se tenga dominio.
- Realizar pruebas de accesibilidad y rendimiento en el sitio desplegado.

El formulario no conserva datos: prepara un mensaje que el usuario envía en WhatsApp.
