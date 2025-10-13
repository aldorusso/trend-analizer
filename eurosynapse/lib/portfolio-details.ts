export interface PortfolioProjectDetail {
  id: string;
  title: string;
  client: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  features: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  gallery: string[];
}

export const portfolioProjectsDetails: Record<string, PortfolioProjectDetail> = {
  "fintech-saas-platform": {
    id: "fintech-saas-platform",
    title: "FinTech SaaS Platform",
    client: "Financial Services Company",
    description: "Comprehensive SaaS solution for financial management, including real-time analytics, automated reporting, and secure payment processing. Built with modern architecture to handle thousands of concurrent users with sub-second response times.",
    category: "SaaS Development",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Docker", "Redis", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    challenge: "The client needed a scalable financial management platform that could handle complex calculations, real-time data processing, and secure payment transactions while maintaining excellent performance for thousands of concurrent users. The existing legacy system was slow, difficult to maintain, and couldn't scale to meet growing demand.",
    solution: "We built a modern SaaS platform using React for the frontend and Node.js microservices for the backend. The architecture includes real-time WebSocket connections for live updates, Redis caching for performance optimization, and PostgreSQL for reliable data storage. We implemented Stripe for secure payment processing and deployed the entire system on AWS with auto-scaling capabilities.",
    results: [
      { metric: "Performance Improvement", value: "85%" },
      { metric: "User Capacity", value: "10,000+ concurrent" },
      { metric: "Response Time", value: "<500ms" },
      { metric: "Uptime", value: "99.9%" }
    ],
    features: [
      "Real-time financial analytics and dashboards",
      "Automated report generation and scheduling",
      "Secure payment processing with Stripe integration",
      "Multi-tenant architecture with role-based access",
      "Advanced data visualization and charts",
      "API for third-party integrations",
      "Mobile-responsive design",
      "Comprehensive audit logging and compliance"
    ],
    testimonial: {
      text: "Eurosynapse transformed our vision into reality. The platform handles our growing user base flawlessly and has significantly improved our operational efficiency.",
      author: "Michael Chen",
      position: "CTO, Financial Services Company"
    },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    ]
  },
  "banking-website-astro": {
    id: "banking-website-astro",
    title: "Modern Banking Website",
    client: "Regional Bank",
    description: "High-performance banking website built with Astro for optimal speed and SEO. Features include account management portal, loan calculators, branch locator, and integrated customer support chat.",
    category: "Web Development",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel", "Sanity CMS", "React"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    challenge: "The bank needed a modern, fast-loading website that would rank well in search engines while providing a seamless user experience. Their old WordPress site was slow, difficult to update, and didn't meet modern web performance standards. They also needed to comply with strict banking accessibility and security requirements.",
    solution: "We chose Astro as the framework to leverage static site generation for maximum performance while using React islands for interactive components. The site achieves perfect Lighthouse scores, loads in under 1 second, and integrates with Sanity CMS for easy content management. We implemented advanced features like loan calculators, branch locators with real-time data, and a chat system for customer support.",
    results: [
      { metric: "Lighthouse Score", value: "99/100" },
      { metric: "Load Time", value: "<1s" },
      { metric: "SEO Ranking Improvement", value: "250%" },
      { metric: "Mobile Traffic Increase", value: "180%" }
    ],
    features: [
      "Lightning-fast page loads with Astro",
      "Online account management portal",
      "Interactive loan and mortgage calculators",
      "Branch and ATM locator with maps",
      "Integrated live chat support",
      "Accessibility compliant (WCAG 2.1 AA)",
      "Multi-language support",
      "Content management with Sanity CMS"
    ],
    testimonial: {
      text: "Our new website has exceeded all expectations. The speed is incredible, and our customers love the modern interface. SEO traffic has tripled since launch.",
      author: "Sarah Johnson",
      position: "Marketing Director, Regional Bank"
    },
    gallery: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    ]
  },
  "monday-meta-integration": {
    id: "monday-meta-integration",
    title: "Monday.com & Meta Integration Platform",
    client: "Digital Marketing Agency",
    description: "Custom integration platform connecting Monday.com project management with Meta Business Suite. Automates campaign tracking, lead synchronization, and performance reporting.",
    category: "API Integration",
    technologies: ["Python", "FastAPI", "Monday API", "Meta Graph API", "Redis", "Celery", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    challenge: "The marketing agency was manually copying data between Monday.com and Meta Ads Manager, spending 15+ hours per week on data entry. They needed real-time synchronization of campaign data, automated lead import, and unified reporting across both platforms. The manual process was error-prone and prevented them from scaling their operations.",
    solution: "We developed a custom integration platform using Python and FastAPI that connects Monday.com's API with Meta's Graph API. The system uses Celery for background task processing and Redis for caching. It automatically syncs campaign data, imports leads in real-time, generates performance reports, and sends notifications when campaigns need attention. The platform runs on a scheduled basis and can also be triggered manually.",
    results: [
      { metric: "Time Saved", value: "15 hours/week" },
      { metric: "Data Entry Reduction", value: "85%" },
      { metric: "Campaign Response Time", value: "3x faster" },
      { metric: "Error Rate", value: "-95%" }
    ],
    features: [
      "Bi-directional data sync between platforms",
      "Real-time lead import and assignment",
      "Automated campaign performance tracking",
      "Custom report generation and scheduling",
      "Smart notifications and alerts",
      "Campaign budget monitoring",
      "Team collaboration features",
      "Historical data analytics"
    ],
    testimonial: {
      text: "This integration has been a game-changer for our agency. We've eliminated hours of manual work and can now respond to campaign changes in real-time.",
      author: "David Martinez",
      position: "Operations Manager, Digital Marketing Agency"
    },
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    ]
  },
  "marketing-web-scraper": {
    id: "marketing-web-scraper",
    title: "Advanced Web Scraping Tool",
    client: "Marketing Intelligence Agency",
    description: "Sophisticated web scraping solution for competitive intelligence and market research. Features distributed scraping, proxy rotation, CAPTCHA solving, and real-time data processing.",
    category: "Data & Automation",
    technologies: ["Python", "Scrapy", "BeautifulSoup", "Selenium", "MongoDB", "RabbitMQ", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    challenge: "The agency needed to collect and analyze data from thousands of competitor websites daily for market intelligence reports. Manual research was impossibly time-consuming, and basic scraping tools couldn't handle JavaScript-heavy sites, CAPTCHAs, or rate limiting. They needed a robust, scalable solution that could process massive amounts of data accurately and reliably.",
    solution: "We built an enterprise-grade web scraping system using Python with Scrapy for static sites and Selenium for JavaScript-rendered content. The architecture includes distributed scraping with proxy rotation, automatic CAPTCHA solving, smart rate limiting, and data validation. RabbitMQ manages the scraping queue, MongoDB stores the data, and the entire system runs on Kubernetes for scalability. We implemented monitoring, error handling, and automatic retry logic to ensure 99.8% accuracy.",
    results: [
      { metric: "Pages Processed Daily", value: "100,000+" },
      { metric: "Data Accuracy", value: "99.8%" },
      { metric: "Time Saved", value: "200 hours/week" },
      { metric: "Cost Reduction", value: "75%" }
    ],
    features: [
      "Distributed scraping architecture",
      "Smart proxy rotation and management",
      "Automatic CAPTCHA detection and solving",
      "JavaScript rendering with Selenium",
      "Real-time data validation and cleaning",
      "Duplicate detection and filtering",
      "Scheduled and on-demand scraping",
      "RESTful API for data access",
      "Custom data export formats",
      "Monitoring dashboard with alerts"
    ],
    testimonial: {
      text: "The scraping tool has revolutionized our research capabilities. We now process in hours what used to take weeks, with remarkable accuracy.",
      author: "Jennifer Williams",
      position: "Head of Research, Marketing Intelligence Agency"
    },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    ]
  }
};
