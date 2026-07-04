/**
 * SEOHead — Injects all SEO, Open Graph, Twitter Card, and Schema.org
 * structured data into document.head via useEffect (SPA-safe).
 *
 * Schema.org types used:
 *  - JewelryStore (extends LocalBusiness) — powers Google local panels, Maps
 *  - BreadcrumbList — enables breadcrumb rich snippets
 */

import { useEffect } from "react";

/* ── Meta data ─────────────────────────────────────────────── */
const SITE_META = {
  title: "Minier Joyería — Joyería de Autor en Bogotá",
  description:
    "Joyería de autor hecha a mano en Bogotá. Anillos de compromiso, alianzas de boda y piezas personalizadas. Agenda una consulta privada con nuestros maestros joyeros.",
  canonical: "https://minierjoyeria.odoo.com/",
  ogImage: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&w=1200",
  ogImageAlt: "Minier Joyería — anillo de diamantes sobre terciopelo oscuro",
};

/* ── Schema.org: JewelryStore (LocalBusiness) ──────────────── */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  "@id": "https://minierjoyeria.odoo.com/#business",
  name: "Minier Joyería",
  url: "https://minierjoyeria.odoo.com",
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

/* ── Schema.org: BreadcrumbList ────────────────────────────── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://minierjoyeria.odoo.com",
    },
  ],
};

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
function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
}

/* ── Component ──────────────────────────────────────────────── */
export function SEOHead() {
  useEffect(() => {
    /* Title */
    document.title = SITE_META.title;

    /* Primary SEO meta tags */
    setMeta('meta[name="description"]', "name", "description", SITE_META.description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[name="keywords"]', "name", "keywords", "joyería de autor Bogotá, anillos de compromiso, alianzas de boda, joyería personalizada, joyería hecha a mano, Minier Joyería");
    setMeta('meta[name="author"]', "name", "author", "Minier Joyería");

    /* Canonical URL */
    setLink("canonical", SITE_META.canonical);

    /* Theme colour (mobile browser chrome) */
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#0a120d");

    /* Open Graph — Facebook / LinkedIn / WhatsApp / Slack */
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", SITE_META.canonical);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Minier Joyería");
    setMeta('meta[property="og:title"]', "property", "og:title", SITE_META.title);
    setMeta('meta[property="og:description"]', "property", "og:description", SITE_META.description);
    setMeta('meta[property="og:image"]', "property", "og:image", SITE_META.ogImage);
    setMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", SITE_META.ogImage);
    setMeta('meta[property="og:image:type"]', "property", "og:image:type", "image/jpeg");
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630");
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", SITE_META.ogImageAlt);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "es_CO");

    /* Twitter / X Card */
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", SITE_META.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", SITE_META.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", SITE_META.ogImage);
    setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", SITE_META.ogImageAlt);

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

    /* DNS-prefetch as fallback for older browsers */
    ["https://images.unsplash.com"].forEach((origin) => {
      if (!document.head.querySelector(`link[rel="dns-prefetch"][href="${origin}"]`)) {
        const l = document.createElement("link");
        l.rel = "dns-prefetch";
        l.href = origin;
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

    /* Inject all JSON-LD schemas as a single script tag */
    const existingScript = document.head.querySelector<HTMLScriptElement>("#schema-jsonld");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "schema-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify([
      LOCAL_BUSINESS_SCHEMA,
      BREADCRUMB_SCHEMA,
    ]);
    document.head.appendChild(script);

    /* html lang attribute for screen reader language announcement */
    document.documentElement.lang = "es";

    return () => {
      document.head.querySelector("#schema-jsonld")?.remove();
    };
  }, []);

  return null;
}
