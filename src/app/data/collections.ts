export interface GalleryItem {
  url: string;
  alt: string;
  label: string;
  category: string;
  price: string;
  width: number;
  height: number;
}

export type CollectionId = "anillos" | "compromiso" | "arretes" | "collares";

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  anillos:    "Anillos",
  compromiso: "Anillos de Compromiso",
  arretes:    "Arretes",
  collares:   "Collares",
};

export const COLLECTIONS: Record<CollectionId, GalleryItem[]> = {
  anillos: [
    { url: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo solitario de platino con diamante brillante", label: "The Blanc Solitaire", category: "Anillos de Compromiso", price: "$ 4.800", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1614487233353-0b3e022ffe01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Alianza de eternidad pavé en oro blanco 18k", label: "Alianza Pavé Eternidad", category: "Alianzas de Boda", price: "$ 3.200", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1640405172860-076f1ef62ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de compromiso con zafiro ovalado en oro amarillo", label: "Royal Sapphire Set", category: "Gemas de Color", price: "$ 5.600", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1613945407943-59cd755fd69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo halo de diamantes en oro rosa sobre terciopelo", label: "The Crimson Halo", category: "Anillos de Compromiso", price: "$ 6.100", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1587947330318-88fcd9055420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de compromiso vintage con detalle milgrain", label: "Vintage Milgrain", category: "Colección Patrimonio", price: "$ 3.750", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1514612497953-05d1e5e171fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de cóctel de aguamarina con detalles de diamantes", label: "Reserva Aguamarina", category: "Joyería Fina", price: "$ 2.900", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1484876632310-ddb3b48133cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Pareja con alianzas a juego de la colección nupcial", label: "Alianzas a Juego", category: "Conjuntos Nupciales", price: "$ 4.200", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1640405172860-076f1ef62ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Solitario oval en oro amarillo 18k", label: "Solitario Oval", category: "Alta Joyería", price: "$ 7.400", width: 800, height: 800 },
  ],
  compromiso: [
    { url: "https://images.unsplash.com/photo-1518370265276-f22b706aeac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de compromiso con diamante sobre rosas rojas", label: "Promesa de Rosas", category: "Anillos de Compromiso", price: "$ 3.400", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de compromiso en estuche de presentación", label: "Estuche Nupcial", category: "Anillos de Compromiso", price: "$ 5.100", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1677045419454-e8b201856472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Primer plano de anillo de compromiso en estuche", label: "Detalle Solitario", category: "Anillos de Compromiso", price: "$ 4.600", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1613945409199-1b5527d31fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Anillo de diamante sobre textil rojo terciopelo", label: "Diamante Carmesí", category: "Anillos de Compromiso", price: "$ 6.800", width: 800, height: 800 },
  ],
  arretes: [
    { url: "https://images.unsplash.com/photo-1701777892770-df3bf8006fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Par de aretes sobre tela blanca", label: "Aretes Clásicos", category: "Joyería de Oído", price: "$ 1.800", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes de oro sobre textil blanco", label: "Dormilonas Doradas", category: "Oro 18k", price: "$ 2.200", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes de oro y plata sobre superficie negra", label: "Duo Metálico", category: "Colección Bicolor", price: "$ 1.950", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1589095053205-8fc842336f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes con perlas y detalles en oro", label: "Perla Esencial", category: "Colección Perlas", price: "$ 2.600", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1624613673129-d5ffef60eba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Aretes con gemas azules y plata", label: "Zafiro Azul", category: "Gemas de Color", price: "$ 3.100", width: 800, height: 800 },
  ],
  collares: [
    { url: "https://images.unsplash.com/photo-1744369382892-eb5b6a2fdc6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de diamantes sobre maniquí", label: "Collar Diamant", category: "Alta Joyería", price: "$ 8.900", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1719862056514-0cdacd9142b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de diamantes y perlas con colgante", label: "Perla & Diamante", category: "Colección Nupcial", price: "$ 6.400", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar de plata con colgante de corazón", label: "Coeur d'Argent", category: "Plata 950", price: "$ 1.600", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar delicado sobre hoja natural", label: "Nature Fine", category: "Colección Botánica", price: "$ 2.100", width: 800, height: 800 },
    { url: "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800", alt: "Collar elegante con gema central en oro", label: "Grand Soir", category: "Alta Joyería", price: "$ 7.200", width: 800, height: 800 },
  ],
};
