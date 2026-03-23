import React from 'react';
import { Shield, Scale, Heart, Award, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">About Our Firm</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Three Decades of
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Professional Excellence
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded on a commitment to integrity, expertise, and client service, Digital Impact Consultants brings unparalleled experience to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655745887623-77a68314699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwanVzdGljZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjM2OTM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Justice building"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-blue-600 text-sm">Our Founder</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
                Led by
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mario Rojas and our team
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Mario Rojas and our team bring over 50 years of distinguished law enforcement experience to Digital Impact Consultants. Our extensive background in criminal investigations, case analysis, and legal procedures provides clients with insights that only decades of hands-on experience can deliver.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Having worked on hundreds of complex cases throughout our careers, our team understands the nuances of legal processes from multiple perspectives. This unique vantage point enables us to provide comprehensive consulting services that bridge the gap between law enforcement expertise and legal strategy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl text-blue-600 mb-2">50+</div>
                  <div className="text-slate-700">Years Experience</div>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="text-3xl text-indigo-600 mb-2">500+</div>
                  <div className="text-slate-700">Cases Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Built on a Foundation of
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Trust & Integrity
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/30">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Integrity</h3>
                <p className="text-slate-600 leading-relaxed">
                  We uphold the highest ethical standards in every engagement, ensuring honest, transparent, and reliable service to all clients.
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/30">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Expertise</h3>
                <p className="text-slate-600 leading-relaxed">
                  Decades of law enforcement experience inform our consulting approach, providing clients with deep, practical knowledge.
                </p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden bg-white border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Client Focus</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your success is our priority. We tailor our services to meet your specific needs and support your goals.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjYzNDA4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional meeting"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">What Sets Us Apart</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl mb-8">
                Why Clients Choose
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Digital Impact
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Real-World Experience</h3>
                    <p className="text-slate-400">
                      Our consulting is grounded in 30+ years of actual law enforcement work, not just theoretical knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Personalized Approach</h3>
                    <p className="text-slate-400">
                      Every case is unique. We provide tailored solutions that address your specific circumstances and objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Proven Results</h3>
                    <p className="text-slate-400">
                      A track record of successful case support and satisfied clients across diverse legal matters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Trusted Partner</h3>
                    <p className="text-slate-400">
                      We build long-term relationships based on trust, reliability, and consistent delivery of quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_6s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[128px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-4xl md:text-5xl mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            To provide exceptional legal and investigative consulting services that empower attorneys, investigators, and legal professionals with the expertise, insights, and support they need to achieve successful outcomes for their clients.
          </p>
          <p className="text-lg text-blue-200 leading-relaxed">
            We are committed to maintaining the highest standards of professionalism, ethics, and client service in every engagement, ensuring that our clients receive not just consulting, but a trusted partnership built on experience, integrity, and results.
          </p>
        </div>
      </section>
    </div>
  );
}