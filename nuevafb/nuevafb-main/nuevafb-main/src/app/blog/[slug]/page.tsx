import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/getBlogPosts';
import BlogDetailsPageContent from '@/components/blog/BlogDetailsPageContent';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post no encontrado - FACEBANK',
    };
  }

  return {
    title: `${post.title} - Blog FACEBANK`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailsPageContent post={post} />;
}
