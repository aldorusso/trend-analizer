import fs from 'fs';
import path from 'path';

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  slug: string;
  tags: string[];
  body: string;
}

export function getBlogPosts(limit?: number): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content/blog');

  try {
    const files = fs.readdirSync(blogDir);
    const posts = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
        return JSON.parse(content) as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return limit ? posts.slice(0, limit) : posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  const blogDir = path.join(process.cwd(), 'content/blog');

  try {
    const files = fs.readdirSync(blogDir);

    for (const fileName of files.filter(f => f.endsWith('.json'))) {
      const content = fs.readFileSync(path.join(blogDir, fileName), 'utf8');
      const post = JSON.parse(content) as BlogPost;

      if (post.slug === slug) {
        return post;
      }
    }

    return null;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), 'content/blog');

  try {
    const files = fs.readdirSync(blogDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
        const post = JSON.parse(content) as BlogPost;
        return post.slug;
      });
  } catch (error) {
    return [];
  }
}
