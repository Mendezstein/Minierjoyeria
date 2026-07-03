import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { OptimizedImage } from "./OptimizedImage";

const HERO_IMG_URL =
  "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setParallax(window.scrollY * 0.18);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background: "#0a120d",
      }}
    >
      {/* ── Parallax image container ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-12% 0",
          zIndex: 0,
          transform: `translateY(${parallax}px)`,
          willChange: "transform",
        }}
      >
        <OptimizedImage
          src={HERO_IMG_URL}
          alt="Anillo de diamantes de alta joyería — Minier Joyería"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 38%",
            display: "block",
          }}
        />
      </div>

      {/* ── Overlay: transparent in center, dims at top and bottom only ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,18,13,0.38) 0%, transparent 22%, transparent 58%, rgba(10,18,13,0.75) 84%, rgba(10,18,13,0.93) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Subtle left vignette ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,18,13,0.22) 0%, transparent 40%)",
          zIndex: 1,
        }}
      />

      {/* ── Corner gold lines — top only, barely visible ── */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "7rem", background: "linear-gradient(to bottom, transparent, rgba(201,163,86,0.45))", zIndex: 2 }} />
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "7rem", background: "linear-gradient(to bottom, transparent, rgba(201,163,86,0.45))", zIndex: 2 }} />

      {/* ── Editorial content — anchored to the bottom ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          padding: "0 clamp(2rem, 7vw, 8rem) clamp(3.5rem, 6vh, 5.5rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Eyebrow — ultra-minimal, very high tracking */}
        

        {/* H1 — editorial, airy, one elegant thought */}
        

        {/* Single ghost CTA — premium, no fills, slow hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        >
          
        </motion.div>
      </div>
    </section>
  );
}
