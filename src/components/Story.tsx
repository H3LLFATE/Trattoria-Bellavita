import { STORIES } from '../data';
import { Sparkles, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-brand-cream border-t border-brand-olive-light overflow-hidden">
      
      {/* Decorative leaf/flour graphics elements inside margin */}
      <div className="absolute top-10 left-[-50px] w-64 h-64 bg-brand-olive-light/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-50px] w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro Accent */}
        <div className="text-center mb-16">
          <span className="text-brand-terracotta font-serif text-sm uppercase tracking-[0.25em] font-medium block mb-2">
            La Nostra Famiglia
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl text-brand-charcoal tracking-tight font-light">
            {STORIES.header}
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Stories */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Philosophy quote callout with hand-tinted styling */}
            <div className="border-l-2 border-brand-gold pl-6 py-1 italic text-brand-olive-dark text-lg sm:text-xl font-serif font-light leading-relaxed">
              "{STORIES.philosophy}"
            </div>

            <div className="text-brand-charcoal/85 font-sans font-light text-sm sm:text-base space-y-5 leading-relaxed tracking-wide">
              {STORIES.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Micro Highlights of tradition + modern twist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-[#FAF6EE] p-4 rounded-sm border border-brand-sand/30">
                <div className="text-brand-terracotta mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1E201B] text-sm">Tradizione Vera</h4>
                  <p className="text-xs text-brand-olive-medium font-light mt-1">Fresh durum-wheat semolina flour mixed with organic pastured yolks daily.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#FAF6EE] p-4 rounded-sm border border-brand-sand/30">
                <div className="text-brand-olive-medium mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#1E201B] text-sm">Il Tocco Moderno</h4>
                  <p className="text-xs text-brand-olive-medium font-light mt-1">Sustainably sourced local farm-to-table greens paired with vintage cellars.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Collage (Tuscan Hearth Aesthetic) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Collage Wrapper */}
            <div className="bg-brand-olive-light rounded-lg p-6 sm:p-10 border border-brand-sand/40 relative">
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 border-t border-l border-brand-gold/45 w-6 h-6" />
              <div className="absolute top-4 right-4 border-t border-r border-brand-gold/45 w-6 h-6" />
              <div className="absolute bottom-4 left-4 border-b border-l border-brand-gold/45 w-6 h-6" />
              <div className="absolute bottom-4 right-4 border-b border-r border-brand-gold/45 w-6 h-6" />

              {/* Decorative Seal Badge */}
              <div className="absolute -top-6 -right-3 sm:-right-6 bg-brand-gold text-brand-cream py-3 px-4 rounded-full text-center shadow-lg transform rotate-[8deg]">
                <span className="block font-serif italic text-xs leading-none">Dal</span>
                <span className="block font-sans font-bold text-sm tracking-widest leading-none mt-1">1974</span>
              </div>

              {/* Family Credo Header */}
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-brand-olive-medium font-bold">Trattoria Bellavita</span>
                <h3 className="font-serif italic text-2xl font-normal text-brand-olive-dark mt-1">The Golden Rules</h3>
                <div className="w-8 h-[1px] bg-brand-gold/50 mx-auto mt-2" />
              </div>

              {/* Credo Bullet Line items */}
              <ul className="space-y-5 font-sans text-sm text-brand-charcoal/90">
                {[
                  '100% Bronze-Die extruded traditional pasta.',
                  'Cold-pressed virgin olive oil direct from ligurian orchards.',
                  'No simulated smoke; authentic stone cooking hearth fire.',
                  'Vintages sourced meticulously from certified biodynamic vineyards.',
                  'All guests welcomed with standard complimentary rustic table broth.'
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-terracotta mt-0.5 shrink-0" />
                    <span className="font-serif italic text-[#3F4E3E] font-medium leading-tight">{rule}</span>
                  </li>
                ))}
              </ul>

              {/* Signature Graphic Mock Signature */}
              <div className="mt-10 pt-6 border-t border-brand-sand/50 flex items-center justify-between text-xs text-brand-olive-medium">
                <div>
                  <span className="block font-bold uppercase tracking-wider text-[10px] text-brand-charcoal">Nonna Beatrice</span>
                  <span className="block text-[11px] italic mt-0.5">Founding Matriarch</span>
                </div>
                <div className="font-serif italic text-xl pr-2 text-brand-gold tracking-widest leading-none">
                  Beatrice B.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
