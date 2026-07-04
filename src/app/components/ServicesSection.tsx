/**
 * ServicesSection — Core service offerings (3-column grid).
 *
 * Semantic HTML:
 *   <section aria-labelledby="services-heading">
 *     <h2 id="services-heading">  ← Section heading (level 2)
 *     <ul role="list">             ← List of services (semantically grouped)
 *       <li>
 *         <article>               ← Each service is a self-contained unit of content
 *           <h3>                  ← Service name (level 3, under section h2)
 *
 * Why <article>? Each card can stand alone as a complete piece of content
 * (name, description, CTA) — satisfying the spec for <article>.
 *
 * Accessibility:
 *   - "Learn More" buttons have aria-label with context ("Learn more about Custom Wedding Bands")
 *   - Tag badges are aria-hidden (decorative label, already in heading)
 *   - Number "01" decorations are aria-hidden
 *
 * Mobile-first responsive:
 *   - Single column on mobile → 3-column on md+
 *   - Card hover effect disabled on touch devices (no :hover jank)
 */

import { motion } from "motion/react";
import { Link } from "react-router";

const SERVICES = [
  {
    number: "01",
    title: "Alianzas Personalizadas",
    tag: "Servicio Insignia",
    description:
      "Tu alianza debe ser tan singular como tu compromiso. Colaboramos estrechamente con cada pareja para diseñar piezas que honren vuestra historia única — desde el clásico oro hasta los intrincados engastes pavé.",
    cta: "Explorar Alianzas",
    to: "/coleccion/anillos",
  },
  {
    number: "02",
    title: "Anillos de Compromiso a Medida",
    tag: "El Más Solicitado",
    description:
      "Desde el primer boceto hasta el último pulido, cada anillo de compromiso se concibe exclusivamente para ti. Utilizamos solo diamantes libres de conflicto y gemas de extracción ética de calidad excepcional.",
    cta: "Diseña Tu Anillo",
    to: "/coleccion/compromiso",
  },
  {
    number: "03",
    title: "Joyería de Alta Calidad",
    tag: "Nuestro Compromiso",
    description:
      "Cada pieza que sale de nuestro atelier se elabora con metales preciosos certificados y gemas seleccionadas una a una. Del boceto al pulido final, un mismo maestro joyero cuida cada detalle para que tu joya perdure generaciones.",
    cta: "Conocer la Colección",
    to: "/galeria",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="collections"
      aria-labelledby="services-heading"
      style={{ background: "#faf8f5", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Section header ───────────────────────────────────────── */}
        <header style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            aria-hidden="true"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a356",
              marginBottom: "1rem",
            }}
          >
            Nuestras Especialidades
          </p>
          <h2
            id="services-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Joyería Nacida de un{" "}
            <em style={{ color: "#1d3d2b", fontStyle: "italic" }}>
              Oficio Excepcional
            </em>
          </h2>
          <div
            aria-hidden="true"
            style={{
              width: "3rem",
              height: "1px",
              background: "#c9a356",
              margin: "0 auto",
            }}
          />
        </header>

        {/* ── Service cards grid ───────────────────────────────────── */}
        {/*
          <ul> with role="list" for Safari VoiceOver compatibility.
          CSS resets the default list styling.
        */}
        <ul
          role="list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {SERVICES.map((svc, i) => (
            <li key={svc.number}>
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
                aria-labelledby={`service-title-${i}`}
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(201,163,86,0.15)",
                  padding: "2.5rem",
                  position: "relative",
                  height: "100%",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Top accent line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "2.5rem",
                    right: "2.5rem",
                    height: "2px",
                    background: "linear-gradient(to right, #c9a356, transparent)",
                  }}
                />

                {/* Tag / badge */}
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c9a356",
                    background: "rgba(201,163,86,0.08)",
                    padding: "0.3rem 0.8rem",
                    display: "inline-block",
                    marginBottom: "1.5rem",
                  }}
                >
                  {svc.tag}
                </p>

                {/* Large decorative number */}
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3.5rem",
                    color: "rgba(201,163,86,0.12)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {svc.number}
                </span>

                {/* Service heading — h3 under section h2 */}
                <h3
                  id={`service-title-${i}`}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    color: "#1a1a1a",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                  }}
                >
                  {svc.title}
                </h3>

                <div
                  aria-hidden="true"
                  style={{
                    width: "1.75rem",
                    height: "1px",
                    background: "#c9a356",
                    marginBottom: "1rem",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "#5a5a5a",
                    lineHeight: 1.75,
                    fontWeight: 300,
                    marginBottom: "2rem",
                  }}
                >
                  {svc.description}
                </p>

                {/* CTA link — contextual aria-label for screen readers */}
                <Link
                  to={svc.to}
                  aria-label={svc.cta}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#1d3d2b",
                    textDecoration: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    minHeight: "44px",
                    transition: "gap 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "0.85rem"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "0.5rem"; }}
                >
                  {svc.cta}
                  <span aria-hidden="true" style={{ fontSize: "1rem" }}>→</span>
                </Link>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
