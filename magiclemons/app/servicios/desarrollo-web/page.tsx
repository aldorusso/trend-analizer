import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import HeroDesarrolloWeb from "@/components/servicios/desarrollo-web/HeroDesarrolloWeb";
import TechnologiesGrid from "@/components/servicios/desarrollo-web/TechnologiesGrid";
import FeaturesSection from "@/components/servicios/desarrollo-web/FeaturesSection";
import ProcessTimeline from "@/components/servicios/desarrollo-web/ProcessTimeline";
import WhyChooseUs from "@/components/servicios/desarrollo-web/WhyChooseUs";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo Web Avanzado - Magic Lemons | React, Next.js, ASTRO",
  description:
    "Sitios web hermosos, rápidos y orientados a la conversión construidos en WordPress o frameworks modernos para fortalecer tu presencia online.",
};

export default function DesarrolloWebPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <HeroDesarrolloWeb />
        <FeaturesSection />
        <TechnologiesGrid />
        <ParallaxDivider />
        <WhyChooseUs />
        <ProcessTimeline />
        <div style={{ paddingTop: "3rem" }}>
          <Blogs
            title="Insights y Tendencias"
            desc="Ideas inspiradoras, análisis de mercado y lo último en desarrollo y IA. Impulsando la innovación para tu negocio."
          />
        </div>
        <Cta />
      </main>
      <Footer2 text="Magic Lemons" />
    </>
  );
}
