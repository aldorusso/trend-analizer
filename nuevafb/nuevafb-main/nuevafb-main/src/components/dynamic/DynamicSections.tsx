import CorporateAgencyHero from '@/components/hero-banner/CorporateAgencyHero';
import CorporateAgencyBannerTwo from '@/components/banner/CorporateAgencyBannerTwo';
import CorporateAgencyAbout from '@/components/about/CorporateAgencyAbout';
import CorporateAgencyBrand from '@/components/brand/CorporateAgencyBrand';
import CorporateAgencyService from '@/components/service/CorporateAgencyService';
import HomeMainVideo from '@/components/video-area/HomeMainVideo';
import CorporateAgencyProject from '@/components/project/CorporateAgencyProject';
import CorporateAgencySuccess from '@/components/success-area/CorporateAgencySuccess';
import CorporateAgencyBanner from '@/components/banner/CorporateAgencyBanner';
import CorporateAgencyBrandTwo from '@/components/brand/CorporateAgencyBrandTwo';
import CorporateAgencyProcess from '@/components/process/CorporateAgencyProcess';
import CorporateAgencyTestimonial from '@/components/testimonial/CorporateAgencyTestimonial';
import CorporateAgencyTextSlider from '@/components/text-slider/CorporateAgencyTextSlider';
import CreativeStudioBlog from '@/components/blog/CreativeStudioBlog';
import { getBlogPosts, BlogPost } from '@/lib/getBlogPosts';
import React from 'react';

interface SectionOrder {
  section: string;
  active: boolean;
}

interface DynamicSectionsProps {
  sectionsOrder: SectionOrder[];
  blogPosts?: BlogPost[];
}

const DynamicSections: React.FC<DynamicSectionsProps> = ({ sectionsOrder, blogPosts = [] }) => {
  const sectionComponents: Record<string, React.ComponentType<any>> = {
    hero: CorporateAgencyHero,
    bannerImage: CorporateAgencyBannerTwo,
    about: CorporateAgencyAbout,
    brands: CorporateAgencyBrand,
    services: CorporateAgencyService,
    videoGallery: HomeMainVideo,
    projects: CorporateAgencyProject,
    successGallery: CorporateAgencySuccess,
    secondBanner: CorporateAgencyBanner,
    brandSlider: CorporateAgencyBrandTwo,
    process: CorporateAgencyProcess,
    testimonials: CorporateAgencyTestimonial,
    textSlider: CorporateAgencyTextSlider,
    blog: CreativeStudioBlog,
  };

  return (
    <>
      {sectionsOrder
        .filter(item => item.active)
        .map((item, index) => {
          const SectionComponent = sectionComponents[item.section];

          if (!SectionComponent) {
            console.warn(`Section "${item.section}" not found`);
            return null;
          }

          // Pasar posts al componente de blog
          if (item.section === 'blog') {
            return <SectionComponent key={`${item.section}-${index}`} posts={blogPosts} />;
          }

          return <SectionComponent key={`${item.section}-${index}`} />;
        })}
    </>
  );
};

export default DynamicSections;
