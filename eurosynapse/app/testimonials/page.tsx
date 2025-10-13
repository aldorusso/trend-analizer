"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Page Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Client Success Stories
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  leading companies
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover what our clients say about working with Eurosynapse and how we've helped transform their digital presence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section Component */}
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
