/**
 * SEOHead — Injects SEO, Open Graph, Twitter Card, and Schema.org
 * structured data into document.head (SPA-safe).
 *
 * Two layers:
 *  1. Static (once): preconnects, JSON-LD LocalBusiness, theme-color.
 *  2. Per-route (on navigation): title, description, canonical, og:*.
 *     Google renders JS, so unique titles per URL are what let each
 *     page rank on its own.
 */

import { useEffect } from "react";
import { useLocation } from "react-router";
import { COLLECTIONS, COLLECTION_LABELS, type CollectionId } from "../data/collections";
import { FAQS } from "../data/faq";

const SITE_URL = "https://www.minierjoyeria.com";
const SITE_NAME = "Minier Joyería";

const DEFAULT_META = {
  title: "Minier Joyería — Joyería de Autor en Bogotá",
  description:
    "Joyería de autor hecha a mano en Bogotá. Anillos de compromiso, alianzas de boda y piezas personalizadas. Agenda una consulta privada con nuestros maestros joyeros.",
};

/* ── Meta por ruta ─────────────────────────────────────────── */
const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": DEFAULT_META,
  "/galeria": {
    title: `Galería de Piezas | ${SITE_NAME}`,
    description:
      "Explora nuestra galería de anillos, anillos de compromiso, aretes y collares hechos a mano en nuestro atelier de Bogotá.",
  },
  "/proceso": {
    title: `Nuestro Proceso Artesanal | ${SITE_NAME}`,
    description:
      "Consulta privada, boceto 3D con modelo en cera y elaboración artesanal: así creamos cada joya personalizada en Minier Joyería, Bogotá.",
  },
  "/nosotros": {
    title: `Nuestra Historia | ${SITE_NAME}`,
    description:
      "Conoce Minier Joyería: joyería de autor en La Candelaria, Bogotá. Materiales de origen ético y piezas únicas elaboradas a mano.",
  },
  "/contacto": {
    title: `Reservar una Consulta | ${SITE_NAME}`,
    description:
      "Agenda una consulta gratuita en nuestro atelier de Bogotá o escríbenos por WhatsApp. Diseñamos la joya que imaginas.",
  },
};

const COLLECTION_DESCRIPTIONS: Record<CollectionId, string> = {
  anillos: "Anillos artesanales en oro y platino hechos a mano en Bogotá: solitarios, alianzas y piezas de alta joyería de Minier Joyería.",
  compromiso: "Anillos de compromiso personalizados en Bogotá, diseñados a tu medida con diamantes y gemas certificadas. Minier Joyería.",
  arretes: "Aretes artesanales en oro 18k, plata y perlas, elaborados a mano en el atelier de Minier Joyería en Bogotá.",
  collares: "Collares y colgantes de alta joyería hechos a mano en Bogotá: oro, plata y gemas seleccionadas. Minier Joyería.",
  pulseras: "Pulseras artesanales en oro 18k y diamantes, como nuestra pulsera tennis, hechas a mano en Bogotá. Minier Joyería.",
};

function metaForPath(pathname: string): { title: string; description: string } {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (ROUTE_META[clean]) return ROUTE_META[clean];

  const match = clean.match(/^\/coleccion\/([^/]+)$/);
  if (match) {
    const id = match[1] as CollectionId;
    const label = COLLECTION_LABELS[id];
    if (label) {
      return {
        title: `${label} | ${SITE_NAME}`,
        description: COLLECTION_DESCRIPTIONS[id] ?? DEFAULT_META.description,
      };
    }
    return { title: `Colecciones | ${SITE_NAME}`, description: DEFAULT_META.description };
  }
  return DEFAULT_META;
}

/* ── Schema.org: JewelryStore (LocalBusiness) ──────────────── */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description:
    "Joyería de autor: anillos de compromiso, alianzas de boda y piezas personalizadas elaboradas a mano en Bogotá, Colombia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 12b # 6-21, Oficina 603, La Candelaria",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  telephone: "+57-318-667-5593",
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/minier_joyeria/",
    "https://www.facebook.com/minierjoyeria",
  ],
};

/* ── Schema.org dinámico por ruta ───────────────────────────
   BreadcrumbList en páginas internas, ItemList con las piezas
   en cada colección y FAQPage en /contacto. */
function schemasForPath(pathname: string): object[] {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const schemas: object[] = [];

  if (clean !== "/") {
    const pageName = metaForPath(clean).title.split("|")[0].replace(/—.*/, "").trim();
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: pageName, item: `${SITE_URL}${clean}` },
      ],
    });
  }

  const match = clean.match(/^\/coleccion\/([^/]+)$/);
  if (match && COLLECTIONS[match[1] as CollectionId]) {
    const id = match[1] as CollectionId;
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${COLLECTION_LABELS[id]} — ${SITE_NAME}`,
      itemListElement: COLLECTIONS[id].map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        image: item.url.startsWith("/") ? `${SITE_URL}${item.url}` : item.url,
        url: `${SITE_URL}${clean}`,
      })),
    });
  }

  if (clean === "/contacto") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  return schemas;
}

/* ── Helper: upsert a <meta> tag ────────────────────────────── */
function setMeta(selector: string, attrKey: string, attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

/* ── Helper: upsert a <link> tag ─────────────────────────── */
function setLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

/* ── Component ──────────────────────────────────────────────── */
export function SEOHead() {
  const { pathname } = useLocation();

  /* Static, once per load */
  useEffect(() => {
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[name="keywords"]', "name", "keywords", "joyería de autor Bogotá, anillos de compromiso Bogotá, alianzas de boda, joyería personalizada, joyería hecha a mano, Minier Joyería");
    setMeta('meta[name="author"]', "name", "author", SITE_NAME);
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#0a120d");
    setMeta('meta[name="geo.region"]', "name", "geo.region", "CO-DC");
    setMeta('meta[name="geo.placename"]', "name", "geo.placename", "Bogotá");

    /* Performance: preconnect to CDN origins */
    ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://images.unsplash.com"].forEach((origin) => {
      if (!document.head.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
        const l = document.createElement("link");
        l.rel = "preconnect";
        l.href = origin;
        if (origin.includes("gstatic")) l.crossOrigin = "anonymous";
        document.head.appendChild(l);
      }
    });

    /* Preload critical hero image — improves LCP score */
    const existingPreload = document.head.querySelector('link[rel="preload"][as="image"]');
    if (!existingPreload) {
      const preload = document.createElement("link");
      preload.rel = "preload";
      preload.as = "image";
      preload.href =
        "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixlib=rb-4.1.0&q=80&w=1920";
      preload.setAttribute("imagesrcset",
        "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=640 640w, " +
        "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1280 1280w, " +
        "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1920 1920w"
      );
      preload.setAttribute("imagesizes", "100vw");
      document.head.appendChild(preload);
    }

    /* JSON-LD */
    const existingScript = document.head.querySelector<HTMLScriptElement>("#schema-jsonld");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "schema-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify([LOCAL_BUSINESS_SCHEMA]);
    document.head.appendChild(script);

    document.documentElement.lang = "es";

    return () => {
      document.head.querySelector("#schema-jsonld")?.remove();
    };
  }, []);

  /* Per-route: title, description, canonical, Open Graph */
  useEffect(() => {
    const { title, description } = metaForPath(pathname);
    const clean = pathname.replace(/\/+$/, "") || "/";
    const url = clean === "/" ? `${SITE_URL}/` : `${SITE_URL}${clean}`;

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setLink("canonical", url);

    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", `${SITE_URL}/og-image.png`);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", "Anillo de compromiso hecho a mano y logo de Minier Joyería");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "es_CO");

    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", `${SITE_URL}/og-image.png`);

    /* JSON-LD específico de la ruta (breadcrumbs, colección, FAQ) */
    document.head.querySelector("#schema-route")?.remove();
    const routeSchemas = schemasForPath(clean);
    if (routeSchemas.length > 0) {
      const s = document.createElement("script");
      s.id = "schema-route";
      s.type = "application/ld+json";
      s.textContent = JSON.stringify(routeSchemas);
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
