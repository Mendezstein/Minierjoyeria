import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { SEOHead } from "./components/SEOHead";
import { Navbar } from "./components/Navbar";
import { FooterSection } from "./components/FooterSection";
import "../styles/fonts.css";
import "../styles/accessibility.css";

/*
 * En la primera visita (pestaña nueva) siempre se entra por el inicio.
 * Al refrescar dentro de una sección, el usuario se queda donde estaba:
 * sessionStorage sobrevive al refresh pero no a cerrar la pestaña.
 */
function RedirectOnFirstVisit() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("minier-visited")) {
      sessionStorage.setItem("minier-visited", "1");
      if (window.location.pathname !== "/") {
        navigate("/", { replace: true });
      }
    }
  }, []);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export function Root() {
  return (
    <>
      <SEOHead />
      <RedirectOnFirstVisit />
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content" role="main" style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
        <PageTransition />
      </main>
      <FooterSection />
    </>
  );
}
