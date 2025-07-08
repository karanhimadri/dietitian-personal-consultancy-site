export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 45,
    location: "Mumbai",
    condition: "Type 2 Diabetes",
    duration: "6 months",
    image: "/testimonials/rajesh.jpg",
    rating: 5,
    quote: "I've been following Dr. Priya's diet plan for 6 months, and the results have been incredible. My HbA1c dropped from 9.2 to 6.8, and I feel more energetic than I have in years. Her approach is practical and sustainable.",
    results: [
      "HbA1c reduced from 9.2% to 6.8%",
      "Lost 12 kg weight",
      "Reduced medication dependency",
      "Improved energy levels"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Sneha Patel",
    age: 32,
    location: "Bangalore",
    condition: "PCOS & Weight Management",
    duration: "4 months",
    image: "/testimonials/sneha.jpg",
    rating: 5,
    quote: "After years of struggling with PCOS and weight issues, Dr. Priya finally gave me a plan that worked. I lost 15kg and my hormonal balance improved significantly. She understands PCOS like no other nutritionist I've met.",
    results: [
      "Lost 15 kg in 4 months",
      "Improved menstrual regularity",
      "Reduced insulin resistance",
      "Better skin and hair health"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Amit Sharma",
    age: 38,
    location: "Delhi",
    condition: "Hypertension",
    duration: "5 months",
    image: "/testimonials/amit.jpg",
    rating: 5,
    quote: "Dr. Priya's DASH diet plan helped me reduce my blood pressure medication significantly. Her follow-up care is exceptional, and she's always available for guidance. My cardiologist is amazed with the improvement.",
    results: [
      "Blood pressure normalized (from 160/100 to 130/85)",
      "Reduced medication from 2 to 1 pill",
      "Lost 8 kg weight",
      "Improved cholesterol levels"
    ],
    featured: true
  },
  {
    id: 4,
    name: "Priya Iyer",
    age: 29,
    location: "Chennai",
    condition: "Post-Pregnancy Weight Loss",
    duration: "8 months",
    image: "/testimonials/priya.jpg",
    rating: 5,
    quote: "After my second pregnancy, I was struggling to lose weight while breastfeeding. Dr. Priya created a perfect plan that helped me lose weight safely without affecting my milk supply. She's a blessing for new mothers.",
    results: [
      "Lost 18 kg post-pregnancy weight",
      "Maintained healthy milk supply",
      "Improved postpartum recovery",
      "Boosted energy for childcare"
    ],
    featured: false
  },
  {
    id: 5,
    name: "Dr. Vikash Singh",
    age: 42,
    location: "Pune",
    condition: "Lifestyle Management",
    duration: "3 months",
    image: "/testimonials/vikash.jpg",
    rating: 5,
    quote: "As a doctor myself, I was skeptical about online nutrition counseling. But Dr. Priya's evidence-based approach and personalized plans impressed me. My cholesterol and triglyceride levels improved dramatically.",
    results: [
      "Cholesterol reduced by 40%",
      "Triglycerides normalized",
      "Improved work-life balance",
      "Better stress management"
    ],
    featured: false
  },
  {
    id: 6,
    name: "Meera Agarwal",
    age: 26,
    location: "Hyderabad",
    condition: "IBS & Digestive Issues",
    duration: "6 months",
    image: "/testimonials/meera.jpg",
    rating: 5,
    quote: "I suffered from severe IBS for years. Dr. Priya's elimination diet approach and gradual food reintroduction helped me identify my triggers. Now I can eat normally without constant digestive discomfort.",
    results: [
      "90% reduction in IBS symptoms",
      "Identified food triggers",
      "Improved gut health",
      "Better quality of life"
    ],
    featured: false
  },
  {
    id: 7,
    name: "Rohit Kapoor",
    age: 35,
    location: "Kolkata",
    condition: "Thyroid & Weight Issues",
    duration: "7 months",
    image: "/testimonials/rohit.jpg",
    rating: 5,
    quote: "With hypothyroidism, losing weight seemed impossible until I met Dr. Priya. Her specialized thyroid nutrition plan helped me lose weight steadily and improve my thyroid function naturally.",
    results: [
      "Lost 14 kg despite thyroid issues",
      "Improved TSH levels",
      "Increased metabolism",
      "Better mood and energy"
    ],
    featured: false
  },
  {
    id: 8,
    name: "Kavya Reddy",
    age: 24,
    location: "Vijayawada",
    condition: "Sports Nutrition",
    duration: "4 months",
    image: "/testimonials/kavya.jpg",
    rating: 5,
    quote: "As a professional athlete, nutrition is crucial for my performance. Dr. Priya's sports nutrition plan helped me achieve my peak performance while maintaining optimal body composition for competitions.",
    results: [
      "Improved athletic performance by 15%",
      "Optimal body fat percentage",
      "Faster recovery times",
      "Consistent energy levels"
    ],
    featured: false
  },
  {
    id: 9,
    name: "Sunita Rao",
    age: 51,
    location: "Mysore",
    condition: "Menopause & Bone Health",
    duration: "5 months",
    image: "/testimonials/sunita.jpg",
    rating: 5,
    quote: "Going through menopause was challenging, but Dr. Priya's nutrition plan helped me manage symptoms naturally. My bone density improved and hot flashes reduced significantly.",
    results: [
      "Reduced hot flashes by 70%",
      "Improved bone density",
      "Better sleep quality",
      "Maintained healthy weight"
    ],
    featured: false
  },
  {
    id: 10,
    name: "Arjun Gupta",
    age: 28,
    location: "Gurgaon",
    condition: "Muscle Building & Recovery",
    duration: "6 months",
    image: "/testimonials/arjun.jpg",
    rating: 5,
    quote: "As a fitness enthusiast, I needed proper nutrition guidance for muscle building. Dr. Priya's sports nutrition plan helped me gain lean muscle while maintaining low body fat. Recovery time improved dramatically.",
    results: [
      "Gained 8 kg lean muscle mass",
      "Reduced body fat to 10%",
      "50% faster recovery time",
      "Increased strength by 30%"
    ],
    featured: false
  }
];

// Helper functions to filter testimonials
export const getFeaturedTestimonials = (count) => {
  return testimonials.slice(0, count)
};

export const getTestimonialsByCondition = (condition) => {
  return testimonials.filter(testimonial =>
    testimonial.condition.toLowerCase().includes(condition.toLowerCase())
  );
};

export const getTestimonialById = (id) => {
  return testimonials.find(testimonial => testimonial.id === id);
};

export const getRandomTestimonials = (count = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Get testimonial statistics
export const getTestimonialStats = () => {
  const totalTestimonials = testimonials.length;
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / totalTestimonials;
  const satisfactionRate = Math.round((testimonials.filter(t => t.rating >= 4).length / totalTestimonials) * 100);

  return [
    {
      number: '500+',
      label: 'Happy Clients'
    },
    {
      number: averageRating.toFixed(1),
      label: 'Average Rating'
    },
    {
      number: `${satisfactionRate}%`,
      label: 'Success Rate'
    },
    {
      number: '7+',
      label: 'Years Experience'
    }
  ];
};

export default testimonials;
