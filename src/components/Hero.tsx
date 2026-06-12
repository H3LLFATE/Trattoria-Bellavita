import { Calendar, Compass, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-16 px-4">
      
      {/* Background master photograph from generator */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_interior_1781244426304.jpg"
          alt="Trattoria Bellavita Cozy Roman Dining Room"
          className="w-full h-full object-cover scale-102 filter brightness-[0.45] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Ambient warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-charcoal/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        
        {/* Family Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-brand-cream/10 backdrop-blur-md border border-brand-cream/20 px-4 py-1.5 rounded-full mb-6"
        >
          <span className="flex text-brand-gold">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
          </span>
          <span className="text-[10px] sm:text-xs text-brand-cream uppercase tracking-[0.25em] font-sans font-medium">
            3 Generations of Roman Culinary Artistry
          </span>
        </motion.div>

        {/* Brand Name Callout */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-brand-gold font-display text-lg sm:text-2xl uppercase tracking-[0.4em] mb-4 font-normal"
        >
          Benvenuti a Trattoria Bellavita
        </motion.h2>

        {/* Headline requested: "Authentic Italian Taste, Modern Experience" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-3.5xl sm:text-5xl md:text-7.5xl text-brand-cream tracking-tight leading-[1.05] mb-8 font-light"
        >
          Authentic Italian Taste, <br className="hidden sm:inline" />
          <span className="italic font-normal text-brand-cream/95">Modern Experience</span>
        </motion.h1>

        {/* Sub-text description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-[#EDE9DD]/85 max-w-2xl mx-auto leading-relaxed mb-10 font-sans font-light"
        >
          Escape into a cozy sanctuary wrapped in candlelit brick arches, fragrant basil, and rich Tuscan barrel wines. Every plate is folded by hand with fresh stone-ground semolina.
        </motion.p>

        {/* Buttons: Reserve Table, Explore Menu */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => onScrollTo('reservations')}
            className="w-full sm:w-auto bg-brand-terracotta hover:bg-brand-terracotta/95 text-brand-cream text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            id="hero_btn_reserve"
          >
            <Calendar className="w-4 h-4 text-brand-cream/80" />
            Reserve Table
          </button>
          
          <button
            onClick={() => onScrollTo('menu')}
            className="w-full sm:w-auto bg-transparent hover:bg-brand-cream/10 text-brand-cream border border-brand-cream/40 hover:border-brand-cream/80 text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            id="hero_btn_menu"
          >
            <Compass className="w-4 h-4 text-brand-cream/80" />
            Explore Menu
          </button>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer text-brand-gold/70 hover:text-brand-gold"
          onClick={() => onScrollTo('story')}
          id="hero_scroll_indicator"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] mb-1.5 font-sans font-medium">Scroll to Discover</span>
          <div className="w-[1.5px] h-8 bg-brand-gold/40" />
        </motion.div>

      </div>
    </section>
  );
}
