// Consultation Types for Booking
export const bookingConsultationTypes = [
  {
    type: 'video',
    title: 'Video Consultation',
    description: 'Face-to-face consultation via Google Meet or Zoom',
    icon: 'Video',
    duration: '60-90 minutes',
    price: 'FREE (First consultation)'
  },
  {
    type: 'phone',
    title: 'Phone Consultation',
    description: 'Voice consultation over phone call',
    icon: 'Phone',
    duration: '45-60 minutes',
    price: 'FREE (First consultation)'
  },
  {
    type: 'chat',
    title: 'Chat Consultation',
    description: 'Text-based consultation via WhatsApp',
    icon: 'MessageCircle',
    duration: '30-45 minutes',
    price: '₹1,000'
  }
];

// Available Time Slots
export const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM'
];

// Gender Options
export const genderOptions = [
  { value: '', label: 'Select Gender' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' }
];

// Referral Sources
export const referralSources = [
  { value: '', label: 'Select an option' },
  { value: 'google', label: 'Google Search' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'friend-referral', label: 'Friend/Family Referral' },
  { value: 'doctor-referral', label: 'Doctor Referral' },
  { value: 'website', label: 'Website' },
  { value: 'other', label: 'Other' }
];

// Urgency Options
export const urgencyOptions = [
  { value: 'normal', label: 'Normal (Within 1 week)' },
  { value: 'urgent', label: 'Urgent (Within 48 hours)' }
];

// Form Steps Configuration
export const formSteps = [
  {
    step: 1,
    title: 'Personal Information',
    description: 'Basic personal details'
  },
  {
    step: 2,
    title: 'Health Information',
    description: 'Health goals and medical history'
  },
  {
    step: 3,
    title: 'Consultation Preferences',
    description: 'Scheduling and consultation type'
  }
];

// Form Field Configuration for Each Step
export const formFields = {
  step1: {
    firstName: {
      label: 'First Name *',
      type: 'text',
      placeholder: 'Enter your first name',
      required: true,
      icon: 'User'
    },
    lastName: {
      label: 'Last Name *',
      type: 'text',
      placeholder: 'Enter your last name',
      required: true
    },
    email: {
      label: 'Email Address *',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      icon: 'Mail'
    },
    phone: {
      label: 'Phone Number *',
      type: 'tel',
      placeholder: '+91 12345 67890',
      required: true,
      icon: 'Phone'
    },
    age: {
      label: 'Age *',
      type: 'number',
      placeholder: '25',
      required: true,
      min: 1,
      max: 120
    },
    gender: {
      label: 'Gender *',
      type: 'select',
      required: true,
      options: genderOptions
    },
    city: {
      label: 'City/Location',
      type: 'text',
      placeholder: 'Kolkata, West Bengal',
      icon: 'MapPin',
      colSpan: 2
    }
  },
  step2: {
    healthGoals: {
      label: 'Primary Health Goals *',
      type: 'textarea',
      placeholder: 'E.g., Weight loss, diabetes management, PCOS, improved energy, etc.',
      required: true,
      rows: 3
    },
    currentConditions: {
      label: 'Current Health Conditions',
      type: 'textarea',
      placeholder: 'Any existing medical conditions, allergies, or health concerns',
      rows: 3
    },
    medications: {
      label: 'Current Medications/Supplements',
      type: 'textarea',
      placeholder: 'List any medications or supplements you\'re currently taking',
      rows: 2
    },
    previousDietExperience: {
      label: 'Previous Diet Experience',
      type: 'textarea',
      placeholder: 'Have you worked with a nutritionist before? What diets have you tried?',
      rows: 3
    },
    referralSource: {
      label: 'How did you hear about us?',
      type: 'select',
      options: referralSources
    }
  },
  step3: {
    consultationType: {
      label: 'Consultation Type *',
      type: 'radio-cards',
      required: true,
      options: bookingConsultationTypes
    },
    preferredDate: {
      label: 'Preferred Date *',
      type: 'date',
      required: true,
      icon: 'Calendar',
      min: () => new Date().toISOString().split('T')[0]
    },
    preferredTime: {
      label: 'Preferred Time *',
      type: 'select',
      required: true,
      icon: 'Clock',
      options: timeSlots.map(time => ({ value: time, label: time }))
    },
    urgency: {
      label: 'Consultation Urgency',
      type: 'radio',
      options: urgencyOptions
    },
    additionalNotes: {
      label: 'Additional Notes',
      type: 'textarea',
      placeholder: 'Any specific questions or concerns you\'d like to discuss?',
      rows: 3
    }
  }
};

// Success Messages and Next Steps
export const successContent = {
  title: 'Consultation Booked Successfully!',
  message: 'Thank you for booking your consultation with Dr. Priya Sharma. You will receive a confirmation email shortly with the meeting details.',
  nextSteps: {
    title: 'What happens next?',
    steps: [
      'Confirmation email within 1 hour',
      'Health questionnaire sent 24 hours before',
      'Meeting link shared 30 minutes before',
      'Follow-up plan within 48 hours post-consultation'
    ]
  },
  actions: [
    {
      type: 'primary',
      text: 'Contact Dr. Priya',
      href: 'mailto:dr.priya@nutrition.com'
    },
    {
      type: 'secondary',
      text: 'Back to Home',
      href: '/'
    }
  ]
};

// Important Notes
export const importantNotes = {
  title: 'Important Notes:',
  notes: [
    'Your first consultation is completely FREE',
    'Please have your recent medical reports ready (if any)',
    'Consultation link will be sent 30 minutes before the appointment',
    'You can reschedule up to 24 hours before the appointment',
    'All consultations are confidential and HIPAA compliant'
  ]
};

// Page Content
export const bookingPageContent = {
  hero: {
    title: 'Book Your Nutrition Consultation',
    subtitle: 'Take the first step towards transforming your health with personalized nutrition guidance'
  }
};

// Default Form Data
export const defaultFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  gender: '',
  city: '',
  healthGoals: '',
  currentConditions: '',
  medications: '',
  previousDietExperience: '',
  preferredDate: '',
  preferredTime: '',
  consultationType: 'video',
  urgency: 'normal',
  referralSource: '',
  additionalNotes: ''
};

// Helper Functions
export const getConsultationType = (type) => {
  return bookingConsultationTypes.find(consultation => consultation.type === type);
};

export const getTimeSlot = (time) => {
  return timeSlots.includes(time) ? time : null;
};

export const validateStep = (stepNumber, formData) => {
  const requiredFields = {
    1: ['firstName', 'lastName', 'email', 'phone', 'age', 'gender'],
    2: ['healthGoals'],
    3: ['consultationType', 'preferredDate', 'preferredTime']
  };

  const required = requiredFields[stepNumber] || [];
  return required.every(field => formData[field] && formData[field].trim() !== '');
};

export const getStepTitle = (stepNumber) => {
  const step = formSteps.find(s => s.step === stepNumber);
  return step ? step.title : '';
};
