/**
 * SEOHead — Injects all SEO, Open Graph, Twitter Card, and Schema.org
 * structured data into document.head via useEffect (SPA-safe).
 *
 * Schema.org types used:
 *  - JewelryStore (extends LocalBusiness) — powers Google local panels, Maps
 *  - Product + AggregateOffer — enables price/availability rich snippets
 *  - AggregateRating — enables star ratings in search results
 *  - BreadcrumbList — enables breadcrumb rich snippets
 *  - Review — individual testimonial entries for rich results
 */

import { useEffect } from "react";

/* ── Meta data ─────────────────────────────────────────────── */
const SITE_META = {
  title: "Maison Élara — Bespoke Wedding Bands & Fine Jewelry | New York",
  description:
    "Custom wedding bands and bespoke engagement rings handcrafted in New York since 1987. Book a complimentary private consultation with our master jewelers.",
  canonical: "https://www.maisonelara.com/",
  ogImage: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&w=1200",
  ogImageAlt: "Maison Élara — a luminous diamond ring resting on dark velvet",
  twitterHandle: "@maisonelara",
};

/* ── Schema.org: JewelryStore (LocalBusiness) ──────────────── */
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "JewelryStore"],
  "@id": "https://www.maisonelara.com/#business",
  name: "Maison Élara",
  alternateName: "Maison Elara",
  url: "https://www.maisonelara.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.maisonelara.com/logo.png",
    width: 200,
    height: 60,
  },
  image: {
    "@type": "ImageObject",
    url: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?fm=jpg&w=1200",
    width: 1200,
    height: 800,
  },
  description:
    "Bespoke wedding bands, engagement rings, and fine jewelry restorations handcrafted by master goldsmiths in New York since 1987.",
  foundingDate: "1987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue de la Paix",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7505,
    longitude: -73.9934,
  },
  telephone: "+1-212-555-1890",
  email: "hello@maisonelara.com",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  priceRange: "$$$–$$$$",
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "By Appointment Only",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "4200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      "@id": "https://www.maisonelara.com/#review-1",
      author: { "@type": "Person", name: "James & Olivia Hartwell" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Maison Élara didn't just make a ring — they made a moment we relive every single day.",
      datePublished: "2023-06-15",
    },
    {
      "@type": "Review",
      "@id": "https://www.maisonelara.com/#review-2",
      author: { "@type": "Person", name: "Marcus & Elena Voss" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "What Élara created was beyond anything we could have imagined — a perfect tribute to the past, reimagined for our future.",
      datePublished: "2023-11-20",
    },
    {
      "@type": "Review",
      "@id": "https://www.maisonelara.com/#review-3",
      author: { "@type": "Person", name: "Sophie & Renée Marceau" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "From our very first consultation to the moment we opened the velvet box, the team treated us like family.",
      datePublished: "2024-03-10",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bespoke Fine Jewelry",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Custom Wedding Band",
          description:
            "Bespoke handcrafted wedding band in 18k gold or 950 platinum.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bespoke Engagement Ring",
          description:
            "One-of-a-kind engagement ring with conflict-free diamonds and ethically mined gemstones.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Fine Jewelry Restoration",
          description:
            "Expert restoration of heirloom jewelry by master goldsmiths.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/maisonelara",
    "https://www.pinterest.com/maisonelara",
    "https://www.facebook.com/maisonelara",
  ],
};

/* ── Schema.org: Product with AggregateOffer ───────────────── */
const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.maisonelara.com/#product-wedding-band",
  name: "Bespoke Custom Wedding Band",
  description:
    "Handcrafted bespoke wedding band, designed exclusively for each couple. Available in 18k Yellow Gold, 18k Rose Gold, and 950 Platinum. Engraving included.",
  brand: { "@type": "Brand", name: "Maison Élara" },
  category: "Jewelry > Rings > Wedding Bands",
  image:
    "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?fm=jpg&w=800",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "2500",
    highPrice: "25000",
    offerCount: "3",
    availability: "https://schema.org/InStoreOnly",
    seller: {
      "@type": "Organization",
      name: "Maison Élara",
      url: "https://www.maisonelara.com",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "4200",
    bestRating: "5",
  },
};

/* ── Schema.org: BreadcrumbList ────────────────────────────── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.maisonelara.com",
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
    setMeta('meta[name="keywords"]', "name", "keywords", "custom wedding bands, bespoke engagement rings, fine jewelry New York, jewelry restoration, handcrafted rings, luxury jeweler");
    setMeta('meta[name="author"]', "name", "author", "Maison Élara");

    /* Canonical URL */
    setLink("canonical", SITE_META.canonical);

    /* Theme colour (mobile browser chrome) */
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#0a120d");

    /* Open Graph — Facebook / LinkedIn / WhatsApp / Slack */
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", SITE_META.canonical);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Maison Élara");
    setMeta('meta[property="og:title"]', "property", "og:title", SITE_META.title);
    setMeta('meta[property="og:description"]', "property", "og:description", SITE_META.description);
    setMeta('meta[property="og:image"]', "property", "og:image", SITE_META.ogImage);
    setMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", SITE_META.ogImage);
    setMeta('meta[property="og:image:type"]', "property", "og:image:type", "image/jpeg");
    setMeta('meta[property="og:image:width"]', "property", "og:image:width", "1200");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height", "630");
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", SITE_META.ogImageAlt);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_US");

    /* Twitter / X Card */
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:site"]', "name", "twitter:site", SITE_META.twitterHandle);
    setMeta('meta[name="twitter:creator"]', "name", "twitter:creator", SITE_META.twitterHandle);
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
      PRODUCT_SCHEMA,
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
