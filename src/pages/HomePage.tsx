import React from 'react';
import { ArrowRight, Shield, Scale, FileText, Users, CheckCircle, Star, Award, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">50+ Years of Excellence</span>
              </div>
              
              <div>
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl text-blue-400 mb-2">Welcome to</h2>
                  <div className="text-6xl md:text-7xl lg:text-8xl leading-tight mb-6">
                    <div className="text-white mb-2">
                      Digital Impact
                    </div>
                    <div className="text-blue-400">
                      Consultants
                    </div>
                  </div>
                </div>
                
                <h1 className="text-2xl md:text-3xl leading-tight text-slate-300">
                  Expert Legal & Investigative Consulting Services
                </h1>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Professional consulting backed by three decades of law enforcement experience. We provide trusted guidance for attorneys, insurance companies, investigators, and legal professionals.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl">50+</div>
                    <div className="text-sm text-slate-400">Years Combined Experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl">100%</div>
                    <div className="text-sm text-slate-400">Client Focused</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl">24/7</div>
                    <div className="text-sm text-slate-400">Support</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => onNavigate('about')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2MzkwMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional office"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Cases Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Legal Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized consulting services designed to support legal professionals with expert guidance and comprehensive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Legal & Collision Analysis Investigative Consulting
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Expert witness services, case analysis, digital forensic technology, and professional investigative support for attorneys and legal teams.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Expert witness testimony
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Case analysis
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Digital forensic technology
                  </li>
                </ul>
                <Button
                  onClick={() => onNavigate('service-legal')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Service Card 2 */}
            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/30">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Court & Legal Document Services
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Professional document preparation and court filing assistance with meticulous attention to detail.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Document preparation
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Court filing assistance
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Compliance review
                  </li>
                </ul>
                <Button
                  onClick={() => onNavigate('service-documents')}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Service Card 3 */}
            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Community & Professional Support
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Guidance and consulting for individuals and organizations navigating legal processes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Professional consultation
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Process guidance
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    Community education
                  </li>
                </ul>
                <Button
                  onClick={() => onNavigate('service-community')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Experience You Can
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Trust & Rely On
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                With 50+ years of combined law enforcement experience, our team at Digital Impact Consultants brings unparalleled expertise to every engagement.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Proven Track Record</h3>
                    <p className="text-slate-400">Three decades of successful case support and professional consulting across diverse legal matters.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Responsive Service</h3>
                    <p className="text-slate-400">Quick turnaround times and dedicated support to meet your urgent legal consulting needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Professional Excellence</h3>
                    <p className="text-slate-400">Committed to the highest standards of professionalism, integrity, and client service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRydXN0fGVufDF8fHx8MTc2NjQwMjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional handshake"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_6s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how our expert consulting services can support your legal needs. Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}