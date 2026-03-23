import React, { useState } from 'react';
import { FileText, Download, CheckCircle, DollarSign, Heart, ArrowRight, Upload, Clock, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CourtAssistancePageProps {
  onNavigate: (page: string) => void;
}

export function CourtAssistancePage({ onNavigate }: CourtAssistancePageProps) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      heroTitle: "M&V Community Court Document Assistance Center",
      heroSubtitle: "Professional | Affordable | Online",
      heroSubtext: "Professional help with court paperwork without the stress or high costs",
      heroPoints: [
        "No waiting in long courthouse lines",
        "Clear, guided document preparation",
        "Affordable flat-rate pricing"
      ],
      needHelpTitle: "Need Help With Court Documents?",
      needHelpDesc: "Here at M&V, we're here to help you navigate the legal system — without the stress or high costs. Whether you're dealing with a divorce, custody battle, small claims, evictions, or need protection through a restraining order — we've got you covered!",
      weAssistTitle: "We Assist With:",
      assistServices: [
        "Divorce Filings",
        "Child Custody & Visitation",
        "Small Claims Lawsuits",
        "Unlawful Detainers (Evictions)",
        "Restraining Orders (DV/CH)"
      ],
      ourServicesTitle: "Our Services Include:",
      detailedServices: [
        { 
          title: "Completion of Court Documents", 
          desc: "We accurately fill out the required forms for your specific legal matter.",
          icon: "📝"
        },
        { 
          title: "Review & Proofreading", 
          desc: "We double-check everything for errors or missing information.",
          icon: "📝"
        },
        { 
          title: "Court Submission", 
          desc: "We handle the filing of your documents directly with the court.",
          icon: "📝"
        },
        { 
          title: "Document Serving", 
          desc: "Need to serve papers? We'll take care of that too.",
          icon: "📝"
        },
        { 
          title: "100% Online Option", 
          desc: "Get everything done from the comfort of your home. No office visit needed!",
          icon: "📝"
        }
      ],
      whyChooseTitle: "Why Choose Us?",
      whyChoosePoints: [
        "Experienced and reliable",
        "Affordable flat rates",
        "Quick turnaround",
        "Clear communication",
        "Fully remote process available"
      ],
      contactTitle: "Contact Us Today!",
      contactSubtext: "Let's simplify the legal process — together.",
      contactInfo: {
        email: "Digitalimpactllc839@gmail.com",
        phone: "661-865-0844",
        website: "Digitalimpactconsultants.com",
        tagline: "Fast. Friendly. Confidential."
      },
      servicesTitle: "Documents We Help With",
      services: [
        { title: "Divorce Documents", desc: "Petition for dissolution, financial disclosures, settlement agreements" },
        { title: "Child Custody & Support", desc: "Custody agreements, parenting plans, child support modifications" },
        { title: "Small Claims Court", desc: "Claims filings, responses, evidence submissions" },
        { title: "Eviction Notices", desc: "Tenant eviction notices, eviction defense paperwork" },
        { title: "Restraining Orders", desc: "Protective order applications and responses" },
        { title: "Other Civil Filings", desc: "Name changes, guardianship, and general civil documents" }
      ],
      howItWorksTitle: "How It Works",
      steps: [
        { title: "Select Your Document", desc: "Choose the type of court document you need" },
        { title: "Fill Out Information", desc: "Complete the form online or download it" },
        { title: "Submit for Review", desc: "Send your completed forms to us" },
        { title: "Professional Review", desc: "We proofread and prepare your documents" },
        { title: "Receive Final Documents", desc: "Get court-ready documents delivered to you" }
      ],
      pricingTitle: "Transparent Pricing",
      pricingAmount: "$150",
      pricingDesc: "per document",
      pricingComparison: "Typical paralegal fees: $900+",
      pricingSavings: "Save up to 83% on document preparation",
      communityTitle: "Serving Our Community",
      communityDesc: "We believe everyone deserves access to the legal system, regardless of their financial situation. Our mission is to help low-income and underserved individuals navigate court processes with dignity and professional support.",
      communityPoints: [
        "Affordable pricing for all",
        "Spanish language support",
        "No judgment, just help",
        "Payment plans available"
      ]
    },
    es: {
      heroTitle: "Centro de Asistencia con Documentos Judiciales Comunitarios M&V",
      heroSubtitle: "Profesional | Económico | En Línea",
      heroSubtext: "Ayuda profesional con trámites judiciales sin el estrés ni los altos costos",
      heroPoints: [
        "Sin esperar en largas filas del tribunal",
        "Preparación de documentos clara y guiada",
        "Precios fijos asequibles"
      ],
      needHelpTitle: "¿Necesitas ayuda con documentos judiciales?",
      needHelpDesc: "Aquí en M&V, estamos para ayudarte navegar por el sistema legal sin estrés o altos costos. Si estás lidiando con un divorcio, asuntos de patria potestad, reclamos menores, desalojos, o necesitas protección a través de una orden de alejamiento, ¡te tenemos cubierto!",
      weAssistTitle: "Te asistimos con:",
      assistServices: [
        "Divorcios",
        "Patria potestad y visitaciones",
        "Reclamos menores",
        "Desalojos",
        "Órdenes de alejamiento, civil o violencia doméstica"
      ],
      ourServicesTitle: "Otros servicios incluyen:",
      detailedServices: [
        { 
          title: "Finalización de documentos judiciales", 
          desc: "Completamos con precisión los formularios requeridos para su asunto legal específico.",
          icon: "📝"
        },
        { 
          title: "Revisar y corrección de documentos", 
          desc: "Revisamos todo cuidadosamente para detectar errores o información faltante.",
          icon: "📝"
        },
        { 
          title: "Presentar documentos ante el tribunal", 
          desc: "Manejamos la presentación de sus documentos directamente con el tribunal.",
          icon: "📝"
        },
        { 
          title: "Entrega de documentos", 
          desc: "¿Necesita entregar documentos? Nos encargaremos de eso también.",
          icon: "📝"
        },
        { 
          title: "Opciones 100% en línea", 
          desc: "Haga todo desde la comodidad de su hogar. ¡No se necesita visita a la oficina!",
          icon: "📝"
        }
      ],
      whyChooseTitle: "¿Porque elegirnos?",
      whyChoosePoints: [
        "Experiencia y confiable",
        "Económico y tarifas fijas",
        "Respuesta rápida",
        "Comunicación clara",
        "Procedimiento totalmente remoto disponible"
      ],
      contactTitle: "¡Llámanos hoy!",
      contactSubtext: "Vamos a simplificar el proceso legal - Juntos.",
      contactInfo: {
        email: "Digitalimpactllc839@gmail.com",
        phone: "661-865-0844",
        website: "Digitalimpactconsultants.com",
        tagline: "Fast. Friendly. Confidential."
      },
      servicesTitle: "Documentos con los que Ayudamos",
      services: [
        { title: "Documentos de Divorcio", desc: "Petición de disolución, divulgación financiera, acuerdos de liquidación" },
        { title: "Custodia y Manutención", desc: "Acuerdos de custodia, planes de crianza, modificaciones de manutención" },
        { title: "Tribunal de Reclamos Menores", desc: "Presentación de reclamos, respuestas, presentación de evidencia" },
        { title: "Avisos de Desalojo", desc: "Avisos de desalojo de inquilinos, documentación de defensa contra desalojo" },
        { title: "Órdenes de Restricción", desc: "Solicitudes de órdenes de protección y respuestas" },
        { title: "Otras Presentaciones Civiles", desc: "Cambios de nombre, tutela y documentos civiles generales" }
      ],
      howItWorksTitle: "Cómo Funciona",
      steps: [
        { title: "Seleccione Su Documento", desc: "Elija el tipo de documento judicial que necesita" },
        { title: "Complete la Información", desc: "Complete el formulario en línea o descárguelo" },
        { title: "Envíe para Revisión", desc: "Envíenos sus formularios completados" },
        { title: "Revisión Profesional", desc: "Revisamos y preparamos sus documentos" },
        { title: "Reciba Documentos Finales", desc: "Obtenga documentos listos para la corte entregados" }
      ],
      pricingTitle: "Precios Transparentes",
      pricingAmount: "$150",
      pricingDesc: "por documento",
      pricingComparison: "Honorarios típicos de paralegal: $900+",
      pricingSavings: "Ahorre hasta un 83% en preparación de documentos",
      communityTitle: "Sirviendo a Nuestra Comunidad",
      communityDesc: "Creemos que todos merecen acceso al sistema legal, independientemente de su situación financiera. Nuestra misión es ayudar a personas de bajos ingresos y desatendidas a navegar procesos judiciales con dignidad y apoyo profesional.",
      communityPoints: [
        "Precios asequibles para todos",
        "Soporte en idioma español",
        "Sin juicios, solo ayuda",
        "Planes de pago disponibles"
      ]
    }
  };

  const t = content[language];

  return (
    <div>
      {/* Language Toggle */}
      <div className="fixed top-24 right-4 z-40">
        <div className="bg-white rounded-full shadow-lg border border-slate-200 p-1 flex gap-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              language === 'en' 
                ? 'bg-blue-500 text-white' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              language === 'es' 
                ? 'bg-blue-500 text-white' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1655745887623-77a68314699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwYnVpbGRpbmclMjBqdXN0aWNlfGVufDF8fHx8MTc2ODU5MTUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Courthouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">{language === 'en' ? 'Community Service' : 'Servicio Comunitario'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-2xl text-blue-300 mb-6 italic">
              {t.heroSubtitle}
            </p>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t.heroSubtext}
            </p>

            <div className="space-y-4 mb-10">
              {t.heroPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-200">{point}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105"
            >
              {language === 'en' ? 'Get Started' : 'Comenzar'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 text-center">
            {t.needHelpTitle}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-12 text-center">
            {t.needHelpDesc}
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl text-slate-900 mb-6">{t.weAssistTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.assistServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl text-slate-900 mb-8 text-center">{t.ourServicesTitle}</h3>
            <div className="space-y-6">
              {t.detailedServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h4 className="text-lg text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl text-slate-900 mb-6 text-center">{t.whyChooseTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.whyChoosePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <Phone className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">{t.contactTitle}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4">
            {t.contactTitle}
          </h2>
          
          <p className="text-xl text-slate-300 mb-12">
            {t.contactSubtext}
          </p>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
            <div className="text-2xl md:text-3xl mb-8">
              M&V COMMUNITY COURT DOCUMENT ASSISTANCE CENTER
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <a href={`mailto:${t.contactInfo.email}`} className="text-lg hover:text-blue-400 transition-colors">
                  {t.contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-green-400" />
                <a href={`tel:${t.contactInfo.phone}`} className="text-lg hover:text-green-400 transition-colors">
                  {t.contactInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Globe className="w-6 h-6 text-purple-400" />
                <a href={`https://${t.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-purple-400 transition-colors">
                  {t.contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-slate-300">
            <Clock className="w-5 h-5" />
            <span className="text-lg italic">{t.contactInfo.tagline}</span>
          </div>

          <Button 
            onClick={() => onNavigate('contact')}
            size="lg"
            className="mt-8 bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
          >
            {language === 'en' ? 'Contact Us Now' : 'Contáctenos Ahora'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">{t.servicesTitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, index) => (
              <Card key={index} className="p-6 bg-white border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              {t.howItWorksTitle}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {t.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-lg text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6">{t.pricingTitle}</h2>
          </div>

          <Card className="max-w-2xl mx-auto p-12 bg-white/10 backdrop-blur-lg border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="w-12 h-12 text-green-400" />
              </div>
              <div className="text-6xl md:text-7xl mb-2">{t.pricingAmount}</div>
              <div className="text-2xl text-blue-200 mb-8">{t.pricingDesc}</div>
              
              <div className="border-t border-white/20 pt-8 mb-8">
                <p className="text-xl text-slate-200 mb-2">{t.pricingComparison}</p>
                <p className="text-2xl text-green-400">{t.pricingSavings}</p>
              </div>

              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
              >
                {language === 'en' ? 'Get Started' : 'Comenzar'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMHBhcGVyd29yayUyMGRlc2t8ZW58MXx8fHwxNzY4NTkxNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Legal documents"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">{language === 'en' ? 'Our Mission' : 'Nuestra Misión'}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl mb-6">
                {t.communityTitle}
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t.communityDesc}
              </p>

              <div className="space-y-4">
                {t.communityPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}