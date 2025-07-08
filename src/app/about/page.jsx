import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Award, 
  BookOpen, 
  Users, 
  Heart,
  CheckCircle,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import { personalInfo } from '@/data/personalInfo';
import DynamicIcon from '@/components/DynamicIcon';

export const metadata = {
  title: `About ${personalInfo.name} - Clinical Dietitian with Apollo Gleneagles Experience`,
  description: `Learn about ${personalInfo.name}, a certified clinical dietitian with ${personalInfo.experience.years} years experience at ${personalInfo.experience.hospital}, ${personalInfo.experience.location}. ${personalInfo.education[0].degree}, specializing in diabetes, PCOS, and lifestyle diseases.`,
  keywords: [personalInfo.name, 'clinical dietitian', 'Apollo Gleneagles', 'nutrition qualifications', 'dietitian experience', 'clinical nutrition'],
};

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About {personalInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate clinical dietitian dedicated to transforming lives through evidence-based nutrition. 
              With over {personalInfo.experience.years} years of hospital experience, I bring clinical expertise to personalized nutrition coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey in Nutrition</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{personalInfo.personalStory.intro}</p>
                <p>{personalInfo.personalStory.experience}</p>
                <p>{personalInfo.personalStory.philosophy}</p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/book-consultation"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-20 w-20 text-emerald-600" />
                    </div>
                    <p className="text-gray-600 font-medium">{personalInfo.name}</p>
                    <p className="text-sm text-gray-500">{personalInfo.education[0].degree}, RD</p>
                  </div>
                </div>
              </div>
              {/* Achievement badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white rounded-lg p-3">
                <Award className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-lg p-3">
                <BookOpen className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Education & Qualifications
            </h2>
            <p className="text-xl text-gray-600">
              Strong academic foundation and professional credentials in clinical nutrition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalInfo.education.map((qual, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-emerald-600 mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {qual.degree}
                </h3>
                <p className="text-emerald-600 font-medium mb-2">
                  {qual.institution}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  {qual.year}
                </p>
                <p className="text-gray-600 text-sm">
                  {qual.details}
                </p>
              </div>
            ))}
            {/* Add RD qualification manually since it's in certifications */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-emerald-600 mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Registered Dietitian (RD)
              </h3>
              <p className="text-emerald-600 font-medium mb-2">
                Indian Dietetic Association
              </p>
              <p className="text-gray-500 text-sm mb-3">
                2015
              </p>
              <p className="text-gray-600 text-sm">
                Licensed to practice clinical nutrition and dietary counseling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600">
              Extensive clinical experience in top-tier healthcare institutions
            </p>
          </div>
          <div className="space-y-12">
            {personalInfo.professionalExperience.map((exp, index) => (
              <div key={index} className="border-l-4 border-emerald-600 pl-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-emerald-600 font-medium mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.organization}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas of Specialization
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across multiple nutrition specialties for comprehensive care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.specializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-emerald-600 mb-4">
                  <DynamicIcon name={spec.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {spec.title}
                </h3>
                <p className="text-gray-600">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Continuous learning and professional development in specialized areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                <Award className="h-6 w-6 text-emerald-600 mr-3" />
                <span className="font-medium text-gray-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            My Mission
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            "{personalInfo.mission}"
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
