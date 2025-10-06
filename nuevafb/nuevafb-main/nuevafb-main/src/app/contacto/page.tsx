import { Metadata } from 'next';
import ContactPageContent from '@/components/contacts/ContactPageContent';
import contactData from '@/../content/pages/contact.json';

export const metadata: Metadata = {
  title: contactData.seo.title,
  description: contactData.seo.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
