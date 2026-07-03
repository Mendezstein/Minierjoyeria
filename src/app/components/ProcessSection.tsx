/**
 * ProcessSection — "Our Process" step-by-step explanation.
 *
 * Semantic HTML:
 *   <section aria-labelledby="process-heading">
 *     <h2>                       ← Section heading (level 2)
 *     <ol>                       ← Ordered list: steps have inherent sequence
 *       <li>
 *         <article>              ← Each step is self-contained content
 *           <h3>                 ← Step name (level 3)
 *
 * Why <ol>? The process steps are ordered (1→2→3).
 * The list counter is handled by CSS (number shown is decorative),
 * but semantically the <ol> communicates sequence to assistive tech.
 *
 * Image:
 *   - Side image uses <picture> with AVIF/WebP sources
 *   - loading="lazy" (below fold)
 *   - aria-hidden="true" (decorative — same content expressed by text)
 *
 * Mobile-first:
 *   - Image hidden on mobile/tablet (md:block)
 *   - Full-width content on small screens
 */

import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";

const STEPS = [
  {
    step: "01",
    title: "Consulta Privada",
    description:
      "Comenzamos con una conversación íntima — tu historia de amor, tus preferencias de estilo y tu visión. Ya sea en nuestro atelier o mediante una cita virtual privada, aquí es donde tu pieza cobra vida conceptualmente.",
    detail: "Presencial o virtual · 60–90 minutos",
  },
  {
    step: "02",
    title: "Boceto 3D y Modelo en Cera",
    description:
      "Nuestros artesanos traducen tu visión en bocetos detallados a mano y un modelo renderizado en 3D. Luego se funde un prototipo físico en cera, permitiéndote sentir la forma y las proporciones antes de que se toque el metal.",
    detail: "Plazo de 2–3 semanas",
  },
  {
    step: "03",
    title: "Elaboración Artesanal Maestra",
    description:
      "Tu diseño aprobado entra en nuestro taller de orfebrería. Cada pieza es forjada, pulida y engastada a mano por nuestros maestros artesanos — un proceso que abarca semanas, no días — garantizando un acabado de calidad hereditaria.",
    detail: "4–8 semanas · Certificado de Autenticidad incluido",
  },
] as const;

const SIDE_IMG =
  "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      style={{
        background: "#0a120d",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture (decorative) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a356 0, #c9a356 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Side image (decorative on desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "40%",
          overflow: "hidden",
        }}
      >
        <OptimizedImage
          src={SIDE_IMG}
          alt=""
          width={900}
          height={1200}
          loading="lazy"
          sizes="40vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.35,
          }}
        />
        {/* Gradient fade-left overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0a120d 0%, transparent 100%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ── Section header ─────────────────────────────────────── */}
        <header style={{ marginBottom: "3.5rem" }} className="lg:w-1/2">
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
            El Método Élara
          </p>
          <h2
            id="process-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#faf8f5",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Del Sueño a la{" "}
            <em style={{ color: "#c9a356", fontStyle: "italic" }}>
              Obra Maestra
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(250,248,245,0.6)",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "28rem",
            }}
          >
            Nuestro proceso se basa en la transparencia, la colaboración y un
            compromiso inquebrantable con la excelencia en cada etapa.
          </p>
        </header>

        {/* ── Steps — ordered list (sequence matters) ───────────── */}
        <ol
          aria-label="Nuestro proceso de creación en tres pasos"
          className="lg:w-1/2"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {STEPS.map((step, i) => (
            <li key={step.step}>
              <motion.article
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                aria-labelledby={`step-title-${i}`}
                style={{
                  display: "flex",
                  gap: "1.75rem",
                  padding: "2.25rem 0",
                  borderBottom:
                    i < STEPS.length - 1
                      ? "1px solid rgba(201,163,86,0.15)"
                      : "none",
                }}
              >
                {/* Step number + vertical connector */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "3rem",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      border: "1px solid rgba(201,163,86,0.5)",
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
                      {step.step}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 1,
                        width: "1px",
                        background:
                          "linear-gradient(to bottom, rgba(201,163,86,0.4), rgba(201,163,86,0.05))",
                        marginTop: "0.5rem",
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div style={{ paddingTop: "0.35rem" }}>
                  <h3
                    id={`step-title-${i}`}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      color: "#faf8f5",
                      marginBottom: "0.65rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.87rem",
                      color: "rgba(250,248,245,0.62)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.description}
                  </p>
                  {/* Time/detail — <time> element for machine-readability where possible */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "0.15em",
                      color: "#c9a356",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.detail}
                  </p>
                </div>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
