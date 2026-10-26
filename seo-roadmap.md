# Roadmap SEO del portafolio

Fecha: 26 de octubre de 2026. Estado: planificación; cambios web pendientes.
Objetivo: mejorar la visibilidad de la portada para reclutadores y organizaciones que busquen un colaborador técnico en España y Colombia, conservando su estructura one page.
Propuesta de textos: [seo-copy.md](seo-copy.md).

## Decisiones acordadas

| Tema | Decisión |
| --- | --- |
| Arquitectura | Mantener la portada one page y la segunda página de proyectos existente. No crear páginas por proyecto, servicio, ciudad o país. |
| Casos | Mantener los casos en sus ventanas actuales. Los resúmenes de la portada deben tener sentido sin abrirlas. |
| Público | Reclutadores, agencias de marketing, agencias de SEO, agencias de programación y empresas de IA que necesiten incorporar o colaborar con un desarrollador. No orientar la oferta a clientes finales. |
| Mercados | España y Colombia. Son mercados objetivo, no una declaración de residencia, sede u oficina. |
| Idioma editorial | Español neutro y profesional, natural, sin voseo ni expresiones regionales argentinas. |
| Idiomas del sitio | Conservar español e inglés. No añadir versiones regionales duplicadas. |
| Dominio | Trabajar sobre https://dfzm.github.io/. Comprar o migrar un dominio no forma parte del plan. |
| Ejecución | Primero documentar y revisar el copy. Después implementar por pasos, directamente o mediante un agente. Este documento no autoriza publicar ni modificar todavía la web. |

## Situación inicial y límites de la evidencia

- La portada tiene título, descripción, canonical y alternancias `es`, `en` y `x-default`. El contenido principal está presente en el HTML local.
- El título actual usa «Daniel»; el nombre completo aparece al final de la página. La propuesta unifica la identidad profesional como «Daniel Zapata», pendiente de revisión editorial.
- Existen tres bloques de servicios: UX/UI, desarrollo web y plataformas, y WordPress. Se precisarán problemas, alcance y entregables sin ampliar capacidades no acreditadas.
- Los casos se abren mediante botones y fragmentos como `#proyecto=ca-na-tess`. Se acepta la limitación de no tener una URL indexable independiente por caso; no se cambiará esa arquitectura.
- Las capturas de Search Console muestran inicialmente la portada sin indexar y después una prueba en tiempo real que permite su indexación. El usuario indicó haber solicitado indexación.
- El sitemap fue enviado. Search Console muestra «No se ha podido leer el sitemap». El navegador pudo interpretar el XML público, con cuatro URLs y sin errores de análisis. Esto no prueba que Google lo haya procesado ni determina la causa del mensaje.
- No hay todavía una línea base de impresiones, clics, consultas, países, conversiones ni rendimiento móvil. No se han comprobado posiciones o volúmenes de palabras clave.

## Enfoque de contenido propuesto

La portada reunirá identidad, capacidades de colaboración, evidencia de proyectos y contacto. Se conservarán sus secciones; no hace falta repetir todas las especialidades en cada bloque. Los servicios se presentarán como aportaciones a equipos y proyectos de agencias o empresas, no como paquetes comerciales para clientes finales. Dirigirse a empresas de IA no implica ofrecer entrenamiento de modelos ni especialidades de IA que el portafolio no demuestre.

| Intención | Contenido que debe responderla | Expresiones iniciales para evaluar |
| --- | --- | --- |
| Encontrar a la persona | Nombre, perfil, experiencia y perfiles profesionales | Daniel Zapata, desarrollador de software, diseñador UX/UI |
| Encontrar un colaborador técnico | Cómo integrarse en un equipo, qué parte de la implementación asumir y evidencia del trabajo | desarrollador web para agencias, colaboración técnica, desarrollo frontend, desarrollo WordPress |
| Evaluar una candidatura | Participación real, tecnologías, experiencia y proyectos | desarrollo frontend, React, WordPress, diseño de interfaces |

Estas expresiones son hipótesis editoriales, no palabras clave con demanda o competitividad verificadas. Se ajustarán con las consultas reales de Search Console. Una URL puede cubrir temas relacionados, pero no se promete que posicione para todas las especialidades ni para búsquedas genéricas.

## Orden de trabajo

| Paso | Trabajo y alcance | Comprobación para cerrarlo | Estado |
| --- | --- | --- | --- |
| 1 | Revisar el borrador `seo-copy.md`: nombre profesional, servicios, disponibilidad y mención de mercados. | Cada bloque aprobado o corregido por el propietario; afirmaciones contrastadas con el portafolio. | Pendiente de revisión |
| 2 | Registrar la línea base y seguimiento de Search Console. Revisar portada y sitemap tras el punto de control de 48 horas, sin prometer resolución en ese plazo. | Anotar fecha, indexación, estado de sitemap y métricas disponibles; usar «sin datos» cuando corresponda. | Pendiente de datos externos |
| 3 | Aplicar únicamente el copy aprobado en `index.html`, incluidos título y descripción. Conservar anclas, orden, tarjetas y ventanas. | Comparar cada texto con su identificador del copy; revisar escritorio y móvil, encabezados y botones. | Pendiente del paso 1 y autorización de implementación |
| 4 | Adaptar los cambios a `en/index.html` con inglés natural. Revisar canonical y alternancias en ambas portadas. | Equivalencia de servicios y disponibilidad; enlaces de idioma recíprocos y URLs correctas. No traducir las URLs existentes. | Pendiente del paso 3 |
| 5 | Auditar y corregir solo problemas demostrados de rastreo y semántica: `robots.txt`, sitemap, enlaces, encabezados y textos alternativos. Evaluar datos estructurados `Person` si describen información visible y verificada. | Registrar defecto, cambio y resultado. No marcar como ausente lo que ya existe. Validar XML/JSON cuando se modifiquen. | Pendiente de auditoría y autorización |
| 6 | Medir rendimiento móvil antes de optimizar imágenes, scripts o animaciones. Mantener la experiencia visual. | Guardar medición antes/después con condiciones comparables; revisar estabilidad, carga y funcionamiento. Datos de laboratorio no equivalen a datos reales de usuarios. | Pendiente de medición |
| 7 | Revisar coherencia de identidad y enlaces desde LinkedIn y GitHub hacia el portafolio. | Preparar cambios concretos; el propietario confirma cualquier edición en cuentas externas. No comprar enlaces ni crear menciones ficticias. | Pendiente |
| 8 | Verificación final de cambios y seguimiento de resultados por España y Colombia. | Funciones existentes operativas; sin nuevas URLs de contenido; lectura móvil correcta; registro de resultados y limitaciones. Revisar rendimiento orgánico a las 4 y 8 semanas del despliegue, sin prometer posiciones. | Pendiente de implementación |

## Instrucciones para el implementador

- Leer este roadmap y `seo-copy.md`; implementar solo bloques aprobados y dentro del paso asignado.
- Mantener el enfoque en reclutamiento y colaboración técnica con agencias de marketing, SEO y programación, y empresas de IA. No introducir mensajes de venta directa a clientes finales ni nuevas especialidades por el tipo de empresa destinataria.
- Archivos previstos: `index.html`, `en/index.html`; `styles.css` solo si el nuevo texto requiere ajustes de composición. `robots.txt`, `sitemap.xml`, `script.js` e `i18n/*.js` requieren un problema comprobado y alcance concreto antes de editarse.
- No crear páginas por proyecto, servicio o mercado. Conservar las URLs existentes y los mecanismos de los casos. No convertir la portada en una lista de ciudades o tecnologías.
- No cambiar cifras, formación, autoría, estado de proyectos ni resultados sin evidencia. Mantener diferenciadas formación y experiencia laboral; no convertir ocho años combinados en ocho años de empleo verificado.
- No añadir herramientas de seguimiento, dependencias, formularios, servicios externos ni archivos especiales para IA por iniciativa propia.
- No tocar archivos ajenos ni capturas no rastreadas existentes. No hacer commit, push o despliegue por una instrucción de planificación.
- Para una entrega de implementación, informar archivos cambiados, bloques de copy aplicados, comprobaciones y limitaciones. Actualizar el estado del paso solo tras observar su resultado.
- Comprobaciones previstas: revisión HTML y enlaces; vista móvil/escritorio; navegación, idioma, tema y apertura/cierre de casos. Suite existente desde la raíz del sitio: `node --test tests/education-section.test.js tests/i18n.test.js tests/movimoney-store.test.js`. Registrar fallos previos antes de atribuirlos al cambio. Añadir pruebas solo para comportamiento nuevo o una regresión real.

## Búsquedas con IA y geografía

Para las funciones de IA de Google se mantendrá la misma base: contenido textual útil, accesible, identidad clara y evidencia. Google no exige un marcado especial ni `llms.txt` para esas funciones. Esto no garantiza citas y no describe automáticamente las reglas de otros proveedores.

El español actual atenderá a ambos mercados. No se añadirán `es-ES` y `es-CO` como si existieran páginas regionales distintas. La mención geográfica será puntual y verdadera; no se inventarán oficinas, direcciones, presencia local o disponibilidad presencial. Los datos estructurados ayudan a describir información, no garantizan posiciones ni citas.

## Medición y registro

| Momento | Dato que registrar | Estado inicial |
| --- | --- | --- |
| Antes del despliegue | Fecha, indexación y sitemap; consultas, clics, impresiones y CTR disponibles, con filtros por país y página | Sin línea base cuantitativa |
| Antes/después de cambios técnicos | Rendimiento móvil y condiciones de la prueba | Sin medición |
| 4 y 8 semanas después del despliegue | Comparar períodos equivalentes, consultas de marca y servicios, España y Colombia | Pendiente; anotar si el volumen no permite concluir |
| Cuando haya contactos | Consultas profesionales o laborales atribuibles al portafolio, por registro voluntario del propietario | Sin atribución configurada; no instalar seguimiento por defecto |

En cada paso se anotarán fecha, decisión, archivos afectados, resultado y próximo trabajo. Separar siempre indexación, impresiones, posiciones y contactos: son resultados diferentes.

## Registro de decisiones

- 2026-10-26: el propietario descartó páginas individuales por proyecto y pidió posicionar la one page, conservando la segunda página existente.
- 2026-10-26: inicialmente confirmó ambos públicos y los mercados «España y Colombia». La definición del público queda sustituida por la corrección posterior; se mantienen ambos mercados.
- 2026-10-26, corrección del propietario: «este formulario solo lo veran reclutadores, o colaboradores que quieran colaborar conmigo, es decir, agencias de marketing que necesiten de un desarrollador web, o agencias de SEO, o agencias de programación o empresas de IA. No es para clientes finales». Se actualizan el objetivo, el enfoque de búsqueda y el copy. No se crea ningún formulario ni se modifica la web.
- 2026-10-26: pidió roadmap y archivo nuevo de copy, con servicios precisos y lenguaje natural sin regionalismos argentinos. Se crean estos dos documentos; la web queda pendiente de implementación.
- Recuperación: las decisiones quedan en estos archivos. No se escribió un espejo de memoria porque la resolución previa del proyecto devolvió varias identidades y no existe una selección confirmada.

## Fuentes

Consultadas el 26 de octubre de 2026:

- [Google Search Essentials](https://developers.google.com/search/docs/essentials): contenido útil, términos descriptivos y enlaces rastreables.
- [Guía inicial de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): títulos, contenido y límites de las expectativas.
- [Funciones de IA de Google](https://developers.google.com/search/docs/appearance/ai-features): requisitos y ausencia de optimización especial obligatoria.
- [Sitios multirregionales y multilingües](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites): versiones por idioma y región.
- [SEO de JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): limitaciones de fragmentos y enlaces; se documenta la contrapartida aceptada.
