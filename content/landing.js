export const landingContent = {
  nav: [
    { label: "Features", href: "#features" },
    { label: "Layouts", href: "#layouts" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  header: {
    brand: { name: "e-restro", href: "/" },
    ctaRight: { label: "Call Us Today", href: "#contact" },
    signIn: { label: "Sign In", href: "#" },
    menuA11y: { open: "Open menu", close: "Close menu" },
  },

  hero: {
    trustBadge: "Trusted by 500+ restaurants worldwide",
    title: {
      before: "All-in-One Restaurant POS System to",
      highlight1: "Run Your Business",
      middle: "",
      highlight2: "Efficiently",
      after: "",
    },
    subtitle:
      "e-restro is a powerful restaurant POS and management platform designed to help restaurants streamline operations, increase sales, and deliver better customer experiences. Whether you run a fast-food outlet, café, bakery, bar, or full-service restaurant, e-restro provides the tools you need for a digital presence in one easy system.",
    subtitle2:
      "Our modern POS software helps restaurant owners reduce operational complexity, improve efficiency, and grow revenue without any hassle.",
    chips: ["No per-order commission", "Easy to use", "Real-time insights"],
    ctas: {
      primary: { label: "Get Started", href: "#pricing" },
      secondary: { label: "Book a Demo", href: "#contact" },
    },
    mockupImage: { src: "/images/pos2.jpeg", alt: "Restaurant POS System" },
    floatingPills: [
      { text: "Real-time Sync" },
      { text: "Quick Orders" },
    ],
  },

  features: {
    badge: "Features",
    title: { before: "Powerful Restaurant", highlight: "Management Software" },
    subtitle: "e-restro combines advanced tools into one complete platform so restaurant owners can manage every part of their business from a single dashboard.",
    items: [
      { title: "Fast & Reliable POS System", description: "Process orders quickly with a lightning-fast point of sale system designed for busy restaurants. The intuitive interface allows staff to complete transactions quickly and accurately.", icon: "⚡" },
      { title: "Smart Order Management", description: "Track every order from the kitchen to the customer. Our system supports dine-in, takeaway, delivery, and online orders, ensuring smooth service during peak hours.", icon: "🍽️" },
      { title: "Sales Analytics & Reporting", description: "Access detailed insights into your restaurant's performance with advanced sales analytics and reporting dashboards that help you make smarter business decisions.", icon: "📊" },
      { title: "Customer Loyalty Programs", description: "Build long-term relationships with your customers through loyalty rewards, promotions, and personalised offers that encourage repeat visits.", icon: "💝" },
      { title: "Multi-Location Restaurant Management", description: "If you run multiple restaurants, e-restro allows you to manage all locations from a single dashboard. Key benefits include centralised reporting, unified menu management, multi-branch performance tracking, and easy staff and inventory control across locations.", icon: "🏢" },
    ],
  },

  whyChoose: {
    badge: "Why Choose e-restro",
    title: { before: "Why Restaurants", highlight: "Choose e-restro" },
    subtitle: "Restaurants choose e-restro because it offers a complete POS and management solution without the hidden costs.",
    items: [
      { text: "No per-order commission fees", icon: "✓" },
      { text: "Easy to use interface for staff", icon: "✓" },
      { text: "Real-time operational insights", icon: "✓" },
      { text: "Scalable for growing restaurant chains", icon: "✓" },
      { text: "Secure data backup and protection", icon: "✓" },
      { text: "Mobile access for business owners", icon: "✓" },
    ],
  },

  layouts: {
    title: "Beautiful Layouts",
    subtitle: "Pre-built layouts for different restaurant styles.",
    items: [
      {
        id: "fine-dining",
        tag: "Fine Dining",
        title: "Elegant Table Service",
        bullets: ["Reservations", "Course timing", "Staff roles & shifts"],
        ctaLabel: "View Layout",
        imageIndex: 1,
      },
      {
        id: "fast-food",
        tag: "Fast Food",
        title: "Speed-First Counter",
        bullets: ["Quick orders", "Kitchen display", "Combo pricing"],
        ctaLabel: "View Layout",
        imageIndex: 2,
      },
      {
        id: "cafe",
        tag: "Cafe",
        title: "Coffee & Bakery",
        bullets: ["Variants & add-ons", "Loyalty points", "Pickup flow"],
        ctaLabel: "View Layout",
        imageIndex: 3,
      },
      {
        id: "cloud-kitchen",
        tag: "Cloud Kitchen",
        title: "Delivery Optimized",
        bullets: ["Multi-channel orders", "Prep timers", "Rider handoff"],
        ctaLabel: "View Layout",
        imageIndex: 4,
      },
      {
        id: "bar",
        tag: "Bar",
        title: "Drinks & Tabs",
        bullets: ["Open tabs", "Split bills", "Happy-hour pricing"],
        ctaLabel: "View Layout",
        imageIndex: 5,
      },
      {
        id: "buffet",
        tag: "Buffet",
        title: "High Volume",
        bullets: ["Seat tracking", "Token system", "Peak-hour insights"],
        ctaLabel: "View Layout",
        imageIndex: 6,
      },
    ],
  },

  pricing: { 
    title: "Simple & Transparent Pricing",
    subtitle: "Choose the plan that fits your restaurant. Whether you need just a website, a POS system, or a complete restaurant solution, e-restro has flexible pricing designed for small restaurants, cafés, and growing food businesses.",
    packages: [
      {
        name: "Website Only",
        description: "Perfect for restaurants that want a professional online presence and online ordering.",
        price: "£50",
        hint: "per month",
        features: [
          "Professional restaurant website",
          "Online menu management",
          "Online ordering system",
          "Mobile-friendly design",
          "Secure hosting",
          "Order notifications",
          "Basic analytics",
        ],
        cta: { label: "Get Started", href: "#contact" },
      },
      {
        name: "POS System (Online & Offline)",
        popularLabel: "Most Popular",
        description: "A powerful POS system designed for fast and efficient restaurant operations.",
        price: "£50",
        hint: "per month",
        features: [
          "Online & offline POS functionality",
          "Table management",
          "Order processing",
          "Kitchen order management",
          "Sales tracking",
          "Basic reporting",
          "Staff access control",
        ],
        cta: { label: "Get Started", href: "#contact" },
      },
      {
        name: "Complete Restaurant Solution",
        description: "Best for restaurants that want a fully integrated digital system to manage both online and in-store operations.",
        price: "£80",
        hint: "per month • Best Value",
        features: [
          "Restaurant website",
          "Online ordering system",
          "Online & offline POS system",
          "Kitchen order management",
          "Table and order tracking",
          "Sales analytics and reporting",
          "Customer order history",
          "Staff management tools",
        ],
        cta: { label: "Get Started", href: "#contact" },
      },
    ],
  },

  finalCta: {
    title: "Transform Your Restaurant Operations Today",
    subtitle: "Join hundreds of restaurants using e-restro restaurant POS software to simplify operations, manage orders efficiently, and increase revenue. Start using a modern restaurant management system built for speed, clarity, and growth.",
    contactPrompt: "📞 Contact us today to see how e-restro can power your restaurant.",
    buttons: [
      { label: "Get Started Now", href: "#pricing" },
      { label: "Book a Demo", href: "#contact" },
    ],
    contact: {
      phone: "+44 123 456 7890",
      email: "hello@e-restro.com",
    },
  },

  footer: {
    brandText: "All-in-one restaurant POS and management platform built for speed, clarity, and growth.",
    copyright: "© {year} {brand}. All rights reserved.",
    bottomNav: [
      { label: "Pricing", href: "#pricing" },
      { label: "Features", href: "#features" },
      { label: "Contact", href: "#contact" },
    ],
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Layouts", href: "#layouts" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Documentation", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
  },
};