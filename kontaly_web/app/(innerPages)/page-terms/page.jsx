import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import TermsContent from "@/components/legal/TermsContent";

export const metadata = {
  title: "Términos de Servicio - Kontaly",
  description:
    "Términos de Servicio de Kontaly. Conoce las condiciones de uso de nuestra plataforma de gestión empresarial.",
};

export default function TermsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <TermsContent />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
