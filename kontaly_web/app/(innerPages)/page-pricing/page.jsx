import Header2 from "@/components/headers/Header2";

import Footer1 from "@/components/footers/Footer1";

import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";
import Pricing from "@/components/innerpages/Pricing";
export const metadata = {
  title:
    "Precios - Kontaly | Plataforma de gestión empresarial",
  description:
    "Planes y precios de Kontaly. Encuentra el plan perfecto para tu negocio.",
};
export default function PricingPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Pricing />
          <Faq />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
