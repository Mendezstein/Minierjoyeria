import { PageHero } from "../components/PageHero";
import { ProcessSection } from "../components/ProcessSection";

export function ProcesoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cómo trabajamos"
        title="Nuestro"
        titleAccent="Proceso"
        subtitle="Transparencia, colaboración y un compromiso inquebrantable con la excelencia en cada etapa."
      />
      <ProcessSection />
    </>
  );
}
