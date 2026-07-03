import { motion } from "motion/react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section
      style={{
        background: "#0a120d",
        padding: "9rem 2rem 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative corner lines */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "7rem", background: "linear-gradient(to bottom, transparent, rgba(201,163,86,0.4))" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "7rem", background: "linear-gradient(to bottom, transparent, rgba(201,163,86,0.4))" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "4rem", height: "1px", background: "rgba(201,163,86,0.3)" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 400,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(201,163,86,0.7)",
            marginBottom: "1.5rem",
          }}>
            {eyebrow}
          </p>
        )}

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "#faf8f5",
          lineHeight: 1.15,
          letterSpacing: "0.04em",
          marginBottom: subtitle ? "1.5rem" : 0,
        }}>
          {title}{" "}
          {titleAccent && (
            <em style={{ color: "#c9a356", fontStyle: "italic" }}>{titleAccent}</em>
          )}
        </h1>

        {subtitle && (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "rgba(250,248,245,0.55)",
            letterSpacing: "0.06em",
            maxWidth: "32rem",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
