// Contact Information
export const contactDetails = {
  phone: '+91 98765 43210',
  email: 'dr.priya@nutrition.com',
  whatsapp: '+91 98765 43210',
  whatsappLink: 'https://wa.me/919876543210',
  location: 'Online Consultations',
  locationDescription: 'Serving clients worldwide'
};

// Contact Methods
export const contactMethods = [
  {
    icon: 'Phone',
    title: 'Phone',
    details: contactDetails.phone,
    description: 'Mon-Sat, 9:00 AM - 8:00 PM',
    action: `tel:${contactDetails.phone.replace(/\s/g, '')}`
  },
  {
    icon: 'Mail',
    title: 'Email',
    details: contactDetails.email,
    description: 'We respond within 24 hours',
    action: `mailto:${contactDetails.email}`
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp',
    details: contactDetails.whatsapp,
    description: 'Quick queries & support',
    action: contactDetails.whatsappLink
  },
  {
    icon: 'MapPin',
    title: 'Location',
    details: contactDetails.location,
    description: contactDetails.locationDescription,
    action: null
  }
];

// Consultation Options
export const consultationOptions = [
  {
    icon: 'Video',
    title: 'Video Consultation',
    description: 'Face-to-face consultation via Google Meet or Zoom',
    price: 'FREE (First consultation)',
    duration: '60-90 minutes'
  },
  {
    icon: 'Phone',
    title: 'Phone Consultation',
    description: 'Voice consultation over phone call',
    price: 'FREE (First consultation)',
    duration: '45-60 minutes'
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Support',
    description: 'Text-based consultation and ongoing support',
    price: '₹1,000/month',
    duration: 'Ongoing'
  }
];

// Office Hours
export const officeHours = [
  {
    icon: 'Clock',
    title: 'Consultation Hours',
    schedule: 'Monday - Saturday',
    time: '9:00 AM - 8:00 PM IST',
    bgColor: 'emerald'
  },
  {
    icon: 'MessageCircle',
    title: 'Support Hours',
    schedule: 'Monday - Sunday',
    time: '8:00 AM - 10:00 PM IST',
    bgColor: 'blue'
  },
  {
    icon: 'Globe',
    title: 'Time Zones',
    schedule: 'Available globally',
    time: 'Flexible scheduling',
    bgColor: 'purple'
  }
];

// Contact Form Subject Options
export const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'consultation', label: 'Book Consultation' },
  { value: 'services', label: 'Services Inquiry' },
  { value: 'pricing', label: 'Pricing Information' },
  { value: 'corporate', label: 'Corporate Wellness' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'other', label: 'Other' }
];

// FAQs
export const contactFAQs = [
  {
    question: 'How do I book a consultation?',
    answer: 'You can book a consultation through our online booking form, call us directly, or send us a WhatsApp message. We offer flexible scheduling to accommodate your needs.'
  },
  {
    question: 'What should I expect in my first consultation?',
    answer: 'Your first consultation includes a comprehensive health assessment, discussion of your goals, analysis of your current diet, and a preliminary nutrition plan. We also discuss your lifestyle, preferences, and any medical conditions.'
  },
  {
    question: 'Do you provide meal plans?',
    answer: 'Yes, we provide detailed, personalized meal plans based on your health goals, dietary preferences, and lifestyle. Plans include recipes, shopping lists, and preparation tips.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary depending on your goals and consistency. Many clients see improvements in energy levels within 2-3 weeks, while weight loss and other health improvements typically become noticeable within 4-6 weeks.'
  },
  {
    question: 'Do you work with specific medical conditions?',
    answer: 'Yes, I specialize in nutrition therapy for diabetes, PCOS, hypertension, thyroid disorders, digestive issues, and other chronic conditions. I work closely with your healthcare team when needed.'
  }
];

// Hero Section Content
export const contactHero = {
  title: 'Get in Touch',
  subtitle: 'Ready to transform your health? I\'m here to help you achieve your nutrition goals with personalized guidance and ongoing support.'
};

// Contact Form Labels and Placeholders
export const formConfig = {
  name: {
    label: 'Full Name *',
    placeholder: 'Your full name'
  },
  email: {
    label: 'Email Address *',
    placeholder: 'your@email.com'
  },
  phone: {
    label: 'Phone Number',
    placeholder: '+91 12345 67890'
  },
  subject: {
    label: 'Subject'
  },
  message: {
    label: 'Message *',
    placeholder: 'Tell me about your health goals and how I can help you...'
  }
};

// Helper Functions
export const getContactMethod = (type) => {
  return contactMethods.find(method => method.title.toLowerCase() === type.toLowerCase());
};

export const getConsultationOption = (type) => {
  return consultationOptions.find(option => option.title.toLowerCase().includes(type.toLowerCase()));
};
