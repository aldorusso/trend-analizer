"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Palette,
  Search,
  Smartphone,
  ShoppingCart,
  Code,
  Zap,
  Shield,
  Globe,
  Layers,
  Bot,
  Wrench,
  Lightbulb,
  Megaphone
} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Beautiful, fast, and conversion-focused websites built on WordPress or modern frameworks to strengthen your online presence.",
      features: ["Responsive Design", "WordPress & Custom", "SEO Optimized"],
      price: "From €850",
      slug: "website-design-development",
      iconName: "fa-globe"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software crafted to meet specific business goals, ensuring flexibility, performance, and scalability from day one.",
      features: ["Tailored Solutions", "Scalable Architecture", "Clean Code"],
      price: "From €3,500",
      slug: "custom-software-development",
      iconName: "code"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms & Solutions",
      description: "Conversion-driven online stores with seamless payments, engaging design, and smart integrations that simplify the buying experience.",
      features: ["Secure Payments", "Smart Integrations", "Conversion Focused"],
      price: "From €1,500",
      slug: "ecommerce-platforms-solutions",
      iconName: "fa-shopping-cart"
    },
    {
      icon: Layers,
      title: "Web & Mobile Application Development",
      description: "Secure, scalable apps for web and mobile, turning ideas into intuitive digital products that grow with your business.",
      features: ["Web & Mobile", "Intuitive UX", "Scalable Backend"],
      price: "From €2,000",
      slug: "web-mobile-application-development",
      iconName: "layers"
    },
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      description: "Integrating AI into digital workflows to boost productivity, streamline operations, and unlock intelligent, data-driven insights.",
      features: ["AI Integration", "Process Automation", "Data-Driven"],
      price: "From €1,500",
      slug: "ai-powered-solutions-automation",
      iconName: "bot"
    },
    {
      icon: Wrench,
      title: "Ongoing Support & Maintenance",
      description: "Continuous updates, monitoring, and optimization to keep every project secure, stable, and performing at its best.",
      features: ["Security Updates", "Performance Monitoring", "24/7 Support"],
      price: "From €800",
      slug: "ongoing-support-maintenance",
      iconName: "wrench"
    },
    {
      icon: Lightbulb,
      title: "IT Strategy & Consulting",
      description: "Clear, actionable guidance to align technology with long-term business objectives and support sustainable digital growth.",
      features: ["Strategic Planning", "Tech Alignment", "Growth Roadmap"],
      price: "From €800",
      slug: "it-strategy-consulting",
      iconName: "lightbulb"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising & Campaigns",
      description: "Targeted, data-driven ad campaigns that enhance visibility and ROI across Google, Meta, and other digital platforms.",
      features: ["Google & Meta Ads", "ROI Focused", "Data-Driven"],
      price: "From €800",
      slug: "digital-advertising-campaigns",
      iconName: "megaphone"
    }
  ];

  const additionalFeatures = [
    { icon: Code, text: "Clean and documented code" },
    { icon: Zap, text: "Guaranteed fast delivery" },
    { icon: Shield, text: "6 months support included" }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Complete solutions for your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                digital presence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we offer comprehensive web development services that drive the growth of your business.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="card-corporate group cursor-pointer p-4 h-full">
                    <div className="h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-3">
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <service.icon className="w-5 h-5 text-primary-foreground" />
                          </motion.div>
                          <CardTitle className="text-lg leading-tight">{service.title.replace("and", "&")}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow pt-0">
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                      <div className="px-6 pb-4">
                        <Button variant="outline" className="w-full text-sm">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Additional Features */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-center mb-8">
              Included in all my services
            </h3>
            <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 justify-center"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: 'hsl(var(--accent-warm))' }} />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </StaggerChildren>
            <motion.div
              className="text-center mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToContact}
                className="btn-corporate"
              >
                Start Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;