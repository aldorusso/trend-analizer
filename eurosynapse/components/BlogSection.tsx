"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const router = useRouter();
  
  const blogPosts = [
    {
      title: "React 18: New features and performance improvements",
      excerpt: "Explore the latest features of React 18 and how to implement Concurrent Features to improve the user experience.",
      category: "React",
      readTime: "8 min",
      date: "15 Mar 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "react-18-nuevas-caracteristicas"
    },
    {
      title: "Next.js 14: Server Components and App Router",
      excerpt: "Complete guide on how to migrate to Next.js 14 and take full advantage of Server Components for faster applications.",
      category: "Next.js",
      readTime: "12 min",
      date: "8 Mar 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "nextjs-14-server-components"
    },
    {
      title: "Core Web Vitals Optimization for better SEO",
      excerpt: "Advanced techniques to improve LCP, FID, and CLS in modern web applications and increase search engine ranking.",
      category: "Performance",
      readTime: "10 min",
      date: "1 Mar 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "optimizacion-core-web-vitals"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Blog & Resources
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Insights and trends in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              web development
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with the latest technologies, best practices, and
            trends in the world of modern web development.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="card-corporate overflow-hidden group cursor-pointer"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              {/* Post Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={480}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Button
                  variant="ghost"
                  className="justify-start p-0 h-auto group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/blog/${post.slug}`);
                  }}
                >
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Want to stay up to date with the latest trends?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter and receive exclusive content on
              web development, advanced tutorials, and optimization tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-corporate whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Do you have a project in mind? Let's talk about how we can help.
          </p>
          <Button
            onClick={scrollToContact}
            className="btn-corporate"
          >
            Start Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;