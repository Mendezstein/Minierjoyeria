import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProductItem } from "./ProductItem";
import { COLLECTIONS, COLLECTION_LABELS, type CollectionId } from "../data/collections";

type Tab = CollectionId;

const TABS = (Object.keys(COLLECTION_LABELS) as CollectionId[]).map((id) => ({
  id,
  label: COLLECTION_LABELS[id],
}));

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<Tab>("anillos");
  const items = COLLECTIONS[activeTab];
  const count = items.length;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      style={{ background: "#f9f7f2", paddingTop: "3.5rem", paddingBottom: "6rem" }}
    >
      {/* ── Filter bar: category tabs + count ── */}
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
          aria-label="Categorías"
          style={{ display: "flex", gap: "1.5rem", alignItems: "center", overflowX: "auto", scrollbarWidth: "none", maxWidth: "100%" }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? "1px solid #1a1714" : "1px solid transparent",
                  paddingBottom: "3px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: isActive ? 500 : 300,
                  letterSpacing: "0.1em",
                  color: isActive ? "#1a1714" : "#6a6460",
                  cursor: "pointer",
                  transition: "color 0.3s, border-color 0.3s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#6a6460", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
          {count} {count === 1 ? "pieza" : "piezas"}
        </span>
      </div>

      {/* Product grid */}
      <div style={{ padding: "0 clamp(1.25rem, 5vw, 5rem)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ columnGap: "clamp(16px, 3vw, 40px)", rowGap: "clamp(40px, 5vw, 72px)" }}
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
