import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { CartProvider } from "./context/CartContext";
import { SEOHead } from "./components/SEOHead";
import { Navbar } from "./components/Navbar";
import { FooterSection } from "./components/FooterSection";
import "../styles/fonts.css";
import "../styles/accessibility.css";

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
    <CartProvider>
      <SEOHead />
      <a href="#main-content" className="skip-link">
        Ir al contenido principal
      </a>
      <Navbar />
      <main id="main-content" role="main" style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
        <PageTransition />
      </main>
      <FooterSection />
    </CartProvider>
  );
}
