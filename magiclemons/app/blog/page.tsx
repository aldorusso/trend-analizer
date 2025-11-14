import Blogs1 from "@/components/blogs/Blogs1";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Magic Lemons | Insights y Tendencias",
  description:
    "Ideas inspiradoras, análisis de mercado y lo último en desarrollo y IA. Impulsando la innovación para tu negocio.",
};

export default function BlogPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs1 />
        <Cta />
      </main>
      <Footer2 text="Magic Lemons" />
    </>
  );
}
