import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata = {
  title: "Política de Privacidad - Kontaly",
  description:
    "Política de Privacidad de Kontaly. Conoce cómo protegemos y manejamos tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <PrivacyContent />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
