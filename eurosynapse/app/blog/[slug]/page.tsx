"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Button onClick={() => router.push("/")}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="mb-8 hover:bg-muted"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Volver al blog
          </Button>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">Por {post.author}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="hover:bg-muted"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-xl mb-12">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">¿Te gustó este artículo?</p>
                <p className="text-sm text-muted-foreground">
                  Sígueme para más contenido sobre desarrollo web
                </p>
              </div>
              <Button onClick={handleShare} variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir artículo
              </Button>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}
