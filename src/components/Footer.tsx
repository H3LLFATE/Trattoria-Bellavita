import { ChefHat, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-[#EDE9DD] py-16 border-t border-brand-olive-dark relative z-10 font-sans">
      
      {/* Footer Top Accent Gradient */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-terracotta via-brand-gold to-brand-olive-dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-12">
          
          {/* Col 1: Brand & Creed */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-olive-dark p-2 rounded-full border border-brand-gold/20">
                <ChefHat className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wide text-brand-cream">
                  Trattoria Bellavita
                </span>
                <span className="block text-[8px] uppercase tracking-[0.3em] text-brand-gold -mt-1 font-semibold">
                  Authentic Roma 1974
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#EDE9DD]/70 leading-relaxed font-light">
              Crafting traditional bronze-die pasta and charred stone-fired oven pizzas across generations. Simple, honest, organic Italian food in a warm, elegant evening atmosphere.
            </p>
          </div>

          {/* Col 2: Incontro Coordinates */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-md text-brand-cream uppercase tracking-wider pb-1 border-b border-brand-cream/10">
              Contatti / Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#EDE9DD]/80 font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Via del Corso 114, 00186, Roma, Italia</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+39061234567" className="hover:text-brand-gold transition-colors">+39 06 1234 5678</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:ciao@bellavita.it" className="hover:text-brand-gold transition-colors">ciao@bellavita.it</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Seating Schedule */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-md text-brand-cream uppercase tracking-wider pb-1 border-b border-brand-cream/10">
              Orari / Opening Hours
            </h4>
            <ul className="space-y-2 text-xs text-[#EDE9DD]/80 font-light">
              <li className="flex justify-between">
                <span>Lunedì - Venerdì:</span>
                <span className="font-medium text-brand-cream">12:00 - 15:00, 18:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato:</span>
                <span className="font-medium text-brand-cream">12:00 - 23:30 (Nonstop)</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica:</span>
                <span className="font-medium text-brand-cream">12:00 - 23:00 (Nonstop)</span>
              </li>
              <li className="pt-2 border-t border-[#3e4a35] text-[10px] text-brand-gold font-serif italic text-center">
                * Wood-fired ovens operate up to 30 mins before closing.
              </li>
            </ul>
          </div>

          {/* Col 4: Community Feed */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-md text-brand-cream uppercase tracking-wider pb-1 border-b border-brand-cream/10">
              Seguici / Social
            </h4>
            <p className="text-xs text-[#EDE9DD]/70 font-light">
              Catch our seasonal white truffle harvests, chef dough masterclasses, and fresh cellars on your channels.
            </p>
            <div className="flex items-center space-x-4 pt-1">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#2a2c28] hover:bg-brand-gold text-brand-cream rounded-full p-2.5 transition-colors cursor-pointer" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-[#2a2c28] hover:bg-brand-gold text-brand-cream rounded-full p-2.5 transition-colors cursor-pointer" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider and copyright lines */}
        <div className="pt-8 border-t border-[#2a2c28] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#EDE9DD]/40 font-light">
          <p>© {year} Trattoria Bellavita. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-3 sm:mt-0 font-sans">
            <a href="#story" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#menu" className="hover:text-brand-gold transition-colors">Terms of Dining</a>
            <a href="#reservations" className="hover:text-brand-gold transition-colors">Seating Rights</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
