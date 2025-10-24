import Footer1 from "@/components/footers/Footer1";
import HeaderHome from "@/components/headers/HeaderHome";
import Blogs from "@/components/homes/home-6/Blogs";
import CtaFinal from "@/components/homes/home-6/CtaFinal";
import Elements from "@/components/homes/home-6/Elements";
import Faq from "@/components/homes/home-6/Faq";
import Features from "@/components/homes/home-6/Features";
import Hero from "@/components/homes/home-6/Hero";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import Pricing from "@/components/homes/home-6/Pricing";
import Process from "@/components/homes/home-6/Process";
import Testimonials from "@/components/homes/home-6/Testimonials";
import React from "react";
export const metadata = {
  title:
    "Home 6 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage6() {
  return (
    <>
      <div className="theme-5">
        <div className="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 overflow-x-hidden home-6">
          <HeaderHome />
          <div id="wrapper" className="wrap">
            {/* Sección oscura: Hero + Process */}
            <div className="dark-section bg-tertiary-800 text-tertiary-200 uc-dark">
              <Hero />
              <Process />
            </div>

            {/* Resto de la página con fondo blanco */}
            <Features />
            <KeyFeatures />
            <Elements />
            <Pricing />
            <Testimonials />
            <Faq />
            <Blogs />
            <CtaFinal />
          </div>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
