import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import MarqueeSlider from "@/components/portfolios/MarqueeSlider";
import ParallaxDivider from "@/components/portfolios/ParallaxDivider";
import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import Testimonials from "@/components/common/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio - Magic Lemons | Casos de Éxito",
  description:
    "Descubre nuestros proyectos destacados de desarrollo web, software a medida y soluciones con IA. 70+ proyectos exitosos que transforman negocios.",
};

export default function PortafolioPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
        <ParallaxDivider />
        <MarqueeSlider />
        <Testimonials />
        <Cta />
      </main>
      <Footer2 text="Magic Lemons" />
    </>
  );
}
