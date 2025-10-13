"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { motion } from "framer-motion";

export default function ServicesPage() {
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
                Our Services
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  web solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From custom web development to AI-powered solutions, we offer a full range of services to bring your digital vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section Component */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
