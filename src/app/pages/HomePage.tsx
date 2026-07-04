import { Link } from "react-router";
import { motion } from "motion/react";
import { HeroSection } from "../components/HeroSection";
import { ProductItem } from "../components/ProductItem";
import { COLLECTIONS } from "../data/collections";

const FEATURED = COLLECTIONS.anillos.slice(0, 4);

export function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Featured collections */}
      <section style={{ background: "#f9f7f2", padding: "clamp(3rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 5rem)" }}>
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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

        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ columnGap: "clamp(16px, 3vw, 40px)", rowGap: "clamp(32px, 4vw, 56px)" }}
        >
          {FEATURED.map((img, i) => (
            <ProductItem key={i} img={img} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
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
    </>
  );
}
