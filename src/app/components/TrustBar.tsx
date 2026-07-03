/**
 * TrustBar — Key performance metrics / social proof numbers.
 *
 * Semantic HTML:
 *   <section aria-labelledby="trust-heading">
 *     <h2 class="sr-only">  ← Hidden heading for screen reader landmark navigation
 *     <dl>  ← Definition list: stats are term/value pairs (most semantic for KPI data)
 *       <div><dt>term</dt><dd>value</dd></div>
 *
 * Why <dl>? Stats are key-value pairs: "Years of Craft" = "37+".
 * A definition list makes this relationship machine-readable.
 */

import { motion } from "motion/react";

const STATS = [
  { value: "37+",   term: "Años de Oficio",          detail: "Elaborando joyería fina desde 1987" },
  { value: "4.200+", term: "Anillos Creados",         detail: "Cada uno único, cada uno eterno" },
  { value: "98%",   term: "Clientes Satisfechos",     detail: "Basado en encuestas post-entrega" },
  { value: "100%",  term: "Origen Ético",             detail: "Diamantes y gemas libres de conflicto" },
] as const;

export function TrustBar() {
  return (
    <section
      aria-labelledby="trust-heading"
      style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(201,163,86,0.15)",
        borderBottom: "1px solid rgba(201,163,86,0.15)",
        padding: "3rem 1.5rem",
      }}
    >
      {/* Visually hidden heading for screen reader landmark navigation */}
      <h2 id="trust-heading" className="sr-only">
        Nuestras credenciales y logros
      </h2>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/*
          <dl> — definition list is semantically correct for key-value stat pairs.
          Each stat is wrapped in a <div> to allow CSS grid layout (spec-compliant).
        */}
        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem 1rem",
            margin: 0,
            padding: 0,
          }}
          className="md:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              {/* <dd> first visually but correct HTML order: <dt> then <dd> */}
              <dt
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#9a9a9a",
                  marginBottom: "0.4rem",
                  /* dt and dd render as block inside flex/grid containers */
                  order: 2,
                }}
              >
                {stat.term}
              </dt>
              <dd
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  color: "#1d3d2b",
                  lineHeight: 1,
                  margin: 0,
                  order: 1,
                }}
                title={stat.detail}
              >
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
