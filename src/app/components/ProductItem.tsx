import { useState } from "react";
import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";
import { useCart } from "../context/CartContext";
import type { GalleryItem } from "../data/collections";

export function ProductItem({ img, index }: { img: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ label: img.label, category: img.category, price: img.price, url: img.url });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          position: "relative",
          background: "#f5f3ee",
        }}
      >
        <OptimizedImage
          src={img.url}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: hovered ? "scale(1.02)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={{
          paddingTop: "22px",
          transition: "opacity 400ms ease",
          opacity: hovered ? 0.82 : 1,
        }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,147,80,0.75)", marginBottom: "6px" }}>
          {img.category}
        </p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 400, color: "#1a1714", lineHeight: 1.3, marginBottom: "10px" }}>
          {img.label}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", marginTop: "2px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "#3a3530", letterSpacing: "0.04em" }}>
            {img.price}
          </p>
          <button
            onClick={handleAdd}
            aria-label={`Agregar ${img.label} al carrito`}
            style={{
              background: added ? "#1d3d2b" : "transparent",
              border: `1px solid ${added ? "#1d3d2b" : "rgba(26,23,20,0.25)"}`,
              color: added ? "#faf8f5" : "#1a1714",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.4rem 0.9rem",
              cursor: "pointer",
              transition: "background 0.3s, border-color 0.3s, color 0.3s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              if (!added) {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "#1a1714";
                el.style.color = "#faf8f5";
                el.style.borderColor = "#1a1714";
              }
            }}
            onMouseLeave={(e) => {
              if (!added) {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "transparent";
                el.style.color = "#1a1714";
                el.style.borderColor = "rgba(26,23,20,0.25)";
              }
            }}
          >
            {added ? "✓ Agregado" : "Agregar"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
