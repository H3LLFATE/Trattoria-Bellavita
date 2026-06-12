import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuSection from './components/MenuSection';
import Events from './components/Events';
import ReservationSystem from './components/ReservationSystem';
import Footer from './components/Footer';
import { ArrowUp, Star, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans antialiased text-brand-charcoal selection:bg-brand-gold selection:text-brand-cream relative">
      
      {/* Elegantly styled header */}
      <Header onScrollTo={handleScrollToSection} />

      <main>
        
        {/* 1. Immersive Hero Landing Grid */}
        <Hero onScrollTo={handleScrollToSection} />

        {/* 2. Heirloom Legacy Story Blocks */}
        <Story />

        {/* 3. Fully Interactive Chef's Catalog */}
        <MenuSection />

        {/* 4. Vault Group Celebrations and Weddings */}
        <Events />

        {/* 5. Reservation Portal */}
        <ReservationSystem />

      </main>

      {/* 6. Contact, opening hours, schedule and copyright map */}
      <Footer />

      {/* Floating Scroll To Top Anchor Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleScrollToSection('hero')}
            className="fixed bottom-6 right-6 z-40 bg-brand-terracotta hover:bg-brand-terracotta/90 text-brand-cream p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 focus:outline-none"
            title="Scroll to Top"
            id="scroll_to_top_floating"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
