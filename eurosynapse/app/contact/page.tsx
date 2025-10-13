"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function ContactPage() {
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
                Get In Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Let's build something{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  amazing together
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section Component */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
