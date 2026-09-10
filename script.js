document.documentElement.classList.add("js");

const PROJECTS = {
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
          { type: "image", src: "Proyectos/MEGA/Figma 1.png", width: 1795, height: 835, alt: "Diseño de Figma para la experiencia de Mega Particulares", label: "Figma · Mega · Particulares", caption: "Dirección visual y estructura de la experiencia para clientes particulares. Diseño realizado por el equipo de Selva Digital.", expandable: true },
          { type: "image", src: "Proyectos/MEGA/Figma 2.png", width: 1435, height: 930, alt: "Diseño de Figma para la experiencia de Mega Zakelijk", label: "Figma · Mega Zakelijk · Empresas", caption: "Diseño diferenciado para la experiencia dirigida a empresas. Cada propuesta se implementó dentro del mismo WordPress, con sus propios componentes y navegación. Diseño realizado por el equipo de Selva Digital.", expandable: true }
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
        intro: "Capturas de la demo pública para explicar el inicio responsive y un estado del flujo interactivo. La interacción mostrada es local y no envía formularios ni datos externos.",
        layout: "asymmetric",
        items: [
          { type: "image", src: "Proyectos/CALCULADORA-IA/home-desktop.png", width: 1425, height: 891, alt: "Pantalla inicial de la calculadora pública de reformas en escritorio", label: "Landing pública · escritorio", caption: "Vista inicial de la demo pública en escritorio, sin datos introducidos.", expandable: true },
          { type: "image", src: "Proyectos/CALCULADORA-IA/home-mobile.png", width: 375, height: 811, alt: "Pantalla inicial de la calculadora pública de reformas adaptada a móvil", label: "Landing pública · móvil", caption: "Adaptación responsive de la pantalla inicial en móvil.", expandable: true },
          { type: "image", src: "Proyectos/CALCULADORA-IA/calculator-flow-step-3.png", width: 1425, height: 891, alt: "Paso de selección de acabado en la calculadora pública de reformas", label: "Flujo interactivo · paso 3", caption: "Estado de demo local con Cocina, 50 m² y acabado Estándar seleccionados; no se realizó ningún envío.", expandable: true },
          { type: "placeholder", aspect: "9 / 16", label: "Chatbot · móvil", caption: "Captura móvil pendiente de la asistencia conversacional integrada; mantener únicamente datos de demostración y sin envío externo." }
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
    summary: "Desarrollé un CRM para centralizar clientes, sitios web, horas de mantenimiento, tickets y reportes dentro de un mismo espacio de trabajo. La primera versión funcional ya está publicada en crm.dzionix.com y recibe actualizaciones semanales mientras completo el producto, con previsión de terminarlo a finales de 2026.",
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
    note: "No está disponible públicamente. No se presenta como SaaS multiagencia ni como un sistema que publica automáticamente con IA.",
    mediaSections: [
      {
        placement: "afterChallenge",
        heading: "El estado del contenido en una sola vista",
        intro: "El dashboard reúne páginas, publicaciones, borradores, almacenamiento y señales de salud editorial y SEO para convertir el panel en un punto de control operativo.",
        layout: "centered",
        items: [
          { type: "image", src: "Proyectos/CMS DZ/CMS Dashboard.png", width: 1911, height: 1036, alt: "Dashboard de CMS DZ con resumen de páginas, publicaciones, borradores, almacenamiento y salud del sitio", label: "Dashboard · control operativo", caption: "La vista principal conecta el estado del contenido con alertas SEO y accesos a las áreas de trabajo prioritarias.", expandable: true }
        ]
      },
      {
        placement: "afterProcess",
        heading: "De las reglas de diseño a la gestión editorial",
        intro: "Estas evidencias muestran el recorrido que ya puede comprobarse: creación asistida y edición, reglas visuales compartidas y configuración de formularios desde el mismo CMS.",
        layout: "lead-split",
        items: [
          { type: "image", src: "Proyectos/CMS DZ/CMS DZ Editor de paginas.png", width: 1917, height: 1022, alt: "Editor de páginas de CMS DZ con creación asistida por IA, información base, configuración SEO y acciones de previsualización", label: "Creación asistida y edición", caption: "El agente propone una estructura dentro del editor, mientras la aplicación conserva el control humano sobre su aplicación, el SEO, la previsualización y el guardado.", expandable: true },
          { type: "image", src: "Proyectos/CMS DZ/CMS DZ Design system.png", width: 1910, height: 1027, alt: "Área de Design System de CMS DZ con generación asistida y pestañas de identidad, tokens, layout, patrones y componentes", label: "Design system · reglas compartidas", caption: "La identidad puede describirse o generarse con asistencia, pero queda estructurada en tokens, escalas, patrones y componentes reutilizables.", expandable: true },
          { type: "image", src: "Proyectos/CMS DZ/CMS DZ Formularios.png", width: 1902, height: 1027, alt: "Gesti?n de formularios de CMS AI DZ, desde el listado hasta los campos y la configuraci?n", label: "Formularios ? gesti?n editorial", caption: "La vista muestra el listado, la edici?n de campos y la configuraci?n del formulario dentro del flujo editorial.", expandable: true }
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
    downloadUrl: "https://github.com/dfzm/dfzm.github.io/releases/latest/download/movimoney-1.0.0-arm64-v8a.apk",
    downloadLabel: "Descargar la APK de MoviMoney",
    note: "Los datos se almacenan localmente en el dispositivo. No es un producto financiero listo para producción y no incluye backend ni sincronización.",
    mediaSections: [
      {
        placement: "afterProcess",
        heading: "Pantallas funcionales del MVP",
        intro: "La primera versión de MoviMoney concentra el recorrido en cinco vistas: resumen, alta rápida de movimientos, historial, filtros avanzados y configuración local.",
        layout: "mobile-grid",
        items: [
          { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (1).jpg", width: 1280, height: 2772, alt: "Pantalla de inicio de MoviMoney con saldo, resumen de ingresos y gastos y movimientos recientes", label: "Resumen y movimientos recientes", caption: "La pantalla de inicio reúne el saldo, el balance del periodo y los movimientos recientes en una sola vista.", expandable: true },
          { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (2).jpg", width: 1280, height: 2772, alt: "Menú de acciones rápidas de MoviMoney para registrar un gasto o un ingreso", label: "Alta rápida de movimientos", caption: "El botón de acción rápida separa el registro de gastos e ingresos para reducir fricción al cargar un movimiento.", expandable: true },
          { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (3).jpg", width: 1280, height: 2772, alt: "Historial de MoviMoney con buscador, filtros por tipo y movimientos agrupados por fecha", label: "Historial y búsqueda", caption: "El historial permite localizar movimientos y revisar el balance agrupado por periodos.", expandable: true },
          { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (4).jpg", width: 1280, height: 2772, alt: "Panel de filtros avanzados de MoviMoney con categorías y rango de fechas", label: "Filtros avanzados", caption: "Los filtros por categoría y rango de fechas acotan la consulta sin sacar al usuario del historial.", expandable: true },
          { type: "image", src: "Proyectos/MoviMoney/MoviMoney 1 (5).jpg", width: 1280, height: 2772, alt: "Pantalla de ajustes de MoviMoney con cuenta, seguridad y configuración del saldo inicial", label: "Configuración local", caption: "Los ajustes concentran la cuenta local, la seguridad de acceso y el reajuste del saldo inicial.", expandable: true }
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
          { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/Figma Barentszen y B Group.png", width: 1898, height: 1023, alt: "Vista conjunta en Figma de las dos marcas del grupo: Barentszen y Barentszen Group", label: "Figma · el conjunto", caption: "La vista de conjunto muestra las dos identidades dentro del mismo sistema visual. Diseño realizado por el equipo de Selva Digital.", expandable: true, featured: true },
          { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/Figma Barentszen 1.png", width: 1902, height: 1028, alt: "Diseño en Figma del sitio de Barentszen", label: "Figma · Barentszen", caption: "Dirección visual y estructura del sitio de Barentszen. Diseño realizado por el equipo de Selva Digital.", expandable: true },
          { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/Figma Barentszen Group 1.png", width: 1908, height: 1026, alt: "Diseño en Figma del sitio de Barentszen Group", label: "Figma · Barentszen Group", caption: "Dirección visual y estructura del sitio de Barentszen Group. Diseño realizado por el equipo de Selva Digital.", expandable: true }
        ]
      },
      {
        placement: "afterChallenge",
        heading: "Vistas complementarias de diseño",
        intro: "Vistas adicionales de los diseños que completan la referencia antes de la implementación.",
        layout: "full",
        items: [
          { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/Figma Barentszen 2.png", width: 1905, height: 1012, alt: "Segunda vista del diseño en Figma de Barentszen", label: "Figma · Barentszen · detalle", caption: "Vista complementaria del diseño de Barentszen. Diseño realizado por el equipo de Selva Digital.", expandable: true },
          { type: "image", src: "Proyectos Secundarios/Barentszen - B. Group/Figma Barentszen Group 2.png", width: 1887, height: 843, alt: "Segunda vista del diseño en Figma de Barentszen Group", label: "Figma · Barentszen Group · detalle", caption: "Vista complementaria del diseño de Barentszen Group. Diseño realizado por el equipo de Selva Digital.", expandable: true }
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
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogIndex = document.querySelector("#dialog-index");
const dialogClose = document.querySelector(".dialog-close");
const announcer = document.querySelector("#announcer");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxLabel = document.querySelector("#lightbox-label");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCounter = document.querySelector("#lightbox-counter");
let activeTrigger = null;
let isHashUpdate = false;
let cleanupDialogMedia = () => {};
let dialogMediaSetupFrame = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  })[character]);
}

const MEDIA_LAYOUTS = new Set(["full", "split", "storyboard", "asymmetric", "comparison", "implementation", "mobile-grid", "lead-split", "centered", "triptych", "chain", "chain-pair"]);

const MEDIA_STATES = new Map([
  ["before", "Antes"],
  ["proposal", "Propuesta"],
  ["live", "En producción"]
]);

function getSafeURL(value) {
  if (typeof value !== "string" || !value || value !== value.trim() || /[\u0000-\u001f\u007f]/.test(value) || value.startsWith("//")) return null;

  if (value.startsWith("Proyectos/") || value.startsWith("Proyectos Secundarios/")) {
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(value);
    } catch {
      return null;
    }
    const segments = decodedPath.split("/");
    if (/[\\?#]|[\u0000-\u001f\u007f]/.test(decodedPath) || segments.some((segment) => !segment || segment === "." || segment === "..")) return null;
    return value;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

function getMediaDimensions(item) {
  if (!Number.isInteger(item.width) || item.width <= 0 || !Number.isInteger(item.height) || item.height <= 0) return null;
  return { width: item.width, height: item.height };
}

function getSafeAspect(item, dimensions) {
  if (dimensions) return `${dimensions.width} / ${dimensions.height}`;
  const match = typeof item.aspect === "string" && item.aspect.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/);
  if (!match || Number(match[1]) <= 0 || Number(match[2]) <= 0) return "16 / 10";
  return `${Number(match[1])} / ${Number(match[2])}`;
}

function getMediaState(item) {
  return MEDIA_STATES.has(item.state) ? item.state : null;
}

function createMediaLabel(item, itemIndex) {
  const state = getMediaState(item);
  const badge = state ? `<em class="case-media__state">${escapeHTML(MEDIA_STATES.get(state))}</em>` : "";
  return `<span class="case-media__label${state ? ` case-media__label--${state}` : ""}"><b>${String(itemIndex + 1).padStart(2, "0")}</b>${badge}${escapeHTML(item.label)}</span>`;
}

function createPlaceholderMarkup(item, itemIndex, aspect, modifier) {
  const header = createMediaLabel(item, itemIndex);
  return `
    <figure class="case-media__item case-media__item--placeholder${modifier}">
      <div class="case-media__placeholder" style="--media-aspect: ${escapeHTML(aspect)}" role="img" aria-label="Espacio reservado: ${escapeHTML(item.label)}">
        ${header}
        <span class="case-media__frame" aria-hidden="true"></span>
        <span class="case-media__aspect" aria-hidden="true">${escapeHTML(aspect.replaceAll(" / ", ":"))}</span>
      </div>
      <figcaption>${escapeHTML(item.caption)}</figcaption>
    </figure>
  `;
}

function createMediaActions(item, safeSrc) {
  const expandLink = item.expandable && !item.scrollScrub ? `
    <a class="case-media__expand" href="${escapeHTML(safeSrc)}" target="_blank" rel="noopener" data-lightbox-open aria-label="Ampliar ${escapeHTML(item.label)}">
      Ampliar imagen <span aria-hidden="true">↗</span>
    </a>
  ` : "";
  const safeSourceUrl = item.sourceUrl ? getSafeURL(item.sourceUrl) : null;
  const sourceLink = safeSourceUrl ? `
    <a class="case-media__expand" href="${escapeHTML(safeSourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Ver página pública de ${escapeHTML(item.label)} en una pestaña nueva">
      Ver página pública <span aria-hidden="true">↗</span>
    </a>
  ` : "";

  return expandLink || sourceLink ? `<span class="case-media__actions">${expandLink}${sourceLink}</span>` : "";
}

function createVideoMediaMarkup(item, itemIndex) {
  const dimensions = getMediaDimensions(item);
  const aspect = getSafeAspect(item, dimensions);
  const [aspectWidth, aspectHeight] = aspect.split("/").map(Number);
  const state = getMediaState(item);
  const modifier = `${item.featured ? " case-media__item--featured" : ""}${aspectWidth < aspectHeight ? " case-media__item--portrait" : ""}${state ? ` case-media__item--${state}` : ""}`;
  const sources = Array.isArray(item.sources) ? item.sources.map((source) => ({
    src: getSafeURL(source.src),
    type: source.type === "video/mp4" || source.type === "video/webm" ? source.type : null
  })).filter((source) => source.src && source.type) : [];

  if (!dimensions || !sources.length) return createPlaceholderMarkup(item, itemIndex, aspect, modifier);

  const safePoster = item.poster ? getSafeURL(item.poster) : null;
  const posterAttribute = safePoster ? ` poster="${escapeHTML(safePoster)}"` : "";
  const sourceMarkup = sources.map((source) => `<source src="${escapeHTML(source.src)}" type="${source.type}">`).join("");
  const fallbackSrc = sources.find((source) => source.type === "video/mp4")?.src || sources[0].src;

  return `
    <figure class="case-media__item${modifier}">
      ${createMediaLabel(item, itemIndex)}
      <div class="case-media__stage case-media__stage--video" style="--media-aspect: ${escapeHTML(aspect)}">
        <video class="case-media__video" width="${dimensions.width}" height="${dimensions.height}" controls playsinline preload="metadata"${posterAttribute} aria-label="${escapeHTML(item.alt)}">
          ${sourceMarkup}
          Tu navegador no puede reproducir este vídeo. <a href="${escapeHTML(fallbackSrc)}">Descargar el vídeo de ${escapeHTML(item.label)}</a>.
        </video>
      </div>
      <figcaption><span>${escapeHTML(item.caption)}</span></figcaption>
    </figure>
  `;
}

function createMediaItemMarkup(item, itemIndex) {
  if (item.type === "video") return createVideoMediaMarkup(item, itemIndex);

  const isSupportedMedia = item.type === "image";
  const dimensions = isSupportedMedia ? getMediaDimensions(item) : null;
  const safeSrc = isSupportedMedia ? getSafeURL(item.src) : null;
  const aspect = getSafeAspect(item, dimensions && safeSrc ? dimensions : null);
  const [aspectWidth, aspectHeight] = aspect.split("/").map(Number);
  const state = getMediaState(item);
  const modifier = `${item.featured ? " case-media__item--featured" : ""}${!item.scrollScrub && aspectWidth < aspectHeight ? " case-media__item--portrait" : ""}${state ? ` case-media__item--${state}` : ""}`;
  const header = createMediaLabel(item, itemIndex);

  if (!dimensions || !safeSrc) return createPlaceholderMarkup(item, itemIndex, aspect, modifier);

  const stageModifier = item.scrollScrub ? " case-media__stage--scroll-scrub" : "";
  const stageAttribute = item.scrollScrub ? ` data-image-scroll-scrub tabindex="-1" role="group" aria-disabled="true" aria-label="Visor interactivo: ${escapeHTML(item.label)}"` : "";
  const imageClass = item.scrollScrub ? " class=\"case-media__scroll-image\" data-scroll-scrub-image" : "";
  const scrubViewport = item.scrubViewport ? getSafeAspect({ aspect: item.scrubViewport }, null) : null;
  const stageStyle = `--media-aspect: ${escapeHTML(aspect)}${scrubViewport ? `; aspect-ratio: ${escapeHTML(scrubViewport)}` : ""}`;
  const mediaMarkup = `<img${imageClass} src="${escapeHTML(safeSrc)}" width="${dimensions.width}" height="${dimensions.height}" alt="${escapeHTML(item.alt)}" loading="lazy" decoding="async">`;
  const scrubHint = item.scrollScrub ? `<span class="case-media__scrub-hint" aria-hidden="true">Desplázate aquí para recorrer <b>↕</b></span>` : "";
  const mediaActions = createMediaActions(item, safeSrc);

  return `
    <figure class="case-media__item${modifier}">
      ${header}
      <div class="case-media__stage${stageModifier}"${stageAttribute} style="${stageStyle}">
        ${mediaMarkup}
        ${scrubHint}
      </div>
      <figcaption><span>${escapeHTML(item.caption)}</span>${mediaActions}</figcaption>
    </figure>
  `;
}

function createMediaSectionMarkup(section) {
  const layout = MEDIA_LAYOUTS.has(section.layout) ? section.layout : "full";
  const items = section.items.map(createMediaItemMarkup).join("");

  return `
    <section class="case-media" aria-label="${escapeHTML(section.heading)}">
      <header class="case-media__header">
        <h3>${escapeHTML(section.heading)}</h3>
        <p>${escapeHTML(section.intro)}</p>
      </header>
      <div class="case-media__grid case-media__grid--${layout}">${items}</div>
    </section>
  `;
}

function renderMediaSections(project, placement) {
  return (project.mediaSections || [])
    .filter((section) => section.placement === placement)
    .map(createMediaSectionMarkup)
    .join("");
}

function createNoteMarkup(project) {
  const escapedNote = escapeHTML(project.note);
  const noteLink = project.noteLink;
  if (!noteLink || typeof noteLink.label !== "string") return escapedNote;

  const safeHref = getSafeURL(noteLink.href);
  if (!safeHref) return escapedNote;

  const escapedLabel = escapeHTML(noteLink.label);
  const link = `<a class="case-block__inline-link" href="${escapeHTML(safeHref)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(noteLink.ariaLabel || noteLink.label)}">${escapedLabel}</a>`;
  return escapedNote.replace(escapedLabel, link);
}

function createProjectMarkup(project) {
  const steps = project.process.map(([title, text]) => `
    <li><strong>${escapeHTML(title)}</strong><span>${escapeHTML(text)}</span></li>
  `).join("");

  const deliverables = project.deliverables.map((deliverable) => `<li>${escapeHTML(deliverable)}</li>`).join("");

  const startDate = project.startDate ? `
    <div><dt>Inicio del desarrollo</dt><dd>${escapeHTML(project.startDate)}</dd></div>
  ` : "";

  const safeProjectLink = getSafeURL(project.link);
  const projectLink = safeProjectLink ? `
    <a href="${escapeHTML(safeProjectLink)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(project.linkLabel)} (se abre en una pestaña nueva)">
      ${escapeHTML(project.linkLabel)} <span aria-hidden="true">↗</span>
    </a>
  ` : "";

  const safeDownloadLink = getSafeURL(project.downloadUrl);
  const downloadLink = safeDownloadLink ? `
    <a class="case-links__download" href="${escapeHTML(safeDownloadLink)}" target="_blank" rel="noopener noreferrer" download aria-label="${escapeHTML(project.downloadLabel || "Descargar la APK")} (se abre en una pestaña nueva)">
      ${escapeHTML(project.downloadLabel || "Descargar la APK")} <span aria-hidden="true">↓</span>
    </a>
  ` : "";

  const links = safeProjectLink || safeDownloadLink ? `
    <div class="case-links">${projectLink}${downloadLink}</div>
  ` : "";

  const note = project.note ? `
    <section class="case-block">
      <h3>Estado y límites</h3>
      <p>${createNoteMarkup(project)}</p>
    </section>
  ` : "";

  const mediaAfterChallenge = renderMediaSections(project, "afterChallenge");
  const mediaAfterParticipation = renderMediaSections(project, "afterParticipation");
  const mediaAfterProcess = renderMediaSections(project, "afterProcess");
  const mediaAfterDeliverables = renderMediaSections(project, "afterDeliverables");
  const mediaBeforeNote = renderMediaSections(project, "beforeNote");

  return `
    <div class="case-hero" style="--case-color: ${escapeHTML(project.color)}">
      <div>
        <div class="case-hero__meta"><span>${escapeHTML(project.category)}</span><span>${escapeHTML(project.status)}</span></div>
        <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
      </div>
      <p class="case-hero__summary">${escapeHTML(project.summary)}</p>
    </div>
    <div class="case-body">
      <dl class="case-facts">
        <div><dt>Categoría</dt><dd>${escapeHTML(project.category)}</dd></div>
        <div><dt>Mi rol</dt><dd>${escapeHTML(project.role)}</dd></div>
        <div><dt>Estado</dt><dd>${escapeHTML(project.status)}</dd></div>
        ${startDate}
      </dl>
      <section class="case-block">
        <h3>El reto</h3>
        <p>${escapeHTML(project.challenge)}</p>
      </section>
      ${mediaAfterChallenge}
      <section class="case-block">
        <h3>Mi participación</h3>
        <p>${escapeHTML(project.participation)}</p>
      </section>
      ${mediaAfterParticipation}
      <section class="case-block">
        <h3>Proceso</h3>
        <ol class="case-process">${steps}</ol>
      </section>
      ${mediaAfterProcess}
      <section class="case-block">
        <h3>Entregables</h3>
        <ul class="case-deliverables">${deliverables}</ul>
      </section>
      ${mediaAfterDeliverables}
      <section class="case-block">
        <h3>Tecnología</h3>
        <p>${escapeHTML(project.technology)}</p>
      </section>
      ${mediaBeforeNote}
      ${note}
      ${links}
    </div>
  `;
}

function updateHash(projectId) {
  const url = new URL(window.location.href);
  url.hash = projectId ? `proyecto=${projectId}` : "";
  isHashUpdate = true;
  try {
    history.replaceState(null, "", url);
  } catch {
    window.location.hash = url.hash;
  }
  window.setTimeout(() => { isHashUpdate = false; }, 0);
}

function resetDialogScroll() {
  dialogContent.scrollTop = 0;
  dialogContent.scrollLeft = 0;
}

const IMAGE_SCRUB_TRAVEL_PX = 1200;

function normalizeWheelDelta(event, stage) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    const lineHeight = Number.parseFloat(getComputedStyle(stage).lineHeight);
    return event.deltaY * (Number.isFinite(lineHeight) ? lineHeight : 16);
  }
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * stage.clientHeight;
  return event.deltaY;
}

function setupImageScrollScrub() {
  const stages = [...dialogContent.querySelectorAll("[data-image-scroll-scrub]")];
  if (!stages.length) return () => {};

  const controllers = stages.map((stage) => {
    const image = stage.querySelector("[data-scroll-scrub-image]");
    let offset = 0;
    let maxTravel = 0;
    let activePointerId = null;
    let pointerY = 0;

    const measureTravel = () => {
      maxTravel = Math.max(0, image.offsetHeight - stage.clientHeight);
      offset = Math.min(offset, maxTravel);
    };
    const canScrub = () => !reducedMotion.matches && image.complete && image.naturalWidth > 0 && maxTravel > 0;
    const renderOffset = () => stage.style.setProperty("--scrub-translate-y", `${-offset}px`);
    const scrubByPixels = (pixels) => {
      offset = Math.min(maxTravel, Math.max(0, offset + (pixels / IMAGE_SCRUB_TRAVEL_PX) * maxTravel));
      renderOffset();
    };
    const resetPointerScrub = () => {
      if (activePointerId !== null && stage.hasPointerCapture?.(activePointerId)) stage.releasePointerCapture(activePointerId);
      activePointerId = null;
      stage.classList.remove("is-scrubbing");
    };
    const updateMode = () => {
      const usesReducedMotion = reducedMotion.matches;
      measureTravel();
      if (usesReducedMotion) {
        offset = 0;
        resetPointerScrub();
      }
      const scrubEnabled = canScrub();
      stage.classList.toggle("is-reduced-motion", usesReducedMotion);
      stage.classList.toggle("is-scroll-scrub-enabled", scrubEnabled);
      stage.tabIndex = scrubEnabled ? 0 : -1;
      stage.setAttribute("aria-disabled", String(!scrubEnabled));
      renderOffset();
    };
    const finishPointerScrub = (event) => {
      if (event.pointerId !== activePointerId) return;
      if (event.cancelable) event.preventDefault();
      resetPointerScrub();
    };
    const handleWheel = (event) => {
      if (!canScrub()) return;
      event.preventDefault();
      scrubByPixels(normalizeWheelDelta(event, stage));
    };
    const handlePointerDown = (event) => {
      if (!canScrub() || (event.pointerType !== "touch" && event.pointerType !== "pen")) return;
      event.preventDefault();
      activePointerId = event.pointerId;
      pointerY = event.clientY;
      stage.setPointerCapture?.(activePointerId);
      stage.classList.add("is-scrubbing");
    };
    const handlePointerMove = (event) => {
      if (event.pointerId !== activePointerId || !canScrub()) return;
      event.preventDefault();
      scrubByPixels(pointerY - event.clientY);
      pointerY = event.clientY;
    };
    const handleKeyDown = (event) => {
      if (!canScrub()) return;
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        offset = event.key === "Home" ? 0 : maxTravel;
        renderOffset();
        return;
      }
      const pixelStep = event.key === "PageDown" || event.key === "PageUp" ? stage.clientHeight : 96;
      const pixels = event.key === "ArrowDown" || event.key === "PageDown" ? pixelStep
        : event.key === "ArrowUp" || event.key === "PageUp" ? -pixelStep
        : null;
      if (pixels === null) return;
      event.preventDefault();
      scrubByPixels(pixels);
    };
    const handleError = () => {
      resetPointerScrub();
      stage.classList.add("is-media-error");
      stage.classList.remove("is-scroll-scrub-enabled");
      stage.tabIndex = -1;
      stage.setAttribute("aria-disabled", "true");
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    stage.addEventListener("pointerdown", handlePointerDown, { passive: false });
    stage.addEventListener("pointermove", handlePointerMove, { passive: false });
    stage.addEventListener("pointerup", finishPointerScrub, { passive: false });
    stage.addEventListener("pointercancel", finishPointerScrub, { passive: false });
    stage.addEventListener("keydown", handleKeyDown);
    image.addEventListener("load", updateMode);
    image.addEventListener("error", handleError);
    updateMode();

    return {
      updateMode,
      cleanup() {
        resetPointerScrub();
        stage.removeEventListener("wheel", handleWheel);
        stage.removeEventListener("pointerdown", handlePointerDown);
        stage.removeEventListener("pointermove", handlePointerMove);
        stage.removeEventListener("pointerup", finishPointerScrub);
        stage.removeEventListener("pointercancel", finishPointerScrub);
        stage.removeEventListener("keydown", handleKeyDown);
        image.removeEventListener("load", updateMode);
        image.removeEventListener("error", handleError);
      }
    };
  });

  const handleResize = () => controllers.forEach(({ updateMode }) => updateMode());
  window.addEventListener("resize", handleResize, { passive: true });

  const handleMotionPreference = () => controllers.forEach(({ updateMode }) => updateMode());
  if (typeof reducedMotion.addEventListener === "function") reducedMotion.addEventListener("change", handleMotionPreference);
  else reducedMotion.addListener(handleMotionPreference);

  return () => {
    if (typeof reducedMotion.removeEventListener === "function") reducedMotion.removeEventListener("change", handleMotionPreference);
    else reducedMotion.removeListener(handleMotionPreference);
    window.removeEventListener("resize", handleResize);
    controllers.forEach(({ cleanup }) => cleanup());
  };
}

let lightboxGallery = [];
let lightboxIndex = 0;

function readMediaDetails(trigger) {
  const figure = trigger.closest(".case-media__item");
  const image = figure?.querySelector("img");
  const labelNode = figure?.querySelector(".case-media__label");
  // The label also holds the running number and the state chip; keep only its own text.
  const name = labelNode ? [...labelNode.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("").trim() : "";
  const state = labelNode?.querySelector(".case-media__state")?.textContent.trim() || "";

  return {
    src: trigger.getAttribute("href"),
    alt: image?.getAttribute("alt") || "",
    label: state ? `${state} · ${name}` : name,
    caption: figure?.querySelector("figcaption > span")?.textContent.trim() || ""
  };
}

function renderLightboxItem() {
  const item = lightboxGallery[lightboxIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxLabel.textContent = item.label;
  lightboxCaption.textContent = item.caption;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxGallery.length}`;
  lightbox.classList.toggle("is-single", lightboxGallery.length < 2);
}

function stepLightbox(delta) {
  if (lightboxGallery.length < 2) return;
  lightboxIndex = (lightboxIndex + delta + lightboxGallery.length) % lightboxGallery.length;
  renderLightboxItem();
  announcer.textContent = `Imagen ${lightboxIndex + 1} de ${lightboxGallery.length}. ${lightboxGallery[lightboxIndex].label}`;
}

function closeLightbox() {
  if (lightbox.open) lightbox.close();
}

function openLightbox(gallery, index) {
  lightboxGallery = gallery;
  lightboxIndex = index;
  renderLightboxItem();
  if (!lightbox.open) lightbox.showModal();
}

function setupLightbox() {
  const triggers = [...dialogContent.querySelectorAll("[data-lightbox-open]")];
  if (!triggers.length) return () => {};

  const handleClick = (event) => {
    const trigger = event.currentTarget;
    // Let modified clicks keep the native "open in a new tab" behaviour.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const section = trigger.closest(".case-media") || dialogContent;
    const siblings = [...section.querySelectorAll("[data-lightbox-open]")];
    const gallery = siblings.map(readMediaDetails).filter((item) => item.src);
    const index = siblings.indexOf(trigger);
    if (!gallery.length || index < 0) return;
    event.preventDefault();
    openLightbox(gallery, index);
  };

  triggers.forEach((trigger) => trigger.addEventListener("click", handleClick));
  return () => {
    closeLightbox();
    triggers.forEach((trigger) => trigger.removeEventListener("click", handleClick));
  };
}

if (lightbox && lightboxImage) {
  lightbox.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
    lightboxGallery = [];
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    stepLightbox(event.key === "ArrowLeft" ? -1 : 1);
  });
}

function teardownDialogMedia() {
  if (dialogMediaSetupFrame) cancelAnimationFrame(dialogMediaSetupFrame);
  dialogMediaSetupFrame = 0;
  cleanupDialogMedia();
  cleanupDialogMedia = () => {};
}

function scheduleDialogMediaSetup() {
  dialogMediaSetupFrame = requestAnimationFrame(() => {
    dialogMediaSetupFrame = 0;
    resetDialogScroll();
    const cleanups = [setupImageScrollScrub(), setupLightbox()];
    cleanupDialogMedia = () => cleanups.forEach((cleanup) => cleanup());
  });
}

function openProject(projectId, trigger = null, shouldUpdateHash = true) {
  const project = PROJECTS[projectId];
  if (!project) return;

  teardownDialogMedia();
  activeTrigger = trigger || document.querySelector(`[data-project="${CSS.escape(projectId)}"]`);
  dialogIndex.textContent = project.index;
  dialogContent.innerHTML = createProjectMarkup(project);
  resetDialogScroll();
  dialog.dataset.project = projectId;
  document.body.classList.add("dialog-open");

  if (!dialog.open) dialog.showModal();
  dialogClose.focus({ preventScroll: true });
  resetDialogScroll();
  scheduleDialogMediaSetup();
  announcer.textContent = `Caso de ${project.title} abierto.`;
  if (shouldUpdateHash) updateHash(projectId);
}

function finishClose(shouldUpdateHash = true) {
  teardownDialogMedia();
  dialog.classList.remove("dialog-closing");
  if (dialog.open) dialog.close();
  delete dialog.dataset.project;
  document.body.classList.remove("dialog-open");
  dialogContent.innerHTML = "";
  resetDialogScroll();
  announcer.textContent = "Caso de proyecto cerrado.";
  if (shouldUpdateHash) updateHash("");
  activeTrigger?.focus();
}

function closeProject(shouldUpdateHash = true) {
  if (!dialog.open || dialog.classList.contains("dialog-closing")) return;
  teardownDialogMedia();
  if (reducedMotion.matches) {
    finishClose(shouldUpdateHash);
    return;
  }
  dialog.classList.add("dialog-closing");
  window.setTimeout(() => finishClose(shouldUpdateHash), 240);
}

if (dialog && dialogClose && dialogContent && dialogIndex) {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project, button));
  });

  dialogClose.addEventListener("click", () => closeProject());
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
}

function projectIdFromHash() {
  const match = window.location.hash.match(/^#proyecto=([a-z0-9-]+)$/);
  return match?.[1] || null;
}

if (dialog && dialogClose && dialogContent && dialogIndex) {
  window.addEventListener("hashchange", () => {
    if (isHashUpdate) return;
    const projectId = projectIdFromHash();
    if (projectId && PROJECTS[projectId]) openProject(projectId, null, false);
    else closeProject(false);
  });

  const initialProject = projectIdFromHash();
  if (initialProject && PROJECTS[initialProject]) openProject(initialProject, null, false);
}

function setupTheme() {
  const toggle = document.querySelector(".theme-toggle");
  const label = toggle.querySelector(".theme-toggle__text");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable on local files. */ }

  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
    label.textContent = isDark ? "Claro" : "Oscuro";
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#141411" : "#f3efe5";
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Keep the theme for this view only. */ }
    window.dispatchEvent(new Event("themechange"));
  };

  setTheme(savedTheme === "dark" ? "dark" : "light");
  toggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

  elements.forEach((element) => observer.observe(element));
}

function setupScrollProgress() {
  const bar = document.querySelector(".scroll-progress span");
  let ticking = false;

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function setupTicker() {
  const ticker = document.querySelector(".ticker");
  const track = ticker?.querySelector(".ticker__track");
  const template = track?.querySelector("[data-ticker-set]");
  if (!ticker || !track || !template) return;

  const canonicalSet = template.cloneNode(true);
  const rebuildTicker = () => {
    track.replaceChildren(canonicalSet.cloneNode(true));
    const setWidth = track.firstElementChild.getBoundingClientRect().width;
    if (!setWidth) return;

    const setsPerLoop = Math.max(1, Math.ceil(ticker.getBoundingClientRect().width / setWidth) + 1);
    const totalSets = setsPerLoop * 2;
    track.replaceChildren(...Array.from({ length: totalSets }, () => canonicalSet.cloneNode(true)));
    track.style.setProperty("--ticker-loop-distance", `${setWidth * setsPerLoop}px`);
  };

  rebuildTicker();
  if ("ResizeObserver" in window) {
    new ResizeObserver(rebuildTicker).observe(ticker);
    return;
  }
  window.addEventListener("resize", rebuildTicker, { passive: true });
}

function setupCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let pointerX = -100;
  let pointerY = -100;
  let ringX = -100;
  let ringY = -100;
  let cursorFrame = 0;

  const renderCursor = () => {
    cursorFrame = 0;
    ringX += (pointerX - ringX) * 0.24;
    ringY += (pointerY - ringY) * 0.24;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    if (Math.abs(pointerX - ringX) > 0.2 || Math.abs(pointerY - ringY) > 0.2) {
      cursorFrame = requestAnimationFrame(renderCursor);
    }
  };

  const queueCursorFrame = () => {
    if (!cursorFrame && !document.hidden) cursorFrame = requestAnimationFrame(renderCursor);
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    dot.classList.add("is-active");
    ring.classList.add("is-active");
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
    queueCursorFrame();
  }, { passive: true });

  document.addEventListener("pointerleave", () => {
    dot.classList.remove("is-active");
    ring.classList.remove("is-active");
  });

  document.querySelectorAll("[data-project]").forEach((project) => {
    project.addEventListener("pointerenter", () => ring.classList.add("is-project"));
    project.addEventListener("pointerleave", () => ring.classList.remove("is-project"));
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) return;
    if (cursorFrame) cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
    pointerX = pointerY = ringX = ringY = -100;
    dot.style.transform = "translate3d(-100px, -100px, 0)";
    ring.style.transform = "translate3d(-100px, -100px, 0)";
    dot.classList.remove("is-active");
    ring.classList.remove("is-active", "is-project");
  });
}

function setupMagneticElements() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    element.addEventListener("pointerleave", () => { element.style.transform = ""; });
  });
}

function setupTiltZones() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion.matches) return;
  document.querySelectorAll("[data-tilt-zone]").forEach((zone) => {
    zone.addEventListener("pointermove", (event) => {
      const rect = zone.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
      zone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    zone.addEventListener("pointerleave", () => { zone.style.transform = ""; });
  });
}

function setupHeroField() {
  const canvas = document.querySelector("#hero-field");
  if (!canvas) return;
  const hero = canvas.closest(".hero");
  if (!hero) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  let width = 0;
  let height = 0;
  let pointer = { x: 0.7, y: 0.28 };
  const points = Array.from({ length: 34 }, (_, index) => ({
    x: ((index * 47) % 101) / 100,
    y: ((index * 73 + 19) % 97) / 96,
    size: 1 + (index % 3)
  }));

  const draw = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    const styles = getComputedStyle(document.documentElement);
    const ink = styles.getPropertyValue("--ink").trim();
    const coral = styles.getPropertyValue("--coral").trim();
    const scrollShift = Math.min(1, window.scrollY / Math.max(1, hero.offsetHeight));

    points.forEach((point, index) => {
      const x = point.x * width;
      const y = ((point.y + scrollShift * (index % 2 ? 0.05 : -0.04) + 1) % 1) * height;
      const distance = Math.hypot(x - pointer.x * width, y - pointer.y * height);
      const influence = Math.max(0, 1 - distance / 220);
      context.beginPath();
      context.arc(x, y, point.size + influence * 3, 0, Math.PI * 2);
      context.fillStyle = influence > 0.18 ? coral : ink;
      context.globalAlpha = 0.22 + influence * 0.5;
      context.fill();

      if (distance < 180) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(pointer.x * width, pointer.y * height);
        context.strokeStyle = coral;
        context.globalAlpha = influence * 0.42;
        context.lineWidth = 1;
        context.stroke();
      }
    });
    context.globalAlpha = 1;
  };

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    draw();
  };

  if (!reducedMotion.matches) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      pointer = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height };
      requestAnimationFrame(draw);
    }, { passive: true });
    window.addEventListener("scroll", () => requestAnimationFrame(draw), { passive: true });
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("themechange", draw);
  resize();
}

setupTheme();
setupReveal();
setupScrollProgress();
setupTicker();
setupCursor();
setupMagneticElements();
setupTiltZones();
setupHeroField();
