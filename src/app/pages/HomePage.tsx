import { Link } from "react-router";
import { motion } from "motion/react";
import { HeroSection } from "../components/HeroSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ProductItem } from "../components/ProductItem";
import { COLLECTIONS } from "../data/collections";

const FEATURED = COLLECTIONS.anillos.slice(0, 4);

export function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured collections */}
      <section style={{ background: "#f9f7f2", padding: "7rem clamp(2rem, 6vw, 6rem)" }}>
        <header style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(180,147,80,0.75)", marginBottom: "1rem" }}
          >
            Selección Editorial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 400, color: "#1a1714", letterSpacing: "0.04em", marginBottom: "1rem" }}
          >
            Piezas Destacadas
          </motion.h2>
          <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "#c9a356", margin: "0 auto" }} />
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", columnGap: "clamp(24px, 3.5vw, 48px)", rowGap: "clamp(40px, 5vw, 72px)" }} className="grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((img, i) => (
            <ProductItem key={i} img={img} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link
            to="/coleccion/anillos"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#1a1714",
              textDecoration: "none",
              border: "1px solid rgba(26,23,20,0.3)",
              padding: "1rem 2.75rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              transition: "background 0.4s, color 0.4s, border-color 0.4s",
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#1a1714"; el.style.color = "#faf8f5"; el.style.borderColor = "#1a1714"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#1a1714"; el.style.borderColor = "rgba(26,23,20,0.3)"; }}
          >
            Ver todas las colecciones
            <span aria-hidden="true" style={{ fontSize: "0.7rem" }}>→</span>
          </Link>
        </div>
      </section>

      {/* Process teaser */}
      <section style={{ background: "#0a120d", padding: "6rem clamp(2rem, 6vw, 6rem)", textAlign: "center" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,163,86,0.65)", marginBottom: "1.5rem" }}
        >
          El Método Minier
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, color: "#faf8f5", lineHeight: 1.15, marginBottom: "1.5rem" }}
        >
          Del Sueño a la{" "}
          <em style={{ color: "#c9a356", fontStyle: "italic" }}>Obra Maestra</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(250,248,245,0.5)", maxWidth: "30rem", margin: "0 auto 2.5rem", lineHeight: 1.8, fontWeight: 300 }}
        >
          Cada pieza nace de una conversación íntima. Nuestro proceso de tres etapas garantiza que cada detalle sea exactamente como lo imaginaste.
        </motion.p>
        <Link
          to="/proceso"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.66rem",
            fontWeight: 400,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(250,248,245,0.85)",
            textDecoration: "none",
            border: "1px solid rgba(250,248,245,0.25)",
            padding: "1rem 2.5rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            transition: "border-color 0.5s, color 0.5s",
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#c9a356"; el.style.color = "#c9a356"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(250,248,245,0.25)"; el.style.color = "rgba(250,248,245,0.85)"; }}
        >
          Conocer el proceso
          <span aria-hidden="true" style={{ fontSize: "0.7rem", opacity: 0.6 }}>→</span>
        </Link>
      </section>

      <TestimonialsSection />
    </>
  );
}
