import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CheckCircle,
  ArrowRight,
  Clock,
  Calendar,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { 
  mainServices, 
  specializedServices, 
  consultationProcess, 
  servicePricingTiers 
} from '@/data/services';
import DynamicIcon from '@/components/DynamicIcon';

export const metadata = {
  title: 'Nutrition Services - Dr. Priya Sharma | Online Consultations & Diet Plans',
  description: 'Comprehensive nutrition services including online consultations, diabetes management, PCOS nutrition, weight loss programs, and corporate wellness. Personalized diet plans by experienced clinical dietitian.',
  keywords: ['nutrition consultation', 'diet plans', 'diabetes nutrition', 'PCOS diet', 'weight loss', 'corporate wellness', 'online dietitian'],
};

export default function Services() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Nutrition Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From personalized consultations to specialized disease management, 
              I offer evidence-based nutrition solutions tailored to your unique health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-emerald-600 mb-6">
                    <DynamicIcon name={service.icon} className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-gray-700">{service.duration}</span>
                    </div>
                    <div className="font-semibold text-emerald-600 text-lg">
                      {service.price}
                    </div>
                  </div>
                  <Link 
                    href="/book-consultation"
                    className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Book This Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.conditions && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Conditions Treated:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.conditions.map((condition, condIndex) => (
                            <div key={condIndex} className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                              {condition}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {service.programs && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Program Options:</h4>
                        <div className="space-y-2">
                          {service.programs.map((program, progIndex) => (
                            <div key={progIndex} className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                              {program}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {service.offerings && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Offerings:</h4>
                        <div className="space-y-2">
                          {service.offerings.map((offering, offIndex) => (
                            <div key={offIndex} className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg">
                              {offering}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600">
              Additional nutrition services for specific needs and populations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-emerald-600 mb-4">
                  <DynamicIcon name={service.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="font-semibold text-emerald-600 mb-4">
                  {service.price}
                </div>
                <Link 
                  href="/book-consultation"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, streamlined process to get you started on your health journey
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {consultationProcess.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step number */}
                  <div className="relative bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 z-10">
                    {step.step}
                  </div>
                  {/* Step icon */}
                  <div className="text-emerald-600 mb-4 flex justify-center">
                    <DynamicIcon name={step.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that best fits your health goals and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePricingTiers.map((tier, index) => (
              <div key={tier.id} className={tier.containerClass || "bg-white text-gray-600 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-3xl font-bold mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 ${tier.popular ? 'text-emerald-200' : 'text-emerald-600'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/book-consultation"
                  className={tier.buttonClass}
                >
                  {tier.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8">
            Book your free initial consultation today and take the first step 
            towards a healthier, more vibrant you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-consultation"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Book Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
