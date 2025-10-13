"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We will contact you within the next 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contact@eurosynapse.com",
      description: "Response in less than 24h"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Mon - Fri, 9:00 - 18:00"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Remote & Global Offices",
      description: "Remote work available"
    },
    {
      icon: Clock,
      title: "Schedule",
      info: "24/7 Support",
      description: "Global availability"
    }
  ];

  const projectTypes = [
    "Custom Web Application",
    "E-commerce / Online Store",
    "Progressive Web App (PWA)",
    "Existing Web Redesign",
    "Management System",
    "API / Backend Development",
    "Technical Consulting",
    "Other"
  ];

  const budgetRanges = [
    "€1,000 - €5,000",
    "€5,000 - €15,000",
    "€15,000 - €30,000",
    "€30,000 - €50,000",
    "€50,000+"
  ];

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Contact
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's talk about your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                next project
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have an idea? Tell us about your project and we will help you
              turn it into a successful digital reality.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <Card className="card-corporate">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Tell us about your project</h3>
                <p className="text-muted-foreground">
                  Complete the form and we will contact you in less than 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <StaggerChildren staggerDelay={0.08} className="space-y-6">
                  <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="h-12"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </motion.div>
                  </motion.div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Type of project *
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Estimated budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Describe your project *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your project, goals, required functionalities, deadlines, etc."
                    rows={5}
                    className="resize-none"
                  />
                </div>

                  <motion.div variants={fieldVariants}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-corporate w-full md:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </StaggerChildren>
              </form>
            </Card>
          </FadeIn>

          {/* Contact Info & Features */}
          <FadeIn delay={0.4} className="space-y-6">
            {/* Contact Information */}
            <Card className="card-corporate">
              <h3 className="text-xl font-semibold mb-6">Contact information</h3>
              <StaggerChildren staggerDelay={0.1} className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={fieldVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">{item.title}</h4>
                      <p className="text-sm text-primary font-semibold">{item.info}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerChildren>
            </Card>

            {/* Why Choose Us */}
            <Card className="card-corporate">
              <h3 className="text-xl font-semibold mb-6">Why choose Eurosynapse?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--accent-warm))' }} />
                  <span className="text-sm">Guaranteed quick response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--accent-warm))' }} />
                  <span className="text-sm">Agile and efficient development</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--accent-warm))' }} />
                  <span className="text-sm">Transparent communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--accent-warm))' }} />
                  <span className="text-sm">Post-launch support</span>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <motion.div
              className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-6 border border-primary/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick response</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>First response:</span>
                  <span className="font-bold">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Detailed proposal:</span>
                  <span className="font-bold">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Project start:</span>
                  <span className="font-bold">&lt; 1 week</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;