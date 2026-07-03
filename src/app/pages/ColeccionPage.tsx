import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { PageHero } from "../components/PageHero";
import { ProductItem } from "../components/ProductItem";
import { COLLECTIONS, COLLECTION_LABELS, type CollectionId } from "../data/collections";

const SORT_OPTIONS = ["Recomendados", "Precio: menor a mayor", "Precio: mayor a menor", "Novedades"] as const;

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
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#9a9490", marginBottom: "2rem" }}>
            Estamos cubriendo nuevas piezas para esta categoría.
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

      <section style={{ background: "#f9f7f2", paddingTop: "5rem", paddingBottom: "8rem" }}>
        {/* Filter bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(2rem, 6vw, 6rem)",
          marginBottom: "3rem",
          borderBottom: "1px solid rgba(26,23,20,0.1)",
          paddingBottom: "1rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#6a6460", letterSpacing: "0.06em" }}>
              Ordenar por:
            </span>
            <button style={{ background: "none", border: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#1a1714", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Recomendados <span aria-hidden="true" style={{ fontSize: "0.5rem" }}>▼</span>
            </button>
          </div>

          {/* Other collections breadcrumb */}
          <nav aria-label="Otras colecciones" style={{ display: "flex", gap: "1.5rem" }} className="hidden md:flex">
            {(Object.keys(COLLECTION_LABELS) as CollectionId[]).filter(k => k !== id).map((k) => (
              <Link
                key={k}
                to={`/coleccion/${k}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#9a9490",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1a1714"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9a9490"; }}
              >
                {COLLECTION_LABELS[k]}
              </Link>
            ))}
          </nav>

          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#9a9490", letterSpacing: "0.06em" }}>
            {items.length} artículos
          </span>
        </div>

        {/* Product grid */}
        <div style={{ padding: "0 clamp(2rem, 6vw, 6rem)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                columnGap: "clamp(24px, 3.5vw, 48px)",
                rowGap: "clamp(56px, 7vw, 96px)",
              }}
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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
