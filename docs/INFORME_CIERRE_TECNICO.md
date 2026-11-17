# Informe de cierre técnico — pymtech.com.pe

Fecha de revisión: 2026-11-16 (hora Perú).
Repositorio de producción: `pym-ecosistema-web/pymtech`, rama `main`, Cloudflare Pages.

## Implementado y comprobado mediante configuración / repositorio
- Cloudflare zona activa; dominios raíz y www figuran activos en Pages.
- Certificado universal Cloudflare con estado `active` y cobertura de raíz y comodín.
- Redirección `Always Use HTTPS` habilitada y versión TLS mínima 1.2; TLS 1.3 disponible.
- Cabeceras Pages: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` y HSTS **sin** `includeSubDomains`.
- Favicon SVG existente referenciado desde HTML, además de archivo `site.webmanifest` con identidad del sitio.
- Metadatos SEO: título, descripción, URL canónica, `og:url` y JSON-LD de tipo `Organization` / `WebSite` (sin clientes ni certificaciones inventados).
- `robots.txt` y `sitemap.xml` con la portada del dominio como URL canónica.
- Enlaces internos por anclas revisados a nivel de código; sin referencias a identificadores inexistentes detectadas.
- Landing estática HTML/CSS/JS. Navegación por anclas, imágenes WebP y sección de contacto.
- El formulario de cotización valida campos con HTML y abre WhatsApp; no transmite datos a backend ni garantiza el envío hasta que el usuario confirme el mensaje.

## Pruebas que NO se deben marcar como realizadas sin evidencia
- Validación visual real en teléfonos (por ejemplo 360px, 390px, 768px), tabletas y escritorio, usando Chrome/Firefox/Safari.
- Medición PageSpeed Insights/Lighthouse real con resultados Core Web Vitals y auditoría de accesibilidad con teclado/lector de pantalla.
- Comprobación externa en producción del contenido exacto y las cabeceras de respuesta (el entorno de revisión no resuelve el dominio).
- Prueba de cada CTA en navegador y confirmación real de envío por WhatsApp/correo.
- No se observaron registros MX del dominio en la zona revisada; no asumir servicio de correo activo en este dominio.
- Verificación futura del estado **indexado** en Google Search Console: sitemap aceptado y solicitud de indexación no garantizan aparición inmediata en Google.

## Procedimiento de aceptación manual
1. Comprobar `http://pymtech.com.pe/` → redirección 301/308 hacia `https://pymtech.com.pe/`; probar raíz y www.
2. Visitar `https://pymtech.com.pe/robots.txt`, `/sitemap.xml`, `/favicon.svg`, `/site.webmanifest`; todos deben devolver 200 y contenido esperado.
3. Validar el certificado HTTPS desde Chrome y la ausencia de recursos mixtos.
4. Probar navegación, anclas, accesibilidad por teclado, menú móvil y CTA de contacto.
5. Ejecutar Lighthouse en móvil/escritorio y registrar resultados (LCP, CLS, INP, accesibilidad).
6. Consultar Search Console tras el rastreo: inspección de URL, páginas indexadas y posibles errores.
7. Para dominio con correo CWP, enviar un mensaje desde una cuenta corporativa a otra externa y responder; confirmar SPF, DKIM, DMARC y recepción.
8. Conservar esta evidencia antes de emitir acta de entrega definitiva.

## Criterio de cierre
**Configuración técnica aplicada**, pero **aceptación funcional integral pendiente** de validaciones externas y de correo. Nunca confundir un despliegue exitoso con una auditoría completa.
