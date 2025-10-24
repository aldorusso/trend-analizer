import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";
import Hero from "@/components/innerpages/features/Hero";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";
export const metadata = {
  title:
    "Características - Kontaly | Plataforma de gestión empresarial",
  description:
    "Descubre todas las características y funcionalidades de Kontaly para gestionar tu negocio.",
};
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <KeyFeatures />
          <div className="pt-6 xl:pt-9"></div>
          <Faq />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
