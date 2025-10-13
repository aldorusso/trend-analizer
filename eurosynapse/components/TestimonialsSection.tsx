"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";

const TestimonialsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const testimonials = [
    {
      name: "Sophie Dubois",
      position: "CEO",
      company: "Maison Lumière",
      rating: 5,
      text: "Outstanding work. Eurosynapse transformed our vision into a modern web platform that exceeded all expectations. They are professional, communicative, and truly understand business needs.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Ana García",
      position: "Marketing Director",
      company: "Grupo Mercantil Valencia",
      rating: 5,
      text: "Our online store increased sales by 300%. The user experience is exceptional and the performance is impeccable. Eurosynapse delivered beyond our expectations.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "James Mitchell",
      position: "Founder",
      company: "The Coffee House Network",
      rating: 5,
      text: "The web application Eurosynapse developed revolutionized our business. Intuitive interface, fast performance, and all the functionality we needed.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Laura Martínez",
      position: "CTO",
      company: "Digital Investments Group",
      rating: 5,
      text: "Clean code, solid architecture, and perfect timeline compliance. Eurosynapse is undoubtedly our trusted development partner for future projects.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Marc Lefebvre",
      position: "General Director",
      company: "Agence Créative Lyon",
      rating: 5,
      text: "Exceptional collaboration. The Eurosynapse team perfectly understands requirements and brings valuable ideas that improve the final product.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Patricia Ruiz",
      position: "General Manager",
      company: "CloudServe Consulting",
      rating: 5,
      text: "The SaaS platform they created is robust, scalable, and easy to use. Post-launch support has been extraordinary. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                clients say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Client satisfaction is our best credential. Here are real testimonials
              from successful projects we've delivered.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants} className="flex">
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="flex-1">
                <Card className="card-corporate relative h-full flex flex-col">
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </motion.div>

                  <div className="pt-4 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                        >
                          <Star className="w-4 h-4 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <StaggerChildren staggerDelay={0.1} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div className="text-center" variants={cardVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div className="text-center" variants={cardVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
            <motion.div className="text-center" variants={cardVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div className="text-center" variants={cardVariants} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </motion.div>
          </StaggerChildren>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;