import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryProvider } from "@/components/query-provider";
import { ThemeProvider } from "@/components/ThemeProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eurosynapse - Web Development Agency | Modern Digital Solutions",
  description: "Leading web development agency specializing in innovative digital solutions. We create scalable web applications, e-commerce platforms, and custom software with React, Next.js, and Node.js.",
  authors: [{ name: "Eurosynapse" }],
  keywords: ["web development agency", "React", "Next.js", "Node.js", "web programming", "web applications", "digital solutions", "software development", "e-commerce", "custom software"],
  robots: "index, follow",
  openGraph: {
    title: "Eurosynapse - Web Development Agency",
    description: "Leading web development agency specializing in innovative digital solutions. We create scalable applications with modern technologies.",
    type: "website",
    images: ["/hero-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eurosynapse",
    title: "Eurosynapse - Web Development Agency",
    description: "Leading web development agency specializing in modern digital solutions",
    images: ["/hero-preview.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://eurosynapse.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
