import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SoundWave } from "@/components/SoundWave";
import { WaveAnimation } from "@/components/WaveAnimation";
import { StatCounter } from "@/components/StatCounter";
import { PricingCard } from "@/components/PricingCard";
import { BenefitCard } from "@/components/BenefitCard";
import { ProcessStep } from "@/components/ProcessStep";
import { FloatingNavigation } from "@/components/FloatingNavigation";
import { ArrowDown, Check, Clock, Users, Phone, Star } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingNavigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
        <WaveAnimation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-6 animate-fade-in leading-tight">
              STOP aux <span className="text-accent"><StatCounter end={47} /></span> Interruptions 
              <br />Quotidiennes qui 
              <span className="text-gradient"> Sabotent</span> Vos Consultations
            </h1>
            
            <div className="mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center">
              <SoundWave />
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
              ZenDent votre assistant vocal intelligent, transforme chaque appel en opportunité : qualification IA, réponses 24/7, zéro interruption. 
              Les cabinets partenaires économisent <strong>des heures chaque jour</strong>.
            </h2>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-4">
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-gray-700">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span>Les urgences sont identifiées automatiquement</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm sm:text-base text-gray-700">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                <span>Les patients sont beaucoup plus satisfaits</span>
              </div>
            </div>
            
            <div className="space-y-4 px-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection('pricing')}
              >
                Offre d'essai 100 Minutes Gratuites
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Combien de Patients Avez-Vous Perdus Cette Semaine 
                <span className="text-accent">&nbsp;À Cause de Votre Téléphone</span> ?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-red-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong>VOUS</strong> interrompez votre patient pour décrocher...
                  </p>
                </div>
                <div className="bg-red-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong>VOUS</strong> perdez du temps à trier des messages vocaux flous...
                  </p>
                </div>
                <div className="bg-red-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    <strong>VOUS</strong> stressez d'avoir à faire patienter la clientèle...
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 sm:p-8 rounded-lg">
                <blockquote className="text-base sm:text-lg text-gray-700 italic text-center">
                  "Pendant que vous posez une couronne, 3 nouveaux patients tentent de vous joindre. 
                  L'un d'eux ira chez votre concurrent. <strong>Lequel ?</strong>"
                </blockquote>
              </div>
            </div>
            
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-6 sm:mb-8">
                Imaginez si chaque appel était DÉJÀ qualifié automatiquement...
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 sm:p-8 rounded-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-red-600 mb-3 sm:mb-4">❌ AVANT ZenDent</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                    <li>47 interruptions/jour</li>
                    <li>Messages flous de 3 minutes sur le répondeur</li>
                    <li>Stress constant du téléphone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-secondary mb-3 sm:mb-4">✅ APRÈS ZenDent</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                    <li>0 interruption pendant les soins</li>
                    <li>Résumés structurés et priorisés</li>
                    <li>Sérénité totale, contrôle parfait</li>
                    <li>Les patients ne sont plus frustrés et sont rassurés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                5 Raisons de Choisir ZenDent 
                <span className="text-accent">Dès Aujourd'hui</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              <BenefitCard
                icon="⏰"
                title="Récupérez 2h/jour de productivité"
                description="Fin des interruptions pendant les soins. Focus total sur les patients présents."
                metric="Augmentation de 35% de la satisfaction patient"
              />
              
              <BenefitCard
                icon="🎯"
                title="Qualification intelligente des appels"
                description="IA spécialisée secteur dentaire. Priorisation urgence/routine automatique."
              />
              
              <BenefitCard
                icon="🕐"
                title="Réceptionniste virtuel 24/7"
                description="Capture d'appels hors horaires. Réponses FAQ instantanées. Zéro appel manqué garanti."
              />
              
              <BenefitCard
                icon="📊"
                title="Tableau de bord actionnable"
                description="Vue d'ensemble temps réel. Analytics appels/tendances."
              />
              
              <BenefitCard
                icon="💰"
                title="ROI immédiat mesurable"
                description="Réduction coûts secrétariat. Conversion appels/RDV optimisée."
                metric="Un retour sur investissement important"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="process" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Opérationnel en <span className="text-accent">15 Minutes Chrono</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              <ProcessStep
                number="1"
                icon="⚙️"
                title="Configuration"
                description="Paramétrage personnalisé de la FAQ du cabinet"
              />
              
              <ProcessStep
                number="2"
                icon="🔄"
                title="Activation"
                description="Redirection ligne téléphonique sur non réponse"
              />
              
              <ProcessStep
                number="3"
                icon="📋"
                title="Pilotage"
                description="Suivi dashboard"
              />
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <Card className="inline-block">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-700">
                    <strong>Support technique inclus</strong> + vidéo démo intégrée
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Investissement Intelligent, <span className="text-accent">Retour Garanti</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">Plus vous utilisez, moins vous payez</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <PricingCard
                title="DÉCOUVERTE"
                price="159€"
                minutes="500 minutes"
                pricePerMinute="0,318€/minute"
                features={[
                  "Parfait pour cabinet solo",
                  "Configuration personnalisée",
                  "Support par email",
                  "Dashboard en temps réel"
                ]}
                ctaText="Commencer l'essai gratuit"
              />
              
              <PricingCard
                title="PERFORMANCE"
                price="379€"
                minutes="1 500 minutes"
                pricePerMinute="0,253€/minute"
                features={[
                  "Idéal pour cabinets actifs",
                  "IA avancée qualification",
                  "Support prioritaire",
                  "Analytics détaillées",
                  "Intégrations logiciels"
                ]}
                isPopular
                ctaText="Choisir Performance"
              />
              
              <PricingCard
                title="EXPERT"
                price="599€"
                minutes="3 000 minutes"
                pricePerMinute="0,200€/minute"
                features={[
                  "Parfait pour centres/groupes",
                  "Multi-praticiens",
                  "Support dédié",
                  "Formation équipe incluse",
                  "API personnalisée"
                ]}
                ctaText="Contactez-nous"
              />
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Flexibilité totale</h4>
                  <p className="text-sm sm:text-base text-gray-600">Dépassement : 0,49€/minute</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Économies réelles</h4>
                  <p className="text-sm sm:text-base text-gray-600">Coût secrétariat traditionnel : 2 500€/mois</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Sans risque</h4>
                  <p className="text-sm sm:text-base text-gray-600">Satisfait ou remboursé 30 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Rejoignez les dentistes qui ont choisi la sérénité
            </h2>
            
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Offre limitée : 100 minutes d'essai
            </p>
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 mb-6 sm:mb-8 w-full sm:w-auto"
            >
              Réserver Mon Essai Gratuit
            </Button>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-80 text-sm sm:text-base">
              <div className="flex items-center">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span>Certifié RGPD</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span>500+ cabinets partenaires</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span>Support 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">ZenDent</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Votre assistant vocal intelligent pour une gestion des appels dentaires sereine
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Conditions générales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
