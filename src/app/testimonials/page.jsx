import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote } from 'lucide-react';
import { testimonials, getTestimonialStats } from '@/data/testimonials';

export const metadata = {
  title: 'Client Testimonials - Dr. Priya Sharma | Real Success Stories',
  description: 'Read success stories from Dr. Priya Sharma\'s clients. Real testimonials about diabetes management, PCOS nutrition, weight loss, and health transformations.',
  keywords: ['client testimonials', 'success stories', 'diabetes management', 'PCOS nutrition', 'weight loss success', 'nutrition results'],
};

export default function Testimonials() {
  const stats = getTestimonialStats();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real transformations from real people. Discover how personalized nutrition 
              has helped our clients achieve their health goals and transform their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                {/* Header with rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-emerald-600" />
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client info */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-emerald-600 font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.age} years, {testimonial.location}
                      </div>
                      <div className="text-sm text-emerald-600 font-medium">
                        {testimonial.condition} • {testimonial.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our clients about their transformation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Video Testimonial {index + 1}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {index === 0 ? "Diabetes Success Story" : index === 1 ? "PCOS Transformation" : "Weight Loss Journey"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 ? "Watch how Rajesh transformed his diabetes management" : 
                     index === 1 ? "Sneha shares her PCOS recovery journey" : 
                     "Complete weight loss transformation story"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have transformed their health 
            with personalized nutrition guidance from Dr. Priya Sharma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-consultation"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Book Your Free Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center"
            >
              Ask Questions First
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
