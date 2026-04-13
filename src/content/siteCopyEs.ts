import type { SiteCopy } from "@/content/siteCopy";
import { routes } from "@/lib/site";

const contactHref = routes.contact;

/** Spanish site copy — structure mirrors `siteCopy` (English). */
export const siteCopyEs: SiteCopy = {
  brand: "Centric",
  headerBrand: "Centric Group",
  nav: [
    { label: "Proyectos", href: routes.projects },
    { label: "Servicios", href: routes.services },
    { label: "Nosotros", href: routes.about },
    { label: "Zonas de servicio", href: routes.location },
    { label: "Contacto", href: routes.contact },
  ],
  googleReviews: {
    title: "Lo que dicen nuestros clientes",
    writeReviewCta: "Escribir una reseña",
    businessProfileUrl: "https://share.google/Ku5vR3nY224CqZ3PF",
    aggregateRating: 5,
    reviews: [
      {
        id: "1",
        rating: 5,
        text: "Se encargaron de nuestros planos y permisos, y luego dejaron impecables la cocina y el baño con el azulejo. El equipo fue ordenado, los plazos fueron realistas y los acabados quedaron excelentes.",
        publishTime: "2025-02-14T12:00:00.000Z",
        authorName: "Guillermo Vega",
      },
      {
        id: "2",
        rating: 5,
        text: "Hemos trabajado con varios contratistas: la comunicación de Centric fue la mejor. El yeso y la preparación para pintura quedaron perfectos; la lista de pendientes fue corta.",
        publishTime: "2025-01-08T10:00:00.000Z",
        authorName: "Sarah Chen",
      },
      {
        id: "3",
        rating: 5,
        text: "Renovación completa del baño: impermeabilización, azulejo, grifería: todo pasó inspección a la primera. Los llamaría de nuevo para la próxima habitación.",
        publishTime: "2024-11-28T15:30:00.000Z",
        authorName: "Marcus Williams",
      },
      {
        id: "4",
        rating: 5,
        text: "Presupuestos honestos desde el inicio. Cuando cambiamos el alcance de la cocina, nos dieron opciones y costos el mismo día: sin sorpresas en la factura.",
        publishTime: "2024-10-03T09:00:00.000Z",
        authorName: "Elena Ruiz",
      },
      {
        id: "5",
        rating: 5,
        text: "Vivir una remodelación no es fácil, pero mantuvieron el polvo bajo control y el acabado del yeso quedó perfecto. La pintura se aplicó sin problemas.",
        publishTime: "2024-08-19T14:30:00.000Z",
        authorName: "David Park",
      },
    ],
  },
  phoneDisplay: "+1 (305) 205-4016",
  phoneTel: "+13052054016",
  heroLeadingMark: "",
  hero: {
    subhead:
      "DESDE PLANOS ARQUITECTÓNICOS Y PERMISOS HASTA COCINAS, BAÑOS, AZULEJO Y YESO TERMINADOS.",
    ctaPrimary: "VER PROYECTOS",
    ctaSecondary: "SOLICITAR PRESUPUESTO",
  },
  review: {
    stat: "+150",
    body: "renovaciones e interiores completados con propietarios que vuelven para la siguiente habitación.",
    initials: ["CG", "JM", "RK", "AL", "TP"],
  },
  vision: {
    eyebrow: "Colaboración",
    headlineBefore: "Donde tus planos",
    headlineAfter: "se convierten en un espacio terminado.",
    body:
      "Te ayudamos a pasar de dibujos y permisos a una cocina, baño, azulejo y yeso terminados, con cronogramas con los que puedes planificar y acabados de los que te sentirás orgulloso.",
    quoteFormTitle: "Solicita tu presupuesto",
    quoteFields: {
      name: "Tu nombre",
      email: "Tu correo",
      phone: "Tu teléfono",
      zip: "Tu código postal",
    },
    quoteProjectTypeLabel: "Tipo de proyecto",
    quoteProjectTypes: [
      { value: "", label: "Selecciona el tipo de proyecto" },
      { value: "plans-permits", label: "Planos y permisos" },
      { value: "kitchen", label: "Remodelación de cocina" },
      { value: "bath", label: "Remodelación de baño" },
      { value: "tile", label: "Azulejo y pisos" },
      { value: "drywall", label: "Yeso e interiores" },
      { value: "full-remodel", label: "Remodelación completa / varias habitaciones" },
      { value: "other", label: "Otro — descríbelo en el correo" },
    ],
    quoteCta: "Obtener presupuesto",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "De la primera conversación a la entrega final",
    subtitle:
      "Los sitios de remodelación premium ganan cuando los propietarios ven un proceso repetible: alcance, documentación, calidad de obra y comunicación. Este es el nuestro.",
    steps: [
      {
        title: "Descubrimiento y alcance",
        description:
          "Recorremos el espacio, alineamos objetivos, presupuesto y plazos, y documentamos qué es el éxito antes de pedir material o cortar nada.",
      },
      {
        title: "Planos e ingeniería",
        description:
          "Los planos arquitectónicos y los detalles se mantienen coordinados con estructura, MEP y acabados para que el equipo de obra no tenga que adivinar.",
      },
      {
        title: "Permisos y cumplimiento",
        description:
          "Paquetes de permisos, presentaciones y seguimiento con el municipio: el trabajo que empieza es trabajo aprobado.",
      },
      {
        title: "Obra y protección",
        description:
          "Rutas protegidas, contención de polvo y coordinación diaria en obra: cocina, baño, azulejo, yeso y acabados según especificación.",
      },
      {
        title: "Inspecciones y entrega",
        description:
          "Obra lista para inspección, lista de pendientes corta y recorrido final para que estés tranquilo antes de cerrar el trabajo.",
      },
    ],
    trustLine:
      "Licenciados y asegurados · Actualizaciones por escrito con las que puedes planificar · Obras limpias y respetuosas",
  },
  portfolio: {
    title: "Proyectos seleccionados",
    subtitle:
      "Cocinas, baños, azulejo, yeso e interiores que hemos planificado, permisado y construido.",
    row2Subtitle: "Más remodelaciones, azulejo y detalles de acabado de trabajos recientes.",
    reelVideoSrc: "/hero.mp4",
    reelVideoSrc2: "/hero-reversed.mp4",
    reelBridgeTitle: "En obra",
  },
  offers: {
    title: "Servicios",
    subtitle:
      "Planos arquitectónicos, permisos y oficio interior: cocina, baño, azulejo y yeso.",
    items: [
      {
        title: "Planos arquitectónicos",
        description:
          "Dibujos y coordinación para que tu remodelación sea clara, alineada al código y lista para construir: distribución, detalles y revisiones que mantienen el avance.",
        cta: "Hablar de tus planos",
      },
      {
        title: "Permisos",
        description:
          "Paquetes de permisos, presentaciones y seguimiento con el municipio para que el trabajo aprobado arranque a tiempo y las inspecciones sean claras.",
        cta: "Consultar sobre permisos",
      },
      {
        title: "Cocina",
        description:
          "Remodelaciones completas de cocina: distribución, gabinetes, encimeras, iluminación y acabados, pensados para el uso diario y un aspecto duradero.",
        cta: "Planificar una cocina",
      },
      {
        title: "Baño",
        description:
          "Baños desde actualizaciones hasta renovaciones totales: impermeabilización, grifería, ventilación y acabados bien hechos.",
        cta: "Planificar un baño",
      },
      {
        title: "Azulejo",
        description:
          "Pisos, muros, duchas, salpicaderos y diseños personalizados con líneas rectas, buena preparación y lechada que aguanta.",
        cta: "Ver opciones de azulejo",
      },
      {
        title: "Yeso",
        description:
          "Colocación, cinta, acabado y textura a juego, más reparaciones, para que paredes y techos queden lisos y listos para pintar.",
        cta: "Solicitar yeso",
      },
    ],
  },
  about: {
    title: "Nosotros",
    body: [
      "Planos, permisos e interiores — cocinas, baños, azulejo y yeso — con comunicación clara desde el recorrido hasta la lista de pendientes.",
    ],
    credentials: "Licenciados y asegurados · Sur de Florida",
    cta: "Trabajar con Centric",
    portraitSrc: "/partnership-blueprint.png",
    portraitAlt: "Plano enrollado — planos arquitectónicos y colaboración en el proyecto",
    quote: "Plazos honestos. Acabados que notas cada día.",
  },
  contact: {
    title: "Contacto",
    body:
      "Cuéntanos sobre tus planos, permisos o próximo proyecto de cocina, baño, azulejo o yeso: te responderemos con los siguientes pasos.",
    quoteLead:
      "Planos, permisos o remodelación: respondemos con los siguientes pasos.",
    email: "Centricgroup.us@gmail.com",
  },
  locationPage: {
    title: "Ubicación y zona de servicio",
    lead:
      "Centric Group trabaja con propietarios en todo el Sur de Florida: desde planos y permisos hasta cocina, baño, azulejo y yeso.",
    body: [
      "Coordinamos visitas al sitio, trámites municipales y cronogramas de producción para que tu proyecto siga avanzando.",
      "Escríbenos desde la página de contacto para hablar de tu dirección, plazo y alcance.",
    ],
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C24.45%2C-79.95%2C31.05&layer=mapnik&marker=25.7617%2C-80.1918",
    mapCaption: "Sur de Florida — área metropolitana de Miami y condados cercanos",
    serviceAreasHeading: "Zonas que atendemos",
    serviceAreasFootnote:
      "¿No ves tu zona? Contáctanos: a menudo coordinamos proyectos entre condados cuando el alcance lo amerita.",
    schemaItemListName: "Centric Group — Zonas de servicio en el Sur de Florida",
    schemaItemListDescription:
      "Ciudades y condados donde Centric Group ofrece planos, permisos, remodelación de cocina y baño, azulejo y yeso.",
  },
  footer: {
    rights: "Centric Group",
    location: "Miami · Sur de Florida",
    mapHeading: "Zona de servicio",
    mapLinkLabel: "Página de ubicación",
  },
  ui: {
    navAriaPrimary: "Principal",
    navAriaMobile: "Principal (móvil)",
    footerNavAria: "Pie de página",
    introAria: "Introducción",
    headerBrandHomeAria: "Inicio de Centric Group",
    mapIframeTitle: "Mapa de Florida — zona de servicio de Centric Group",
    offersEyebrow: "Lo que hacemos",
    aboutEyebrow: "Quiénes somos",
    processCta: "Iniciar una conversación",
    reviewExpandLess: "Menos",
    reviewExpandMore: "Más",
    reviewPagesNav: "Páginas de reseñas",
    reviewPagesPrev: "Página anterior",
    reviewPagesNext: "Página siguiente",
    googleBusinessAria: "Perfil de Google Business",
    portfolioCarouselRegion: "Carrusel de galería de proyectos",
    portfolioCarouselPrev: "Desplazar carrusel a la izquierda",
    portfolioCarouselNext: "Desplazar carrusel a la derecha",
    portfolioRow2Region: "Carrusel de más proyectos",
    portfolioRow2Prev: "Desplazar fila de proyectos a la izquierda",
    portfolioRow2Next: "Desplazar fila de proyectos a la derecha",
    serviceAreasPreviewBlurb:
      "Miami y todo el Sur de Florida — {count} ciudades y condados. Una muestra abajo; consulta el directorio completo de cada zona que cubrimos.",
    serviceAreasCoverageSuffix: "para el mapa de cobertura y más detalle.",
    reviewsEmptyHint: "Añade reseñas en",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Centric Group ofrece planos arquitectónicos, coordinación de permisos y remodelación de interiores — incluidas cocinas y baños, instalación de azulejo y yeso — en Miami-Dade, Broward, Palm Beach y comunidades selectas del condado de Monroe. Usa el directorio siguiente para encontrar tu ciudad o condado.",
    locationDirectoryIntro:
      "{count} ciudades y condados en el Sur de Florida: cada una con contexto local para quienes buscan contratistas de remodelación, ayuda con permisos y obra interior cerca de ti.",
    locationPhotoCredit:
      "Las fotos de zona son stock del Sur de Florida (p. ej. Miami Beach, Hollywood FL, Boynton Beach, Keys) de",
    locationPhotoCreditSuffix:
      ", guardadas en el sitio; pide fotos de proyectos Centric terminados en tu ciudad.",
    locationCoverageMapHeading: "Mapa de cobertura",
    locationContactLine: "Contáctanos",
    locationContactSuffix: "con la dirección de tu proyecto.",
    notFoundTitle: "404",
    notFoundBody:
      "Esta página no existe. Vuelve al inicio o explora servicios y proyectos.",
    notFoundHome: "Inicio",
    notFoundContact: "Contacto",
    quoteEmailSubject: "Solicitud de presupuesto — Centric Group",
    quoteEmailName: "Nombre",
    quoteEmailEmail: "Correo",
    quoteEmailPhone: "Teléfono",
    quoteEmailZip: "CP",
    quoteEmailProjectType: "Tipo de proyecto",
    quoteEmailNotSelected: "(no seleccionado)",
    quoteSubmitting: "Enviando…",
    quoteSubmitLoadingHint: "Enviando tu solicitud",
    quoteSubmitSuccess: "Nos pondremos en contacto en breve.",
    quoteSubmitError:
      "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.",
  },
};

export const portfolioCardsEs = [
  {
    src: "/portfolio/01.jpg",
    alt: "Remodelación interior en Sunny Isles Beach",
    category: "Sunny Isles Beach",
    title: "Interior residencial",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/02.jpg",
    alt: "Detalle de acabado y carpintería",
    category: "Sunny Isles Beach",
    title: "Gabinetes y acabados",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/03.jpg",
    alt: "Proyecto en Aventura — sala",
    category: "Aventura",
    title: "Residencia Turnberry",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/04.jpg",
    alt: "Proyecto en Aventura — interior",
    category: "Aventura",
    title: "Plano abierto e iluminación",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/05.jpg",
    alt: "Remodelación en Aventura en curso",
    category: "Aventura",
    title: "Cocina y flujo con la sala",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/06.jpg",
    alt: "Trabajo interior en obra",
    category: "Residencial",
    title: "Azulejo y detalle",
    cta: "Ver",
    href: contactHref,
  },
];

export const portfolioCardsRow2Es = [
  {
    src: "/portfolio/07.jpg",
    alt: "Renovación de cocina e interior",
    category: "Cocina",
    title: "Actualización de gabinetes y encimera",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/08.jpg",
    alt: "Baño e instalación de azulejo",
    category: "Baño",
    title: "Tocador y muro de azulejo",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/09.jpg",
    alt: "Yeso interior y molduras",
    category: "Yeso",
    title: "Muros y vanos",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/10.jpg",
    alt: "Distribución de azulejo y piso",
    category: "Azulejo",
    title: "Piso y muro",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/11.jpg",
    alt: "Detalle interior residencial",
    category: "Residencial",
    title: "Carpintería de acabado",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/12.jpg",
    alt: "Remodelación de espacio habitable",
    category: "Interiores",
    title: "Iluminación y carpintería",
    cta: "Ver",
    href: contactHref,
  },
];
