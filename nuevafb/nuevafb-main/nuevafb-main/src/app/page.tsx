import CorporateAgencyMain from '@/pages/homes/corporate-agency/CorporateAgencyMain';
import homeData from '@/../content/pages/corporate-home.json';
import { getBlogPosts } from '@/lib/getBlogPosts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: homeData.seo.title,
  description: homeData.seo.description,
};

export default function Home() {
  const blogPosts = getBlogPosts(3);

  return (
    <CorporateAgencyMain blogPosts={blogPosts} />
  );
}
