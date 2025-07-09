import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Award, Users, Clock } from 'lucide-react';
import { contactDetails } from '@/data/contactInfo';
import { personalInfo } from '@/data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Stats Section */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">7+</div>
              <div className="text-sm opacity-90">Years at Apollo Gleneagles</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Online Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Dr. Usha Karan
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Certified Clinical Dietitian with 7+ years of experience at Apollo Gleneagles Hospital, Kolkata.
              Specializing in personalized nutrition coaching, clinical nutrition, and lifestyle management
              for sustainable health outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Me</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/book-consultation" className="text-gray-300 hover:text-emerald-400 transition-colors">Book Consultation</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {contactDetails.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <a href={`mailto:${contactDetails.email}`} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {contactDetails.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div className="text-gray-300">
                  {contactDetails.location}<br />
                  {contactDetails.locationDescription}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name} Nutrition Consultancy. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

