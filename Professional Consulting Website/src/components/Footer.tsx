import React from 'react';
import { Mail, Phone, MapPin, Shield, Scale, FileText, Users, ArrowRight } from 'lucide-react';
import logo from 'figma:asset/e813253c0e67774ef449bf6d4b208ad9ee09d7ab.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6 bg-white rounded-lg p-4 inline-block">
                <img 
                  src={logo} 
                  alt="Digital Impact LLC" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Professional legal and investigative consulting backed by 50+ years of law enforcement experience.
              </p>
              <div className="flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">Trusted by Legal Professionals</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                Our Services
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <Scale className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Legal & Investigative
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <FileText className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Court Documents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <Users className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Community Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    Our Expertise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:Digitalimpactllc839@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors flex items-start group">
                    <Mail className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="whitespace-nowrap">Digitalimpactllc839@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+16618650844" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    661-865-0844
                  </a>
                </li>
                <li className="text-slate-400 flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                  Serving Clients Nationwide
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Digital Impact Consultants. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Professional Badge */}
        <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-t border-blue-500/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-slate-400">
              <span className="inline-flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                Professional Legal Consulting Services
                <span className="mx-3 text-slate-600">|</span>
                Founded by Mario Rojas and our team
                <span className="mx-3 text-slate-600">|</span>
                50+ Years of Experience
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}