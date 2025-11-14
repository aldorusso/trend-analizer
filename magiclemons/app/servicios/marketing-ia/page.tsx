import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import HeroMarketingIA from "@/components/servicios/marketing-ia/HeroMarketingIA";
import FeaturesMarketing from "@/components/servicios/marketing-ia/FeaturesMarketing";
import TechnologiesMarketing from "@/components/servicios/marketing-ia/TechnologiesMarketing";
import ProcessMarketing from "@/components/servicios/marketing-ia/ProcessMarketing";
import WhyChooseUs from "@/components/servicios/desarrollo-web/WhyChooseUs";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Digital & IA - Magic Lemons | Publicidad, ADS, Inteligencia Artificial",
  description:
    "Campañas de performance en Google, Meta y más, combinadas con soluciones de IA (chatbots, análisis predictivo) para impulsar las ventas de tu negocio.",
};

export default function MarketingIAPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <HeroMarketingIA />
        <FeaturesMarketing />
        <TechnologiesMarketing />
        <ParallaxDivider />
        <WhyChooseUs />
        <ProcessMarketing />
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
