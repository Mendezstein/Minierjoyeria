import { useState } from "react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";

export function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid rgba(26,23,20,0.2)",
    padding: "0.85rem 0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 300,
    color: "#1a1714",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#9a9490",
    display: "block",
    marginBottom: "0.25rem",
  };

  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Reservar una"
        titleAccent="Consulta"
        subtitle="La primera cita es siempre gratuita. Cuéntanos tu historia y comenzamos juntos."
      />

      <section style={{ background: "#f9f7f2", padding: "6rem clamp(2rem, 6vw, 6rem)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="grid-cols-1 md:grid-cols-2">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(180,147,80,0.75)", marginBottom: "1.25rem" }}>
              Información de Contacto
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.2, marginBottom: "2.5rem" }}>
              Estamos aquí para<br />
              <em style={{ color: "#1d3d2b", fontStyle: "italic" }}>crear juntos</em>
            </h2>

            {[
              { label: "Atelier", value: "12 Rue de la Paix\nNueva York, NY 10001" },
              { label: "Correo", value: "hello@minierjoyeria.com" },
              { label: "Teléfono", value: "+1 (212) 555-1890" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "2rem" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(180,147,80,0.7)", marginBottom: "0.4rem" }}>{label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#3a3530", lineHeight: 1.65, fontWeight: 300, whiteSpace: "pre-line" }}>{value}</p>
              </div>
            ))}

            <div style={{ marginTop: "3rem" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(180,147,80,0.7)", marginBottom: "0.75rem" }}>Horario del Atelier</p>
              {[["Lunes – Viernes", "10:00 – 18:30"], ["Sábado", "10:00 – 17:00"], ["Domingo", "Solo con Cita"]].map(([day, hours]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(26,23,20,0.08)", padding: "0.6rem 0" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#6a6460", fontWeight: 300 }}>{day}</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", color: "#1a1714" }}>{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#1d3d2b", marginBottom: "1rem" }}>Gracias por escribirnos</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6a6460", fontWeight: 300, lineHeight: 1.7 }}>Nos pondremos en contacto contigo en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Nombre</label>
                    <input required style={inputStyle} placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "#c9a356"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "rgba(26,23,20,0.2)"; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Teléfono</label>
                    <input style={inputStyle} placeholder="+1 (555) 000-0000" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "#c9a356"; }}
                      onBlur={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "rgba(26,23,20,0.2)"; }} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Correo electrónico</label>
                  <input required type="email" style={inputStyle} placeholder="tu@correo.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "#c9a356"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderBottomColor = "rgba(26,23,20,0.2)"; }} />
                </div>
                <div>
                  <label style={labelStyle}>Cuéntanos tu historia</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "none" }} placeholder="¿Qué pieza deseas crear? ¿Para qué ocasión?" value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderBottomColor = "#c9a356"; }}
                    onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderBottomColor = "rgba(26,23,20,0.2)"; }} />
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      background: "#0a120d",
                      border: "none",
                      color: "#faf8f5",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      padding: "1.1rem 3rem",
                      cursor: "pointer",
                      transition: "background 0.3s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1d3d2b"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0a120d"; }}
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
