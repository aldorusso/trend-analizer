import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import HeroSoftwareMedida from "@/components/servicios/software-medida/HeroSoftwareMedida";
import FeaturesSoftware from "@/components/servicios/software-medida/FeaturesSoftware";
import TechnologiesSoftware from "@/components/servicios/software-medida/TechnologiesSoftware";
import ProcessSoftware from "@/components/servicios/software-medida/ProcessSoftware";
import WhyChooseUs from "@/components/servicios/desarrollo-web/WhyChooseUs";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida - Magic Lemons | SAAS, Backend, APIs",
  description:
    "Desarrollo de sistemas complejos, SAAS y Backend robustos que optimizan tu negocio con tecnología de punta y arquitecturas escalables.",
};

export default function SoftwareMedidaPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <HeroSoftwareMedida />
        <FeaturesSoftware />
        <TechnologiesSoftware />
        <ParallaxDivider />
        <WhyChooseUs />
        <ProcessSoftware />
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
