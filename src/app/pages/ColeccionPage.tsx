import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { PageHero } from "../components/PageHero";
import { ProductItem } from "../components/ProductItem";
import { COLLECTIONS, COLLECTION_LABELS, type CollectionId } from "../data/collections";

export function ColeccionPage() {
  const { categoria } = useParams<{ categoria: string }>();
  const id = categoria as CollectionId;
  const items = COLLECTIONS[id];
  const label = COLLECTION_LABELS[id];

  if (!items) {
    return (
      <>
        <PageHero eyebrow="Colecciones" title="Próximamente" subtitle="Esta colección estará disponible muy pronto." />
        <section style={{ background: "#f9f7f2", padding: "5rem 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6a6460", marginBottom: "2rem" }}>
            Estamos creando nuevas piezas para esta categoría.
          </p>
          <Link
            to="/"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1714", textDecoration: "none", border: "1px solid rgba(26,23,20,0.3)", padding: "0.85rem 2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            ← Volver al inicio
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Colección"
        title={label}
        subtitle={`${items.length} piezas elaboradas a mano en nuestro atelier.`}
      />

      <section style={{ background: "#f9f7f2", paddingTop: "3.5rem", paddingBottom: "6rem" }}>
        {/* Filter bar — category links + count */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0 clamp(1.25rem, 5vw, 5rem) 1rem",
          marginBottom: "2.5rem",
          borderBottom: "1px solid rgba(26,23,20,0.1)",
        }}>
          <nav
            aria-label="Colecciones"
            style={{ display: "flex", gap: "1.5rem", overflowX: "auto", scrollbarWidth: "none", maxWidth: "100%" }}
          >
            {(Object.keys(COLLECTION_LABELS) as CollectionId[]).map((k) => {
              const isActive = k === id;
              return (
                <Link
                  key={k}
                  to={`/coleccion/${k}`}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: isActive ? 500 : 300,
                    letterSpacing: "0.1em",
                    color: isActive ? "#1a1714" : "#6a6460",
                    borderBottom: isActive ? "1px solid #1a1714" : "1px solid transparent",
                    paddingBottom: "3px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "color 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1a1714"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? "#1a1714" : "#6a6460"; }}
                >
                  {COLLECTION_LABELS[k]}
                </Link>
              );
            })}
          </nav>

          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#6a6460", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
            {items.length} {items.length === 1 ? "pieza" : "piezas"}
          </span>
        </div>

        {/* Product grid */}
        <div style={{ padding: "0 clamp(1.25rem, 5vw, 5rem)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              style={{
                columnGap: "clamp(16px, 3vw, 40px)",
                rowGap: "clamp(40px, 5vw, 72px)",
              }}
            >
              {items.map((img, i) => (
                <ProductItem key={i} img={img} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
