# Propuesta de copy SEO para la portada

Fecha: 26 de octubre de 2026. Estado: borrador para revisión; no aplicado a la web.
Alcance: portada española. Referencia: [roadmap SEO](seo-roadmap.md).

## Criterio editorial

Español neutro y profesional para España y Colombia. Público: reclutadores y agencias de marketing, SEO y programación, además de empresas de IA que busquen un colaborador técnico. No dirigirse a clientes finales. Primera persona, frases concretas y capacidades ligadas a necesidades de equipos. Evitar promesas de ventas, posiciones, conversiones o resultados no medidos. No repetir países ni tecnologías artificialmente.

Todos los bloques están pendientes de aprobación. Los identificadores permiten aprobar o corregir partes sin aceptar todo el documento. «Daniel Zapata» es la forma profesional propuesta a partir del nombre publicado; confirmar antes de aplicarla. La mención de España y Colombia expresa los mercados deseados, no residencia ni clientes ya atendidos.

## C01. Título de la página

**Ubicación:** `index.html`, elemento `title`.

> Daniel Zapata | Desarrollo de software y diseño UX/UI

Propósito: identificar a la persona y sus dos especialidades. El título actual solo incluye «Daniel». Google puede mostrar un título distinto; no hay un número de caracteres que garantice su visualización completa.

## C02. Descripción para buscadores

**Ubicación:** `meta[name="description"]`.

> Daniel Zapata, desarrollador de software y diseñador UX/UI. Portafolio para oportunidades laborales y colaboración técnica con agencias y empresas.

Propósito: presentar el perfil para reclutamiento y colaboración profesional. Es una propuesta de resumen; Google puede extraer otro texto de la página.

## C03. Encabezado principal

**Ubicación:** `#hero-title`; mantener el tratamiento visual en varias líneas.

> Desarrollador de software
>
> Diseñador UX/UI

Se conserva el mensaje principal actual. No hace falta cambiar un encabezado claro únicamente por SEO.

## C04. Presentación

**Ubicación:** `.hero-description`.

> Soy Daniel Zapata, desarrollador de software y diseñador UX/UI. Colaboro con agencias y equipos en el diseño y desarrollo de sitios web, aplicaciones y herramientas a medida. Puedo asumir una parte concreta de la implementación o participar desde el diseño hasta el desarrollo.

**Botones:** «Ver proyectos» y «Contactar».

Propósito: presentar nombre, oferta y problemas abordados sin convertir formación y trayectoria en una cifra de empleo no verificada.

## C05. Introducción a los proyectos

**Ubicación:** introducción bajo `#projects-title`.

> Estos proyectos muestran cómo conecto diseño y desarrollo para resolver necesidades concretas. En cada caso explico el problema, mi participación, las decisiones y el resultado del trabajo.

Mantener los títulos, roles y resúmenes actuales de las tarjetas salvo corrección puntual aprobada. No atribuir una web completa cuando el trabajo consistió en una mejora, auditoría o implementación de un diseño ajeno. El acceso al caso completo sigue en su ventana actual.

## C06. Encabezado e introducción de servicios

**Ubicación:** `#services-title` e introducción de la sección `#servicios`.

**Encabezado:**

> Desarrollo web, software y diseño UX/UI

**Introducción:**

> Puedo aportar capacidad de diseño y desarrollo a agencias de marketing, SEO y programación, y a empresas de IA que necesiten construir o mejorar interfaces y aplicaciones web. Me integro en el contexto del equipo para asumir una implementación, resolver una funcionalidad o dar continuidad entre diseño y desarrollo.

Propósito: explicar qué puede aportar el perfil a las organizaciones destinatarias. No implica ofrecer entrenamiento de modelos ni consultoría SEO. Revisar el ajuste del encabezado en móvil; no cambiar la estructura de la sección.

## C07. Servicio A: diseño UX/UI

**Ubicación:** primer `.service-item`.

**Título:**

> Diseño UX/UI y mejora de experiencias

**Descripción:**

> Apoyo a los equipos en el análisis y diseño de sitios web, formularios y procesos. Identifico dificultades de uso, organizo contenidos y recorridos, y preparo wireframes e interfaces en Figma para orientar la implementación y facilitar las tareas de las personas usuarias.

**Capacidades:** investigación UX · flujos y contenidos · wireframes · diseño de interfaces.

Problema abordado: experiencias difíciles de entender o recorrer. No afirmar mejoras de conversión sin medición.

## C08. Servicio B: desarrollo web y software

**Ubicación:** segundo `.service-item`.

**Título:**

> Desarrollo web y aplicaciones a medida

**Descripción:**

> Colaboro en la implementación de sitios y aplicaciones web: paneles de gestión, herramientas internas e interfaces conectadas con datos y servicios. Trabajo con JavaScript, React, Next.js y Astro, y convierto diseños de Figma en interfaces funcionales que se adaptan a distintos dispositivos, según las necesidades del equipo y del proyecto.

**Capacidades:** desarrollo frontend · aplicaciones web · integración de APIs · interfaces desde Figma.

Problema abordado: procesos que necesitan una herramienta propia o un diseño que todavía debe implementarse. La selección de tecnologías depende del proyecto; no se presentan como obligatorias para todos los encargos.

## C09. Servicio C: WordPress y comercio electrónico

**Ubicación:** tercer `.service-item`.

**Título:**

> WordPress y tiendas online

**Descripción:**

> Colaboro con agencias y equipos en la implementación y el mantenimiento de sitios corporativos y tiendas online. Trabajo con WordPress, Elementor Pro y WooCommerce, desarrollo funcionalidades a medida e integro formularios con Gravity Forms. También implemento tiendas en PrestaShop y adapto la solución al diseño y los requisitos definidos para el proyecto.

**Capacidades:** WordPress y Elementor · WooCommerce y PrestaShop · formularios · funcionalidades a medida.

Problema abordado: equipos que necesitan capacidad técnica para implementar o mantener sitios y tiendas. No prometer soporte permanente, disponibilidad horaria o mantenimiento incluido en todos los proyectos.

## C10. Cierre de servicios

**Ubicación:** `.service-note`.

> Puedo colaborar en una fase concreta o acompañar al equipo desde el diseño hasta la implementación. Antes de comenzar, revisamos el contexto, las responsabilidades y el alcance de mi participación.

Propósito: explicar el siguiente paso sin repetir el listado completo de servicios.

## C11. Perfil profesional

**Ubicación:** `#about-title` y `.about-lead`.

**Encabezado:**

> Soy Daniel Zapata

**Introducción:**

> Soy desarrollador de software y diseñador UX/UI. Mi trabajo conecta la comprensión del problema, el diseño de la experiencia y la implementación técnica. Puedo colaborar con empresas, agencias y equipos de producto, tanto en proyectos concretos como en oportunidades laborales.

Mantener los párrafos actuales sobre formación, recorrido técnico y uso de IA. Revisar por separado cualquier cifra de experiencia antes de modificarla. No afirmar titulaciones completadas cuando la formación publicada no las identifica como tales.

## C12. Contacto y mercados

**Ubicación:** `#contact-title` y textos de `.contact-copy`.

**Encabezado:**

> Hablemos de una colaboración

**Texto:**

> Estoy abierto a oportunidades laborales y colaboraciones con agencias de marketing, SEO y programación, y con empresas de IA de España y Colombia que necesiten un desarrollador de software con experiencia en diseño UX/UI.

> Cuéntame qué perfil necesita el equipo, qué trabajo hay que abordar y qué tipo de colaboración u oportunidad laboral planteas.

**Enlaces:** conservar LinkedIn, GitHub, WhatsApp y correo existentes.

Confirmar la disponibilidad expresada antes de publicar. No implica residencia, oficina, contratación internacional resuelta ni disponibilidad presencial en ambos países.

## Revisión antes de implementar

- [ ] Confirmar «Daniel Zapata» como nombre profesional visible.
- [ ] Aprobar o corregir C01–C12 por identificador.
- [ ] Confirmar que los servicios describen las capacidades que se desean aportar a agencias y equipos, sin venta directa a clientes finales.
- [ ] Confirmar disponibilidad para proyectos y oportunidades laborales en ambos mercados.
- [ ] Adaptar el copy aprobado al inglés antes de cerrar la entrega multilingüe.
- [ ] Revisar la composición de títulos, tarjetas y contacto en móvil y escritorio.

La sección de proceso, formación, casos completos y textos de IA no requiere reescritura dentro de esta propuesta. Cualquier cambio adicional debe quedar identificado y revisado, sin alterar afirmaciones verificadas por motivos de SEO.
