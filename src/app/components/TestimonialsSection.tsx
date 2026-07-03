/**
 * TestimonialsSection — Social proof / couple reviews.
 *
 * Semantic HTML:
 *   <section aria-labelledby="testimonials-heading">
 *     <h2>                      ← Section heading (level 2)
 *     <div aria-live="polite">  ← Announces slide changes to screen readers
 *       <blockquote>            ← The correct element for a quotation
 *         <p>                   ← The quote text (inside blockquote)
 *         <footer>              ← Attribution (nested <footer> inside blockquote is valid HTML5)
 *           <cite>              ← The person/source being cited
 *
 * Accessibility:
 *   - aria-live="polite" on the sliding container — announces new quotes
 *   - Dot/arrow controls have aria-label with full context
 *   - aria-current="true" on the active dot
 *   - Star rating uses <span aria-hidden> and a <span class="sr-only"> for text
 *
 * Schema.org: Individual reviews are also expressed via JSON-LD in SEOHead.tsx
 * (LocalBusiness.review[]) for rich search result snippets.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
  occasion: string;
  initials: string;
  rating: number;
  datePublished: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "En el momento en que deslicé el anillo en su dedo, ella rompió a llorar. Tres años después, cada vez que lo miro siento lo mismo. Maison Élara no hizo solo un anillo — creó un momento que revivimos cada día.",
    author: "James & Olivia Hartwell",
    occasion: "Anillo de Compromiso Personalizado · Junio 2023",
    initials: "JO",
    rating: 5,
    datePublished: "2023-06-15",
  },
  {
    quote:
      "Llegamos con una idea vaga y una fotografía del anillo de mi abuela. Lo que Élara creó superó todo lo que podíamos imaginar — un homenaje perfecto al pasado, reimaginado para nuestro futuro.",
    author: "Marcus & Elena Voss",
    occasion: "Restauración de Joya Familiar y Alianzas a Medida · Noviembre 2023",
    initials: "ME",
    rating: 5,
    datePublished: "2023-11-20",
  },
  {
    quote:
      "El proceso en sí fue una historia de amor. Desde nuestra primera consulta hasta el momento en que abrimos la caja de terciopelo, el equipo nos trató como familia. No confiaríamos a nadie más algo tan importante.",
    author: "Sophie & Renée Marceau",
    occasion: "Alianzas de Boda a Juego · Marzo 2024",
    initials: "SR",
    rating: 5,
    datePublished: "2024-03-10",
  },
  {
    quote:
      "Estaba nervioso por gastar tanto en algo que no podía imaginar del todo. Pero la cita del modelo en cera lo cambió todo — verlo en 3D antes de que se engastara un solo diamante me dio total confianza. Resultado impecable.",
    author: "David & Priya Sharma",
    occasion: "Solitario Talla Princesa · Enero 2024",
    initials: "DP",
    rating: 5,
    datePublished: "2024-01-22",
  },
];

function StarRating({ rating, label }: { rating: number; label: string }) {
  return (
    <p
      style={{ display: "flex", gap: "3px", marginBottom: "1.5rem", justifyContent: "center" }}
      aria-label={label}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ color: i < rating ? "#c9a356" : "rgba(201,163,86,0.3)", fontSize: "0.9rem" }}
        >
          ★
        </span>
      ))}
    </p>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: "#1d3d2b",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large quote mark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "22rem",
          color: "rgba(201,163,86,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        "
      </div>

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ── Section header ─────────────────────────────────────── */}
        <header style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            aria-hidden="true"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a356",
              marginBottom: "1rem",
            }}
          >
            Parejas que Hemos Amado
          </p>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#faf8f5",
              lineHeight: 1.2,
            }}
          >
            Palabras desde el{" "}
            <em style={{ color: "#c9a356", fontStyle: "italic" }}>Corazón</em>
          </h2>
        </header>

        {/* ── Testimonial carousel ───────────────────────────────────
            aria-live="polite" announces slide changes to screen readers
            without interrupting current speech (polite, not assertive).
        ─────────────────────────────────────────────────────────── */}
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{ position: "relative", minHeight: "280px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              style={{ textAlign: "center" }}
            >
              {/*
                ── <blockquote> — semantically correct for a quotation ──
                Nested <footer> (inside blockquote) is valid HTML5 and
                provides attribution context.
              */}
              <blockquote
                cite={`https://www.maisonelara.com/#review-${active + 1}`}
                itemScope
                itemType="https://schema.org/Review"
                style={{ margin: 0 }}
              >
                {/* Star rating */}
                <StarRating
                  rating={current.rating}
                  label={`${current.rating} de 5 estrellas`}
                />

                {/* Quote text */}
                <p
                  itemProp="reviewBody"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
                    color: "#faf8f5",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "2.5rem",
                    maxWidth: "700px",
                    margin: "0 auto 2.5rem",
                  }}
                >
                  "{current.quote}"
                </p>

                {/* Attribution */}
                <footer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  {/* Avatar initials */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: "rgba(201,163,86,0.15)",
                      border: "1px solid rgba(201,163,86,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.85rem",
                        color: "#c9a356",
                      }}
                    >
                      {current.initials}
                    </span>
                  </div>

                  <div style={{ textAlign: "left" }}>
                    {/* <cite> — the person being cited */}
                    <cite
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1rem",
                        color: "#faf8f5",
                        fontStyle: "normal",
                        display: "block",
                      }}
                    >
                      <span itemProp="name">{current.author}</span>
                    </cite>
                    {/* Occasion / date */}
                    <time
                      dateTime={current.datePublished}
                      itemProp="datePublished"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        color: "rgba(201,163,86,0.75)",
                        marginTop: "0.2rem",
                        display: "block",
                      }}
                    >
                      {current.occasion}
                    </time>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Carousel controls ──────────────────────────────────── */}
        <nav
          aria-label="Navegación de testimonios"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <button
            onClick={prev}
            aria-label="Testimonio anterior"
            style={{
              width: "2.75rem",
              height: "2.75rem",
              border: "1px solid rgba(201,163,86,0.4)",
              background: "transparent",
              color: "#c9a356",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,163,86,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Dot indicators */}
          <ol
            role="list"
            aria-label="Diapositivas de testimonios"
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  aria-label={`Ir al testimonio ${i + 1} de ${t.author}`}
                  aria-current={i === active ? "true" : undefined}
                  style={{
                    width: i === active ? "2rem" : "6px",
                    height: "6px",
                    background:
                      i === active ? "#c9a356" : "rgba(201,163,86,0.3)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              </li>
            ))}
          </ol>

          <button
            onClick={next}
            aria-label="Testimonio siguiente"
            style={{
              width: "2.75rem",
              height: "2.75rem",
              border: "1px solid rgba(201,163,86,0.4)",
              background: "transparent",
              color: "#c9a356",
              cursor: "pointer",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,163,86,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>
    </section>
  );
}
