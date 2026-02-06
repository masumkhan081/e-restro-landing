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
  },

  hero: {
    trustBadge: "Trusted by 500+ restaurants worldwide",
    title: {
      before: "Modern",
      highlight1: "Restaurant",
      middle: "POS &",
      highlight2: "Management",
      after: "Platform",
    },
    subtitle:
      "Streamline operations, boost sales, and delight customers with an all-in-one restaurant management solution.",
    chips: ["No per-order fees", "Real-time sync", "24/7 support"],
    ctas: {
      primary: { label: "Get Started", href: "#pricing" },
      secondary: { label: "Book a Demo", href: "#contact" },
    },
    mockupImage: { src: "/images/pos2.jpeg", alt: "Restaurant POS System" },
  },

  features: {
    badge: "Features",
    title: { before: "Everything You Need to", highlight: "Run Your Restaurant" },
    subtitle: "Powerful tools designed for restaurants of all sizes.",
    items: [
      { title: "Fast POS", description: "Lightning-fast point of sale system with intuitive interface for quick transactions.", icon: "⚡" },
      { title: "Inventory Management", description: "Real-time inventory tracking to prevent stockouts and reduce waste.", icon: "📦" },
      { title: "Order Management", description: "Streamline order processing from kitchen to customer delivery.", icon: "🍽️" },
      { title: "Table Reservations", description: "Online booking system with automated confirmations and waitlist management.", icon: "📅" },
      { title: "Staff Scheduling", description: "Easy shift planning and employee time tracking for optimal staffing.", icon: "👥" },
      { title: "Sales Analytics", description: "Comprehensive reporting and insights to boost revenue and efficiency.", icon: "📊" },
      { title: "Customer Loyalty", description: "Build customer relationships with rewards programs and personalized offers.", icon: "💝" },
      { title: "Multi-Location", description: "Manage multiple restaurant locations from a single dashboard.", icon: "🏢" },
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
    title: "Choose Your Perfect Plan",
    packages: [
      {
        name: "Starter",
        price: "£499",
        hint: "One-time payment",
        features: [
          "Basic POS system setup",
          "Staff training (up to 5 staff)",
          "Menu digitization",
          "Payment gateway integration",
          "Email support",
          "Free software updates",
        ],
        cta: { label: "Get Started", href: "#contact" },
      },
      {
        name: "Professional",
        popularLabel: "Most Popular",
        price: "£899",
        hint: "One-time payment • Best Value",
        features: [
          "Complete POS system setup",
          "Staff training & onboarding",
          "Menu digitization",
          "Payment gateway integration",
          "Initial inventory setup",
          "24/7 technical support",
          "Real-time reporting dashboard",
          "Customer loyalty program",
          "Multi-location management",
          "Mobile app access",
          "Data backup & security",
          "Free software updates",
        ],
        cta: { label: "Get Started", href: "#contact" },
      },
      {
        name: "Enterprise",
        price: "£1,499",
        hint: "One-time payment • Full Suite",
        features: [
          "Everything in Professional",
          "Advanced analytics & insights",
          "Custom integrations",
          "Dedicated account manager",
          "Priority 24/7 support",
          "White-label options",
          "API access",
          "Custom training programs",
          "Quarterly business reviews",
        ],
        cta: { label: "Contact Sales", href: "#contact" },
      },
    ],
  },

  finalCta: {
    title: "Ready to Transform Your Restaurant?",
    subtitle: "Join hundreds of restaurants already using e-restro to streamline their operations and boost their sales.",
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