export interface GalleryItem {
  url: string;
  alt: string;
  label: string;
  category: string;
  width: number;
  height: number;
}

export type CollectionId = "anillos" | "compromiso" | "arretes" | "collares" | "pulseras";

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  anillos:    "Anillos",
  compromiso: "Anillos de Compromiso",
  arretes:    "Aretes",
  collares:   "Collares",
  pulseras:   "Pulseras",
};

/* Texto introductorio por colección — visible bajo el título y clave para SEO */
export const COLLECTION_INTROS: Record<CollectionId, string> = {
  anillos:
    "Anillos hechos a mano en Bogotá: solitarios, alianzas y piezas de alta joyería en oro 18k, platino y esmeraldas colombianas.",
  compromiso:
    "Anillos de compromiso diseñados a tu medida en Bogotá, con diamantes y gemas certificadas de origen ético. Del boceto 3D a la pieza final.",
  arretes:
    "Aretes y topos elaborados a mano en nuestro atelier: esmeraldas colombianas, diamantes y oro de 18 kilates.",
  collares:
    "Collares y colgantes de alta joyería hechos a mano: oro, plata 950 y gemas seleccionadas una a una.",
  pulseras:
    "Pulseras artesanales en oro 18k y diamantes, como nuestra pulsera tennis, elaboradas a mano en Bogotá.",
};

/*
 * Fotos reales del taller: viven en public/images/ como .webp.
 * Las piezas con url "/images/..." son fotografías propias de Minier;
 * las de images.unsplash.com son de relleno mientras llegan más fotos.
 */
export const COLLECTIONS: Record<CollectionId, GalleryItem[]> = {
  anillos: [
    { url: "/images/anillo-esmeralda.webp", alt: "Anillo de esmeralda colombiana con halo de diamantes en oro amarillo 18k, hecho a mano por Minier Joyería", label: "Esmeralda Colombiana", category: "Oro Amarillo 18k", width: 1179, height: 1179 },
    { url: "/images/solitario-cojin-lateral.webp", alt: "Anillo solitario de diamante talla cojín con banda pavé en oro blanco, en estuche Minier", label: "Solitario Talla Cojín", category: "Alta Joyería", width: 1200, height: 1200 },
    { url: "https://images.unsplash.com/photo-1614487233353-0b3e022ffe01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Alianza de eternidad pavé en oro blanco 18k", label: "Alianza Pavé Eternidad", category: "Alianzas de Boda", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1587947330318-88fcd9055420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de compromiso vintage con detalle milgrain", label: "Vintage Milgrain", category: "Colección Patrimonio", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1514612497953-05d1e5e171fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de cóctel de aguamarina con detalles de diamantes", label: "Reserva Aguamarina", category: "Joyería Fina", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1484876632310-ddb3b48133cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Pareja con alianzas a juego de la colección nupcial", label: "Alianzas a Juego", category: "Conjuntos Nupciales", width: 800, height: 800 },
  ],
  compromiso: [
    { url: "/images/solitario-radiante.webp", alt: "Anillo de compromiso con diamante talla radiante y banda pavé en oro blanco, sobre la mano", label: "Solitario Talla Radiante", category: "Anillos de Compromiso", width: 1086, height: 1086 },
    { url: "/images/solitario-cojin.webp", alt: "Anillo de compromiso con diamante talla cojín y banda pavé en oro blanco, en estuche Minier", label: "Solitario Cojín Pavé", category: "Anillos de Compromiso", width: 1200, height: 1200 },
    { url: "/images/solitario-oro.webp", alt: "Anillo solitario de diamante con montura envolvente en oro amarillo 18k, en estuche Minier", label: "Solitario en Oro Amarillo", category: "Anillos de Compromiso", width: 1200, height: 1200 },
  ],
  arretes: [
    { url: "/images/topos-esmeralda.webp", alt: "Topos de esmeralda colombiana con halo de diamantes en oro amarillo 18k, en estuche Minier", label: "Topos de Esmeralda", category: "Esmeraldas Colombianas", width: 736, height: 660 },
    { url: "/images/topos-diamante.webp", alt: "Topos de diamante talla oval con halo en oro blanco, en estuche Minier", label: "Topos Halo de Diamantes", category: "Oro Blanco 18k", width: 852, height: 838 },
    { url: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes de oro sobre textil blanco", label: "Dormilonas Doradas", category: "Oro 18k", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1589095053205-8fc842336f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes con perlas y detalles en oro", label: "Perla Esencial", category: "Colección Perlas", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1624613673129-d5ffef60eba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes con gemas azules y plata", label: "Zafiro Azul", category: "Gemas de Color", width: 800, height: 800 },
  ],
  collares: [
    { url: "https://images.unsplash.com/photo-1744369382892-eb5b6a2fdc6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de diamantes sobre maniquí", label: "Collar Diamant", category: "Alta Joyería", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de diamantes y perlas con colgante", label: "Perla & Diamante", category: "Colección Nupcial", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de plata con colgante de corazón", label: "Coeur d'Argent", category: "Plata 950", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar delicado sobre hoja natural", label: "Nature Fine", category: "Colección Botánica", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar elegante con gema central en oro", label: "Grand Soir", category: "Alta Joyería", width: 800, height: 800 },
  ],
  pulseras: [
    { url: "/images/pulsera-tennis.webp", alt: "Pulsera tennis de diamantes en oro amarillo 18k sobre la muñeca, hecha a mano por Minier Joyería", label: "Pulsera Tennis", category: "Oro Amarillo 18k", width: 1086, height: 1086 },
  ],
};
