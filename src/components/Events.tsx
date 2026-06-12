import { useState, FormEvent } from 'react';
import { PRIVATE_EVENTS } from '../data';
import { Calendar, Users, Mail, Phone, Clock, MessageSquare, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Events() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Private Banquet',
    guests: 20,
    date: '',
    notes: ''
  });

  const [isInquired, setIsInquired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setFormError('Per favore, fill out all required fields marked with *');
      return;
    }

    setIsSubmitting(true);

    // Simulate authentic response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsInquired(true);
    }, 1200);
  };

  const eventTypesList = [
    'Private Banquet & Dinner',
    'Charming Wedding Reception',
    'Corporate Cellar Banquet',
    'Wine Tasting Masterclass',
    'Birthday / Anniversary feast'
  ];

  return (
    <section id="events" className="py-24 sm:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-terracotta font-serif text-sm uppercase tracking-[0.25em] font-medium block mb-2">
            La Nostra Cantina
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl text-brand-charcoal tracking-tight font-light leading-tight animate-fade-in">
            {PRIVATE_EVENTS.title}
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="text-sm font-sans text-brand-olive-medium font-light">
            {PRIVATE_EVENTS.tagline}
          </p>
        </div>

        {/* Master Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Gorgeous Image and Amenities Details */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Immersive generated Wine Cellar image */}
            <div className="relative rounded-lg overflow-hidden border border-brand-sand shadow-lg bg-brand-charcoal h-80 sm:h-96">
              <img
                src={PRIVATE_EVENTS.image}
                alt="Ancient Stone Dining Vault at Trattoria Bellavita"
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-cream/95 backdrop-blur-sm p-4 rounded-sm border border-brand-gold/20 flex items-center justify-between text-xs sm:text-sm shadow-md">
                <span className="font-serif font-bold text-brand-olive-dark">Caputo Vault, 11th Century Grotto</span>
                <span className="text-brand-terracotta font-semibold uppercase tracking-wider text-[10px]">Holds up to 75 Guests</span>
              </div>
            </div>

            {/* Description Text */}
            <p className="font-sans text-xs sm:text-sm text-brand-olive-medium leading-relaxed font-light">
              {PRIVATE_EVENTS.description}
            </p>

            {/* Premium amenities checklist */}
            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-brand-charcoal text-md uppercase tracking-wider">
                Our Signature Accommodations include:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRIVATE_EVENTS.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-brand-olive-dark">
                    <span className="bg-brand-olive-medium/10 text-brand-olive-dark p-0.5 rounded-full mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-terracotta" />
                    </span>
                    <span className="font-sans font-light leading-snug">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Side: Elegant Inquiry Lead Form Card */}
          <div className="lg:col-span-6 bg-[#FAF6EE] p-6 sm:p-10 rounded-xl border border-brand-sand shadow-lg relative">
            
            <div className="absolute top-4 left-4 border-t border-l border-brand-gold/30 w-4 h-4" />
            <div className="absolute bottom-4 right-4 border-b border-r border-brand-gold/30 w-4 h-4" />

            <div className="mb-8">
              <h3 className="font-serif text-xl sm:text-3xl text-brand-olive-dark leading-tight">
                Submit Event Inquiry
              </h3>
              <p className="text-[11px] sm:text-xs text-brand-olive-medium font-light mt-1">
                Tell us about your banquet concept, and our events steward will respond within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isInquired ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleInquirySubmit}
                  className="space-y-4 text-xs font-sans text-left"
                >
                  {formError && (
                    <div className="bg-brand-terracotta/5 border border-brand-terracotta/40 text-brand-terracotta px-4 py-3 rounded-sm text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-cream border border-brand-gold/45 focus:border-brand-terracotta px-3 py-2.5 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="e.g. Donna Ross"
                        id="event_input_name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-cream border border-brand-gold/45 focus:border-brand-terracotta px-3 py-2.5 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="donna@example.com"
                        id="event_input_email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-brand-cream border border-brand-gold/45 focus:border-brand-terracotta px-3 py-2.5 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="+39 06"
                        id="event_input_phone"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Target Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-brand-cream border border-brand-gold/45 focus:border-brand-terracotta px-3 py-2.5 rounded-sm focus:outline-none w-full font-medium text-brand-charcoal cursor-pointer"
                        id="event_input_date"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Event Category
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="bg-brand-cream text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta py-2.5 px-3 rounded-sm focus:outline-none w-full font-medium cursor-pointer"
                        id="event_select_type"
                      >
                        {eventTypesList.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Estimated Guest Count
                      </label>
                      <div className="flex items-center space-x-3 bg-brand-cream border border-brand-gold/45 px-3 py-1.5 rounded-sm justify-between">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: Math.max(10, formData.guests - 5) })}
                          className="text-brand-terracotta font-bold hover:bg-brand-cream px-2 py-1 text-md rounded cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-sans font-bold text-sm text-brand-charcoal">{formData.guests} Guests</span>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: Math.min(200, formData.guests + 5) })}
                          className="text-brand-terracotta font-bold hover:bg-brand-cream px-2 py-1 text-md rounded cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                      Occasion Details & Culinary Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="bg-brand-cream border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium resize-none"
                      placeholder="e.g. Any specific allergies? Traditional course wishes? Wine tasting requests..."
                      id="event_input_notes"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-olive-dark hover:bg-brand-olive-dark/95 text-brand-cream text-xs uppercase tracking-[0.2em] font-bold py-4 rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                    id="event_submit_btn"
                  >
                    {isSubmitting ? (
                      <span>Sending Letter...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                        <span>Send Event Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-cream/90 rounded-lg p-6 sm:p-8 text-center border border-brand-gold space-y-5"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-olive-medium/20 text-brand-terracotta flex items-center justify-center mx-auto scale-105 animate-bounce">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-terracotta uppercase font-bold tracking-[0.25em] block">Inquiry Authenticated</span>
                    <h4 className="font-serif italic text-2xl font-normal text-brand-olive-dark">
                      Grazie Mille, {formData.name}!
                    </h4>
                  </div>
                  
                  <p className="text-xs text-brand-olive-medium font-sans leading-relaxed">
                    Our chef steward and sommelier are drafting custom banquet proposals matching your request for <strong className="text-brand-charcoal">{formData.guests} guests</strong> on <strong className="text-brand-charcoal">{formData.date}</strong>.
                  </p>

                  <div className="bg-[#FAF6EE] p-4 rounded-sm border border-brand-sand text-left text-[11px] font-sans text-brand-olive-dark space-y-1 shadow-inner">
                    <div className="flex justify-between"><span className="font-semibold text-brand-olive-medium">Category:</span><span>{formData.eventType}</span></div>
                    <div className="flex justify-between"><span className="font-semibold text-brand-olive-medium">Phone verification:</span><span>{formData.phone}</span></div>
                    <div className="flex justify-between"><span className="font-semibold text-brand-olive-medium">Seating status:</span><span>Proposal pending</span></div>
                  </div>

                  <p className="text-[10px] text-brand-olive-medium font-light">
                    A confirmation email has been dispatched to: <span className="underline">{formData.email}</span>.
                  </p>

                  <button
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        eventType: 'Private Banquet',
                        guests: 20,
                        date: '',
                        notes: ''
                      });
                      setIsInquired(false);
                    }}
                    className="text-xs text-brand-terracotta font-serif font-semibold underline hover:text-brand-terracotta/80 cursor-pointer pt-2 block mx-auto"
                    id="event_reset_btn"
                  >
                    Submit another event inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
