import { useState } from "react";
import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";
import type { GalleryItem } from "../data/collections";

export function ProductItem({ img, index }: { img: GalleryItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          paddingTop: "18px",
          transition: "opacity 400ms ease",
          opacity: hovered ? 0.82 : 1,
        }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(180,147,80,0.75)", marginBottom: "6px" }}>
          {img.category}
        </p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 400, color: "#1a1714", lineHeight: 1.3 }}>
          {img.label}
        </p>
      </div>
    </motion.article>
  );
}
