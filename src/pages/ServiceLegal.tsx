import React from 'react';
import { Shield, CheckCircle, ArrowRight, Search, FileSearch, Users, Car, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import crashImage1 from 'figma:asset/3f8d0edf0b2594aab958fb8e81478f7e146ef773.png';
import crashImage2 from 'figma:asset/319cbc9cd2ae6a1c5b1b42805192fa6c10e76002.png';
import crashImage3 from 'figma:asset/645ea663fae99a8ec11bf4df9516f3f2844b782b.png';
import crashImage4 from 'figma:asset/aa06a4d660e329df9854784da661aa90c3d4daba.png';
import forensicCarImage from 'figma:asset/abf003444cb3ffe2c9fe2415b66aa60a76dd960c.png';
import dataImage2 from 'figma:asset/ba05de43af037ee8930c9fa5a3588b01ceae2092.png';
import dataImage3 from 'figma:asset/5872dfe0135201607dab13d0dac9ba1adb90f2e0.png';
import dataImage4 from 'figma:asset/eb5cec2cd6f5939c3036330a20a4cc83f7605f40.png';

interface ServiceLegalProps {
  onNavigate: (page: string) => void;
}

export function ServiceLegal({ onNavigate }: ServiceLegalProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnpNNiAzNGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTM2IDU0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full mb-2">
                <span className="text-blue-300 text-xs">Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl">Legal & Collision Analysis Investigative Consulting</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Professional consulting services designed for attorneys, insurance companies, investigators, and legal professionals who need experienced guidance backed by three decades of law enforcement expertise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="text-blue-600 text-sm">Our Approach</span>
              </div>
              <h2 className="text-4xl text-slate-900 mb-6">Expert Investigative <span className="text-blue-500">Support</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 50 years of law enforcement experience, our team at Digital Impact Consultants provides comprehensive investigative consulting that helps legal professionals build stronger cases and make informed decisions.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our deep understanding of Collision Dynamics, investigative techniques, and law enforcement protocols ensures that you receive practical, actionable guidance. In addition, we offer exclusive digital forensic technology, such as Berla and Cellebrite, which may recover vital vehicle and cell phone evidential information. Recovered information can make a significate difference in your investigation and allows you to make important pertinent legal decisions in your cases.
              </p>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676181739678-47d76dc38a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvdXJ0JTIwbGF3fGVufDF8fHx8MTc2NjQyMjY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Legal office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              {/* Who It's For */}
              <Card className="p-8 bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl text-slate-900">Who This Service Is For</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Attorneys seeking expert investigative consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Private investigators requiring specialized support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Legal professionals working on complex cases</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Insurance Companies needing law enforcement perspective</span>
                  </li>
                </ul>
              </Card>

              {/* What Problems It Solves */}
              <Card className="p-8 bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl text-slate-900">What Problems It Solves</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Lack of law enforcement expertise in case development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Need for credible investigative insights and analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Understanding law enforcement procedures and protocols</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Strategic planning for investigations and legal proceedings</span>
                  </li>
                </ul>
              </Card>

              {/* How Clients Benefit */}
              <Card className="p-8 bg-blue-50 border border-blue-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FileSearch className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl text-slate-900">How You Benefit</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Access to 50+ years of proven law enforcement experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Enhanced case strategies with professional insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Credible expertise to strengthen legal arguments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">We use exclusive digital forensic technology, which may recover vital vehicle and cell phone evidential information</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Accident Reconstruction & Digital Forensics Showcase */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Accident Reconstruction */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
                <Car className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600">Specialized Capabilities</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
                Accident Reconstruction <span className="text-blue-500">& Scene Analysis</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Professional accident scene investigation and reconstruction services for attorneys, insurance companies, and investigators working on vehicle collision cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={crashImage1} alt="Vehicle collision scene investigation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Collision Scene Documentation</h3>
                    <p className="text-slate-300 text-sm">Comprehensive vehicle damage assessment and scene photography</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={crashImage2} alt="Multi-vehicle accident scene" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Multi-Vehicle Analysis</h3>
                    <p className="text-slate-300 text-sm">Complex accident scene reconstruction and impact analysis</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={crashImage3} alt="Evidence collection at crash scene" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Evidence Collection</h3>
                    <p className="text-slate-300 text-sm">Detailed documentation and forensic evidence preservation</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={crashImage4} alt="Motorcycle accident investigation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Specialized Vehicle Cases</h3>
                    <p className="text-slate-300 text-sm">Motorcycle, commercial vehicle, and pedestrian incidents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Forensics */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-600">Digital Evidence</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
                Digital Forensics <span className="text-blue-500">& Data Extraction</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Advanced digital forensic services including mobile device data extraction, vehicle infotainment system analysis, and electronic evidence recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={forensicCarImage} alt="Digital forensics in car with computer" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Vehicle Forensic Analysis</h3>
                    <p className="text-slate-300 text-sm">In-vehicle digital forensic investigation and data extraction</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={dataImage2} alt="Mobile device data extraction" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Mobile Device Extraction</h3>
                    <p className="text-slate-300 text-sm">Phone data recovery and forensic mobile analysis</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={dataImage3} alt="Phone to computer data transfer" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Data Transfer & Analysis</h3>
                    <p className="text-slate-300 text-sm">Secure extraction and preservation of digital evidence</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <img src={dataImage4} alt="Cell phone forensic data recovery" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl mb-2">Forensic Cell Phone Recovery</h3>
                    <p className="text-slate-300 text-sm">Advanced recovery of deleted data and digital evidence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl text-slate-900 mb-6 text-center">Digital Evidence Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Vehicle infotainment system data extraction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Mobile phone forensic analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">GPS and location data recovery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Call logs, messages, and communication records</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Deleted data and file recovery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Court-admissible evidence documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnpNNiAzNGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTM2IDU0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get expert consultation tailored to your specific investigative and legal needs.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}