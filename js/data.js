/* ==========================================================================
   Datos de publicaciones y testimonios — INMOV Soluciones
   Fuente: página oficial de Facebook de la empresa (inmovsoluciones).
   ========================================================================== */

/* ==========================================================================
   Catálogo de Propiedades Reales — INMOV Soluciones
   ========================================================================== */

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
