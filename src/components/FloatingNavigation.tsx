
import { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { openCalendlyPopup } from '@/utils/calendly';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Accueil' },
  { id: 'problem', label: 'Problème' },
  { id: 'benefits', label: 'Avantages' },
  { id: 'process', label: 'Fonctionnement' },
  { id: 'pricing', label: 'Tarifs' }
];

export const FloatingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Détection de la section active
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Desktop */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/66928954-2604-4ae1-ac7a-8250b513af18.png" 
                alt="ZenDent Logo" 
                className="h-20 w-auto"
              />
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.id}>
                      <NavigationMenuLink
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                          activeSection === item.id
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:block">
              <Button
                onClick={openCalendlyPopup}
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-sm"
              >
                Essai Gratuit
              </Button>
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={openCalendlyPopup}
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Essai Gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
