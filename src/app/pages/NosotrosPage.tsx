import { motion } from "motion/react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { ServicesSection } from "../components/ServicesSection";

const STATS = [
  { value: "37+",    term: "Años de Oficio",       detail: "Elaborando joyería fina desde 1987" },
  { value: "4.200+", term: "Anillos Creados",       detail: "Cada uno único, cada uno eterno" },
  { value: "98%",    term: "Clientes Satisfechos",  detail: "Basado en encuestas post-entrega" },
  { value: "100%",   term: "Origen Ético",          detail: "Diamantes y gemas libres de conflicto" },
] as const;

export function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra Historia"
        title="Minier"
        titleAccent="Joyería"
        subtitle="Desde 1987, una tradición de excelencia artesanal en el corazón de nuestra ciudad."
      />

      {/* Brand story */}
      <section style={{ background: "#f9f7f2", padding: "6rem clamp(2rem, 8vw, 9rem)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(180,147,80,0.75)", marginBottom: "1.25rem" }}>
                Nuestra Filosofía
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.2, marginBottom: "1.75rem" }}>
                El lujo nace de la{" "}
                <em style={{ color: "#1d3d2b", fontStyle: "italic" }}>precisión artesanal</em>
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#6a6460", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.25rem" }}>
                En Minier Joyería creemos que cada pieza debe ser tan singular como la historia que celebra. Desde nuestra fundación, hemos combinado técnicas de orfebrería tradicionales con una visión editorial contemporánea.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#6a6460", lineHeight: 1.85, fontWeight: 300 }}>
                Trabajamos exclusivamente con materiales de origen ético: diamantes libres de conflicto, gemas certificadas y metales preciosos trazables. Porque la belleza verdadera no puede costar el bienestar de nadie.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            >
              {STATS.map((stat, i) => (
                <div key={i} style={{ textAlign: "center", padding: "1.5rem 1rem", border: "1px solid rgba(201,163,86,0.15)", background: "#ffffff" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 400, color: "#1d3d2b", marginBottom: "0.35rem" }}>{stat.value}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a9490" }}>{stat.term}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* CTA */}
      <section style={{ background: "#0a120d", padding: "6rem 2rem", textAlign: "center" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,163,86,0.65)", marginBottom: "1.5rem" }}>
          Comienza Tu Historia
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 400, color: "#faf8f5", marginBottom: "2rem" }}>
          ¿Listo para crear algo{" "}
          <em style={{ color: "#c9a356", fontStyle: "italic" }}>eterno?</em>
        </h2>
        <Link
          to="/contacto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.66rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#0a120d",
            background: "#c9a356",
            padding: "1.1rem 3rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8963e"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c9a356"; }}
        >
          Reservar una Consulta
        </Link>
      </section>
    </>
  );
}
