import { useState, useEffect } from 'react';
import { ChefHat, CalendarDays, Phone, MapPin, Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Dynamic clock showing Roman Rome Time or Local Time
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { label: 'La Nostra Storia', target: 'story' },
    { label: 'Il Menu', target: 'menu' },
    { label: 'Special Events', target: 'events' },
    { label: 'Prenotazioni', target: 'reservations', highlight: true }
  ];

  return (
    <>
      {/* Top Banner Accent */}
      <div className="bg-brand-olive-dark text-[#F5F2EA] text-[11px] font-sans uppercase tracking-[0.2em] py-2 px-4 flex justify-between items-center z-50 relative border-b border-[#3e4a35]">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1" /> Via del Corso 114, Roma
          </span>
          <span className="hidden sm:flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" /> Lun - Dom: 12:00 - 23:30
          </span>
        </div>
        <div className="flex items-center space-x-3 font-medium">
          <span className="text-[#C29A4D] font-serif text-[12px] italic">Rome Time:</span>
          <span>{localTime || '12:00 PM'}</span>
        </div>
      </div>

      {/* Main Header Container */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-olive-light py-2'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Elegant Serif Logo */}
            <button
              onClick={() => onScrollTo('hero')}
              className="flex items-center space-x-2 w-max focus:outline-none cursor-pointer group"
              id="header_logo_btn"
            >
              <div className="bg-brand-olive-dark text-[#F5F2EA] p-2 rounded-full transition-transform duration-300 group-hover:rotate-[15deg]">
                <ChefHat className="w-5 h-5 text-brand-gold" />
              </div>
              <div className="text-left">
                <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-wide text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                  Bellavita
                </span>
                <span className="block text-[9px] uppercase tracking-[0.3em] font-sans text-brand-olive-medium -mt-1 font-semibold">
                  Trattoria Roma
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => onScrollTo(item.target)}
                  className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 cursor-pointer ${
                    item.highlight
                      ? 'bg-brand-terracotta hover:bg-brand-terracotta/90 text-brand-cream px-5 py-2.5 rounded-sm shadow-md flex items-center gap-1.5 focus:ring-1 focus:ring-brand-gold'
                      : 'text-brand-charcoal/80 hover:text-brand-terracotta'
                  }`}
                  id={`nav_${item.target}`}
                >
                  {item.highlight && <CalendarDays className="w-3.5 h-3.5" />}
                  {item.label}
                  {!item.highlight && (
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-terracotta transition-all duration-300 group-hover:w-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Header Button & Hamburger */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => onScrollTo('reservations')}
                className="bg-brand-terracotta text-brand-cream p-2.5 rounded-sm hover:bg-brand-terracotta/90 cursor-pointer shadow-sm"
                title="Reserve Table"
                id="mobile_quick_reserve"
              >
                <CalendarDays className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-charcoal p-2 focus:outline-none hover:text-brand-terracotta transition-colors cursor-pointer"
                aria-label="Toggle Menu"
                id="mobile_menu_trigger"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-cream/98 border-b border-brand-olive-light"
            >
              <div className="px-5 pt-3 pb-6 space-y-4 shadow-inner">
                {navItems.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onScrollTo(item.target);
                    }}
                    className={`block w-full text-left text-sm uppercase tracking-[0.2em] font-medium py-3 px-4 rounded-md transition-colors ${
                      item.highlight
                        ? 'bg-brand-terracotta text-brand-cream text-center shadow-md flex items-center justify-center gap-2'
                        : 'text-brand-charcoal hover:bg-brand-olive-light hover:text-brand-terracotta'
                    }`}
                    id={`mobile_nav_${item.target}`}
                  >
                    {item.highlight && <CalendarDays className="w-4 h-4" />}
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-brand-olive-light grid grid-cols-2 gap-4 text-xs text-brand-olive-medium text-center">
                  <a href="tel:+39061234567" className="flex items-center justify-center gap-2 font-medium py-2 hover:text-brand-terracotta">
                    <Phone className="w-4 h-4" /> Call Trattoria
                  </a>
                  <div className="flex items-center justify-center gap-2 font-medium py-2">
                    <MapPin className="w-4 h-4 text-brand-gold" /> Roma, IT
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
