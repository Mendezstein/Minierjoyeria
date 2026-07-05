import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Gem, Droplet, Star, Heart, Crown, Sparkles, Sun, Gift } from "lucide-react";

const COLLECTION_ITEMS = [
  { label: "Anillos",        description: "Compromiso y alianzas",     Icon: Gem,      to: "/coleccion/anillos" },
  { label: "Compromiso",     description: "Solitarios y sets nupciales",Icon: Sparkles, to: "/coleccion/compromiso" },
  { label: "Aretes",         description: "Oro, plata y gema",         Icon: Droplet,  to: "/coleccion/arretes" },
  { label: "Collares",       description: "Cadenas y colgantes",        Icon: Crown,    to: "/coleccion/collares" },
  { label: "Pulseras",       description: "Brazaletes y esclavas",      Icon: Sun,      to: "/coleccion/pulseras" },
  { label: "Alta Joyería",   description: "Piezas únicas",              Icon: Star,     to: "/coleccion/alta-joyeria" },
  { label: "Bodas",          description: "Anillos de compromiso",      Icon: Heart,    to: "/coleccion/bodas" },
  { label: "Personalizados", description: "Diseños a tu medida",        Icon: Gift,     to: "/coleccion/personalizados" },
] as const;

const NAV_LINKS = [
  { label: "Colecciones", to: "",          hasMega: true },
  { label: "Proceso",     to: "/proceso",  hasMega: false },
  { label: "Galería",     to: "/galeria",  hasMega: false },
  { label: "Nosotros",    to: "/nosotros", hasMega: false },
  { label: "Contacto",    to: "/contacto", hasMega: false },
] as const;

const LINK_BASE: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "0.5rem 0",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.3rem",
  minHeight: "44px",
  cursor: "pointer",
  background: "none",
  border: "none",
  transition: "color 0.2s",
};

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileColOpen, setMobileColOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileColOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openMega = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true); };
  const schedulClose = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 140); };

  const closeAll = () => {
    setMenuOpen(false);
    setMobileColOpen(false);
    hamburgerRef.current?.focus();
  };

  const isActive = (to: string) => to && location.pathname === to;
  const navBg = scrolled || megaOpen ? "rgba(10,18,13,0.97)" : "transparent";
  const navBorder = scrolled || megaOpen ? "1px solid rgba(201,163,86,0.18)" : "1px solid transparent";

  return (
    <header
      role="banner"
      onMouseLeave={schedulClose}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: navBg,
        backdropFilter: scrolled || megaOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || megaOpen ? "blur(14px)" : "none",
        borderBottom: navBorder,
        transition: "background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
      }}
    >
      {/* ── Main bar ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>

        {/* Logo */}
        <Link to="/" aria-label="Minier Joyería — inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.35rem", flexShrink: 0 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 600, color: "#faf8f5", lineHeight: 1 }}>Minier</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontStyle: "italic", color: "#c9a356", lineHeight: 1 }}>Joyería</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Principal" className="hidden md:flex" style={{ flex: 1, justifyContent: "center" }}>
          <ul role="list" style={{ display: "flex", gap: "2.25rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <li key={link.label} onMouseEnter={openMega}>
                  <button
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    onClick={() => setMegaOpen((o) => !o)}
                    style={{ ...LINK_BASE, color: megaOpen ? "#c9a356" : "rgba(250,248,245,0.82)" }}
                  >
                    {link.label}
                    <span aria-hidden="true" style={{ fontSize: "0.48rem", display: "inline-block", transition: "transform 0.25s", transform: megaOpen ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
                  </button>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    style={{ ...LINK_BASE, color: isActive(link.to) ? "#c9a356" : "rgba(250,248,245,0.82)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#c9a356"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isActive(link.to) ? "#c9a356" : "rgba(250,248,245,0.82)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* CTA Reservar */}
        <Link
          to="/contacto"
          className="hidden md:inline-flex"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c9a356",
            background: "transparent",
            border: "1px solid rgba(201,163,86,0.5)",
            padding: "0.6rem 1.4rem",
            textDecoration: "none",
            alignItems: "center",
            minHeight: "40px",
            flexShrink: 0,
            transition: "background 0.25s, color 0.25s",
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "#c9a356"; el.style.color = "#0a120d"; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "transparent"; el.style.color = "#c9a356"; }}
        >
          Reservar
        </Link>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          className="flex md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ background: "none", border: "none", cursor: "pointer", minWidth: "44px", minHeight: "44px", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", padding: "0.5rem" }}
        >
          <span aria-hidden="true" style={{ display: "block", width: "22px", height: "1.5px", background: "#faf8f5", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
          <span aria-hidden="true" style={{ display: "block", width: "22px", height: "1.5px", background: "#faf8f5", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span aria-hidden="true" style={{ display: "block", width: "22px", height: "1.5px", background: "#faf8f5", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* ── Mega menu ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={openMega}
            role="menu"
            aria-label="Colecciones"
            style={{ overflow: "hidden", borderTop: "1px solid rgba(201,163,86,0.22)", background: "rgba(10,18,13,0.98)" }}
          >
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "1.25rem 2rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
              {COLLECTION_ITEMS.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.to}
                  role="menuitem"
                  onClick={() => setMegaOpen(false)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.45rem", padding: "0.9rem 0.75rem", textDecoration: "none", borderRight: i % 4 !== 3 ? "1px solid rgba(201,163,86,0.1)" : "none", borderBottom: i < 4 ? "1px solid rgba(201,163,86,0.1)" : "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,163,86,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  <span aria-hidden="true" style={{ color: "#c9a356", display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", border: "1px solid rgba(201,163,86,0.3)", flexShrink: 0 }}>
                    <item.Icon size={16} strokeWidth={1.25} />
                  </span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.88rem", color: "#faf8f5", display: "block", lineHeight: 1.3 }}>{item.label}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.06em", color: "rgba(250,248,245,0.4)", display: "block" }}>{item.description}</span>
                </Link>
              ))}
            </div>
            <div style={{ height: "2px", background: "linear-gradient(to right, transparent, #c9a356, transparent)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          style={{ position: "fixed", inset: 0, background: "rgba(10,18,13,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem", zIndex: 99, overflowY: "auto", padding: "5rem 2rem 3rem" }}
        >
          <button
            aria-label="Cerrar menú"
            onClick={closeAll}
            style={{ position: "absolute", top: "1.5rem", right: "1.75rem", background: "none", border: "none", color: "#faf8f5", fontSize: "1.75rem", cursor: "pointer", minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span aria-hidden="true">×</span>
          </button>

          <nav aria-label="Navegación móvil" style={{ width: "100%", maxWidth: "360px" }}>
            <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* Colecciones expandible */}
              <li style={{ width: "100%", textAlign: "center" }}>
                <button
                  aria-expanded={mobileColOpen}
                  onClick={() => setMobileColOpen((o) => !o)}
                  style={{ background: "none", border: "none", fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: mobileColOpen ? "#c9a356" : "#faf8f5", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem", minHeight: "56px", transition: "color 0.25s", padding: "0.5rem 0" }}
                >
                  Colecciones
                  <span aria-hidden="true" style={{ fontSize: "0.75rem", transition: "transform 0.25s", transform: mobileColOpen ? "rotate(180deg)" : "rotate(0)", display: "inline-block" }}>▼</span>
                </button>

                <AnimatePresence>
                  {mobileColOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden", borderTop: "1px solid rgba(201,163,86,0.2)", marginBottom: "0.5rem" }}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                        {COLLECTION_ITEMS.map((item, i) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={closeAll}
                            style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1rem", textDecoration: "none", borderBottom: "1px solid rgba(201,163,86,0.1)", borderRight: i % 2 === 0 ? "1px solid rgba(201,163,86,0.1)" : "none", transition: "background 0.2s" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,163,86,0.08)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                          >
                            <span aria-hidden="true" style={{ color: "#c9a356", display: "flex", flexShrink: 0 }}><item.Icon size={16} strokeWidth={1.5} /></span>
                            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "#faf8f5" }}>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Rest of links */}
              {NAV_LINKS.filter((l) => !l.hasMega).map((link) => (
                <li key={link.label} style={{ width: "100%", textAlign: "center" }}>
                  <Link
                    to={link.to}
                    onClick={closeAll}
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: isActive(link.to) ? "#c9a356" : "#faf8f5", textDecoration: "none", display: "inline-flex", alignItems: "center", minHeight: "56px", padding: "0.5rem 0", transition: "color 0.25s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#c9a356"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = isActive(link.to) ? "#c9a356" : "#faf8f5"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/contacto"
            onClick={closeAll}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0a120d", background: "#c9a356", padding: "1rem 2.5rem", textDecoration: "none", display: "inline-flex", alignItems: "center", minHeight: "48px" }}
          >
            Reservar una Consulta
          </Link>
        </div>
      )}
    </header>
  );
}
