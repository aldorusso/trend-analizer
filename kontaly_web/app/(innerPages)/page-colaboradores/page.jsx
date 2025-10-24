import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import ColaboradoresHero from "@/components/colaboradores/ColaboradoresHero";
import ColaboradoresWhy from "@/components/colaboradores/ColaboradoresWhy";
import ColaboradoresHow from "@/components/colaboradores/ColaboradoresHow";
import ColaboradoresFor from "@/components/colaboradores/ColaboradoresFor";
import ColaboradoresPotential from "@/components/colaboradores/ColaboradoresPotential";
import ColaboradoresCta from "@/components/colaboradores/ColaboradoresCta";

export const metadata = {
  title:
    "Programa de Colaboradores - Kontaly | Gana el 20% recurrente",
  description:
    "Únete al programa de colaboradores de Kontaly y gana el 20% recurrente por cada cliente que refieras.",
};

export default function ColaboradoresPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <ColaboradoresHero />
          <ColaboradoresWhy />
          <ColaboradoresHow />
          <ColaboradoresFor />
          <ColaboradoresPotential />
          <ColaboradoresCta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
