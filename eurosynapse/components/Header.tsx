"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (closeTimeoutRef[0]) {
      clearTimeout(closeTimeoutRef[0]);
      closeTimeoutRef[0] = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef[0] = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      slug: "/services/website-design-development",
      description: "WordPress & modern frameworks"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      slug: "/services/custom-software-development",
      description: "Tailored business solutions"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      slug: "/services/ecommerce-platforms-solutions",
      description: "Conversion-driven stores"
    },
    {
      icon: Layers,
      title: "Web & Mobile Apps",
      slug: "/services/web-mobile-application-development",
      description: "Cross-platform applications"
    },
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      slug: "/services/ai-powered-solutions-automation",
      description: "Intelligent automation"
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      slug: "/services/ongoing-support-maintenance",
      description: "Continuous care"
    },
    {
      icon: Lightbulb,
      title: "IT Strategy & Consulting",
      slug: "/services/it-strategy-consulting",
      description: "Strategic guidance"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      slug: "/services/digital-advertising-campaigns",
      description: "ROI-focused campaigns"
    }
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    // Check if it's a hash link (starts with /#)
    if (href.startsWith('/#')) {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        // If on homepage, scroll to section
        const element = document.querySelector(href.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another page, navigate to homepage with hash
        window.location.href = href;
      }
    } else {
      // Regular page navigation
      window.location.href = href;
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (slug: string) => {
    window.location.href = slug;
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-border/50 shadow-lg" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            <img src="/logo.svg" alt="Eurosynapse" className="h-10 w-auto dark:hidden" />
            <img src="/logo-dark.svg" alt="Eurosynapse" className="h-10 w-auto hidden dark:block" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block text-sm">
            <ul className="flex items-center space-x-8">
              {/* Home */}
              <li>
                <button
                  onClick={() => window.location.href = "/"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Home
                </button>
              </li>

              {/* About */}
              <li>
                <button
                  onClick={() => window.location.href = "/about"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  About
                </button>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isServicesOpen ? 1 : 0,
                    y: isServicesOpen ? 0 : -4,
                    pointerEvents: isServicesOpen ? "auto" : "none"
                  }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full right-0 mt-1 w-[600px] bg-background backdrop-blur-xl border border-border rounded-xl shadow-2xl p-4"
                  style={{
                    backgroundColor: 'hsl(var(--background) / 0.98)',
                    zIndex: 9999
                  }}
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <motion.button
                              key={index}
                              onClick={() => handleServiceClick(service.slug)}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left group"
                              whileHover={{ x: 4 }}
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                                  {service.title}
                                </h3>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {service.description}
                                </p>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                      <div className="mt-3 pt-3 border-t border-border">
                        <button
                          onClick={() => window.location.href = "/services"}
                          className="text-sm text-primary hover:text-primary/80 font-medium transition-colors w-full text-center"
                        >
                          View All Services →
                        </button>
                      </div>
                </motion.div>
              </li>

              {/* Portfolio */}
              <li>
                <button
                  onClick={() => window.location.href = "/portfolio"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Portfolio
                </button>
              </li>

              {/* Testimonials */}
              <li>
                <button
                  onClick={() => window.location.href = "/testimonials"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Testimonials
                </button>
              </li>

              {/* Blog */}
              <li>
                <button
                  onClick={() => window.location.href = "/blog"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Blog
                </button>
              </li>

              {/* Careers */}
              <li>
                <button
                  onClick={() => window.location.href = "/careers"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Careers
                </button>
              </li>

              {/* Contact */}
              <li>
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="text-foreground hover:text-primary transition-colors duration-200 link-animate"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button, Language Selector & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              onClick={() => window.location.href = "/start-project"}
              className="btn-corporate"
            >
              Start Your Project
            </Button>
          </div>

          {/* Mobile Menu Button, Language Selector & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4">
                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}

                  {/* Services Accordion Mobile */}
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 space-y-1 pl-4">
                            {services.map((service, index) => {
                              const Icon = service.icon;
                              return (
                                <button
                                  key={index}
                                  onClick={() => handleServiceClick(service.slug)}
                                  className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-4 h-4 text-primary-foreground" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                      {service.title}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  <motion.li
                    className="px-4 pt-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Button
                      onClick={() => window.location.href = "/start-project"}
                      className="btn-corporate w-full"
                    >
                      Start Your Project
                    </Button>
                  </motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;