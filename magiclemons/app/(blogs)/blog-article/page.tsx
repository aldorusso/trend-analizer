import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Artículo del Blog - Magic Lemons | Insights y Tendencias",
  description:
    "Ideas inspiradoras, análisis de mercado y lo último en desarrollo y IA.",
};
export default function BlogSinglePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <BlogDetails />
        <Blogs desc="" title="Más sobre el tema" />
        <Cta />
      </main>
      <Footer2 text="Magic Lemons" />
    </>
  );
}
