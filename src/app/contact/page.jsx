'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Send,
  CheckCircle,
  Calendar,
  Mail
} from 'lucide-react';
import { 
  contactMethods, 
  consultationOptions, 
  officeHours, 
  subjectOptions, 
  contactFAQs, 
  contactHero, 
  formConfig,
  contactDetails
} from '@/data/contactInfo';
import DynamicIcon from '@/components/DynamicIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = contactMethods;

  const consultationOptionsData = consultationOptions;

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {contactHero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {contactHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DynamicIcon name={info.icon} className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.action ? (
                  <a 
                    href={info.action}
                    className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{info.details}</p>
                )}
                <p className="text-gray-600 text-sm mt-1">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Consultation Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                
                {isSubmitted && (
                  <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-emerald-800">
                        Thank you! Your message has been sent successfully.
                      </span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {formConfig.name.label}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                        placeholder={formConfig.name.placeholder}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {formConfig.email.label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                        placeholder={formConfig.email.placeholder}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {formConfig.phone.label}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                        placeholder={formConfig.phone.placeholder}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {formConfig.subject.label}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 dark:text-gray-100"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {formConfig.message.label}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-black"
                      placeholder={formConfig.message.placeholder}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Consultation Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consultation Options
              </h2>
              
              <div className="space-y-6">
                {consultationOptionsData.map((option, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <DynamicIcon name={option.icon} className="h-8 w-8 text-emerald-600" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {option.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-emerald-600 font-semibold">
                              {option.price}
                            </div>
                            <div className="text-sm text-gray-500">
                              {option.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-emerald-800 mb-4">
                  Your first consultation is completely FREE! Book now to begin your 
                  journey towards better health and nutrition.
                </p>
                <a
                  href="/book-consultation"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Office Hours
            </h2>
            <p className="text-lg text-gray-600">
              Available for consultations and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeHours.map((hours, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${hours.bgColor}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <DynamicIcon name={hours.icon} className={`h-8 w-8 text-${hours.bgColor}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {hours.title}
                </h3>
                <p className="text-gray-600">
                  {hours.schedule}<br />
                  {hours.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our nutrition services
            </p>
          </div>
          
          <div className="space-y-6">
            {contactFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? I'm here to help!
            </p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Your Question
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
