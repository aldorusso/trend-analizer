import { Metadata } from 'next';
import { getBlogPosts } from '@/lib/getBlogPosts';
import BlogMasonryPageContent from '@/components/blog/BlogMasonryPageContent';

export const metadata: Metadata = {
  title: 'Blog - FACEBANK',
  description: 'Últimas noticias, guías y artículos sobre banca digital, cuentas en dólares y finanzas internacionales.',
};

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return <BlogMasonryPageContent blogPosts={blogPosts} />;
}
