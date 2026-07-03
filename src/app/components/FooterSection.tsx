/**
 * FooterSection — Site-wide footer with booking CTA, navigation, trust signals.
 *
 * Semantic HTML:
 *   <footer role="contentinfo">     ← Page-level landmark (one per page)
 *     <section> (CTA banner)        ← Booking teaser (distinct content block)
 *     <div> (main footer body)
 *       <address>                   ← Contact info / geo info (semantic HTML5)
 *       <nav aria-label="Footer">   ← Secondary navigation (distinct from header nav)
 *     <section> (trust & legal)     ← Privacy, security, legal links
 *     <small> (copyright)           ← Small print
 *
 * Trust & security elements (WCAG + legal requirements):
 *   - Privacy policy link
 *   - Terms of service link
 *   - Security / SSL badge (placeholder)
 *   - "Secure checkout" notice
 *   - Physical address (important for LocalBusiness SEO and trust)
 *   - Business registration / trade info placeholder
 *
 * Image: booking-teaser background uses OptimizedImage (picture element).
 *
 * Accessibility:
 *   - All links have 44px+ touch targets
 *   - Social links have aria-label (icon-only links need text alternative)
 *   - role="contentinfo" on <footer> identifies it as page footer to AT
 *   - <address> wraps actual contact details (phone, email, physical address)
 */

import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";

const BOOKING_BG =
  "https://images.unsplash.com/photo-1529519195486-16945f0fb37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400";

const NAV_LINKS = [
  { label: "Colecciones", href: "#collections" },
  { label: "Nuestro Proceso", href: "#process" },
  { label: "Galería", href: "#gallery" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Empleos", href: "#careers" },
] as const;

const SOCIAL_LINKS = [
  { label: "Seguir a Minier Joyería en Instagram", platform: "Instagram", href: "https://www.instagram.com/minierjoyeria" },
  { label: "Seguir a Minier Joyería en Pinterest", platform: "Pinterest", href: "https://www.pinterest.com/minierjoyeria" },
  { label: "Seguir a Minier Joyería en Facebook", platform: "Facebook", href: "https://www.facebook.com/minierjoyeria" },
] as const;

const HOURS = [
  { day: "Lunes – Viernes", hours: "10:00 – 18:30", machineDay: "Mo-Fr" },
  { day: "Sábado", hours: "10:00 – 17:00", machineDay: "Sa" },
  { day: "Domingo", hours: "Solo con Cita", machineDay: "Su" },
] as const;

const LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "/privacy-policy" },
  { label: "Términos de Servicio", href: "/terms-of-service" },
  { label: "Política de Cookies", href: "/cookie-policy" },
  { label: "Declaración de Accesibilidad", href: "/accessibility" },
] as const;

export function FooterSection() {
  return (
    <footer
      id="contact"
      role="contentinfo"
      style={{ background: "#0a120d" }}
    >
      {/* ── Booking teaser banner ─────────────────────────────────── */}
      <section
        aria-labelledby="booking-cta-heading"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "6rem 1.5rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,163,86,0.15)",
        }}
      >
        {/* Background image */}
        <OptimizedImage
          src={BOOKING_BG}
          alt=""
          width={1400}
          height={900}
          loading="lazy"
          sizes="100vw"
          role="presentation"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,18,13,0.93), rgba(29,61,43,0.87))",
            zIndex: 1,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", zIndex: 2, maxWidth: "36rem", margin: "0 auto" }}
        >
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
            Comienza Tu Historia
          </p>
          <h2
            id="booking-cta-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#faf8f5",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Tu Anillo Espera ser{" "}
            <em style={{ color: "#c9a356", fontStyle: "italic" }}>Imaginado</em>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.88rem",
              color: "rgba(250,248,245,0.6)",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            Programa una consulta privada con uno de nuestros maestros joyeros.
            La primera cita es siempre gratuita.
          </p>
          <a
            href="mailto:hello@minierjoyeria.com?subject=Consultation%20Request"
            aria-label="Reservar una consulta gratuita — abre tu cliente de correo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c9a356",
              color: "#0a120d",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "1.1rem 3rem",
              textDecoration: "none",
              minHeight: "48px",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#b8963e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#c9a356"; }}
          >
            Reservar una Consulta
          </a>
        </motion.div>
      </section>

      {/* ── Main footer body ─────────────────────────────────────── */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem 3rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem 2rem",
            marginBottom: "4rem",
          }}
        >
          {/* ── Brand column ─────────────────────────────────────── */}
          <div>
            <a
              href="/"
              aria-label="Página de inicio de Minier Joyería"
              style={{ textDecoration: "none", display: "inline-flex", gap: "0.35rem", alignItems: "center", marginBottom: "1.25rem" }}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#faf8f5", fontWeight: 600 }}>
                Minier
              </span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontStyle: "italic", color: "#c9a356" }}>
                Joyería
              </span>
            </a>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(250,248,245,0.45)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}
            >
              Joyería fina a medida elaborada a mano en nuestro atelier de formación parisina desde 1987.
            </p>

            {/* Social links */}
            <nav aria-label="Redes sociales">
              <ul role="list" style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.62rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(201,163,86,0.6)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: "44px",
                        transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#c9a356"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,163,86,0.6)"; }}
                    >
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Navigation column ─────────────────────────────────── */}
          <nav aria-label="Navegación del pie de página">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a356",
                marginBottom: "1.25rem",
              }}
            >
              Navegar
            </h3>
            <ul role="list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(250,248,245,0.5)",
                      textDecoration: "none",
                      fontWeight: 300,
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "44px",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#faf8f5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.5)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Hours column ─────────────────────────────────────── */}
          <div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a356",
                marginBottom: "1.25rem",
              }}
            >
              Horario del Atelier
            </h3>
            {/* Hours structured as definition list for semantic key-value pairing */}
            <dl style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: 0 }}>
              {HOURS.map(({ day, hours, machineDay }) => (
                <div key={day}>
                  <dt
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.73rem",
                      color: "rgba(250,248,245,0.35)",
                      fontWeight: 400,
                    }}
                  >
                    {day}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.88rem",
                      color: "rgba(250,248,245,0.7)",
                      margin: 0,
                    }}
                  >
                    {/* machine-readable time for assistive tech */}
                    <time dateTime={`${machineDay} ${hours !== "By Appointment" ? hours.replace(" – ", "/") : ""}`}>
                      {hours}
                    </time>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── Contact / Address column ─────────────────────────── */}
          <div id="about">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#c9a356",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h3>
            {/*
              <address> — HTML5 element for contact/geo information.
              Schema.org PostalAddress data in JSON-LD (SEOHead.tsx) mirrors this.
            */}
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(201,163,86,0.6)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  Atelier
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(250,248,245,0.5)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >Calle 12B #6 - 21<br />Oficina 603-Bogota</p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(201,163,86,0.6)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  Consultas
                </p>
                <a
                  href="mailto:hello@minierjoyeria.com"
                  aria-label="Email us at hello@minierjoyeria.com"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(250,248,245,0.5)",
                    textDecoration: "none",
                    fontWeight: 300,
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#c9a356"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.5)"; }}
                >
                  hello@minierjoyeria.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(201,163,86,0.6)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  Teléfono
                </p>
                <a
                  href="tel:+12125551890"
                  aria-label="Call us at +1 212 555 1890"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(250,248,245,0.5)",
                    textDecoration: "none",
                    fontWeight: 300,
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: "44px",
                  }}
                >+57 318 667 5593</a>
              </div>
            </address>
          </div>
        </div>

        {/* ── Trust & security section ──────────────────────────────
            WCAG + legal best practice: privacy, terms, security signals.
            Schema.org AggregateRating (in SEOHead) reinforces trustworthiness.
        ─────────────────────────────────────────────────────────── */}
        <section
          aria-label="Información de confianza y seguridad"
          style={{
            borderTop: "1px solid rgba(201,163,86,0.12)",
            paddingTop: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem 2rem",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            {/* Trust badge — SSL / Secure Checkout placeholder */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(201,163,86,0.2)",
              }}
            >
              {/* Lock icon placeholder */}
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="6" width="10" height="7" rx="1" stroke="rgba(201,163,86,0.7)" strokeWidth="1" />
                <path d="M4 6V4a3 3 0 016 0v2" stroke="rgba(201,163,86,0.7)" strokeWidth="1" strokeLinecap="round" />
                <circle cx="7" cy="9.5" r="1" fill="rgba(201,163,86,0.7)" />
              </svg>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(201,163,86,0.7)",
                }}
              >
                Seguridad SSL
              </span>
            </div>

            {/* Verified business badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(201,163,86,0.2)",
              }}
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l1.5 2.5L11 4 9 6.5l.5 3L7 8.5 4.5 9.5 5 6.5 3 4l2.5-.5L7 1z" stroke="rgba(201,163,86,0.7)" strokeWidth="1" strokeLinejoin="round" />
                <polyline points="4.5,7 6.5,9 9.5,5" stroke="rgba(201,163,86,0.7)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(201,163,86,0.7)",
                }}
              >
                Negocio Verificado
              </span>
            </div>

            {/* Conflict-free badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid rgba(201,163,86,0.2)",
              }}
            >
              <span aria-hidden="true" style={{ color: "rgba(201,163,86,0.7)", fontSize: "0.75rem" }}>◇</span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(201,163,86,0.7)",
                }}
              >
                Piedras Libres de Conflicto
              </span>
            </div>

            {/* Google rating placeholder */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1rem",
              }}
            >
              <span aria-hidden="true" style={{ color: "#c9a356", fontSize: "0.8rem" }}>★★★★★</span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.62rem",
                  color: "rgba(250,248,245,0.35)",
                  letterSpacing: "0.08em",
                }}
              >
                4,9 / 5 · 4.200+ reseñas
              </span>
            </div>
          </div>

          {/* Legal links row */}
          <nav aria-label="Vínculos legales y de política">
            <ul
              role="list"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem 1.5rem",
                justifyContent: "center",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(250,248,245,0.28)",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "44px",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.6)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,245,0.28)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* ── Copyright / tagline ───────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              marginBottom: "0.25rem",
            }}
            aria-hidden="true"
          >
            <div style={{ width: "2rem", height: "1px", background: "rgba(201,163,86,0.3)" }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "rgba(201,163,86,0.45)", fontStyle: "italic" }}>
              Hecho con amor desde 1987
            </span>
            <div style={{ width: "2rem", height: "1px", background: "rgba(201,163,86,0.3)" }} />
          </div>
          {/* <small> for fine print / legal text */}
          <small
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              color: "rgba(250,248,245,0.18)",
              letterSpacing: "0.06em",
              display: "block",
            }}
          >
            © {new Date().getFullYear()} Minier Joyería LLC. Todos los derechos reservados. Nueva York, EE.UU.
            Joyero registrado y miembro de Jewelers of America.
          </small>
        </div>
      </div>
    </footer>
  );
}
