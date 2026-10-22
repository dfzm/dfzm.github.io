// Spanish locale: interface copy and case-study content for the site at /.
window.PORTFOLIO_I18N = {
  lang: "es",
  hashKey: "proyecto",
  ui: {
    mediaStates: {
      before: "Antes",
      proposal: "Propuesta",
      live: "En producción"
    },
    media: {
      placeholderLabel: "Espacio reservado: {label}",
      expandLabel: "Ampliar {label}",
      expandText: "Ampliar imagen",
      sourceLabel: "Ver página pública de {label} en una pestaña nueva",
      sourceText: "Ver página pública",
      videoFallback: "Tu navegador no puede reproducir este vídeo.",
      videoDownload: "Descargar el vídeo de {label}",
      scrubLabel: "Visor interactivo: {label}",
      scrubHint: "Desplázate aquí para recorrer"
    },
    case: {
      startDate: "Inicio del desarrollo",
      category: "Categoría",
      role: "Mi rol",
      status: "Estado",
      challenge: "El reto",
      participation: "Mi participación",
      process: "Proceso",
      deliverables: "Entregables",
      technology: "Tecnología",
      note: "Estado y límites"
    },
    newTab: "(se abre en una pestaña nueva)",
    downloadApk: "Descargar la APK",
    store: {
      label: "Ver MoviMoney en Google Play (se abre en una pestaña nueva)",
      badgeSrc: "imgs proyectos/google-play-badge-es.png",
      badgeAlt: "Disponible en Google Play"
    },
    announcer: {
      projectOpened: "Caso de {title} abierto.",
      projectClosed: "Caso de proyecto cerrado.",
      lightboxStep: "Imagen {current} de {total}. {label}"
    },
    theme: {
      toLight: "Activar tema claro",
      toDark: "Activar tema oscuro",
      lightText: "Claro",
      darkText: "Oscuro"
    }
  },
  projects: {
    "ca-na-tess": {
      index: "01",
      title: "Ca na Tess",
      category: "Proyecto profesional",
      status: "Publicado · 2026",
      role: "Rediseño UX/UI + investigación de contenido + desarrollo",
      color: "#e7c9bc",
      summary: "Rediseñé y desarrollé el formulario de consulta nutricional de Ca na Tess para pasar de un formulario externo de 12 pasos a una experiencia integrada de 7 pasos, preparada para consultas sobre perros y gatos.",
      challenge: "El formulario original estaba separado de la web, distribuido en 12 pasos y planteado principalmente para perros. El reto fue integrarlo en una experiencia de 7 pasos y adaptar sus preguntas para que también funcionaran en consultas sobre gatos, sin perder claridad.",
      participation: "Analicé el formulario y sus preguntas, investigué las diferencias entre ambos escenarios, reorganicé la estructura, revisé textos y campos, diseñé la interfaz y desarrollé la integración en el sitio web.",
      process: [
        ["Auditoría del formulario original", "Revisé la estructura de Google Forms y detecté que muchas preguntas estaban pensadas principalmente para perros."],
        ["Investigación y adaptación", "Investigué qué información debía mantenerse, ajustarse o abrirse para consultas de perros y gatos, y adapté el lenguaje del formulario."],
        ["Reorganización del flujo", "Reorganicé los campos para pasar de 12 pasos a 7 y agrupé la información de forma más clara."],
        ["Diseño de la interfaz", "Diseñé una interfaz integrada visualmente con la web y el contexto de la consulta nutricional."],
        ["Desarrollo e integración", "Implementé el formulario con Gravity Forms en WordPress y sustituí el proceso externo."]
      ],
      deliverables: ["Nueva estructura de 7 pasos", "Adaptación del cuestionario para perros y gatos", "Preguntas, textos y campos revisados", "Interfaz del formulario", "Formulario integrado en WordPress"],
      technology: "UX/UI · Figma · WordPress · Gravity Forms",
      link: "https://canatess.com/consulta-nutricional",
      linkLabel: "Visitar consulta nutricional de Ca na Tess",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Del formulario externo al flujo integrado",
          intro: "Estas capturas muestran el formulario externo original que dio pie al rediseño y a su integración dentro de la web.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/CANATESS/FORMULARIO DE ANTES 1.png", width: 972, height: 992, alt: "Primera captura del formulario externo original de Ca na Tess", label: "Estado anterior", caption: "Primer tramo del formulario externo que se reorganizó para integrarlo dentro de la experiencia web.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/FORMULARIO DE ANTES 2.png", width: 962, height: 1022, alt: "Segunda captura del formulario externo original de Ca na Tess", label: "Estado anterior", caption: "Segunda vista del formulario anterior que evidencia la extensión y distribución del proceso.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "Diseño de interfaz",
          intro: "La propuesta visual convierte la estructura común para perros y gatos en una experiencia coherente con el sitio y preparada para su implementación.",
          layout: "asymmetric",
          items: [
            { type: "image", src: "Proyectos/CANATESS/FIGMA 2.png", width: 1635, height: 980, alt: "Diseño principal en Figma del formulario nutricional de Ca na Tess para perros y gatos", label: "Diseño de interfaz", caption: "Vista principal del formulario rediseñado y de la jerarquía común para ambos escenarios.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/FIGMA 1.png", width: 1595, height: 976, alt: "Iteración complementaria en Figma del formulario de Ca na Tess para perros y gatos", label: "Iteración en Figma", caption: "Evidencia complementaria de la exploración y ajuste de la interfaz para ambos escenarios.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Resultado implementado",
          intro: "El resultado final combina la experiencia implementada en escritorio con su adaptación responsive para móvil.",
          layout: "implementation",
          items: [
            { type: "image", src: "Proyectos/CANATESS/web-1.gif", width: 1902, height: 946, alt: "Demostración animada del formulario integrado de Ca na Tess en escritorio", label: "Implementación · escritorio", caption: "Demostración animada del formulario integrado y de su recorrido en la web.", expandable: true },
            { type: "image", src: "Proyectos/CANATESS/Web 2.png", width: 427, height: 925, alt: "Versión móvil del formulario integrado de Ca na Tess", label: "Implementación · móvil", caption: "Adaptación responsive del formulario integrado para pantallas móviles.", expandable: true }
          ]
        }
      ]
    },
    colive: {
      index: "02",
      title: "Colive",
      category: "Proyecto profesional",
      status: "Propuestas implementadas · 2025",
      role: "Auditoría UX/UI · wireframes · diseño de alta fidelidad",
      color: "#a9c1ec",
      summary: "Audité el proceso de reserva de Colive paso a paso, desde la búsqueda hasta el pago de la fianza, y convertí cada fricción en una propuesta concreta. El equipo de Colive llevó buena parte de esas propuestas al sitio público.",
      challenge: "Reservar una habitación en colive.es exigía atravesar siete pantallas. El calendario solo dejaba elegir meses completos, aceptaba rangos que incumplían la estancia mínima, la ficha no confirmaba si la habitación estaba libre para tus fechas, el acceso sacaba a la persona fuera del recorrido y los datos de facturación se pedían después de haber pagado. El reto era demostrar cada punto con evidencia y proponer un recorrido continuo que el equipo pudiera construir.",
      participation: "Recorrí y documenté el proceso completo como lo haría alguien buscando habitación, ordené los hallazgos por el momento en que aparecen y por lo que le cuestan a quien reserva, redibujé la arquitectura del recorrido, monté wireframes animados para validar la secuencia y diseñé las pantallas finales. La revisión cubrió también el perfil post-reserva, los correos automáticos y tres páginas institucionales.",
      process: [
        ["Auditoría del recorrido", "Recorrí la reserva completa de colive.es como un usuario real, desde la búsqueda hasta el pago de la fianza, y documenté cada punto donde el recorrido se rompía."],
        ["Diagnóstico y prioridades", "Ordené los hallazgos por el momento del recorrido en que aparecen y por su coste: primero los que impiden avanzar, después los que siembran dudas."],
        ["Arquitectura y wireframes", "Rehíce el recorrido en Figma como una secuencia continua y la validé en wireframes animados antes de tocar la interfaz."],
        ["Diseño de alta fidelidad", "Diseñé búsqueda, disponibilidad y reserva con el acceso, los extras, la facturación y el pago dentro del mismo contexto, además de las pantallas de Mi cuenta."],
        ["Entrega y adopción", "Presenté la auditoría con cada hallazgo emparejado con su solución. El equipo de Colive implementó buena parte de las propuestas en el sitio público."]
      ],
      deliverables: ["Auditoría UX/UI del proceso de reserva", "Auditoría del perfil post-reserva", "Arquitectura del recorrido de reserva", "Wireframes animados de los cuatro pasos", "Diseño de alta fidelidad en Figma", "Propuestas para correos y páginas institucionales"],
      technology: "Auditoría UX/UI · Wireframes · Diseño de alta fidelidad · Figma",
      link: "https://colive.es/",
      linkLabel: "Visitar el sitio de Colive",
      note: "La auditoría, los wireframes y el diseño de alta fidelidad son míos; el desarrollo lo llevó el equipo de Colive. No participé en la implementación y la medición de resultados no formó parte del alcance, así que la comparación con el sitio público es visual y no incluye métricas. Las propuestas de Mi cuenta no llegaron a publicarse. Los correos post-reserva y las páginas institucionales quedan fuera de esta selección por no tener exportaciones publicables.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "El recorrido que había que auditar",
          intro: "Así se buscaba habitación en colive.es en 2025. Estas tres pantallas son el punto de partida: en ellas empiezan casi todos los hallazgos.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Home.png", width: 1897, height: 865, alt: "Página de inicio de Colive en 2025 con un buscador que solo permite elegir meses", label: "Inicio · 2025", caption: "El buscador pedía llegada y salida por mes completo. Debajo, «Días mínimos de estancia: 32» aparecía como texto informativo, sin ninguna acción asociada.", expandable: true, featured: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Listado.png", width: 1884, height: 897, alt: "Listado de habitaciones de Colive en 2025 con los filtros ocupando tres filas", label: "Resultados · 2025", caption: "Los filtros ocupaban tres filas antes de la primera habitación, y las fechas alternativas se listaban como enlaces de texto azul.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Habitacion.png", width: 1559, height: 672, alt: "Ficha de habitación de Colive en 2025 con los botones Contactar y Reservar en rojo", label: "Ficha de habitación · 2025", caption: "La ficha mostraba precio y fechas, pero nunca confirmaba si esa habitación estaba libre para el rango elegido. «CONTACTAR» pesaba visualmente lo mismo que «RESERVAR».", expandable: true }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "Y siete pantallas más para llegar a pagar",
          intro: "Desde el botón «Reservar» hasta la confirmación había siete pantallas completas, cada una con su cabecera, su fondo y su propio indicador de pasos. Ninguna recordaba en qué habitación ni en qué fechas estabas.",
          layout: "storyboard",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 1.png", width: 1676, height: 532, alt: "Página de inicio de sesión de Colive en 2025, a pantalla completa y fuera del proceso de reserva", label: "Paso 1 · iniciar sesión", caption: "Pulsar «Reservar» llevaba a una página de login genérica. La reserva desaparecía de la pantalla.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 2.png", width: 1510, height: 665, alt: "Formulario de registro de usuario de Colive en 2025 con seis campos obligatorios", label: "Paso 2 · registrarse", caption: "Quien no tuviera cuenta saltaba a otra página más, con seis campos obligatorios antes de poder continuar.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 3.png", width: 1288, height: 529, alt: "Pantalla de Colive avisando de que se ha enviado un correo de confirmación de registro", label: "Paso 3 · revisar el correo", caption: "Una tercera pantalla pedía salir del sitio, abrir el correo y volver.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 4.png", width: 1278, height: 532, alt: "Pantalla de usuario activado en Colive con un botón para ver la última habitación", label: "Paso 4 · volver", caption: "Tras activar la cuenta, un botón «Ver última habitación» intentaba devolver a la persona al punto donde lo había dejado.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 5.png", width: 1326, height: 1223, alt: "Página de detalles de la reserva de Colive con extras, forma de pago y observaciones en una sola columna", label: "Paso 5 · detalles y extras", caption: "Los datos de la reserva se presentaban como una lista de texto, seguidos de extras, forma de pago, observaciones y condiciones legales en una única página.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 6.png", width: 1480, height: 746, alt: "Pantalla intermedia de Colive avisando en rojo de la redirección a un TPV virtual externo", label: "Paso 6 · pantalla intermedia", caption: "Antes de pagar aparecía una pantalla puente con un aviso en rojo: «Vas a ser redirigido a un TPV Virtual externo. Por favor, no cierres la pestaña».", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 7.png", width: 1288, height: 1449, alt: "Formulario de datos personales y de facturación de Colive mostrado después de haber pagado", label: "Paso 7 · facturación, ya pagado", caption: "Después del pago llegaba el formulario más largo de todos. Su indicador marcaba tres pasos; el de la pantalla anterior marcaba cuatro, con otros nombres.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "La arquitectura, antes de dibujar nada",
          intro: "Antes de diseñar pantallas reconstruí el recorrido completo en Figma: qué pasos existen, cuáles sobran y en qué momento la persona necesita ver el contexto de su reserva.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/wireframes/FIGMA 1.png", width: 1657, height: 985, alt: "Lienzo de trabajo en Figma con el recorrido de reserva de Colive conectado con flechas", label: "Mapa de trabajo", caption: "El lienzo completo: pantallas conectadas con flechas, estados de disponibilidad y las variantes de acceso que había que resolver.", expandable: true, featured: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/wireframe-proceso-reserva-1.png", width: 1340, height: 796, alt: "Wireframe del proceso de reserva de Colive con un acordeón de cuatro pasos y el resumen al lado", label: "La decisión central", caption: "Dos columnas: a la izquierda los cuatro pasos en acordeón, a la derecha el resumen de la reserva siempre visible. Las siete pantallas pasan a ser una.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/FIGMA 2.png", width: 1162, height: 897, alt: "Wireframe de las opciones de acceso de Colive junto al resumen de la reserva", label: "Detalle del acceso", caption: "Las opciones de acceso — Google, Apple, correo o registro — resueltas dentro del mismo panel, sin abandonar la reserva.", expandable: true }
          ]
        },
        {
          placement: "afterParticipation",
          heading: "Wireframes en movimiento",
          intro: "Los wireframes se prototiparon animados para comprobar que la secuencia se sostenía antes de invertir en interfaz. Cada demostración corresponde a un momento del recorrido.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-calendario-por-dias.gif", width: 1280, height: 720, alt: "Demostración animada de los campos de entrada y salida por día propuestos para Colive", label: "Fechas por día", caption: "Entrada y salida como fechas concretas, con la salida bloqueada hasta que se elige la llegada.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wiframe-filtros.gif", width: 1280, height: 720, alt: "Demostración animada de los filtros horizontales propuestos para el listado de Colive", label: "Filtros en una fila", caption: "Cada filtro es un botón que abre sus opciones en un desplegable, sin robar espacio vertical a los resultados.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/primeros-wiframe-panel-reserva.gif", width: 1920, height: 812, alt: "Demostración animada del primer panel de reserva propuesto para Colive", label: "Primer panel de reserva", caption: "Primera versión del panel de reserva con el resumen a la derecha, todavía en gris.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-1.gif", width: 798, height: 338, alt: "Demostración animada del paso de acceso dentro del proceso de reserva de Colive", label: "Paso 1 · acceso", caption: "Iniciar sesión o registrarse en un modal sobre la propia reserva. Al terminar, el paso 2 se habilita solo.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-2-3.gif", width: 798, height: 338, alt: "Demostración animada de los pasos de extras y facturación en la reserva de Colive", label: "Pasos 2 y 3 · extras y facturación", caption: "Los extras se suman al resumen en tiempo real y la facturación se completa antes del pago, no después.", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/GIF/wireframe-inicio-proceso-reserva-paso-3-4.gif", width: 798, height: 338, alt: "Demostración animada del pago con TPV embebido en la reserva de Colive", label: "Pasos 3 y 4 · pago", caption: "El TPV se abre como modal dentro de Colive, con el importe de la fianza anunciado antes de abrirlo.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Hallazgo 01 · La búsqueda no dejaba empezar",
          intro: "Si aún no sabías tus fechas, la portada no te ofrecía nada: ni habitaciones, ni una salida alternativa visible. Propuse sacar esa salida del calendario y ponerla debajo de los campos.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/buscador-home.png", width: 1025, height: 198, alt: "Buscador de la portada de Colive en 2025 con llegada y salida por mes", label: "Buscador de portada", caption: "Llegada y salida por mes, y una estancia mínima anunciada como texto suelto. Sin fechas no había forma de avanzar.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide10_image3.png", width: 893, height: 397, alt: "Módulo de búsqueda propuesto para Colive con el botón Explorar opciones sin fechas debajo de los campos", label: "Módulo de búsqueda", caption: "«¿No tienes fechas específicas en mente?» y un botón propio para explorar sin fechas, fuera del calendario y visible desde el primer momento.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/home.png", width: 1912, height: 1081, alt: "Portada actual de colive.es con el botón Explorar opciones sin fechas bajo el buscador", label: "colive.es hoy", caption: "La portada pública actual incorpora el módulo tal cual se propuso, con el botón «Explorar opciones sin fechas» debajo de los campos.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detalle · el calendario y el botón enterrado",
          intro: "Dos evidencias del mismo problema. El calendario obligaba a razonar en meses cuando la decisión es en días, y la única salida para quien no tenía fechas estaba escondida dentro del propio calendario.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/calendario-meses.png", width: 346, height: 399, alt: "Calendario de Colive en 2025 mostrando una rejilla de meses en lugar de días", label: "Rejilla de meses", caption: "Al abrir la fecha aparecía una rejilla de meses. Elegir «del 3 al 28 de junio» no era posible.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/calendario-boton-oculto.png", width: 402, height: 606, alt: "Calendario de Colive con el botón Aún no lo sé oculto debajo de la rejilla de meses", label: "«Aún no lo sé», enterrado", caption: "La alternativa para quien no tenía fechas vivía dentro del calendario, debajo de los meses. Había que abrirlo para descubrirla.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/calendario-por-dias.png", width: 428, height: 549, alt: "Calendario propuesto para Colive con vista por días de la semana", label: "Selección por días", caption: "Vista por días desde el primer clic, el patrón que la gente ya conoce de Airbnb o Booking, con la salida validada contra la estancia mínima.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Hallazgo 02 · Los filtros competían con las habitaciones",
          intro: "En la página de resultados, los filtros consumían tres filas antes de que apareciera la primera habitación. Propuse comprimirlos en una sola línea de botones con desplegable.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/filtros-tres-filas.png", width: 1857, height: 237, alt: "Filtros del listado de Colive en 2025 repartidos en tres filas con un deslizador de precio", label: "Tres filas de filtros", caption: "Ciudad, distrito, fechas, precio, habitación, orden y dos casillas sueltas, repartidos en tres filas de distinta altura.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/filtros-horizontales.png", width: 1874, height: 113, alt: "Barra de filtros horizontal propuesta para Colive con siete botones con icono", label: "Una sola línea", caption: "Siete botones con icono y etiqueta en una única fila. Cada uno abre sus opciones al pulsarlo, en lugar de ocupar espacio permanente.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/listado.png", width: 1912, height: 1087, alt: "Listado actual de colive.es con los filtros en una sola fila horizontal", label: "colive.es hoy", caption: "El listado público actual usa la barra de filtros en una fila, y las habitaciones empiezan mucho antes en la página.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detalle · fechas alternativas que parecían texto muerto",
          intro: "Cuando había pocos resultados, el sitio sugería otros rangos de fechas. Pero los presentaba como líneas de texto azul, sin jerarquía ni forma de botón: nadie sabía si eran informativas o clicables. Esta propuesta también está hoy en el listado público.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/fechas-alternativas-texto.png", width: 838, height: 186, alt: "Fechas alternativas de Colive en 2025 mostradas como líneas de texto azul", label: "Enlaces de texto", caption: "«Noviembre - 2025 -> Diciembre - 2025: 149 habitaciones disponibles», repetido tres veces en texto plano.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide14_image15.png", width: 1711, height: 237, alt: "Tarjetas de fechas alternativas propuestas para Colive con icono de calendario y número de habitaciones", label: "Tarjetas clicables", caption: "Tarjetas con icono de calendario, el rango legible y el número de habitaciones destacado, separadas de la búsqueda actual.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Hallazgo 03 · La ficha no confirmaba nada",
          intro: "Llegabas a una habitación y seguías sin saber lo único que importaba: si estaba libre para tus fechas. Y el botón de contacto pesaba lo mismo que el de reservar.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/habitacion-cta.png", width: 355, height: 272, alt: "Panel de reserva de una habitación de Colive en 2025 con los botones Contactar y Reservar en rojo", label: "Sin confirmación", caption: "Fechas, precio tachado y dos botones rojos idénticos. Ninguna señal de disponibilidad para el rango elegido.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/wireframes/slide22_image37.png", width: 820, height: 634, alt: "Panel de reserva propuesto para Colive con el mensaje de habitación disponible para las fechas seleccionadas", label: "Confirmación explícita", caption: "«¡Esta habitación está disponible para tus fechas seleccionadas!» y «CONTACTAR» convertido en «¿TIENES DUDAS?», subordinado a «RESERVAR AHORA».", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/habitacion.png", width: 607, height: 626, alt: "Panel de reserva actual de colive.es con la confirmación de disponibilidad y el botón Reservar ahora", label: "colive.es hoy", caption: "El panel público actual muestra la confirmación de disponibilidad, el aviso de pocas habitaciones y la jerarquía de botones tal como se propuso.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Hallazgo 04 · Reservar te expulsaba del recorrido",
          intro: "Este es el cambio que más pesa. Las siete pantallas se reducen a una: cuatro pasos en acordeón a la izquierda y el resumen de la reserva siempre visible a la derecha.",
          layout: "chain",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 1.png", width: 1676, height: 532, alt: "Página de inicio de sesión de Colive en 2025 sin ninguna referencia a la reserva en curso", label: "Login a pantalla completa", caption: "Pulsar «Reservar» abría un login genérico sobre una foto de portada. Ni habitación, ni fechas, ni precio a la vista.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide27_image25.png", width: 938, height: 495, alt: "Diseño propuesto para Colive con acordeón de cuatro pasos y resumen de la reserva al lado", label: "Cuatro pasos y un resumen", caption: "Acceso, extras, facturación y confirmación como pasos que se habilitan en orden, con fechas, duración y precio total permanentemente a la vista.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/web publica/inicio-proceso-reserva.png", width: 1911, height: 1090, alt: "Proceso de reserva actual de colive.es con acordeón de cuatro pasos y detalles de la reserva a la derecha", label: "colive.es hoy", caption: "La reserva pública actual es una sola pantalla con los cuatro pasos numerados y el desglose de la reserva a la derecha, incluida la fianza.", state: "live", sourceUrl: "https://colive.es/", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Detalle · acceder sin salir de la reserva",
          intro: "El registro estaba repartido en cuatro páginas encadenadas. La propuesta lo resuelve en un modal sobre la propia reserva, con acceso rápido por Google o Apple y verificación por código solo si haces registro manual.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 2.png", width: 1510, height: 665, alt: "Formulario de registro de Colive en 2025 en una página independiente", label: "Registro en otra página", caption: "Primera de las cuatro páginas del registro: seis campos, y después el correo de activación y la vuelta manual al sitio.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/slide27_image29.png", width: 1462, height: 725, alt: "Modal de acceso propuesto para Colive con opciones de Google, Apple, correo y registro", label: "Modal sobre la reserva", caption: "Cuatro rutas de acceso en un modal, con la reserva visible detrás. Al cerrarse, el paso siguiente se habilita solo.", state: "proposal", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Hallazgo 05 · Se facturaba después de pagar",
          intro: "El final del recorrido invertía el orden lógico: primero la pasarela externa, después el formulario de facturación. En la propuesta la facturación es el paso 3, antes del pago, y el TPV se abre dentro de Colive con el importe anunciado de antemano.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 6.png", width: 1480, height: 746, alt: "Pantalla intermedia de pago de Colive en 2025 con aviso rojo de redirección a un TPV externo", label: "Salto al TPV externo", caption: "Una pantalla puente y un aviso en rojo advirtiendo de que se abandonaba el sitio. Su indicador marcaba cuatro pasos.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/Reservar 7.png", width: 1288, height: 1449, alt: "Formulario de datos personales y de facturación de Colive solicitado después del pago", label: "Facturación, ya pagado", caption: "El formulario más largo del proceso llegaba cuando la persona ya creía haber terminado. Y su indicador marcaba tres pasos, con nombres distintos a los de la pantalla anterior.", state: "before", expandable: true }
          ]
        },
        {
          placement: "afterDeliverables",
          heading: "Mi cuenta · la parte que no llegó a producción",
          intro: "La auditoría cubrió también el perfil posterior a la reserva. Estas tres propuestas se entregaron y hasta hoy no se han publicado, así que aquí solo hay antes y propuesta.",
          layout: "chain-pair",
          items: [
            { type: "image", src: "Proyectos/COLIVE/antes/menu-mi-cuenta.png", width: 255, height: 381, alt: "Menú desplegable de usuario de Colive en 2025 con siete entradas apiladas", label: "Menú de usuario", caption: "Siete entradas apiladas en el desplegable de la cabecera, sin agrupar ni jerarquizar.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/menu-mi-cuenta.png", width: 339, height: 338, alt: "Menú de usuario propuesto para Colive reducido a Mi Cuenta, Favoritos y Cerrar Sesión", label: "Un solo destino", caption: "El desplegable se reduce a tres entradas y todas las secciones pasan a vivir dentro de «Mi Cuenta», con navegación lateral fija.", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/pagos-contrato.png", width: 424, height: 338, alt: "Sección de pagos de contrato de Colive en 2025 con casillas marcadas y sin total", label: "Pagos de contrato", caption: "La sección se llamaba «Pago contratos» y mostraba casillas marcadas sin ningún total ni acción final de pago.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/cobros-y-pagos.png", width: 1565, height: 928, alt: "Diseño propuesto de Cobros y Pagos para Colive con estados, conceptos seleccionables y total a pagar", label: "Cobros y pagos", caption: "Tarjetas con estado «Pagado» o «Pendiente», conceptos seleccionables, total calculado en tiempo real y un único botón «Pagar Ahora».", state: "proposal", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/antes/documentos.png", width: 463, height: 307, alt: "Sección de documentos de Colive en 2025 con contratos y facturas como enlaces de texto", label: "Documentos", caption: "Contratos y facturas listados como enlaces de texto, sin fecha de emisión ni acciones para ver o descargar.", state: "before", expandable: true },
            { type: "image", src: "Proyectos/COLIVE/diseño de Alta fidelidad/contratos-y-facturas.png", width: 1369, height: 549, alt: "Diseño propuesto de Contratos y Facturas para Colive con tarjetas, fecha y botones Ver y Descargar", label: "Contratos y facturas", caption: "Cada documento como una tarjeta con icono, título legible, fecha de creación y los botones «Ver» y «Descargar» a mano.", state: "proposal", expandable: true }
          ]
        }
      ]
    },
    mega: {
      index: "03",
      title: "Mega",
      category: "Proyecto profesional",
      status: "Publicado · 2025",
      role: "Implementación front-end a partir de un diseño existente",
      color: "#e9d154",
      summary: "Convertí en un sitio web funcional el diseño completo de Mega definido en Figma. Implementé sus pantallas en Elementor Pro sobre WordPress y ajusté la interfaz para conservar la composición en escritorio y móvil.",
      challenge: "El reto era llevar un diseño ya definido a un entorno web real y editable, respetando la composición, los componentes y la jerarquía de contenidos sin perder fidelidad al pasar de Figma a Elementor Pro.",
      participation: "Mi responsabilidad fue convertir el diseño recibido en una implementación funcional: preparé la estructura, construí las pantallas, resolví su adaptación responsive y revisé el resultado frente a Figma. El diseño visual original no fue realizado por mí.",
      process: [
        ["Revisión del diseño recibido", "Revisé pantallas, componentes, estados y reglas visuales definidas en Figma."],
        ["Preparación de la estructura", "Organicé páginas y secciones para conservar la edición dentro de WordPress."],
        ["Implementación", "Construí las pantallas y componentes en Elementor Pro sobre WordPress."],
        ["Adaptación responsive", "Ajusté distribución, tamaños y espacios para distintos tamaños de pantalla."],
        ["Revisión visual", "Comparé la implementación con la referencia y corregí las diferencias detectadas."]
      ],
      deliverables: ["Estructura de páginas en Elementor Pro", "Pantallas y componentes implementados", "Adaptación responsive", "Revisión frente al diseño de Figma"],
      technology: "WordPress · Elementor Pro · Responsive",
      link: "https://www.mega.nl/",
      linkLabel: "Visitar el sitio de Mega",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Dos diseños, una instalación de WordPress",
          intro: "El encargo reunía dos experiencias dentro de la misma instalación de WordPress: Mega para clientes particulares y Mega Zakelijk para empresas. Implementé ambas a partir de dos diseños distintos en Figma, manteniendo sus componentes, navegación y responsive diferenciados dentro de una única instalación editable.",
          layout: "full",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Marcador temporal para las referencias visuales de Mega", label: "Muestra visual temporal · Mega", caption: "Las imágenes de referencia de Figma se han ocultado temporalmente. El diseño original fue realizado por el equipo de Selva Digital." }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · escritorio",
          intro: "Las dos páginas de inicio se publicaron en la misma instalación editable, conservando la identidad y la jerarquía de cada experiencia.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/MEGA/pagina-entera.optimized.jpg", width: 1920, height: 7453, alt: "Página de inicio pública completa de Mega Particulares en escritorio", label: "Implementación pública · Mega · Particulares", caption: "Captura completa de la implementación pública de Mega Particulares en escritorio, preparada para inspeccionarla dentro del visor.", sourceUrl: "https://www.mega.nl/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/MEGA/pagina-entera-zakelijk.optimized.jpg", width: 1920, height: 6853, alt: "Página de inicio pública completa de Mega Zakelijk para empresas en escritorio", label: "Implementación pública · Mega Zakelijk · Empresas", caption: "Captura completa de la implementación pública de Mega Zakelijk en escritorio, preparada para inspeccionarla dentro del visor.", sourceUrl: "https://www.mega.nl/zakelijk/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · móvil",
          intro: "El responsive se resolvió para cada diseño por separado, adaptando composición, navegación y escala al viewport móvil.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/MEGA/pagina-entera-mega-movil.optimized.webp", width: 429, height: 9969, alt: "Página de inicio pública completa de Mega Particulares en móvil", label: "Implementación pública · Mega · Particulares · móvil", caption: "Captura completa de la implementación pública de Mega Particulares en móvil.", sourceUrl: "https://www.mega.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos/MEGA/pagina-entera-zakelijk-movil.optimized.webp", width: 429, height: 8825, alt: "Página de inicio pública completa de Mega Zakelijk para empresas en móvil", label: "Implementación pública · Mega Zakelijk · Empresas · móvil", caption: "Captura completa de la implementación pública de Mega Zakelijk en móvil.", sourceUrl: "https://www.mega.nl/zakelijk/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        }
      ]
    },
    "barcelo-indajaus": {
      index: "04",
      title: "Barceló Indajaus",
      category: "Proyecto profesional",
      status: "Publicado · 2024",
      role: "Implementación e-commerce a partir de una referencia existente",
      color: "#d96a4d",
      summary: "Reproduje en PrestaShop la tienda de Barceló Indajaus que existía en WordPress, trasladando su estructura visual y su experiencia de catálogo y producto al nuevo entorno.",
      challenge: "El reto no era crear una nueva dirección visual, sino reproducir una tienda existente dentro de otra plataforma, manteniendo la identidad y la estructura de la referencia de WordPress.",
      participation: "Analicé la referencia, trasladé la estructura de la tienda a PrestaShop, adapté la presentación del catálogo y los productos, y revisé visualmente la implementación. El diseño original no fue realizado por mí.",
      process: [
        ["Revisión de la referencia", "Analicé tipos de página, navegación, composición y patrones visuales de la web existente."],
        ["Estructura e-commerce", "Mapeé entrada, navegación, catálogo, categorías y páginas de producto."],
        ["Implementación en PrestaShop", "Adapté la referencia visual a las plantillas y componentes disponibles."],
        ["Adaptación responsive", "Revisé navegación, catálogo y producto en distintos tamaños de pantalla."],
        ["Revisión de fidelidad", "Comparé la implementación con la referencia y ajusté composición, espaciado y jerarquía."]
      ],
      deliverables: ["Estructura de tienda en PrestaShop", "Catálogo, categorías y páginas de producto", "Adaptación responsive", "Revisión de fidelidad visual"],
      technology: "PrestaShop · E-commerce · Responsive",
      link: "https://barceloindajaus.com/",
      linkLabel: "Visitar la tienda de Barceló Indajaus",
      note: "Actualmente también soy responsable del soporte, el mantenimiento y las modificaciones del sitio. Como parte de esa continuidad técnica, completé primero una migración estable de PrestaShop 7 a PrestaShop 8 y, en 2026, una segunda actualización mayor de PrestaShop 8 a PrestaShop 9. Ambas migraciones se realizaron correctamente y el sitio continuó operativo después de cada actualización.",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Inicio · de WordPress a PrestaShop",
          intro: "La página de inicio conserva la identidad y el carácter promocional de la referencia, trasladados a una estructura de PrestaShop preparada para gestionar la tienda.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/ANTES Barcelo wordpress.png", width: 1918, height: 7572, alt: "Página de inicio completa de Barceló Indajaus antes de la migración, implementada en WordPress", label: "Referencia · WordPress", caption: "La referencia original organizaba la campaña y sus productos en una página promocional extensa que sirvió como base para la migración.", state: "before", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/AHORA Barcelo prestashop.png", width: 1900, height: 5884, alt: "Página de inicio completa de Barceló Indajaus después de la migración a PrestaShop", label: "Implementación · PrestaShop", caption: "La implementación traslada la identidad visual a PrestaShop y reorganiza el contenido para integrarlo con la navegación y la operativa de la tienda.", state: "live", sourceUrl: "https://barceloindajaus.com/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Catálogo · continuidad visual y operativa",
          intro: "El catálogo muestra con más claridad el trabajo de migración: la estructura comercial se conserva, mientras la nueva plataforma permite mantener y ampliar productos desde el entorno de PrestaShop.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/Catalogo completo Barcelo ANTES wordpresspng.png", width: 1900, height: 3115, alt: "Catálogo completo de Barceló Indajaus antes de la migración en WordPress", label: "Catálogo anterior · WordPress", caption: "La referencia reunía los productos en una cuadrícula paginada que definía la organización visual que debía conservarse.", state: "before", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos/BARCELO-INDAJAUS/Catalogo completo Barcelo AHORA prestashop.png", width: 1900, height: 5140, alt: "Catálogo completo de Barceló Indajaus implementado en PrestaShop", label: "Catálogo actual · PrestaShop", caption: "El catálogo migrado mantiene la identidad gráfica y amplía la oferta dentro de una estructura administrable desde PrestaShop.", state: "live", sourceUrl: "https://barceloindajaus.com/", expandable: true, scrollScrub: true }
          ]
        }
      ]
    },
    "calculadora-ia": {
      index: "08",
      title: "Calculadora de presupuestos con chatbot de IA",
      category: "Proyecto personal",
      status: "Demo pública",
      role: "HTML · CSS · JavaScript · AppScript · Integración de IA",
      color: "#ffad4a",
      summary: "Construí una calculadora interactiva para estimar presupuestos de reformas e integré un chatbot con IA para acompañar al usuario durante el proceso.",
      challenge: "Quería construir una experiencia que no dependiera únicamente de un formulario tradicional. La calculadora organiza la información para estimar un presupuesto y el chatbot añade una capa conversacional durante el proceso.",
      participation: "Diseñé y desarrollé la experiencia web, definí la estructura de la calculadora, implementé la lógica de interacción y conecté el chatbot con IA dentro del flujo.",
      process: [
        ["Flujo de preguntas", "Organicé la información y la dividí en pasos comprensibles."],
        ["Diseño de la experiencia", "Diseñé la interfaz, los estados y el momento en el que aparece la estimación."],
        ["Lógica de cálculo", "Implementé la lógica para procesar respuestas y construir una estimación."],
        ["Integración del chatbot", "Integré el chatbot con IA dentro de la experiencia guiada."],
        ["Revisión", "Revisé el flujo, los estados de interacción y la adaptación responsive."]
      ],
      deliverables: ["Flujo guiado de preguntas", "Interfaz y estados de la calculadora", "Lógica de cálculo", "Chatbot con IA integrado", "Demo web responsive"],
      technology: "HTML · CSS · JavaScript · Google Apps Script · IA",
      link: "https://dzionix.com/demo-reformas/index.html",
      linkLabel: "Probar la demo de la calculadora de reformas",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "Recorrido de la experiencia",
          intro: "Capturas de la demo pública para explicar el inicio responsive, un estado del flujo interactivo y la asistencia conversacional en móvil. La interacción mostrada es local y no envía formularios ni datos externos.",
          layout: "asymmetric",
          items: [
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-desktop.png", width: 1425, height: 891, alt: "Pantalla inicial de la calculadora pública de reformas en escritorio", label: "Landing pública · escritorio", caption: "Vista inicial de la demo pública en escritorio, sin datos introducidos.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/calculator-flow-step-3.png", width: 1425, height: 891, alt: "Paso de selección de acabado en la calculadora pública de reformas", label: "Flujo interactivo · paso 3", caption: "Estado de demo local con Cocina, 50 m² y acabado Estándar seleccionados; no se realizó ningún envío.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-mobile.png", width: 375, height: 811, alt: "Chatbot de reformas abierto en la pantalla inicial de la calculadora móvil", label: "Chatbot · móvil · inicio", caption: "Estado inicial del asistente en móvil, integrado en la pantalla de entrada y listo para iniciar la conversación.", expandable: true },
            { type: "image", src: "Proyectos/CALCULADORA-IA/home-movil.png", width: 487, height: 922, alt: "Chatbot de reformas conversando en la calculadora adaptada a móvil", label: "Chatbot · móvil · conversación", caption: "Conversación guiada en móvil con una respuesta contextual sobre metros cuadrados y acabados; solo datos de demostración.", expandable: true }
          ]
        }
      ]
    },
    "crm-dz": {
      index: "05",
      title: "CRM DZ",
      category: "Proyecto personal · Aplicación web full-stack",
      status: "Publicado · desarrollo activo · proyección: Diciembre 2026",
      role: "Next.js · React · TypeScript · Node.js · MySQL  ",
      color: "#9cb89a",
      summary: "Desarrollé este CRM para uso personal, con el objetivo de reunir en un mismo espacio de trabajo a mis clientes, sus sitios web, las horas de mantenimiento, los tickets y los reportes. Ya uso una primera versión funcional, que sigo ampliando con actualizaciones semanales.",
      challenge: "El reto era convertir una gestión repartida entre conversaciones, correos, documentos y herramientas separadas en un sistema con reglas claras, roles definidos y separación de datos entre agencias.",
      participation: "Me encargué del análisis del dominio, modelado de datos, arquitectura, frontend y backend, autenticación, permisos por rol, tickets y horas, reportes, notificaciones y documentación. La aplicación ya está publicada y la implementación continúa evolucionando con mejoras semanales en los flujos, el acabado visual y la preparación del producto.",
      process: [
        ["Modelado del dominio", "Definí entidades, relaciones y estados para agencias, empresas, usuarios, sitios, consumos, tickets y reportes."],
        ["Permisos y aislamiento", "Establecí qué consulta y modifica cada rol y cómo se limita el acceso a los datos."],
        ["Flujos principales", "Desarrollé autenticación, onboarding, sitios, horas, tickets, solicitudes, notificaciones y reportes."],
        ["Frontend y backend", "Organicé rutas, servicios, acciones de servidor, endpoints y persistencia de datos."],
        ["Pruebas y documentación", "Trabajé con pruebas automatizadas, documentación técnica y revisiones progresivas."]
      ],
      deliverables: ["Modelo de dominio y datos", "Frontend y backend de la aplicación", "Autenticación y permisos por rol", "Flujos de sitios, horas y tickets", "Reportes y notificaciones", "Pruebas y documentación técnica"],
      technology: "Next.js · React · TypeScript · Prisma · MySQL · Auth.js",
      link: "https://crm.dzionix.com/",
      linkLabel: "Visitar CRM DZ",
      noteLink: { href: "https://crm.dzionix.com/", label: "crm.dzionix.com", ariaLabel: "Visitar CRM DZ (se abre en una pestaña nueva)" },
      note: "CRM DZ ya está disponible públicamente en crm.dzionix.com y se actualiza cada semana. El proyecto sigue en desarrollo: la versión publicada es funcional, pero el dashboard, el diseño visual, los estados y otras áreas continuarán evolucionando con el objetivo de completar el producto a finales de 2026. No se presenta como un alcance cerrado ni como una implementación definitiva.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Vista general del dashboard",
          intro: "La pantalla principal reúne el estado operativo de la agencia y permite comprobar la jerarquía, la navegación y los accesos prioritarios de la versión pública.",
          layout: "centered",
          items: [
            { type: "image", src: "Proyectos/CRM DZ/dashboard admin agencia.png", width: 1916, height: 1027, alt: "Dashboard de administración de agencia en CRM DZ con resumen operativo y navegación principal", label: "Dashboard de agencia · versión pública", caption: "La visión general centraliza el seguimiento de la agencia y valida la jerarquía de información que seguirá evolucionando con las actualizaciones semanales.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Del seguimiento personal a la gestión de incidencias",
          intro: "Dos vistas complementarias muestran cómo la base funcional conecta el trabajo diario de cada usuario con el seguimiento compartido de solicitudes y tickets.",
          layout: "split",
          items: [
            { type: "image", src: "Proyectos/CRM DZ/mis tareas dashboard admin agencia.png", width: 1910, height: 1037, alt: "Vista de mis tareas en el dashboard de administración de CRM DZ", label: "Mis tareas · seguimiento personal", caption: "La vista personal concentra tareas y prioridades para convertir la actividad diaria en acciones visibles y ordenadas.", expandable: true },
            { type: "image", src: "Proyectos/CRM DZ/sistema de tickets.png", width: 1916, height: 1036, alt: "Sistema de tickets de CRM DZ con listado y seguimiento de incidencias", label: "Tickets · seguimiento compartido", caption: "El sistema de tickets estructura las incidencias y su estado para mantener el contexto entre usuarios, empresas y agencias.", expandable: true }
          ]
        }
      ]
    },
    "cms-propio": {
      index: "06",
      title: "CMS AI DZ",
      category: "Proyecto personal · Aplicación web full-stack",
      status: "En desarrollo · núcleo y diseño funcional · proyección: Enero 2027",

      role: "Next.js · React · TypeScript · Node.js · Integración de IA",
      color: "#9db2d3",
      summary: "Desarrollé CMS AI DZ, un sistema en el que las páginas se crean principalmente desde un chat con IA y después se gestionan, revisan y publican desde el mismo panel.",
      challenge: "El reto era construir un CMS donde la creación de una página pudiera comenzar desde un chat sin perder control sobre la estructura, la calidad del contenido ni las reglas del sistema.",
      participation: "Me encargué del modelado de contenido, arquitectura, flujo conversacional, renderizado público, sistema de diseño, medios, formularios, flujo editorial, SEO, autenticación, permisos y documentación.",
      process: [
        ["Modelado del contenido", "Definí entidades, relaciones y estados para páginas, bloques, publicaciones, medios, formularios y SEO."],
        ["Editor y renderizado", "Construí el editor y el renderizador público de los bloques almacenados."],
        ["Reglas y permisos", "Separé las responsabilidades de los roles dentro del proceso editorial."],
        ["Sistema de diseño", "Centralicé tokens y componentes para mantener coherencia y reutilización."],
        ["Creación conversacional", "Incorporé generación estructurada, validación y confirmación explícita antes de guardar."],
        ["Hardening", "El núcleo está construido; la preparación de producción y algunas funcionalidades siguen pendientes."]
      ],
      deliverables: ["Editor de páginas basado en bloques", "Renderizador público", "Flujo editorial y permisos", "Sistema de diseño y componentes reutilizables", "Creación conversacional de páginas", "Gestión de blog, SEO, formularios y medios"],
      technology: "Next.js · React · TypeScript · Prisma · MySQL · Supabase Storage · IA",
      link: "https://cms-ai-dz.vercel.app/",
      linkLabel: "Visitar la demo de CMS AI DZ",
      noteLink: { href: "https://cms-ai-dz.vercel.app/", label: "cms-ai-dz.vercel.app", ariaLabel: "Visitar la demo de CMS AI DZ (se abre en una pestaña nueva)" },
      note: "CMS AI DZ cuenta con una demo pública en cms-ai-dz.vercel.app. El proyecto sigue en desarrollo: la versión publicada es funcional, pero el chat con IA, el editor, el design system y otras áreas continuarán evolucionando. No se presenta como SaaS multiagencia ni como un sistema que publica automáticamente con IA.",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Guía de estilos",
          intro: "Las reglas visuales se guardan como tokens, escalas y componentes reutilizables, y se previsualizan antes de aplicarlas.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-design-system.png", width: 1536, height: 1024, alt: "Área de Design System con vista previa del sitio en claro y oscuro, escritorio, tableta y móvil, y colores con su contraste", label: "Design system · reglas compartidas", caption: "La identidad se estructura en tokens, escalas y componentes reutilizables, con el contraste de cada color a la vista.", expandable: true }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "Panel y contenidos",
          intro: "Para que la creación desde el chat no pierda control, el panel reúne páginas, blog y estado SEO del sitio sin abrir cada editor.",
          layout: "lead-split",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-panel-dashboard.png", width: 1536, height: 1024, alt: "Panel de CMS AI DZ con contadores de páginas, posts, borradores y almacenamiento, y bloque de salud del sitio", label: "Dashboard · control operativo", caption: "La vista principal conecta el estado del contenido con las alertas de salud del sitio y los accesos a las áreas de trabajo prioritarias.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-panel-paginas.png", width: 1536, height: 1024, alt: "Listado de páginas con título, slug, fecha de creación y puntuación SEO de cada una", label: "Páginas y SEO", caption: "Cada página muestra su slug y su puntuación SEO para detectar en un vistazo lo que falta.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-blog.png", width: 1536, height: 1024, alt: "Gestión del blog con artículos en borrador y publicados, su estado y su puntuación SEO", label: "Blog · borradores y publicados", caption: "El blog separa borradores y publicados, y muestra la puntuación SEO de cada artículo.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Editor de páginas",
          intro: "Las páginas se editan con control humano: el agente propone la estructura y la persona decide qué guardar y publicar.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-editor-pagina.png", width: 1536, height: 1024, alt: "Editor de página con información base, panel de diseño con IA y configuración SEO", label: "Creación asistida y edición", caption: "El agente propone una estructura dentro del editor, mientras la persona conserva el control sobre el SEO, la previsualización y el guardado.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Del chat a la página publicada",
          intro: "La página empieza como una conversación. El agente propone la estructura y la persona decide cuándo aplicarla.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-chat-propuesta.png", width: 1536, height: 1024, alt: "Chat del editor con la petición de una página de inicio para un estudio de interiorismo y la propuesta del agente cargada al editor", label: "Chat · propuesta", caption: "El agente convierte la descripción en bloques (hero, servicios, franja destacada y llamado a la acción) y los carga en el editor antes de guardar.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-chat-resultado.png", width: 1536, height: 1024, alt: "Página de inicio pública generada desde el chat, con hero dividido, tres tarjetas de servicios, franja destacada y botón de llamado a la acción", label: "Resultado público", caption: "La página publicada mantiene el tono pedido en el chat y la estructura revisada en el editor.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Formularios dentro del flujo editorial",
          intro: "Los formularios se crean, publican y revisan desde el mismo CMS que las páginas.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-formularios-listado.png", width: 1536, height: 1024, alt: "Listado de formularios con Solicitud de presupuesto publicado, número de envíos y mensajes no leídos", label: "Formularios · listado", caption: "Cada formulario muestra su estado, los envíos recibidos y los mensajes pendientes de leer.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-formularios-detalle.png", width: 1536, height: 1024, alt: "Edición del formulario Solicitud de presupuesto con cinco campos, su tipo y su obligatoriedad", label: "Formularios · campos", caption: "Los campos se ordenan, se tipan y se marcan como obligatorios desde la misma pantalla antes de publicar.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Una segunda página creada desde el chat",
          intro: "El mismo flujo sirve para otras páginas. La de servicios se genera a partir de una sola instrucción.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos/CMS DZ/cms-servicios-chat.png", width: 1536, height: 1024, alt: "Chat del editor con la petición de la página de servicios y la propuesta cargada al editor", label: "Chat · servicios", caption: "Una instrucción describe el encabezado, el párrafo y las cuatro fases del proceso; el agente las carga en el editor.", expandable: true },
            { type: "image", src: "Proyectos/CMS DZ/cms-servicios-resultado.png", width: 1536, height: 1024, alt: "Página pública de servicios de interiorismo con cuatro tarjetas de fases y el botón Solicitar presupuesto", label: "Resultado público · servicios", caption: "La página resultante mantiene la estructura pedida y queda lista para revisar antes de publicar.", expandable: true }
          ]
        }
      ]
    },
    "movimoney": {
      index: "07",
      title: "MoviMoney",
      category: "Proyecto personal",
      status: "En desarrollo · Nucleo y diseño Funcional",
      role: "React Native · Aplicación Android (arquitectura preparada para iOS)",
      color: "#ddd3aa",
      summary: "Desarrollé MoviMoney, una aplicación Android para registrar ingresos y gastos, consultar el saldo y revisar el historial sin depender de un backend.",
      challenge: "El reto era construir una primera versión útil sin backend: definir un modelo simple para ingresos y gastos, conservar los datos en el dispositivo y ofrecer un recorrido comprensible entre resumen, movimientos y categorías.",
      participation: "Desarrollo el proyecto de extremo a extremo dentro del alcance actual: definición del MVP, modelado de datos, navegación, pantallas, persistencia local y documentación del estado.",
      process: [
        ["Alcance local", "Delimité una primera versión sin cuentas remotas, sincronización ni servicios externos."],
        ["Modelo y persistencia", "Organicé transacciones, categorías, reglas de saldo y persistencia local."],
        ["Acceso y navegación", "Separé el acceso local y estructuré Drawer, pestañas e Inicio, Historial y Categorías."],
        ["Movimientos", "Implementé el registro, el resumen, la búsqueda y los filtros por fecha y categoría."],
        ["Estado y roadmap", "Documenté qué está funcional y qué queda fuera del MVP."]
      ],
      deliverables: ["Acceso y sesión locales", "Navegación Drawer y Bottom Tabs", "Registro de ingresos y gastos", "Resumen de saldo y movimientos", "Historial con búsqueda y filtros", "Gestión de categorías", "Persistencia local y migración documentada"],
      technology: "Expo · React Native · TypeScript · AsyncStorage · expo-secure-store",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dzionix.misgastoslocal&hl=es",
      note: "Los datos se almacenan localmente en el dispositivo. No es un producto financiero listo para producción y no incluye backend ni sincronización.",
      mediaSections: [
        {
          placement: "afterProcess",
          heading: "El MVP, de la visión general al control diario",
          intro: "El recorrido comienza en el resumen y se despliega hacia la navegación, las carteras, el registro y consulta de movimientos, el análisis, los presupuestos, el calendario y los ajustes locales.",
          layout: "mobile-grid",
          items: [
            { type: "image", src: "Proyectos/MoviMoney/44131.jpg", width: 1280, height: 2772, alt: "Pantalla de inicio de MoviMoney con saldo confirmado, balance del periodo y movimientos recientes", label: "Inicio · visión general", caption: "La pantalla de inicio concentra el saldo confirmado, el saldo proyectado, el balance del periodo y los movimientos recientes.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44132.jpg", width: 1280, height: 2772, alt: "Drawer de MoviMoney con accesos a carteras, movimientos, categorías, presupuestos, calendario, resumen y ajustes", label: "Navegación principal", caption: "El Drawer organiza el acceso a carteras, movimientos, categorías, presupuestos, calendario, resumen y ajustes.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44135.jpg", width: 1280, height: 2772, alt: "Pantalla de carteras de MoviMoney con saldo total, cartera principal y acciones de gestión", label: "Carteras · fuentes de saldo", caption: "La sección Carteras separa las cuentas y permite editar, archivar o definir la cartera predeterminada.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (2).jpg", width: 1280, height: 2772, alt: "Menú de acciones rápidas de MoviMoney para registrar un nuevo gasto o un nuevo ingreso", label: "Alta rápida de movimientos", caption: "El menú de acción rápida permite elegir entre registrar un nuevo gasto o un nuevo ingreso sin abandonar el resumen.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (4).jpg", width: 1280, height: 2772, alt: "Historial de MoviMoney con buscador y panel de filtros avanzados por categoría y rango de fechas", label: "Historial · búsqueda y filtros", caption: "El historial permite buscar movimientos y aplicar filtros avanzados por categoría y rango de fechas.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44136.jpg", width: 1280, height: 2772, alt: "Pantalla de resumen de MoviMoney con gastos por categoría, evolución del saldo y mayores gastos", label: "Resumen · análisis del periodo", caption: "El resumen transforma los movimientos en lectura del periodo: gastos por categoría, evolución del saldo y mayores gastos.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44133.jpg", width: 1280, height: 2772, alt: "Pantalla de presupuestos de MoviMoney con topes mensuales y estados por categoría", label: "Presupuestos · control de gastos", caption: "La vista de presupuestos permite fijar topes mensuales y distinguir entre categorías dentro del límite, cercanas o superadas.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/44134.jpg", width: 1280, height: 2772, alt: "Calendario de MoviMoney con ingresos, gastos y balance mensual", label: "Calendario · planificación mensual", caption: "El calendario sitúa ingresos, gastos y balance en el tiempo para revisar el comportamiento del mes.", expandable: true },
            { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (5).jpg", width: 1280, height: 2772, alt: "Pantalla de ajustes de MoviMoney con cuenta local, seguridad y configuración del saldo inicial", label: "Ajustes · configuración local", caption: "Los ajustes concentran la cuenta local, la seguridad de acceso y el reajuste del saldo inicial.", expandable: true }
          ]
        }
      ]
    },
    "dream-school": {
      index: "11",
      title: "Dream School",
      category: "Proyecto profesional",
      status: "Publicado",
      role: "Implementación front-end a partir de un prototipo",
      color: "#ffd9a3",
      summary: "Convertí el prototipo de Dream School en un sitio WordPress funcional con Elementor Pro, con una estructura de campos personalizados que permite actualizar el contenido directamente desde el panel.",
      challenge: "El reto era llevar el prototipo a un entorno real y editable: conservar la composición visual definida y dejar el contenido organizado de manera que el equipo pudiera actualizarlo sin intervención técnica.",
      participation: "Preparé la estructura de contenidos con campos personalizados, construí las pantallas en Elementor Pro y resolví la optimización y la adaptación móvil. El prototipo visual fue proporcionado.",
      process: [
        ["Revisión del prototipo", "Revisé pantallas, composición y jerarquía definidas en el prototipo."],
        ["Estructura de contenidos", "Monté los campos personalizados y el contenido flexible para que el sitio sea editable desde el panel."],
        ["Implementación", "Construí las pantallas y componentes en Elementor Pro sobre WordPress."],
        ["Adaptación móvil", "Ajusté composición, tamaños y espacios para el viewport móvil."],
        ["Revisión y entrega", "Comparé la implementación con la referencia y dejé el contenido gestionable por el equipo."]
      ],
      deliverables: ["Sitio WordPress implementado", "Estructura de campos personalizados", "Contenido flexible actualizable desde el panel", "Adaptación móvil y optimización"],
      technology: "WordPress · Elementor Pro · ACF · CPT",
      link: "https://dreamschool.es/",
      linkLabel: "Visitar el sitio de Dream School",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Diseño de referencia",
          intro: "El prototipo definía la dirección visual y la estructura del sitio antes de la implementación.",
          layout: "full",
          items: [
            { type: "image", src: "Proyectos Secundarios/Dream School/XD Design 1.png", width: 1282, height: 963, alt: "Primera pantalla del prototipo de Dream School en Adobe XD", label: "Prototipo · Adobe XD", caption: "Primera vista del prototipo con la dirección visual propuesta.", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Dream School/XD Design 2.png", width: 1872, height: 886, alt: "Segunda pantalla del prototipo de Dream School en Adobe XD", label: "Prototipo · Adobe XD", caption: "Vista complementaria del prototipo con la estructura de contenidos.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública",
          intro: "Las páginas principales implementadas en el sitio público, preparadas para recorrerlas dentro del visor.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Dream School/web-publica-home.optimized.jpg", width: 1920, height: 4863, alt: "Página de inicio pública completa de Dream School en escritorio", label: "Inicio · escritorio", caption: "Captura completa de la página de inicio implementada, lista para inspeccionarla dentro del visor.", state: "live", sourceUrl: "https://dreamschool.es/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Dream School/web-publica-cursos.optimized.jpg", width: 1920, height: 10212, alt: "Página pública completa de cursos de Dream School en escritorio", label: "Cursos · escritorio", caption: "Captura completa de la página de cursos, con el catálogo de formaciones desplegado.", state: "live", sourceUrl: "https://dreamschool.es/", expandable: true, scrollScrub: true }
          ]
        }
      ]
    },
    "preventing-treating": {
      index: "10",
      title: "Preventing / Treating With Experts",
      category: "Proyecto profesional",
      status: "Dos sitios publicados",
      role: "Implementación front-end · De Figma a WordPress",
      color: "#dbe7ff",
      summary: "Implementé en WordPress dos sitios hermanos de profesionales de la salud a partir de sus diseños en Figma: Preventing With Experts y Treating With Experts, cada uno con su propia identidad visual.",
      challenge: "Construir dos sitios diferenciados a partir de dos diseños distintos, manteniendo la fidelidad a cada referencia y una implementación coherente y responsive en ambos casos.",
      participation: "Convertí los diseños de Figma en sitios WordPress funcionales, construí las pantallas de inicio e internas y revisé la implementación en escritorio y móvil. Los diseños fueron proporcionados.",
      process: [
        ["Revisión de los diseños", "Revisé pantallas, composición y reglas visuales de ambos sitios en Figma."],
        ["Preparación de la estructura", "Organicé páginas y secciones para conservar la edición dentro de WordPress."],
        ["Implementación", "Construí las pantallas de inicio e internas de ambos sitios."],
        ["Adaptación responsive", "Ajusté composición y navegación para escritorio y móvil."],
        ["Revisión visual", "Comparé cada implementación con su diseño y corregí las diferencias detectadas."]
      ],
      deliverables: ["Dos sitios WordPress implementados", "Pantallas de inicio e internas", "Adaptación responsive", "Revisión frente a los diseños de Figma"],
      technology: "WordPress · Elementor · Responsive",
      link: "https://preventingwithexperts.com/",
      linkLabel: "Visitar Preventing With Experts",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Diseños de referencia en Figma",
          intro: "Los dos diseños definían identidades distintas para sitios hermanos: Preventing, para actuar antes de que aparezca un problema, y Treating, para acompañar cuando ya está presente.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/Figma Preventing with expert 1.png", width: 1912, height: 1082, alt: "Diseño en Figma del sitio Preventing With Experts", label: "Figma · Preventing", caption: "Dirección visual y estructura del sitio dedicado a la prevención.", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/Figma Treating with expert 1.png", width: 1910, height: 1062, alt: "Diseño en Figma del sitio Treating With Experts", label: "Figma · Treating", caption: "Dirección visual y estructura del sitio dedicado al tratamiento.", expandable: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · escritorio",
          intro: "Las dos páginas de inicio publicadas conservan la identidad y la jerarquía de cada sitio.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-home.optimized.jpg", width: 1920, height: 2935, alt: "Página de inicio pública completa de Preventing With Experts en escritorio", label: "Inicio · Preventing", caption: "Captura completa de la implementación pública de Preventing en escritorio, preparada para inspeccionarla dentro del visor.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-home.optimized.jpg", width: 1920, height: 2592, alt: "Página de inicio pública completa de Treating With Experts en escritorio", label: "Inicio · Treating", caption: "Captura completa de la implementación pública de Treating en escritorio, preparada para inspeccionarla dentro del visor.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · móvil",
          intro: "El responsive se resolvió para cada sitio, adaptando composición, navegación y escala al viewport móvil.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-home-movil.optimized.webp", width: 500, height: 4275, alt: "Página de inicio pública completa de Preventing With Experts en móvil", label: "Inicio · Preventing · móvil", caption: "Captura completa de la implementación pública de Preventing en móvil.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-home-movil.optimized.webp", width: 500, height: 4243, alt: "Página de inicio pública completa de Treating With Experts en móvil", label: "Inicio · Treating · móvil", caption: "Captura completa de la implementación pública de Treating en móvil.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Páginas internas",
          intro: "Las páginas interiores reproducen la estructura de contenidos de cada sitio manteniendo su propia identidad.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-preventing-pagina-interna.optimized.jpg", width: 1907, height: 1080, alt: "Página interna pública de Preventing With Experts", label: "Página interna · Preventing", caption: "Estructura de contenidos de una página interior de Preventing.", state: "live", sourceUrl: "https://preventingwithexperts.com/", expandable: true },
            { type: "image", src: "Proyectos Secundarios/Preventing - Treating/web-publica-treating-pagina-interna.optimized.jpg", width: 1912, height: 1087, alt: "Página interna pública de Treating With Experts", label: "Página interna · Treating", caption: "Estructura de contenidos de una página interior de Treating.", state: "live", sourceUrl: "https://treatingwithexperts.com/", expandable: true }
          ]
        }
      ]
    },
    "barentszen": {
      index: "09",
      title: "Barentszen / Barentszen Group",
      category: "Proyecto profesional",
      status: "Dos sitios publicados",
      role: "Implementación front-end · De Figma a WordPress",
      color: "#e7e0d0",
      summary: "Convertí el diseño de Figma de Barentszen Group en un sitio WordPress con estructura de campos personalizados para actualizar el contenido directamente desde el panel, publicado en dos idiomas: holandés e inglés.",
      challenge: "Llevar el diseño definido a un sitio WordPress editable, conservando la composición visual y organizando el contenido para que el equipo pueda gestionarlo sin intervención técnica.",
      participation: "Preparé la estructura de contenidos, construí las pantallas, configuré los dos idiomas y resolví la adaptación responsive a partir del diseño proporcionado.",
      process: [
        ["Revisión del diseño", "Revisé pantallas, composición y reglas visuales definidas en Figma."],
        ["Estructura de contenidos", "Monté los campos personalizados y el contenido flexible para que el sitio sea editable desde el panel."],
        ["Implementación", "Construí las pantallas y componentes sobre WordPress."],
        ["Multilingüe", "Preparé la web en dos idiomas, holandés e inglés, con WPML."],
        ["Adaptación responsive", "Ajusté composición y espacios para distintos tamaños de pantalla."],
        ["Revisión y entrega", "Comparé la implementación con la referencia y dejé el contenido gestionable por el equipo."]
      ],
      deliverables: ["Sitio WordPress implementado", "Estructura de campos personalizados", "Contenido flexible actualizable desde el panel", "Sitio bilingüe · holandés e inglés", "Adaptación responsive"],
      technology: "WordPress · Elementor · ACF · CPT · WPML",
      link: "https://barentszen.nl/",
      linkLabel: "Visitar el sitio de Barentszen",
      mediaSections: [
        {
          placement: "afterChallenge",
          heading: "Diseños de referencia en Figma",
          intro: "El encargo reunía dos marcas dentro del mismo grupo: Barentszen y Barentszen Group, cada una con su propia dirección visual.",
          layout: "lead-split",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Marcador temporal para las referencias visuales de Barentszen", label: "Muestra visual temporal · Barentszen", caption: "Las imágenes de referencia de Figma se han ocultado temporalmente. El diseño original fue realizado por el equipo de Selva Digital." }
          ]
        },
        {
          placement: "afterChallenge",
          heading: "Vistas complementarias de diseño",
          intro: "Vistas adicionales de los diseños que completan la referencia antes de la implementación.",
          layout: "full",
          items: [
            { type: "image", aspect: "16 / 9", alt: "Marcador temporal para las referencias visuales de Barentszen Group", label: "Muestra visual temporal · Barentszen Group", caption: "Las imágenes de referencia de Figma se han ocultado temporalmente. El diseño original fue realizado por el equipo de Selva Digital." }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · escritorio",
          intro: "Las dos páginas de inicio implementadas en escritorio, preparadas para recorrerlas dentro del visor.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-1.optimized.jpg", width: 1920, height: 10235, alt: "Página de inicio completa de Barentszen implementada en escritorio", label: "Inicio · Barentszen · escritorio", caption: "Captura completa de la implementación de Barentszen en escritorio, lista para inspeccionarla dentro del visor.", state: "live", sourceUrl: "https://barentszen.nl/", expandable: true, scrollScrub: true },
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-group-1.optimized.jpg", width: 1920, height: 8880, alt: "Página de inicio completa de Barentszen Group implementada en escritorio", label: "Inicio · Barentszen Group · escritorio", caption: "Captura completa de la implementación de Barentszen Group en escritorio, lista para inspeccionarla dentro del visor.", state: "live", sourceUrl: "https://barentszengroup.nl/", expandable: true, scrollScrub: true }
          ]
        },
        {
          placement: "afterProcess",
          heading: "Implementación pública · móvil",
          intro: "El responsive se resolvió para cada marca, adaptando composición y escala al viewport móvil.",
          layout: "comparison",
          items: [
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-movil-barentszen-1.optimized.webp", width: 400, height: 11212, alt: "Página de inicio completa de Barentszen implementada en móvil", label: "Inicio · Barentszen · móvil", caption: "Captura completa de la implementación de Barentszen en móvil.", state: "live", sourceUrl: "https://barentszen.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" },
            { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/web-publica-barentszen-group-movil-1.optimized.webp", width: 400, height: 8432, alt: "Página de inicio completa de Barentszen Group implementada en móvil", label: "Inicio · Barentszen Group · móvil", caption: "Captura completa de la implementación de Barentszen Group en móvil.", state: "live", sourceUrl: "https://barentszengroup.nl/", expandable: true, scrollScrub: true, scrubViewport: "9 / 16" }
          ]
        }
      ]
    }
  }
};
