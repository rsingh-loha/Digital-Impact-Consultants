import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/e813253c0e67774ef449bf6d4b208ad9ee09d7ab.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Digital Impact LLC" 
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-blue-500' : 'text-slate-600 hover:text-blue-500'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 transition-colors ${
                  currentPage.includes('service') ? 'text-blue-500' : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                  <button
                    onClick={() => handleNavClick('service-legal')}
                    className="w-full text-left px-5 py-4 hover:bg-blue-50 transition-colors border-b border-slate-100"
                  >
                    <div className="text-slate-900 mb-1">Legal & Investigative Consulting</div>
                    <div className="text-xs text-slate-500">Professional investigative support</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('service-documents')}
                    className="w-full text-left px-5 py-4 hover:bg-blue-50 transition-colors border-b border-slate-100"
                  >
                    <div className="text-slate-900 mb-1">Court Document Services</div>
                    <div className="text-xs text-slate-500">Legal documentation assistance</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('service-community')}
                    className="w-full text-left px-5 py-4 hover:bg-blue-50 transition-colors border-b border-slate-100"
                  >
                    <div className="text-slate-900 mb-1">Community Support Services</div>
                    <div className="text-xs text-slate-500">Guidance for individuals & organizations</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('court-forms-online')}
                    className="w-full text-left px-5 py-4 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-slate-900 mb-1">Court Forms Online</div>
                    <div className="text-xs text-slate-500">Access Kern County court documents</div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-blue-500' : 'text-slate-600 hover:text-blue-500'
              }`}
            >
              About
            </button>

            <Button
              onClick={() => handleNavClick('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2 ${currentPage === 'home' ? 'text-blue-500' : 'text-slate-900'}`}
            >
              Home
            </button>
            
            <div className="border-t border-slate-100 pt-3">
              <div className="text-slate-500 text-xs mb-2">SERVICES</div>
              <button
                onClick={() => handleNavClick('service-legal')}
                className="block w-full text-left py-2 pl-4 text-slate-900"
              >
                Legal & Investigative Consulting
              </button>
              <button
                onClick={() => handleNavClick('service-documents')}
                className="block w-full text-left py-2 pl-4 text-slate-900"
              >
                Court Document Services
              </button>
              <button
                onClick={() => handleNavClick('service-community')}
                className="block w-full text-left py-2 pl-4 text-slate-900"
              >
                Community Support Services
              </button>
              <button
                onClick={() => handleNavClick('court-forms-online')}
                className="block w-full text-left py-2 pl-4 text-slate-900"
              >
                Court Forms Online
              </button>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left py-2 border-t border-slate-100 pt-3 ${currentPage === 'about' ? 'text-blue-500' : 'text-slate-900'}`}
            >
              About
            </button>

            <Button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}