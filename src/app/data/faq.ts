/*
 * Preguntas frecuentes — se muestran en /contacto y alimentan el
 * schema FAQPage (resultados enriquecidos de Google).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "¿Hacen joyas personalizadas?",
    answer:
      "Sí, es nuestra especialidad. Diseñamos anillos de compromiso, alianzas y piezas únicas a tu medida: partimos de una consulta privada, creamos un boceto 3D con modelo en cera para que veas la pieza antes de fabricarla, y la elaboramos a mano en nuestro atelier de Bogotá.",
  },
  {
    question: "¿Cuánto tarda una pieza personalizada?",
    answer:
      "Depende de la complejidad del diseño. El boceto 3D y el modelo en cera toman entre 2 y 3 semanas, y la elaboración artesanal entre 4 y 8 semanas desde la aprobación del diseño. Cada pieza incluye certificado de autenticidad.",
  },
  {
    question: "¿La primera consulta tiene costo?",
    answer:
      "No, la primera cita es siempre gratuita. Puede ser presencial en nuestro atelier de La Candelaria o virtual. Agenda por WhatsApp al +57 318 667 5593 o con el formulario de esta página.",
  },
  {
    question: "¿Trabajan con esmeraldas colombianas?",
    answer:
      "Sí. Trabajamos esmeraldas colombianas seleccionadas una a una, además de diamantes y gemas certificadas de origen ético, engastadas en oro de 18 kilates y platino.",
  },
  {
    question: "¿Dónde están ubicados y en qué horario atienden?",
    answer:
      "Estamos en la Calle 12B # 6-21, Oficina 603, en La Candelaria, Bogotá. Atendemos de lunes a viernes de 10:00 a 18:30, sábados de 10:00 a 17:00 y domingos solo con cita previa.",
  },
];
