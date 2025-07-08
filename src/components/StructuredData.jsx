export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://drpriyasharma-nutrition.com/#person",
        "name": "Dr. Priya Sharma",
        "alternateName": "Priya Sharma",
        "description": "Certified Clinical Dietitian with 7+ years experience at Apollo Gleneagles Hospital, Kolkata. Specializing in diabetes management, PCOS nutrition, weight management, and clinical nutrition therapy.",
        "url": "https://drpriyasharma-nutrition.com",
        "image": "https://drpriyasharma-nutrition.com/dr-priya-sharma.jpg",
        "sameAs": [
          "https://www.linkedin.com/in/drpriyasharma",
          "https://www.instagram.com/drpriyasharma_nutrition",
          "https://www.facebook.com/drpriyasharma"
        ],
        "jobTitle": "Clinical Dietitian",
        "worksFor": {
          "@type": "Organization",
          "name": "Dr. Priya Sharma Nutrition Consultancy"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "University of Calcutta",
            "description": "MSc in Clinical Nutrition"
          },
          {
            "@type": "EducationalOrganization", 
            "name": "Lady Brabourne College",
            "description": "BSc in Food Science & Nutrition"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Registered Dietitian (RD)",
            "credentialCategory": "Professional License"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Certified Diabetes Educator (CDE)",
            "credentialCategory": "Professional Certification"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://drpriyasharma-nutrition.com/#organization",
        "name": "Dr. Priya Sharma Nutrition Consultancy",
        "alternateName": "Dr. Priya Sharma Nutrition",
        "url": "https://drpriyasharma-nutrition.com",
        "logo": "https://drpriyasharma-nutrition.com/logo.png",
        "description": "Professional nutrition consultancy offering personalized diet plans, clinical nutrition therapy, and health coaching for diabetes, PCOS, weight management, and other health conditions.",
        "founder": {
          "@id": "https://drpriyasharma-nutrition.com/#person"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Bengali"],
            "hoursAvailable": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
              }
            ]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Online Consultations",
          "description": "Serving clients worldwide through online consultations"
        },
        "sameAs": [
          "https://www.linkedin.com/company/drpriyasharma-nutrition",
          "https://www.instagram.com/drpriyasharma_nutrition",
          "https://www.facebook.com/drpriyasharma"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://drpriyasharma-nutrition.com/#website",
        "url": "https://drpriyasharma-nutrition.com",
        "name": "Dr. Priya Sharma - Clinical Dietitian",
        "description": "Professional nutrition consultancy by Dr. Priya Sharma, experienced clinical dietitian from Apollo Gleneagles Hospital. Get personalized diet plans and nutrition coaching.",
        "publisher": {
          "@id": "https://drpriyasharma-nutrition.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://drpriyasharma-nutrition.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://drpriyasharma-nutrition.com/#service",
        "name": "Personalized Nutrition Consultation",
        "description": "Professional nutrition counseling and personalized diet planning for diabetes, PCOS, weight management, and other health conditions.",
        "provider": {
          "@id": "https://drpriyasharma-nutrition.com/#organization"
        },
        "serviceType": "Health Care",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Nutrition Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "1-on-1 Online Consultation",
                "description": "Personalized nutrition guidance via video call"
              },
              "price": "2000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Disease Management Program",
                "description": "Specialized nutrition therapy for chronic conditions"
              },
              "priceRange": "8000-15000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Weight Management Program",
                "description": "Comprehensive weight loss and management program"
              },
              "priceRange": "10000-25000",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://drpriyasharma-nutrition.com/#medicalbusiness",
        "name": "Dr. Priya Sharma Nutrition Consultancy",
        "description": "Professional nutrition consultancy specializing in clinical nutrition, diabetes management, PCOS treatment, and weight management.",
        "medicalSpecialty": [
          "Clinical Nutrition",
          "Diabetes Education", 
          "PCOS Management",
          "Weight Management",
          "Sports Nutrition"
        ],
        "founder": {
          "@id": "https://drpriyasharma-nutrition.com/#person"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://drpriyasharma-nutrition.com/#professionalservice",
        "name": "Clinical Nutrition Services",
        "description": "Evidence-based nutrition counseling and diet therapy by experienced clinical dietitian",
        "provider": {
          "@id": "https://drpriyasharma-nutrition.com/#person"
        },
        "serviceArea": {
          "@type": "Place",
          "name": "Worldwide (Online Consultations)"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
