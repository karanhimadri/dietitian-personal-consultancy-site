// Main service offerings
export const mainServices = [
  {
    id: 'online-consultations',
    title: "1-on-1 Online Consultations",
    description: "Personalized nutrition guidance tailored to your specific health goals and lifestyle needs.",
    shortDescription: "Personalized nutrition guidance tailored to your specific health goals and lifestyle.",
    icon: 'Users',
    duration: "60-90 minutes",
    price: "₹2,000",
    category: "consultation",
    features: [
      "Comprehensive health assessment",
      "Personalized meal planning", 
      "Lifestyle modification guidance",
      "Follow-up support included",
      "Digital meal plan delivery",
      "Detailed health assessment",
      "Customized meal plans",
      "Follow-up support"
    ],
    process: [
      "Initial health and dietary assessment",
      "Goal setting and timeline planning", 
      "Customized nutrition plan creation",
      "Implementation guidance and tips",
      "Progress tracking and adjustments"
    ]
  },
  {
    id: 'disease-management',
    title: "Disease Management Programs",
    description: "Specialized nutrition therapy for diabetes, PCOS, hypertension, and other chronic conditions.",
    shortDescription: "Specialized nutrition plans for diabetes, PCOS, hypertension, and other conditions.",
    icon: 'Heart',
    duration: "3-6 months",
    price: "₹8,000 - ₹15,000",
    category: "medical",
    features: [
      "Evidence-based nutrition protocols",
      "Regular health monitoring",
      "Medication-nutrition interaction guidance", 
      "Family education and support",
      "Emergency nutrition guidance",
      "Evidence-based protocols",
      "Regular monitoring",
      "Lifestyle modifications"
    ],
    conditions: [
      "Type 1 & Type 2 Diabetes",
      "PCOS & Hormonal Imbalances", 
      "Hypertension & Heart Disease",
      "Thyroid Disorders",
      "Kidney Disease (CKD)",
      "Digestive Issues (IBS, IBD)"
    ]
  },
  {
    id: 'weight-management',
    title: "Weight Management Programs", 
    description: "Sustainable weight loss and muscle gain programs based on scientific principles and lifestyle integration.",
    shortDescription: "Sustainable weight loss and muscle gain programs based on scientific principles.",
    icon: 'Target',
    duration: "3-12 months",
    price: "₹10,000 - ₹25,000",
    category: "weight",
    features: [
      "Body composition analysis",
      "Metabolic rate assessment",
      "Progressive meal planning",
      "Exercise nutrition guidance", 
      "Behavioral modification support",
      "Realistic goal setting",
      "Balanced nutrition",
      "Long-term maintenance"
    ],
    programs: [
      "Healthy Weight Loss (1-2 lbs/week)",
      "Muscle Building & Strength",
      "Post-Pregnancy Weight Management", 
      "Senior Nutrition & Wellness",
      "Teen Nutrition Programs"
    ]
  },
  {
    id: 'corporate-wellness',
    title: "Corporate Wellness Programs",
    description: "Comprehensive nutrition and wellness programs for organizations to improve employee health and productivity.",
    shortDescription: "Nutrition workshops and wellness programs for organizations and teams.",
    icon: 'Shield',
    duration: "Ongoing",
    price: "Custom Pricing", 
    category: "corporate",
    features: [
      "Group nutrition workshops",
      "Health screening camps",
      "Cafeteria menu optimization",
      "Stress eating management", 
      "Productivity nutrition guides",
      "Group sessions",
      "Health screenings",
      "Educational workshops"
    ],
    offerings: [
      "Lunch & Learn Sessions",
      "Health Assessment Programs",
      "Nutrition Challenge Programs",
      "Executive Health Packages", 
      "Workplace Wellness Consulting"
    ]
  }
];

// Specialized/Additional services
export const specializedServices = [
  {
    id: 'pediatric-nutrition',
    title: "Pediatric Nutrition",
    description: "Specialized nutrition care for children and adolescents",
    icon: 'Baby',
    price: "₹1,500",
    category: "specialized"
  },
  {
    id: 'sports-nutrition', 
    title: "Sports Nutrition",
    description: "Performance optimization for athletes and fitness enthusiasts",
    icon: 'Target',
    price: "₹2,500",
    category: "specialized"
  },
  {
    id: 'meal-planning',
    title: "Meal Planning Service", 
    description: "Weekly customized meal plans with shopping lists",
    icon: 'Utensils',
    price: "₹1,000/month",
    category: "specialized"
  },
  {
    id: 'family-nutrition',
    title: "Family Nutrition Plans",
    description: "Comprehensive nutrition planning for entire families", 
    icon: 'Users',
    price: "₹5,000",
    category: "specialized"
  }
];

// Consultation process steps
export const consultationProcess = [
  {
    step: 1,
    title: "Book Your Session",
    description: "Schedule a convenient time for your online consultation",
    icon: 'Calendar',
  },
  {    step: 2,
    title: "Health Assessment",
    description: "Complete detailed health questionnaire and share medical reports",
    icon: 'FileText',
  },
  {
    step: 3,
    title: "Video Consultation", 
    description: "60-90 minute session via Google Meet or Zoom",
    icon: 'Video',
  },
  {
    step: 4,
    title: "Personalized Plan",
    description: "Receive your customized nutrition plan within 24-48 hours",
    icon: 'FileText',
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "Regular follow-ups and plan adjustments as needed",
    icon: 'MessageCircle',
  }
];

// Service packages/pricing tiers
export const servicePricingTiers = [
  {
    id: 'basic',
    name: "Basic Package",
    price: "₹2,000",
    duration: "Single Session",
    features: [
      "Single consultation (60-90 min)",
      "Personalized meal plan",
      "Basic nutrition guidelines",
      "Email support for 1 week"
    ],
    popular: false,
    buttonText: "Choose Basic",
    buttonClass: "w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
  },
  {
    id: 'comprehensive',
    name: "Comprehensive Package", 
    price: "₹8,000",
    duration: "3 Months",
    features: [
      "3 consultations over 3 months",
      "Detailed meal plans & recipes",
      "Progress tracking & adjustments",
      "WhatsApp support included",
      "Grocery shopping guides"
    ],
    popular: true,
    badge: "MOST POPULAR",
    buttonText: "Choose Comprehensive",
    buttonClass: "w-full bg-white text-emerald-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center",
    containerClass: "bg-emerald-600 text-white rounded-2xl p-8 shadow-lg transform scale-105"
  },
  {
    id: 'premium',
    name: "Premium Package",
    price: "₹15,000", 
    duration: "6 Months",
    features: [
      "6 consultations over 6 months",
      "Advanced nutrition protocols",
      "Supplement recommendations",
      "24/7 emergency support",
      "Family nutrition guidance"
    ],
    popular: false,
    buttonText: "Choose Premium",
    buttonClass: "w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
  }
];

// Success metrics/benefits
export const servicebenefits = [
  {
    title: "Evidence-Based Approach",
    description: "All nutrition plans are based on latest scientific research and clinical guidelines",
    icon: 'CheckCircle',
  },
  {
    title: "Personalized Care",
    description: "Every plan is tailored to your individual health status, preferences, and lifestyle",
    icon: 'Heart',
  },
  {
    title: "Ongoing Support", 
    description: "Continuous guidance and adjustments to ensure long-term success",
    icon: 'MessageCircle',
  },
  {
    title: "Proven Results",
    description: "95% client satisfaction rate with measurable health improvements",
    icon: 'Target',
  }
];

// Helper functions
export const getServiceById = (id) => {
  return mainServices.find(service => service.id === id) || 
         specializedServices.find(service => service.id === id);
};

export const getServicesByCategory = (category) => {
  return mainServices.filter(service => service.category === category);
};

export const getAllServices = () => {
  return [...mainServices, ...specializedServices];
};

export const getFeaturedServices = (limit = 4) => {
  return mainServices.slice(0, limit);
};

export const getPopularPackage = () => {
  return servicePricingTiers.find(tier => tier.popular);
};

export const getServicePricing = () => {
  return servicePricingTiers;
};
