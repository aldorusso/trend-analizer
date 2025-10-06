"use client"
import { eyeAnimation, fadeAnimation, panelAnimation, scrollMovingText, videoAnimation, zoomInAnimation } from '@/hooks/useGsapAnimation';
import { useParallax } from '@/components/shared/Parallax/useParallax';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { useGSAP } from '@gsap/react';
import homeData from '@/../content/pages/corporate-home.json';
import type { BlogPost } from '@/lib/getBlogPosts';
// Layout Components
import CorporateAgencyFooter from '@/layouts/footers/CorporateAgencyFooter';
// UI Components
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
// Section Components
import CorporateAgencyHeader from '@/layouts/headers/CorporateAgencyHeader';
import DynamicSections from '@/components/dynamic/DynamicSections';

interface CorporateAgencyMainProps {
    blogPosts: BlogPost[];
}

const CorporateAgencyMain: React.FC<CorporateAgencyMainProps> = ({ blogPosts }) => {
    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#f4f9f8" });

   // Enable smooth scroll animations
      useScrollSmooth();

      // Initialize effects and animations
      useParallax();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            zoomInAnimation();
            scrollMovingText();
            panelAnimation();
            eyeAnimation();
            videoAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <SearchArea />
            <CorporateAgencyHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <DynamicSections sectionsOrder={homeData.sectionsOrder} blogPosts={blogPosts} />
                    </main>
                    <CorporateAgencyFooter />
                </div>
            </div>
        </>
    );
};

export default CorporateAgencyMain;
