"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import CountUp from "@/components/animations/CountUp";
import AnimatedDevice from "@/components/animations/AnimatedDevice";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="hero" className="bg-background overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(77, 87, 175, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(77, 87, 175, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 10px hsl(var(--primary))',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            style={{ opacity }}
          >
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Leading Web Development Agency
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We transform your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  digital vision
                </span>{" "}
                into powerful solutions
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Eurosynapse is your trusted partner in modern web development. We create scalable, fast, and innovative applications that accelerate your business growth.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="text-[2.10rem] font-bold" style={{ color: 'hsl(var(--accent-warm))' }}>
                    <CountUp value={200} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground text-center">Projects Delivered</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[2.10rem] font-bold" style={{ color: 'hsl(var(--accent-warm))' }}>
                    <CountUp value={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground text-center">Happy Clients</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-[2.10rem] font-bold" style={{ color: 'hsl(var(--accent-warm))' }}>
                    <CountUp value={15} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground text-center">Team Experts</div>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("#services")}
                    className="btn-corporate group"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    variant="outline"
                    className="btn-corporate-outline"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
            </FadeIn>

          </motion.div>

          {/* Animated Device Visualization */}
          <FadeIn delay={0.6} direction="right">
            <motion.div
              className="relative h-[500px]"
              style={{ y }}
            >
              <AnimatedDevice className="w-full h-full" />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;