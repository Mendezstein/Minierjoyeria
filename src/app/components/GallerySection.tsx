import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProductItem } from "./ProductItem";
import { COLLECTIONS, type CollectionId } from "../data/collections";

type Tab = CollectionId;

const TABS: { id: Tab; label: string }[] = [
  { id: "anillos",    label: "Anillos" },
  { id: "compromiso", label: "Anillos de Compromiso" },
  { id: "arretes",    label: "Arretes" },
  { id: "collares",   label: "Collares" },
];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<Tab>("anillos");
  const items = COLLECTIONS[activeTab];
  const count = items.length;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      style={{ background: "#f9f7f2", paddingTop: "4rem", paddingBottom: "8rem" }}
    >
      {/* ── Filter / sort bar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(2rem, 6vw, 6rem)", marginBottom: "3rem", borderBottom: "1px solid rgba(26,23,20,0.1)", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#6a6460", letterSpacing: "0.06em" }}>Ordenar por:</span>
          <button style={{ background: "none", border: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 400, color: "#1a1714", letterSpacing: "0.06em", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Recomendados <span aria-hidden="true" style={{ fontSize: "0.5rem" }}>▼</span>
          </button>
        </div>

        {/* Category tabs */}
        <nav aria-label="Categorías" style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? "1px solid #1a1714" : "1px solid transparent",
                  paddingBottom: "2px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: isActive ? 500 : 300,
                  letterSpacing: "0.1em",
                  color: isActive ? "#1a1714" : "#9a9490",
                  cursor: "pointer",
                  transition: "color 0.3s, border-color 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#9a9490", letterSpacing: "0.06em" }}>
          {count} {count === 1 ? "artículo" : "artículos"}
        </span>
      </div>

      {/* Mobile tabs */}
      <div style={{ display: "flex", gap: "1.25rem", padding: "0 clamp(2rem, 6vw, 6rem)", marginBottom: "2.5rem", overflowX: "auto", scrollbarWidth: "none" }} className="md:hidden">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ background: "none", border: "none", borderBottom: isActive ? "1px solid #1a1714" : "1px solid transparent", paddingBottom: "4px", fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: isActive ? 500 : 300, letterSpacing: "0.1em", color: isActive ? "#1a1714" : "#9a9490", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Product grid */}
      <div style={{ padding: "0 clamp(2rem, 6vw, 6rem)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", columnGap: "clamp(24px, 3.5vw, 48px)", rowGap: "clamp(56px, 7vw, 96px)" }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {items.map((img, i) => (
              <ProductItem key={`${activeTab}-${i}`} img={img} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
