export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fintech-saas-platform",
    title: "FinTech SaaS Platform",
    client: "Financial Services Company",
    description: "Comprehensive SaaS solution for financial management, including real-time analytics, automated reporting, and secure payment processing. Built with modern architecture to handle thousands of concurrent users with sub-second response times.",
    category: "SaaS Development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true
  },
  {
    id: "banking-website-astro",
    title: "Modern Banking Website",
    client: "Regional Bank",
    description: "High-performance banking website built with Astro for optimal speed and SEO. Features include account management portal, loan calculators, branch locator, and integrated customer support chat. Achieved 99+ Lighthouse scores across all metrics.",
    category: "Web Development",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel", "CMS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    featured: true
  },
  {
    id: "monday-meta-integration",
    title: "Monday.com & Meta Integration Platform",
    client: "Digital Marketing Agency",
    description: "Custom integration platform connecting Monday.com project management with Meta Business Suite. Automates campaign tracking, lead synchronization, and performance reporting. Reduced manual data entry by 85% and improved campaign response time.",
    category: "API Integration",
    technologies: ["Python", "FastAPI", "Monday API", "Meta Graph API", "Redis", "Celery"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: true
  },
  {
    id: "marketing-web-scraper",
    title: "Advanced Web Scraping Tool",
    client: "Marketing Intelligence Agency",
    description: "Sophisticated web scraping solution for competitive intelligence and market research. Features distributed scraping, proxy rotation, CAPTCHA solving, and real-time data processing. Processes over 100,000 pages daily with 99.8% accuracy.",
    category: "Data & Automation",
    technologies: ["Python", "Scrapy", "BeautifulSoup", "Selenium", "MongoDB", "RabbitMQ"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: true
  }
];

export const portfolioCategories = [
  "All Projects",
  "SaaS Development",
  "Web Development",
  "API Integration",
  "Data & Automation"
];
