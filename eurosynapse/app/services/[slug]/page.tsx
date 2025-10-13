"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Star, Users, Clock, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Code,
  ShoppingCart,
  Layers,
  Bot,
  Wrench,
  Lightbulb,
  Megaphone
} from "lucide-react";

const services = {
  "website-design-development": {
    icon: Globe,
    title: "Website Design & Development",
    description: "Beautiful, fast, and conversion-focused websites built on WordPress or modern frameworks to strengthen your online presence.",
    price: "From €850",
    duration: "4-8 weeks",
    features: ["Responsive Design", "WordPress & Custom", "SEO Optimized"],
    detailedFeatures: [
      "Custom design tailored to your brand",
      "WordPress or modern framework development (React, Next.js)",
      "Mobile-first responsive design",
      "SEO optimization and best practices",
      "Fast loading times and performance optimization",
      "Content management system integration",
      "Contact forms and lead capture",
      "Analytics and tracking setup"
    ],
    technologies: ["WordPress", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    process: [
      {
        phase: "Discovery & Planning",
        description: "Understanding your goals, audience, and requirements",
        duration: "1 week"
      },
      {
        phase: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes",
        duration: "1-2 weeks"
      },
      {
        phase: "Development",
        description: "Building your website with clean, maintainable code",
        duration: "2-3 weeks"
      },
      {
        phase: "Testing & Launch",
        description: "Quality assurance, testing, and deployment",
        duration: "1 week"
      }
    ],
    testimonial: {
      text: "My new website exceeded all expectations. It's beautiful, fast, and has already increased my conversions by 45%.",
      author: "Emma Johnson",
      company: "Artisan Bakery & Café",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  },
  "custom-software-development": {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software crafted to meet specific business goals, ensuring flexibility, performance, and scalability from day one.",
    price: "From €3,500",
    duration: "6-12 weeks",
    features: ["Tailored Solutions", "Scalable Architecture", "Clean Code"],
    detailedFeatures: [
      "Custom software designed for your specific needs",
      "Scalable and maintainable architecture",
      "Clean, well-documented code",
      "API development and integrations",
      "Database design and optimization",
      "User authentication and security",
      "Automated testing and quality assurance",
      "Ongoing support and maintenance"
    ],
    technologies: ["Python", "Node.js", "PHP", "PostgreSQL", "Docker"],
    process: [
      {
        phase: "Requirements Analysis",
        description: "Deep dive into your business processes and needs",
        duration: "1-2 weeks"
      },
      {
        phase: "Architecture Design",
        description: "Planning the technical architecture and data models",
        duration: "1 week"
      },
      {
        phase: "Agile Development",
        description: "Iterative development with regular feedback",
        duration: "4-8 weeks"
      },
      {
        phase: "Testing & Deployment",
        description: "Comprehensive testing and production deployment",
        duration: "1-2 weeks"
      }
    ],
    testimonial: {
      text: "The custom CRM system he built has transformed how we manage our clients. It's exactly what we needed.",
      author: "David Wong",
      company: "Pacific Trade Partners",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  },
  "ecommerce-platforms-solutions": {
    icon: ShoppingCart,
    title: "E-Commerce Platforms & Solutions",
    description: "Conversion-driven online stores with seamless payments, engaging design, and smart integrations that simplify the buying experience.",
    price: "From €1,500",
    duration: "6-10 weeks",
    features: ["Secure Payments", "Smart Integrations", "Conversion Focused"],
    detailedFeatures: [
      "Shopify, WooCommerce, or custom e-commerce platform",
      "Secure payment gateway integration (Stripe, PayPal)",
      "Product catalog and inventory management",
      "Shopping cart and checkout optimization",
      "Order management and fulfillment",
      "Customer accounts and dashboards",
      "Email marketing integration",
      "Analytics and conversion tracking"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "Klaviyo", "Google Analytics"],
    process: [
      {
        phase: "E-Commerce Strategy",
        description: "Market analysis and conversion strategy planning",
        duration: "1 week"
      },
      {
        phase: "UX/UI Design",
        description: "Conversion-focused design for optimal user experience",
        duration: "2 weeks"
      },
      {
        phase: "Development & Setup",
        description: "Building the store and integrating systems",
        duration: "3-5 weeks"
      },
      {
        phase: "Testing & Launch",
        description: "Payment testing, security checks, and go-live",
        duration: "1-2 weeks"
      }
    ],
    testimonial: {
      text: "My online sales increased by 300% after launching. The store is beautiful and incredibly easy to manage.",
      author: "Isabelle Moreau",
      company: "Belle Mode Paris",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/31.jpg"
    }
  },
  "web-mobile-application-development": {
    icon: Layers,
    title: "Web & Mobile Application Development",
    description: "Secure, scalable apps for web and mobile, turning ideas into intuitive digital products that grow with your business.",
    price: "From €5,000",
    duration: "8-16 weeks",
    features: ["Web & Mobile", "Intuitive UX", "Scalable Backend"],
    detailedFeatures: [
      "Progressive Web Apps (PWA) or native mobile apps",
      "iOS and Android development",
      "Real-time features and notifications",
      "Offline functionality",
      "Cloud integration (AWS, Firebase)",
      "User authentication and security",
      "Push notifications",
      "App store submission and optimization"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "AWS", "Redux"],
    process: [
      {
        phase: "Product Discovery",
        description: "Defining features, user flows, and technical requirements",
        duration: "1-2 weeks"
      },
      {
        phase: "UI/UX Design",
        description: "Creating intuitive interfaces for mobile platforms",
        duration: "2-3 weeks"
      },
      {
        phase: "Development",
        description: "Building cross-platform or native applications",
        duration: "5-10 weeks"
      },
      {
        phase: "Testing & Release",
        description: "QA testing and app store deployment",
        duration: "1-2 weeks"
      }
    ],
    testimonial: {
      text: "The app works flawlessly on both iOS and Android. My users love the intuitive interface and smooth performance.",
      author: "Carlos Ramírez",
      company: "FitTrack Solutions",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  },
  "ai-powered-solutions-automation": {
    icon: Bot,
    title: "AI-Powered Solutions",
    description: "Integrating AI into digital workflows to boost productivity, streamline operations, and unlock intelligent, data-driven insights.",
    price: "From €3,000",
    duration: "4-10 weeks",
    features: ["AI Integration", "Process Automation", "Data-Driven"],
    detailedFeatures: [
      "Custom AI chatbots and virtual assistants",
      "Machine learning model development",
      "Predictive analytics and insights",
      "Natural language processing (NLP)",
      "Computer vision applications",
      "Process automation with AI",
      "Recommendation engines",
      "AI-powered content generation"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Python", "Hugging Face"],
    process: [
      {
        phase: "AI Strategy & Planning",
        description: "Identifying AI opportunities and use cases",
        duration: "1 week"
      },
      {
        phase: "Data Preparation",
        description: "Collecting, cleaning, and preparing training data",
        duration: "1-2 weeks"
      },
      {
        phase: "Model Development",
        description: "Training and fine-tuning AI models",
        duration: "2-5 weeks"
      },
      {
        phase: "Integration & Deployment",
        description: "Implementing AI into your systems",
        duration: "1-2 weeks"
      }
    ],
    testimonial: {
      text: "The AI chatbot handles 80% of customer inquiries automatically. It's been a game-changer for my support team.",
      author: "Marie Laurent",
      company: "ServiceHub Technologies",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  },
  "ongoing-support-maintenance": {
    icon: Wrench,
    title: "Ongoing Support & Maintenance",
    description: "Continuous updates, monitoring, and optimization to keep every project secure, stable, and performing at its best.",
    price: "From €800/month",
    duration: "Ongoing",
    features: ["Security Updates", "Performance Monitoring", "24/7 Support"],
    detailedFeatures: [
      "Regular software and security updates",
      "Performance monitoring and optimization",
      "Bug fixes and issue resolution",
      "Database maintenance and backups",
      "Uptime monitoring and alerts",
      "Security patches and vulnerability fixes",
      "Monthly reports and analytics",
      "Priority support response"
    ],
    technologies: ["Sentry", "New Relic", "CloudFlare", "Git", "Monitoring Tools"],
    process: [
      {
        phase: "Initial Assessment",
        description: "Reviewing current state and setting up monitoring",
        duration: "1 week"
      },
      {
        phase: "Monitoring Setup",
        description: "Configuring alerts and tracking systems",
        duration: "3-5 days"
      },
      {
        phase: "Ongoing Maintenance",
        description: "Regular updates, monitoring, and support",
        duration: "Continuous"
      },
      {
        phase: "Monthly Reporting",
        description: "Performance reports and improvement recommendations",
        duration: "Monthly"
      }
    ],
    testimonial: {
      text: "Peace of mind knowing my website is always monitored and updated. Response times are incredibly fast.",
      author: "Thomas Schmidt",
      company: "Alpine Construction Group",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/38.jpg"
    }
  },
  "it-strategy-consulting": {
    icon: Lightbulb,
    title: "IT Strategy & Consulting",
    description: "Clear, actionable guidance to align technology with long-term business objectives and support sustainable digital growth.",
    price: "From €1,500",
    duration: "2-6 weeks",
    features: ["Strategic Planning", "Tech Alignment", "Growth Roadmap"],
    detailedFeatures: [
      "Technology audit and assessment",
      "Digital transformation strategy",
      "Cloud migration planning (AWS, Azure)",
      "Cybersecurity recommendations",
      "Software and tool selection",
      "Tech stack optimization",
      "Process automation opportunities",
      "ROI analysis and budgeting"
    ],
    technologies: ["AWS", "Azure", "Security Tools", "Analytics", "Cloud Platforms"],
    process: [
      {
        phase: "Discovery & Audit",
        description: "Assessing current technology landscape",
        duration: "1 week"
      },
      {
        phase: "Strategy Development",
        description: "Creating tailored technology roadmap",
        duration: "1-2 weeks"
      },
      {
        phase: "Recommendations",
        description: "Detailed action plan with priorities",
        duration: "1 week"
      },
      {
        phase: "Implementation Support",
        description: "Guidance during execution phase",
        duration: "Ongoing"
      }
    ],
    testimonial: {
      text: "His consulting helped us make the right tech decisions and saved us thousands in avoided mistakes.",
      author: "Julia Fernández",
      company: "Innovatech Ventures",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/48.jpg"
    }
  },
  "digital-advertising-campaigns": {
    icon: Megaphone,
    title: "Digital Advertising & Campaigns",
    description: "Targeted, data-driven ad campaigns that enhance visibility and ROI across Google, Meta, and other digital platforms.",
    price: "From €1,000/month",
    duration: "Ongoing",
    features: ["Google & Meta Ads", "ROI Focused", "Data-Driven"],
    detailedFeatures: [
      "Google Ads campaign management",
      "Meta (Facebook/Instagram) advertising",
      "Keyword research and audience targeting",
      "Ad creative design and copywriting",
      "A/B testing and optimization",
      "Conversion tracking and analytics",
      "Retargeting campaigns",
      "Monthly performance reports"
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics", "Tag Manager"],
    process: [
      {
        phase: "Campaign Strategy",
        description: "Defining goals, budget, and target audience",
        duration: "1 week"
      },
      {
        phase: "Setup & Launch",
        description: "Creating campaigns, ads, and tracking",
        duration: "3-5 days"
      },
      {
        phase: "Optimization",
        description: "Continuous testing and improvement",
        duration: "Ongoing"
      },
      {
        phase: "Reporting & Analysis",
        description: "Monthly performance reports and insights",
        duration: "Monthly"
      }
    ],
    testimonial: {
      text: "ROI increased by 250% in just 3 months. The campaigns are perfectly targeted to reach my ideal customers.",
      author: "Roberto Silva",
      company: "Eco-Market Online",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const currentService = services[slug as keyof typeof services];

  if (!currentService) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="section-padding">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Service not found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Link href="/#services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = currentService.icon;

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {currentService.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {currentService.description}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {currentService.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(currentService.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                      <span className="ml-1 text-sm text-muted-foreground">
                        ({currentService.testimonial.rating}.0)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={scrollToContact}
                  className="btn-corporate"
                >
                  Request Quote
                </Button>
                <Button variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                What's included in this service?
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {currentService.detailedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentService.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-6">Work Process</h3>
                  <div className="space-y-4">
                    {currentService.process.map((phase, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm">{phase.phase}</h4>
                          <span className="text-xs text-primary font-medium">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-1 mb-6">
                {[...Array(currentService.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-2xl font-medium mb-6">
                "{currentService.testimonial.text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img
                    src={currentService.testimonial.avatar}
                    alt={currentService.testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{currentService.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {currentService.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="card-corporate text-center">
                <div className="flex flex-col items-center gap-6">
                  <Award className="w-16 h-16 text-primary" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Ready to start your project?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Let's talk about your goals and how I can help you achieve them
                      with a personalized solution.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      onClick={scrollToContact}
                      className="btn-corporate"
                    >
                      Request Free Quote
                    </Button>
                    <Button variant="outline">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
