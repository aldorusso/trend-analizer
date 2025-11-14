import About from "@/components/homes/home-personal-portfolio/About";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Hero from "@/components/homes/home-personal-portfolio/Hero";
import MarqueeSlider from "@/components/homes/home-personal-portfolio/MarqueeSlider";
import ParallaxBanner from "@/components/homes/home-personal-portfolio/ParallaxBanner";
import Projects from "@/components/homes/home-personal-portfolio/Projects";
import Services from "@/components/homes/home-personal-portfolio/Services";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Lemons - Creative Digital Agency",
  description: "Magic Lemons - Creative Digital Agency & Personal Portfolio",
};

export default function Home() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <Projects />
        <MarqueeSlider />
        <Services />
        <About />
        <ParallaxBanner />
        <Blogs
          title="Insights y Tendencias"
          desc="Ideas inspiradoras, análisis de mercado y lo último en desarrollo y IA. Impulsando la innovación para tu negocio."
        />
        <Cta />
      </main>
      <Footer2 text="Magic Lemons" />
    </>
  );
}
