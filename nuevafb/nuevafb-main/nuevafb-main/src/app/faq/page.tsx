import { Metadata } from 'next';
import FaqPageContent from '@/components/faq/FaqPageContent';
import faqData from '@/../content/pages/faq.json';

export const metadata: Metadata = {
  title: faqData.seo.title,
  description: faqData.seo.description,
};

export default function FaqPage() {
  return <FaqPageContent />;
}
