import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import LegalContent from "@/components/legal/LegalContent";

export const metadata = {
  title: "Información Legal - Kontaly",
  description:
    "Información legal de Kontaly. Documentación completa sobre cumplimiento normativo, protección de datos y avisos legales.",
};

export default function LegalPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <LegalContent />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
