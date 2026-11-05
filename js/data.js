/* ==========================================================================
   Datos de publicaciones y testimonios — INMOV Soluciones
   Fuente: página oficial de Facebook de la empresa (inmovsoluciones).
   ========================================================================== */

/* ==========================================================================
   Catálogo de Propiedades Reales — INMOV Soluciones
   ========================================================================== */

/* ==========================================================================
   Detalle de Servicios — INMOV Soluciones
   Información enriquecida para el Modal Interactivo estilo Apple Sheet
   ========================================================================== */

const DETALLE_SERVICIOS = {
  compra: {
    id: "compra",
    titulo: "Compra",
    eyebrow: "Adquisición & Patrimonio",
    lema: "Encuentra una propiedad de acuerdo con tus posibilidades y objetivos.",
    imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones te ayudamos a identificar tu capacidad de compra para que puedas tomar una decisión inmobiliaria informada y segura. Analizamos tus posibilidades económicas, capacidad de financiamiento y recursos disponibles.",
    secciones: [
      {
        titulo: "Alternativas de financiamiento que evaluamos:",
        items: [
          { nombre: "Crédito Infonavit", desc: "Aprovechamiento de tu crédito y ahorro en la subcuenta de vivienda." },
          { nombre: "Crédito Fovissste", desc: "Opciones de adquisición para trabajadores del sector público." },
          { nombre: "Crédito bancario", desc: "Alternativas de financiamiento de acuerdo con tu perfil e ingresos." },
          { nombre: "Recursos propios", desc: "Compra mediante ahorro o capital disponible." },
          { nombre: "Esquemas combinados", desc: "Posibilidad de complementar recursos propios con financiamiento." }
        ]
      }
    ],
    conclusion: "Nuestro objetivo es ayudarte a establecer un presupuesto realista, identificar propiedades que se ajusten a tu capacidad económica y acompañarte durante el proceso de compra, desde la búsqueda hasta la formalización de la operación.<br><br><strong>En INMOV Soluciones convertimos tus posibilidades en oportunidades para adquirir tu patrimonio.</strong>",
    ctaTexto: "Quiero asesoría para comprar",
    ctaWhatsapp: "Hola,%20me%20interesa%20asesoría%20para%20comprar%20una%20propiedad%20con%20INMOV%20Soluciones."
  },
  venta: {
    id: "venta",
    titulo: "Venta",
    eyebrow: "Comercialización Inmobiliaria",
    lema: "Tu propiedad merece una buena oportunidad de venta.",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones te acompañamos durante todo el proceso de comercialización de tu inmueble, ofreciendo estrategias de promoción, asesoría y atención personalizada para conectar tu propiedad con compradores potenciales.",
    secciones: [
      {
        titulo: "Nuestros servicios incluyen:",
        items: [
          { nombre: "Asesoría comercial", desc: "Análisis de las características del inmueble y orientación sobre su valor de mercado." },
          { nombre: "Promoción inmobiliaria", desc: "Difusión estratégica en medios digitales y canales especializados." },
          { nombre: "Atención a compradores", desc: "Seguimiento de interesados, visitas y negociación de ofertas." },
          { nombre: "Asesoría legal", desc: "Revisión documental y acompañamiento durante el proceso de compraventa." },
          { nombre: "Gestión de créditos", desc: "Orientación para compradores con opciones Infonavit, Fovissste y créditos bancarios." },
          { nombre: "Cierre de operaciones", desc: "Acompañamiento hasta la formalización de la compraventa." }
        ]
      }
    ],
    conclusion: "En INMOV Soluciones trabajamos para que vender tu propiedad sea un proceso claro, seguro y con el respaldo de profesionales.<br><br><strong>Tu patrimonio está en buenas manos.</strong>",
    ctaTexto: "Quiero vender mi propiedad",
    ctaWhatsapp: "Hola,%20deseo%20asesoría%20para%20vender%20mi%20propiedad%20con%20INMOV%20Soluciones."
  },
  renta: {
    id: "renta",
    titulo: "Renta",
    eyebrow: "Arrendamiento Protegido",
    lema: "Rentamos tu propiedad con seguridad, confianza y respaldo profesional.",
    imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones te acompañamos durante todo el proceso de arrendamiento, desde la promoción de tu inmueble hasta la formalización del contrato, buscando conectar a propietarios con inquilinos adecuados y generar operaciones seguras para ambas partes.",
    secciones: [
      {
        titulo: "Nuestros servicios incluyen:",
        items: [
          { nombre: "Promoción inmobiliaria", desc: "Difusión estratégica de tu propiedad para llegar a posibles arrendatarios." },
          { nombre: "Perfilamiento de inquilinos", desc: "Revisión y evaluación minuciosa de candidatos interesados." },
          { nombre: "Pólizas jurídicas de arrendamiento", desc: "Herramientas de protección y respaldo legal para el propietario." },
          { nombre: "Elaboración de contratos", desc: "Preparación de contratos de arrendamiento conforme a las condiciones de cada operación." },
          { nombre: "Asesoría legal", desc: "Acompañamiento durante el proceso de negociación y formalización." },
          { nombre: "Administración de inmuebles", desc: "Apoyo y seguimiento continuo en la gestión de propiedades en renta." }
        ]
      }
    ],
    conclusion: "Nuestro compromiso es proteger tu patrimonio y brindarte tranquilidad durante el arrendamiento.<br><br><strong>En INMOV Soluciones, hacemos que rentar sea una experiencia más segura y confiable.</strong>",
    ctaTexto: "Quiero rentar mi inmueble",
    ctaWhatsapp: "Hola,%20me%20gustaría%20rentar%20mi%20propiedad%20con%20el%20respaldo%20de%20INMOV%20Soluciones."
  },
  asesoria: {
    id: "asesoria",
    titulo: "Asesoría legal",
    eyebrow: "Certeza Jurídica & Notarial",
    lema: "Tu patrimonio merece certeza jurídica y el respaldo de profesionales.",
    imagen: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones ofrecemos asesoría y acompañamiento en procedimientos legales y administrativos relacionados con bienes inmuebles, brindando orientación personalizada para resolver, regularizar y formalizar situaciones jurídicas que requieren atención especializada.",
    secciones: [
      {
        titulo: "Nuestros servicios incluyen:",
        items: [
          { nombre: "Regularización de propiedades", desc: "Asesoría para poner en orden la situación jurídica y documental de tus inmuebles." },
          { nombre: "Escrituración", desc: "Acompañamiento en procesos de escrituración y formalización de propiedades." },
          { nombre: "Sucesiones testamentarias e intestamentarias", desc: "Orientación y gestión de procedimientos para la transmisión legal de bienes." },
          { nombre: "Adjudicaciones", desc: "Asesoría en procedimientos de adjudicación de bienes inmuebles." },
          { nombre: "Contratos inmobiliarios", desc: "Elaboración y revisión de contratos de compraventa, arrendamiento y otros actos jurídicos." },
          { nombre: "Pólizas jurídicas de arrendamiento", desc: "Protección legal y prevención de riesgos en operaciones de renta." },
          { nombre: "Subdivisiones y régimen en condominio", desc: "Orientación y gestión de trámites para la organización y regularización de inmuebles." },
          { nombre: "Trámites administrativos", desc: "Gestión de documentación relacionada con predial, agua, alineamiento, número oficial y otros." }
        ]
      }
    ],
    conclusion: "Nuestro compromiso es brindarte soluciones claras, acompañamiento profesional y certeza jurídica en cada etapa de tus operaciones inmobiliarias.<br><br><strong>En INMOV Soluciones, protegemos lo que has construido y te ayudamos a darle certeza legal a tu patrimonio.</strong>",
    ctaTexto: "Solicitar asesoría legal",
    ctaWhatsapp: "Hola,%20necesito%20asesoría%20legal%20para%20un%20trámite%20o%20propiedad%20con%20INMOV%20Soluciones."
  },
  tramites: {
    id: "tramites",
    titulo: "Trámites y gestoría",
    eyebrow: "Gestoría Institucional 360°",
    lema: "Nosotros nos encargamos de la gestión, tú disfruta la tranquilidad de tener todo en orden.",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones ofrecemos servicios de gestoría y acompañamiento en trámites ante dependencias gubernamentales, instituciones y organismos públicos y privados. Facilitamos procesos administrativos y documentales relacionados con tu propiedad, patrimonio y necesidades particulares.",
    secciones: [
      {
        titulo: "Nuestros servicios incluyen:",
        items: [
          { nombre: "Trámites inmobiliarios", desc: "Alineamiento y número oficial, constancias, certificados y documentación relacionada con inmuebles." },
          { nombre: "Registro Público de la Propiedad", desc: "Búsqueda de antecedentes, certificados de libertad de gravamen y seguimiento registral." },
          { nombre: "Trámites de agua y predial", desc: "Regularización, aclaraciones, constancias y gestiones administrativas." },
          { nombre: "Gestoría ante alcaldías y dependencias", desc: "Seguimiento de solicitudes, permisos y documentación oficial." },
          { nombre: "Trámites notariales", desc: "Integración documental y coordinación para procesos de escrituración, adjudicación y regularización." },
          { nombre: "Gestiones ante Infonavit y Fovissste", desc: "Orientación y acompañamiento en trámites relacionados con créditos y vivienda." },
          { nombre: "Trámites administrativos especiales", desc: "Atención personalizada para procedimientos que requieren investigación y gestión documental." }
        ]
      }
    ],
    conclusion: "Cada trámite tiene un procedimiento diferente. En INMOV analizamos tu necesidad y te ofrecemos una ruta de atención clara, buscando facilitar cada proceso y optimizar tu tiempo.<br><br><strong>Tu tiempo es valioso. Nosotros te ayudamos a resolver.</strong>",
    ctaTexto: "Iniciar un trámite o gestoría",
    ctaWhatsapp: "Hola,%20deseo%20apoyo%20con%20un%20trámite%20o%20gestoría%20inmobiliaria%20con%20INMOV%20Soluciones."
  },
  acompanamiento: {
    id: "acompanamiento",
    titulo: "Acompañamiento",
    eyebrow: "Seguimiento Humano & Cercano",
    lema: "No solamente te ofrecemos un servicio, caminamos contigo hasta alcanzar tu objetivo.",
    imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
    intro: "En INMOV Soluciones creemos que cada proyecto representa una decisión importante. Por eso, brindamos acompañamiento personalizado durante las diferentes etapas de tus operaciones inmobiliarias, legales, administrativas y financieras.",
    secciones: [
      {
        titulo: "Nuestros servicios incluyen:",
        items: [
          { nombre: "Orientación personalizada", desc: "Escuchamos tus necesidades y analizamos las alternativas disponibles." },
          { nombre: "Seguimiento de proyectos", desc: "Damos continuidad a cada etapa para mantenerte informado sobre los avances." },
          { nombre: "Coordinación de servicios", desc: "Vinculamos las distintas áreas y profesionales necesarios para atender tu solicitud." },
          { nombre: "Asesoría durante procesos", desc: "Te orientamos en la toma de decisiones y en la integración de documentación." },
          { nombre: "Atención personalizada", desc: "Mantenemos comunicación constante para resolver dudas y dar seguimiento a tus necesidades." },
          { nombre: "Soluciones integrales", desc: "Buscamos conectar los servicios inmobiliarios, legales, financieros y administrativos en una misma estrategia." }
        ]
      }
    ],
    conclusion: "En INMOV Soluciones entendemos que detrás de cada trámite, propiedad o proyecto hay una meta personal o empresarial. Nuestro compromiso es acompañarte con profesionalismo, responsabilidad y atención cercana.<br><br><strong>No estás solo en el proceso. Estamos contigo en cada paso.</strong>",
    ctaTexto: "Quiero que me acompañen",
    ctaWhatsapp: "Hola,%20me%20gustaría%20solicitar%20acompañamiento%20y%20asesoría%20integral%20con%20INMOV%20Soluciones."
  }
};

const PROPIEDADES_DESTACADAS = [
  {
    id: "edificio-roma-norte",
    tipoOperacion: "Venta",
    categoria: "Edificio / Comercial",
    categoriaFiltro: "comercial",
    titulo: "Edificio en Venta · 7 Pisos",
    ubicacion: "Querétaro 34, Roma Norte, CDMX",
    zona: "Roma Norte",
    precio: "$85,000,000 MXN",
    precioPeriodo: "",
    destacado: "Oportunidad de Inversión",
    resumen: "Edificio de 7 pisos ideal para remodelar o reconvertir en departamentos residenciales, hotel boutique o corporativo en el corazón de la Roma Norte.",
    imagen: "assets/img/propiedades/edificio-roma-norte.jpg",
    specs: [
      { label: "Construcción", val: "2,700 m²" },
      { label: "Terreno", val: "370 m²" },
      { label: "Niveles", val: "7 Pisos" }
    ],
    puntosClave: [
      "Ideal para remodelar o convertir en departamentos",
      "Ubicación privilegiada en Roma Norte",
      "Alta plusvalía y retorno de inversión comercial"
    ],
    badgeTipo: "Venta",
    whatsappMsg: "Hola,%20me%20interesa%20información%20del%20Edificio%20en%20Venta%20en%20Querétaro%2034,%20Roma%20Norte"
  },
  {
    id: "depa-amueblado-polanco",
    tipoOperacion: "Renta",
    categoria: "Departamento Amueblado",
    categoriaFiltro: "departamento",
    titulo: "Departamento Amueblado · Piso 21",
    ubicacion: "Cerca de Polanco, CDMX",
    zona: "Polanco / Granada",
    precio: "$80,000 MXN",
    precioPeriodo: "/ mes",
    destacado: "Mantenimiento Incluido",
    resumen: "Vive con lujo y confort en una de las zonas más exclusivas. Totalmente amueblado con vista espectacular, acabados de alta gama y amenidades de primer nivel.",
    imagen: "assets/img/propiedades/depa-amueblado-polanco.jpg",
    specs: [
      { label: "Construcción", val: "120 m²" },
      { label: "Recámaras", val: "2 Rec." },
      { label: "Baños", val: "2.5 Baños" },
      { label: "Piso", val: "Piso 21" }
    ],
    puntosClave: [
      "Totalmente amueblado con diseño contemporáneo",
      "Amenidades: alberca, gimnasio, ludoteca y business center",
      "Seguridad 24/7 y acceso controlado",
      "Ideal para ejecutivos expatriados o diplomáticos"
    ],
    badgeTipo: "Renta",
    whatsappMsg: "Hola,%20me%20interesa%20agendar%20una%20visita%20para%20el%20Departamento%20Amueblado%20cerca%20de%20Polanco%20(Piso%2021)"
  },
  {
    id: "terreno-picacho-ajusco",
    tipoOperacion: "Venta",
    categoria: "Terreno con Construcción",
    categoriaFiltro: "terreno",
    titulo: "Terreno en Venta · 1,261 m²",
    ubicacion: "Picacho Ajusco, CDMX (A 5 min sobre carretera, altura de la Marina)",
    zona: "Sur CDMX",
    precio: "$4,200,000 MXN",
    precioPeriodo: "",
    destacado: "Escritura Pública · Se aceptan créditos",
    resumen: "Amplio terreno de 1,261 m² con construcción aproximada de 100 m² (3 recámaras, 2 baños y estancia a remodelar). Situación jurídica completamente en orden y registrada.",
    imagen: "assets/img/propiedades/terreno-picacho-ajusco.jpg",
    specs: [
      { label: "Terreno", val: "1,261 m²" },
      { label: "Construcción", val: "100 m² aprox." },
      { label: "Recámaras", val: "3 Rec." },
      { label: "Baños", val: "2 Baños" }
    ],
    puntosClave: [
      "Escritura pública inscrita en el Registro Público de la Propiedad",
      "Se aceptan créditos: Infonavit, Fovissste, Bancario y Recursos Propios",
      "A 5 minutos sobre carretera Picacho Ajusco a la altura de la Marina"
    ],
    badgeTipo: "Venta",
    whatsappMsg: "Hola,%20me%20gustaría%20solicitar%20información%20y%20citas%20para%20el%20Terreno%20en%20Venta%20en%20Picacho%20Ajusco"
  }
];

const PUBLICACIONES_FACEBOOK = [
  {
    tipo: "Asesoría & Confianza",
    tag: "Servicio 360°",
    fecha: "Reciente",
    titulo: "Tu patrimonio en las mejores manos con asesoría legal y notarial",
    texto: "Acompañamos cada etapa de tu operación inmobiliaria. Revisión de escrituras, contratos claros y coordinación con notaría para que compres o vendas con total certeza jurídica.",
    imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    link: "https://www.facebook.com/inmovsoluciones/?locale=es_LA",
    likes: 24,
    comentarios: 6
  },
  {
    tipo: "Venta Inmobiliaria",
    tag: "Oportunidad",
    fecha: "Reciente",
    titulo: "Estrategia integral para vender tu propiedad al mejor valor",
    texto: "¿Buscas vender tu casa o departamento en el sur de la CDMX? Hacemos un avalúo comercial preciso, difusión profesional y te acompañamos hasta la firma de escrituras.",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    link: "https://www.facebook.com/inmovsoluciones/?locale=es_LA",
    likes: 38,
    comentarios: 9
  },
  {
    tipo: "Rentas Seguras",
    tag: "Gestión Integral",
    fecha: "Reciente",
    titulo: "Rentas protegidas: investigación de perfiles y contratos equilibrados",
    texto: "Colocamos tu inmueble con inquilinos investigados, pólizas jurídicas y administración continua para que recibas tu renta con puntualidad y tranquilidad.",
    imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    link: "https://www.facebook.com/inmovsoluciones/?locale=es_LA",
    likes: 19,
    comentarios: 4
  },
  {
    tipo: "Trámites y Gestoría",
    tag: "Acompañamiento",
    fecha: "Reciente",
    titulo: "Gestoría inmobiliaria sin complicaciones en Ciudad de México",
    texto: "Desde avalúos hasta certificados de libertad de gravamen y liberación de hipotecas. Evita trámites engorrosos y pérdidas de tiempo con nuestro equipo especializado.",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    link: "https://www.facebook.com/inmovsoluciones/?locale=es_LA",
    likes: 31,
    comentarios: 8
  }
];

const TESTIMONIOS = [
  {
    nombre: "Aylin Sánchez",
    fecha: "14 de junio",
    texto: "Si lo recomiendo. Yo quedé y sigo contenta con el servicio, la información, asesoría y servicio se brindó de forma segura, real y los resultados fueron los esperados. Nuevamente volvería a contratarlos."
  },
  {
    nombre: "Martha Elena",
    fecha: "30 de abril",
    texto: "Muy recomendable. Te ayudan, te orientan y te tienen paciencia."
  },
  {
    nombre: "Montserrat Barredo",
    fecha: "20 de abril",
    texto: "Excelente atención, muy clara y súper amable."
  },
  {
    nombre: "Karla Guher",
    fecha: "20 de abril",
    texto: "Te explican todo paso a paso y le dan seguimiento al proceso."
  },
  {
    nombre: "Ulises Juárez",
    fecha: "20 de abril",
    texto: "Recomiendo al 100% la asesoría y todo el apoyo que brindan."
  },
  {
    nombre: "Moira Luna Estrella",
    fecha: "9 de marzo",
    texto: "Me encantó la asesoría que me brindaron, definitivamente súper recomiendo que hagan sus trámites aquí, super profesionales."
  },
  {
    nombre: "Sandra Af",
    fecha: "9 de marzo",
    texto: "Excelente atención. Si buscas alguien que te explique con paciencia todo lo que no conoces, aquí es tu opción. Altamente recomendables."
  },
  {
    nombre: "Mari Svluna",
    fecha: "9 de marzo",
    texto: "Es excelente en su trabajo, siempre tiene la solución y si no, te ayuda para que sea lo más rápido posible. En todo el proceso está al pendiente."
  },
  {
    nombre: "Karina Sindeel",
    fecha: "9 de marzo",
    texto: "Excelente atención. El profesionalismo es inigualable, muchas gracias por su asesoría."
  },
  {
    nombre: "Silvia Arias Morillón",
    fecha: "24 de febrero",
    texto: "Tienen muy buena atención, son serios y tienen conocimiento de todo lo que ofrecen, y a mí me gustó mucho la forma en que me explicaron todo."
  },
  {
    nombre: "Mirna García",
    fecha: "19 de febrero",
    texto: "Excelente atención, trato agradable y con toda la información transparente. Recomiendo ampliamente."
  }
];
