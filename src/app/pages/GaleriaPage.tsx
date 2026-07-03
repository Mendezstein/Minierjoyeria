import { PageHero } from "../components/PageHero";
import { GallerySection } from "../components/GallerySection";

export function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra Galería"
        title="Obras de Belleza"
        titleAccent="Eterna"
        subtitle="Cada pieza cuenta una historia. Explore nuestras creaciones elaboradas a mano en nuestro atelier."
      />
      <GallerySection />
    </>
  );
}
