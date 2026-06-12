import { useState, useEffect, FormEvent } from 'react';
import { Reservation } from '../types';
import { CalendarDays, Users, Phone, Mail, Clock, MapPin, Sparkles, Check, Trash2, ShieldCheck, Ticket, RefreshCw, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ReservationSystem() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [area, setArea] = useState<Reservation['area']>('Main Dining Room');
  const [occasion, setOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [activeReservation, setActiveReservation] = useState<Reservation | null>(null);
  const [showManageMode, setShowManageMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Hydrate bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bellavita_reservation_list');
      if (stored) {
        setReservations(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Local Storage error reading reservations: ', e);
    }
  }, []);

  // Save changes helper
  const saveReservationsList = (updated: Reservation[]) => {
    setReservations(updated);
    try {
      localStorage.setItem('bellavita_reservation_list', JSON.stringify(updated));
    } catch (e) {
      console.error('Local Storage error saving reservations: ', e);
    }
  };

  const handleCreateReservation = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Field integrity verification
    if (!name.trim() || !email.trim() || !phone.trim() || !date) {
      setFormError('Pre favore, complete all highlighted elements (*)');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    if (date < todayStr) {
      setFormError('Please select a current or future booking date.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const freshBooking: Reservation = {
        id: `TKT-${Math.floor(100000 + Math.random() * 900000)}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date,
        time,
        guests,
        area,
        occasion,
        specialRequests: specialRequests.trim(),
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      const updated = [freshBooking, ...reservations];
      saveReservationsList(updated);
      setActiveReservation(freshBooking);
      setIsSubmitting(false);

      // Cleanse input state
      setName('');
      setEmail('');
      setPhone('');
      setOccasion('');
      setSpecialRequests('');
    }, 1000);
  };

  const cancelBooking = (id: string) => {
    const updated = reservations.filter(res => res.id !== id);
    saveReservationsList(updated);
    if (activeReservation?.id === id) {
      setActiveReservation(null);
    }
  };

  const areasList: { id: Reservation['area']; desc: string; cap: string; ambience: string }[] = [
    { id: 'Main Dining Room', desc: 'Sunk under rustic wooden beams, warm romantic candlelight.', cap: '2 - 10 Guests', ambience: 'Cozy and classic' },
    { id: 'Cozy Fireside Alcove', desc: 'Indulge inside private booths framed by our stone hearth.', cap: '2 - 4 Guests', ambience: 'Ultra romantic & warm' },
    { id: 'Garden Terrace (Outdoor)', desc: 'Surrounded by wild Tuscan ferns and lemon climbing ivy.', cap: '2 - 8 Guests', ambience: 'Aromatic & botanical' },
    { id: 'Chef\'s Tapestry Table', desc: 'Sit adjacent to our handmade stone ovens with curated wine stories.', cap: '1 - 6 Guests', ambience: 'Immersive gastronomy' }
  ];

  const timesList = [
    '12:00', '12:30', '13:00', '13:30', '14:00', // Lunch
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30' // Dinner
  ];

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-brand-olive-light/40 border-t border-brand-olive-light relative">
      
      {/* Visual embellishments */}
      <div className="absolute top-10 left-[-40px] w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-[-40px] w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reservation Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-terracotta font-serif text-sm uppercase tracking-[0.25em] font-medium block mb-2">
            La Tavola della Famiglia
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl text-brand-charcoal tracking-tight font-light leading-tight">
            Reserve Your Experience
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4 mb-4" />
          <p className="text-xs sm:text-sm font-sans text-brand-olive-medium font-light">
            Secure your preferred table slot and dine surrounded by ancient stone walls, warm olive grove accents, and dynamic Neapolitan hospitality.
          </p>

          {/* Quick toggle to view existing bookings */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowManageMode(!showManageMode)}
              className="inline-flex items-center space-x-2 bg-brand-cream border border-brand-gold/45 hover:border-brand-terracotta text-brand-charcoal text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-sm hover:text-brand-terracotta transition-colors font-medium cursor-pointer"
              id="toggle_manage_reservations"
            >
              <Users className="w-3.5 h-3.5 text-brand-gold" />
              <span>{showManageMode ? 'Back to booking desk' : `View / Cancel Existing Bookings (${reservations.length})`}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Panel Manager: Create Bookings vs Manage Bookings lists */}
        <AnimatePresence mode="wait">
          
          {showManageMode ? (
            /* ========================================================= */
            /* VIEW/CANCEL PRE-EXISTING RESERVATIONS PANORAMA            */
            /* ========================================================= */
            <motion.div
              key="manage-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-brand-cream rounded-xl p-6 sm:p-10 border border-brand-olive-light shadow-xl text-left space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-brand-olive-dark font-medium pb-2 border-b border-brand-olive-light">
                    Your Current Reservations
                  </h3>
                  <p className="text-[11px] text-brand-olive-medium font-sans font-light mt-1.5">
                    Cancel or modify seating coordinates. Bookings must be modified at least 2 hours prior to seating.
                  </p>
                </div>

                {reservations.length > 0 ? (
                  <div className="space-y-4">
                    {reservations.map((res) => (
                      <div
                        key={res.id}
                        className="bg-[#FAF6EE] p-5 rounded-md border border-brand-sand/50 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-brand-gold/60 transition-colors"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-sans font-extrabold text-[#FAF6EE] text-[10px] bg-brand-gold px-2.5 py-0.5 rounded-sm uppercase tracking-wide">
                              {res.id}
                            </span>
                            <span className="font-serif italic text-brand-olive-dark font-semibold">Tavolo di {res.name}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-brand-olive-medium font-sans font-light">
                            <div className="flex items-center gap-1.5">
                              <CalendarDays className="w-3.5 h-3.5 text-brand-terracotta" /> {res.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-brand-gold" /> {res.time}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-brand-olive-dark" /> {res.guests} Ospiti / Guests
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-brand-olive-medium" /> {res.area}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 self-stretch md:self-auto border-t md:border-t-0 pt-3 md:pt-0 w-full md:w-auto justify-end">
                          <button
                            onClick={() => cancelBooking(res.id)}
                            className="bg-brand-terracotta/5 hover:bg-brand-terracotta/10 text-brand-terracotta border border-brand-terracotta/30 hover:border-brand-terracotta px-4 py-2.5 rounded-sm text-xs font-sans uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                            id={`cancel_btn_${res.id}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Cancel booking
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-[#FAF6EE] rounded border border-dashed border-brand-sand">
                    <CalendarDays className="w-8 h-8 text-brand-gold/50 mx-auto mb-3" />
                    <p className="font-serif italic text-[#1E201B]">No active bookings discovered.</p>
                    <p className="text-[11px] text-brand-olive-medium font-sans font-light mt-1">Book a table to see the confirmation ticket here.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* BOOKING GRID AND ACTIVE VINTAGE SEAT TICKET               */
            /* ========================================================= */
            <motion.div
              key="booking-flow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              
              {/* Seating coordinates and info submit desk */}
              <div className="lg:col-span-7 bg-brand-cream rounded-xl p-6 sm:p-10 border border-brand-olive-light shadow-xl text-left relative">
                
                <div className="absolute top-4 left-4 border-t border-l border-brand-gold/30 w-4 h-4" />
                <div className="absolute top-4 right-4 border-t border-r border-brand-gold/30 w-4 h-4" />

                <div className="mb-8">
                  <h3 className="font-serif text-2xl text-brand-olive-dark font-normal">
                    Secure Table Reservations
                  </h3>
                  <div className="w-10 h-[1.5px] bg-brand-gold mt-2 mb-2" />
                  <p className="text-[11px] text-brand-olive-medium font-light">
                    * Booking takes real-time precedence. Dress code is casually elegant. No credit card required.
                  </p>
                </div>

                <form onSubmit={handleCreateReservation} className="space-y-4 text-xs font-sans">
                  
                  {formError && (
                    <div className="bg-brand-terracotta/5 border border-brand-terracotta/40 text-brand-terracotta px-4 py-3 rounded-sm text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  {/* Booking Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Guest Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="e.g., Matteo Rossi"
                        id="book_name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="matteo@gmail.com"
                        id="book_email"
                      />
                    </div>
                  </div>

                  {/* Booking Phone & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Phone Verification *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="+39 06"
                        id="book_phone"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Target Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium text-brand-charcoal cursor-pointer"
                        id="book_date"
                      />
                    </div>
                  </div>

                  {/* Seat Guests and Seating Slot picker */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Ospiti / Party Size
                      </label>
                      <div className="flex items-center justify-between bg-[#FAF6EE] border border-brand-gold/45 px-3 py-1.5 rounded-sm">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="text-brand-terracotta font-extrabold px-3 py-1.5 text-md hover:bg-brand-cream rounded cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-sans font-bold text-sm text-brand-charcoal">{guests} Guests</span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(20, guests + 1))}
                          className="text-brand-terracotta font-extrabold px-3 py-1.5 text-md hover:bg-brand-cream rounded cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Seating Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta py-2.5 px-3 rounded-sm focus:outline-none w-full font-medium cursor-pointer"
                        id="book_time"
                      >
                        {timesList.map((t) => (
                          <option key={t} value={t}>
                            {t} {parseInt(t) >= 18 ? ' - Dinner' : ' - Lunch Seating'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating Area Interactive card choices */}
                  <div className="space-y-2">
                    <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                      Preferred Seating Atmosphere (Pick One)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {areasList.map((cell) => (
                        <button
                          key={cell.id}
                          type="button"
                          onClick={() => setArea(cell.id)}
                          className={`p-3.5 rounded-sm text-left border cursor-pointer transition-all flex flex-col justify-between ${
                            area === cell.id
                              ? 'bg-[#FAF6EE] border-brand-terracotta shadow bg-gradient-to-tr from-[#FAF6EE] to-brand-olive-light/45 ring-1 ring-brand-terracotta'
                              : 'bg-[#FAF6EE] border-brand-gold/30 hover:border-brand-gold'
                          }`}
                          id={`area_${cell.id.replace(/\s+/g, '')}`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="font-serif font-bold text-[#1E201B] text-xs">
                              {cell.id}
                            </span>
                            {area === cell.id && (
                              <div className="bg-brand-terracotta text-brand-cream rounded-full p-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                          
                          <p className="text-[10px] text-brand-olive-medium font-light mt-1.5 leading-snug">
                            {cell.desc}
                          </p>
                          
                          <div className="flex justify-between items-center mt-3 pt-2 border-t border-brand-sand/50 text-[9px] text-brand-olive-dark">
                            <span>Mood: <strong className="font-serif italic font-semibold">{cell.ambience}</strong></span>
                            <span className="text-brand-terracotta uppercase tracking-wider font-semibold">{cell.cap}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Occasion & Special requests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Special Occasion
                      </label>
                      <input
                        type="text"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="Anniversary, Birthday..."
                        id="book_occasion"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-bold text-brand-charcoal uppercase tracking-wider">
                        Culinary/Dietary Requests
                      </label>
                      <input
                        type="text"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/45 focus:border-brand-terracotta p-3 rounded-sm focus:outline-none w-full font-medium"
                        placeholder="Allergies, high chair wishes..."
                        id="book_requests"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-terracotta hover:bg-brand-terracotta/95 text-brand-cream text-xs uppercase tracking-[0.2em] font-extrabold py-4 rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-4"
                    id="book_submit_btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-brand-gold" /> Assigning Table Slot...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-brand-gold" />
                        <span>Book Traditional Table</span>
                      </>
                    )}
                  </button>

                </form>

              </div>

              {/* Digital Confirmed Receipt Drawer */}
              <div className="lg:col-span-5 space-y-6">
                
                <AnimatePresence mode="wait">
                  {activeReservation ? (
                    
                    /* CONFIRMED RESERVATION PAPER TICKETS DESK */
                    <motion.div
                      key="live-ticket"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-brand-cream border border-brand-gold/60 rounded-xl p-8 relative shadow-2xl space-y-6 overflow-hidden text-left"
                    >
                      {/* Fluted vintage card lines */}
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-terracotta via-brand-gold to-brand-olive-dark" />
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAF6EE] border border-brand-gold rounded-full z-10" />
                      <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#FAF6EE] border border-brand-gold rounded-full z-10" />

                      {/* Header emblem details */}
                      <div className="text-center relative">
                        <span className="text-[10px] text-brand-terracotta uppercase font-bold tracking-[0.3em] font-sans">
                          Tavolo Confermato
                        </span>
                        
                        <h3 className="font-serif italic text-3xl font-normal text-brand-olive-dark mt-1">
                          Trattoria Bellavita
                        </h3>
                        <div className="w-16 h-[1px] bg-brand-gold/60 mx-auto mt-2" />
                        
                        <div className="absolute top-1 right-1 flex items-center gap-1.5 text-brand-gold font-serif">
                          <Ticket className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Ticket core info */}
                      <div className="space-y-4 pt-4 border-t border-brand-sand/50 font-sans text-xs">
                        
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="text-[10px] text-brand-olive-medium uppercase font-semibold">TICKET ID:</span>
                          <span className="font-serif italic font-extrabold text-brand-charcoal tracking-wide bg-brand-gold/15 px-3 py-1 rounded text-sm shrink-0 border border-brand-gold/30">
                            {activeReservation.id}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-brand-olive-medium font-light">Guests Coordinator:</span>
                          <span className="font-serif font-bold text-brand-charcoal text-right">{activeReservation.name}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-brand-olive-medium font-light">Dine Date:</span>
                          <span className="font-medium text-brand-charcoal">{activeReservation.date}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-brand-olive-medium font-light">Seating Hour:</span>
                          <span className="font-bold text-brand-terracotta">{activeReservation.time}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-brand-olive-medium font-light">Party Size:</span>
                          <span className="font-medium text-brand-charcoal">{activeReservation.guests} Ospiti (Guests)</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-brand-olive-medium font-light">Assigned Lounge:</span>
                          <span className="font-serif italic font-semibold text-brand-olive-dark text-right">{activeReservation.area}</span>
                        </div>

                        {activeReservation.occasion && (
                          <div className="flex justify-between">
                            <span className="text-brand-olive-medium font-light">Occasion Spotlight:</span>
                            <span className="font-medium text-brand-gold text-right">{activeReservation.occasion}</span>
                          </div>
                        )}

                        {activeReservation.specialRequests && (
                          <div className="bg-[#FAF6EE] p-3 rounded border border-brand-sand/40 text-[11px] text-brand-olive-dark italic mt-4">
                            <strong className="block text-[9px] font-sans not-italic text-brand-olive-medium uppercase font-bold tracking-wider mb-1">Dietary/Steward Notes:</strong>
                            "{activeReservation.specialRequests}"
                          </div>
                        )}

                      </div>

                      {/* Ticket footer guarantees and cancel button */}
                      <div className="pt-6 border-t border-dashed border-brand-sand/70 space-y-4 text-center">
                        <div className="flex items-center justify-center space-x-2 text-[11px] text-brand-olive-dark font-medium">
                          <ShieldCheck className="w-4 h-4 text-brand-gold" />
                          <span>Seating guaranteed for 15 minutes</span>
                        </div>

                        <p className="text-[10px] text-brand-olive-medium font-light leading-snug max-w-xs mx-auto">
                          We sent this ticket receipt to <strong>{activeReservation.email}</strong>. Please present this voucher upon arrival.
                        </p>

                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => window.print()}
                            className="bg-brand-olive-dark/10 text-brand-olive-dark hover:bg-brand-olive-dark/15 text-[10px] font-sans uppercase font-bold tracking-wider py-2 px-4 rounded-sm transition-colors cursor-pointer border border-brand-olive-dark/20"
                          >
                            Print Ticket
                          </button>
                          
                          <button
                            onClick={() => {
                              cancelBooking(activeReservation.id);
                              setActiveReservation(null);
                            }}
                            className="text-[10px] text-brand-terracotta font-serif font-semibold underline hover:text-brand-terracotta/80 py-2 cursor-pointer"
                          >
                            Cancel reservation
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  ) : (
                    /* EMPTY PRESENCE STATE */
                    <motion.div
                      key="live-ticket-placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-brand-cream/80 border border-brand-sand rounded-xl p-8 text-center relative shadow-sm h-full flex flex-col justify-center items-center py-20"
                    >
                      <Ticket className="w-12 h-12 text-brand-gold/30 mb-4 animate-pulse" />
                      <h4 className="font-serif italic text-[#1E201B] text-lg font-light">No Active Ticket Prepared</h4>
                      <p className="text-[11px] text-brand-olive-medium font-sans font-light max-w-xs mx-auto mt-2 leading-relaxed">
                        Fill out the table parameters and click "Book Traditional Table" on the left to pull your verified digital ticket seat voucher.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
