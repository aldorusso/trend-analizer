"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    servicios: [
      { label: "Website Design & Development", href: "/services/website-design-development" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "E-Commerce Solutions", href: "/services/ecommerce-platforms-solutions" },
      { label: "Web & Mobile Apps", href: "/services/web-mobile-application-development" },
      { label: "AI-Powered Solutions", href: "/services/ai-powered-solutions-automation" },
      { label: "Support & Maintenance", href: "/services/ongoing-support-maintenance" }
    ],
    empresa: [
      { label: "About", href: "#about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" }
    ],
    recursos: [
      { label: "React 18: New features", href: "/blog/react-18-nuevas-caracteristicas" },
      { label: "Next.js 14: Server Components", href: "/blog/nextjs-14-server-components" },
      { label: "Core Web Vitals Optimization", href: "/blog/optimizacion-core-web-vitals" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/eurosynapse", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/eurosynapse", label: "LinkedIn" }
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <footer className="text-white" style={{ backgroundColor: '#0c0f27' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Contact
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Remote & Global Offices</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">contact@eurosynapse.com</span>
                </div>
              </div>

              {/* Social Links */}
              <StaggerChildren staggerDelay={0.1} className="flex items-center gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-200"
                    variants={linkVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </StaggerChildren>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <StaggerChildren staggerDelay={0.05}>
                <ul className="space-y-3">
                  {footerLinks.servicios.map((link, index) => (
                    <motion.li key={index} variants={linkVariants}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm link-animate"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </StaggerChildren>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <StaggerChildren staggerDelay={0.05}>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link, index) => (
                    <motion.li key={index} variants={linkVariants}>
                      {link.href.startsWith('#') ? (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm link-animate"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm link-animate"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </StaggerChildren>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Resources</h4>
              <StaggerChildren staggerDelay={0.05}>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link, index) => (
                    <motion.li key={index} variants={linkVariants}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm link-animate"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </StaggerChildren>
            </div>
          </div>
          </FadeIn>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-border/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-400 text-sm">
                Get the latest insights on web development and digital innovation
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Eurosynapse. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors link-animate">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors link-animate">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors link-animate">
                Cookies
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-primary transition-colors link-animate">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;