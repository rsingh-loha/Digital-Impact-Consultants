import React, { useState } from 'react';
import { FileText, ExternalLink, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CourtFormsOnlineProps {
  onNavigate: (page: string) => void;
}

export function CourtFormsOnline({ onNavigate }: CourtFormsOnlineProps) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      heroTitle: "Access Court Documents Online",
      heroSubtitle: "Kern County Superior Court Forms",
      heroDesc: "Download official court forms directly from the Kern County Courts website. Follow our simple step-by-step instructions to find the forms you need.",
      instructionsTitle: "How to Access Court Forms Online",
      steps: [
        {
          number: 1,
          title: "Visit the Kern County Courts Website",
          desc: "Click the button below to open the official Kern County Superior Court website in a new tab."
        },
        {
          number: 2,
          title: "Tap on 'Forms and Filing' Tab",
          desc: "Once on the website, locate and click on the 'Forms and Filing' tab in the main navigation menu."
        },
        {
          number: 3,
          title: "Scroll Down to 'Local Court Forms'",
          desc: "On the Forms and Filing page, scroll down until you find the 'Local Court Forms' section and click on it."
        },
        {
          number: 4,
          title: "Search for Your Form and Click",
          desc: "Use the search function or browse the categories to find the specific court form you need, then click to download it."
        }
      ],
      websiteButtonText: "Visit Kern County Courts Website",
      needHelpTitle: "Need Help with Your Forms?",
      needHelpDesc: "If you need assistance completing your court forms or navigating the legal process, our M&V Community Court Document Assistance Center is here to help!",
      helpServices: [
        "Professional form completion assistance",
        "Review and proofreading of your documents",
        "Court submission and filing services",
        "Affordable flat-rate pricing at $150 per document",
        "Available in English and Spanish"
      ],
      contactUsButton: "Get Help with Your Forms",
      tipsTitle: "Helpful Tips",
      tips: [
        "Download forms in PDF format for easy printing",
        "Read all instructions carefully before completing forms",
        "Make copies of completed forms for your records",
        "Check form numbers to ensure you have the correct version",
        "Contact our assistance center if you're unsure which form you need"
      ]
    },
    es: {
      heroTitle: "Acceda a Documentos Judiciales en Línea",
      heroSubtitle: "Formularios del Tribunal Superior del Condado de Kern",
      heroDesc: "Descargue formularios judiciales oficiales directamente del sitio web de los Tribunales del Condado de Kern. Siga nuestras sencillas instrucciones paso a paso para encontrar los formularios que necesita.",
      instructionsTitle: "Cómo Acceder a Formularios Judiciales en Línea",
      steps: [
        {
          number: 1,
          title: "Visite el Sitio Web de los Tribunales del Condado de Kern",
          desc: "Haga clic en el botón a continuación para abrir el sitio web oficial del Tribunal Superior del Condado de Kern en una nueva pestaña."
        },
        {
          number: 2,
          title: "Toque la Pestaña 'Forms and Filing'",
          desc: "Una vez en el sitio web, localice y haga clic en la pestaña 'Forms and Filing' en el menú de navegación principal."
        },
        {
          number: 3,
          title: "Desplácese Hacia Abajo a 'Local Court Forms'",
          desc: "En la página de Formularios y Presentación, desplácese hacia abajo hasta encontrar la sección 'Local Court Forms' y haga clic en ella."
        },
        {
          number: 4,
          title: "Busque Su Formulario y Haga Clic",
          desc: "Use la función de búsqueda o explore las categorías para encontrar el formulario judicial específico que necesita, luego haga clic para descargarlo."
        }
      ],
      websiteButtonText: "Visitar Sitio Web de Tribunales del Condado de Kern",
      needHelpTitle: "¿Necesita Ayuda con Sus Formularios?",
      needHelpDesc: "Si necesita ayuda para completar sus formularios judiciales o navegar el proceso legal, ¡nuestro Centro de Asistencia con Documentos Judiciales Comunitarios M&V está aquí para ayudarle!",
      helpServices: [
        "Asistencia profesional para completar formularios",
        "Revisión y corrección de sus documentos",
        "Servicios de presentación y archivo en el tribunal",
        "Precios fijos asequibles a $150 por documento",
        "Disponible en inglés y español"
      ],
      contactUsButton: "Obtenga Ayuda con Sus Formularios",
      tipsTitle: "Consejos Útiles",
      tips: [
        "Descargue los formularios en formato PDF para imprimirlos fácilmente",
        "Lea todas las instrucciones cuidadosamente antes de completar los formularios",
        "Haga copias de los formularios completados para sus registros",
        "Verifique los números de formulario para asegurarse de tener la versión correcta",
        "Contacte a nuestro centro de asistencia si no está seguro de qué formulario necesita"
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
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnpNNiAzNGMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6TTM2IDU0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Download className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">{language === 'en' ? 'Online Resources' : 'Recursos en Línea'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {t.heroTitle}
            </h1>
            
            <p className="text-2xl text-blue-300 mb-6">
              {t.heroSubtitle}
            </p>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t.heroDesc}
            </p>

            <a
              href="https://www.kern.courts.ca.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
            >
              <span>{t.websiteButtonText}</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">{language === 'en' ? 'Step by Step' : 'Paso a Paso'}</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              {t.instructionsTitle}
            </h2>
          </div>

          <div className="space-y-8">
            {t.steps.map((step, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                    {step.number === 1 && (
                      <a
                        href="https://www.kern.courts.ca.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mt-4 transition-colors"
                      >
                        <span className="underline">kern.courts.ca.gov</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Tips Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-6">
              {t.tipsTitle}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
            <div className="space-y-4">
              {t.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            {t.needHelpTitle}
          </h2>
          
          <p className="text-xl text-slate-200 mb-12 leading-relaxed">
            {t.needHelpDesc}
          </p>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-10">
            <div className="space-y-4">
              {t.helpServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white text-left">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => onNavigate('service-community')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105"
          >
            {t.contactUsButton}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}