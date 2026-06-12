import { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Wine, Coffee, Flame, Heart, Sparkles, Check, HelpCircle, UtensilsCrossed, Wheat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'pasta' | 'pizza' | 'main' | 'dessert' | 'wine' | 'coffee'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  
  // Interactive wine pairing tool state
  const [pairingDishId, setPairingDishId] = useState<string>('pasta-carbonara');

  // Filter menu items by categories and dietary preferences
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesDiet = true;
      if (selectedDiet !== 'all') {
        matchesDiet = item.tags?.includes(selectedDiet as any) || false;
      }
      return matchesCategory && matchesQuery && matchesDiet;
    });
  }, [activeTab, searchQuery, selectedDiet]);

  // Find currently selected pairing details
  const currentPairingInfo = useMemo(() => {
    const dish = MENU_ITEMS.find(i => i.id === pairingDishId);
    if (!dish) return null;
    
    // Find matching wine
    const wine = MENU_ITEMS.find(i => i.name.includes(dish.pairing || ''));
    return {
      dish,
      wine: wine || MENU_ITEMS.find(i => i.id === 'wine-chianti')
    };
  }, [pairingDishId]);

  const categories = [
    { id: 'all', label: 'Tutto', subtitle: 'Full Menu', icon: UtensilsCrossed },
    { id: 'pasta', label: 'Pasta Fresca', subtitle: 'Handmade Pasta', icon: Wheat },
    { id: 'pizza', label: 'Le Pizze', subtitle: 'Stone Ovens', icon: Flame },
    { id: 'main', label: 'I Secondi', subtitle: 'Mains & Seafood', icon: Flame },
    { id: 'dessert', label: 'I Dolci', subtitle: 'Desserts', icon: Heart },
    { id: 'wine', label: 'La Cantina', subtitle: 'Selected Wines', icon: Wine },
    { id: 'coffee', label: 'Il Caffè', subtitle: 'Italian Roast', icon: Coffee }
  ];

  // Pick some pasta and mains to select from in the pairing widget
  const pairableDishes = useMemo(() => {
    return MENU_ITEMS.filter(item => ['pasta', 'pizza', 'main', 'dessert'].includes(item.category));
  }, []);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-brand-olive-light/50 border-t border-b border-brand-olive-light relative">
      
      {/* Dynamic graphic accents */}
      <div className="absolute top-1/4 left-5 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-5 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-terracotta font-serif text-sm uppercase tracking-[0.25em] font-medium block mb-2">
            La Nostra Cucina
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl text-brand-charcoal tracking-tight font-light leading-tight">
            Our Culinary Selections
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="font-sans text-brand-olive-medium text-xs sm:text-sm font-light leading-relaxed">
            Every dish is formed around core heirloom traditions, featuring our fresh house-rolled dough, local herbs, and slow, wood-fired finishes.
          </p>
        </div>

        {/* 1. SECTOR ONE: SIGNATURE HIGHLIGHTS WITH GENERATED IMAGES */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-8">
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-brand-charcoal">
              Capolavori di Nonna — Selected Signatures
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Signature 1: Carbonara */}
            {MENU_ITEMS.filter(item => item.id === 'pasta-carbonara').map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-brand-cream border border-brand-sand/45 rounded-lg overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-brand-charcoal group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-cream text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-md">
                    Signature Dish
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-brand-terracotta font-serif text-lg font-bold ml-2">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-brand-olive-medium font-light font-sans leading-relaxed mb-4">
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-olive-light/40 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-brand-terracotta bg-brand-terracotta/5 px-2.5 py-1 rounded-sm font-medium">
                      Classic Roman
                    </span>
                    <span className="text-brand-olive-medium shrink-0 italic flex items-center gap-1">
                      <Wine className="w-3.5 h-3.5 text-brand-gold" /> Pairing: Pinot Grigio
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Signature 2: Margherita */}
            {MENU_ITEMS.filter(item => item.id === 'pizza-margherita').map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-brand-cream border border-brand-sand/45 rounded-lg overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-brand-charcoal group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-cream text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-md">
                    Signature Dish
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-brand-terracotta font-serif text-lg font-bold ml-2">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-brand-olive-medium font-light font-sans leading-relaxed mb-4">
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-olive-light/40 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-brand-terracotta bg-brand-terracotta/5 px-2.5 py-1 rounded-sm font-medium">
                      Napoli Authentic
                    </span>
                    <span className="text-brand-olive-medium shrink-0 italic flex items-center gap-1">
                      <Wine className="w-3.5 h-3.5 text-brand-gold" /> Pairing: Prosecco
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Signature 3: Tiramisu */}
            {MENU_ITEMS.filter(item => item.id === 'dessert-tiramisu').map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                className="bg-brand-cream border border-brand-sand/45 rounded-lg overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-brand-charcoal group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover_style object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-brand-gold text-brand-cream text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-md">
                    Signature Dish
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-brand-terracotta font-serif text-lg font-bold ml-2">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-brand-olive-medium font-light font-sans leading-relaxed mb-4">
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-olive-light/40 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-brand-terracotta bg-brand-terracotta/5 px-2.5 py-1 rounded-sm font-medium">
                      Dolce Classico
                    </span>
                    <span className="text-brand-olive-medium shrink-0 italic flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5 text-brand-gold" /> Pairing: Affogato
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SECTOR TWO: THE FULL TABBED ROSTER */}
        <div className="bg-brand-cream rounded-xl p-6 sm:p-10 shadow-lg border border-brand-olive-light mb-24">
          
          {/* Controls: Category selection, search & dietary filtering */}
          <div className="space-y-8 mb-12">
            
            {/* Search and dietary tags filter */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-brand-olive-light">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Cerca... Search ingredients or dishes (e.g. Pasta, Truffle)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF6EE] text-brand-charcoal border border-brand-gold/40 focus:border-brand-terracotta px-4 py-3 rounded-sm text-xs font-sans placeholder-brand-olive-medium/60 focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-all"
                  id="menu_search_input"
                />
              </div>

              {/* Dietary quick toggles */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-brand-olive-medium uppercase tracking-wider font-semibold mr-1">Diet:</span>
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'Vegetarian', label: 'Vegetariano' },
                  { id: 'Gluten-Free', label: 'Senza Glutine' },
                  { id: 'Vegan', label: 'Vegano' },
                  { id: 'Nuts', label: 'Contains Nuts' }
                ].map((diet) => (
                  <button
                    key={diet.id}
                    onClick={() => setSelectedDiet(diet.id)}
                    className={`px-3 py-1.5 rounded-sm text-[10px] font-sans uppercase tracking-wider transition-all cursor-pointer border ${
                      selectedDiet === diet.id
                        ? 'bg-brand-olive-dark text-brand-cream border-brand-olive-dark font-medium shadow'
                        : 'bg-[#FAF6EE] text-brand-olive-medium border-brand-olive-light/80 hover:border-brand-olive-medium/50'
                    }`}
                    id={`menu_diet_${diet.id}`}
                  >
                    {diet.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories tab pills layout */}
            <div className="flex overflow-x-auto pb-2 scrollbar-none scroll-smooth">
              <div className="flex space-x-2 w-max mx-auto md:mx-0">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id as any)}
                      className={`px-5 py-3.5 rounded-sm transition-all text-left flex items-center space-x-3 cursor-pointer border min-w-[130px] ${
                        activeTab === cat.id
                          ? 'bg-[#FAF6EE] border-brand-gold bg-gradient-to-br from-[#FAF6EE] to-[#FAF6EE]/90 shadow-sm pr-8'
                          : 'bg-transparent border-transparent hover:bg-brand-olive-light/30'
                      }`}
                      id={`menu_tab_${cat.id}`}
                    >
                      <div className={`p-2 rounded-full ${activeTab === cat.id ? 'bg-brand-terracotta text-brand-cream' : 'bg-[#FAF6EE] text-brand-olive-medium'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`block text-xs uppercase tracking-wider font-semibold ${activeTab === cat.id ? 'text-brand-terracotta' : 'text-brand-charcoal'}`}>
                          {cat.label}
                        </span>
                        <span className="block text-[9px] text-brand-olive-medium uppercase font-light">
                          {cat.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Core Menu Grid */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                <motion.div
                  key={`${activeTab}-${searchQuery}-${selectedDiet}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                >
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="group flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-sm hover:bg-brand-olive-light/20 transition-all duration-300 border-b border-brand-olive-light/25 last:border-b-0"
                    >
                      {/* Dish Thumbnail image (if present) */}
                      {item.image && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden bg-brand-olive-light shrink-0 border border-brand-sand shadow-inner self-stretch sm:self-auto">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      <div className="flex-grow w-full">
                        {/* Title and Price */}
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-serif text-md sm:text-lg font-bold text-brand-charcoal group-hover:text-brand-terracotta transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-brand-terracotta font-serif font-semibold text-md ml-3">
                            €{item.price}
                          </span>
                        </div>

                        {/* Ingredients */}
                        <p className="font-sans text-xs text-brand-olive-medium font-light leading-relaxed mb-3 pr-2">
                          {item.ingredients}
                        </p>

                        {/* Tags and Pairings details */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] px-2 py-0.5 rounded-sm bg-brand-olive-medium/10 text-brand-olive-dark font-medium uppercase font-sans tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                          
                          {item.pairing && (
                            <span className="text-[9px] px-2 py-0.5 rounded-sm bg-brand-gold/10 text-brand-gold font-medium uppercase font-sans tracking-wide italic flex items-center gap-1">
                              <Wine className="w-2.5 h-2.5" /> Pairing: {item.pairing}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-20 text-brand-olive-medium">
                  <UtensilsCrossed className="w-8 h-8 text-brand-gold/40 mx-auto mb-4" />
                  <p className="font-serif italic text-lg">Nessun piatto trovato.</p>
                  <p className="text-xs font-sans font-light mt-1">Try tweaking your filters or search keywords.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* 3. SECTOR THREE: INTERACTIVE SOMMELIER WINE PAIRING ASSISTANT */}
        <div className="bg-[#FAF6EE] rounded-xl border border-brand-gold/45 p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row gap-10 items-center shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF6EE] border-b border-l border-brand-gold/20 transform rotate-45 translate-x-16 -translate-y-16 hidden lg:block" />
          
          <div className="lg:w-7/12 space-y-5">
            <span className="inline-flex items-center space-x-1 text-brand-gold font-serif text-sm uppercase tracking-widest font-bold">
              <Wine className="w-4 h-4" /> <span>Il Sommelier Consiglia / Cellar Helper</span>
            </span>
            
            <h3 className="font-serif text-2.5xl sm:text-4.5xl text-brand-olive-dark font-light leading-tight">
              Interactive Wine Pairing
            </h3>
            
            <p className="text-xs sm:text-sm text-brand-olive-medium font-light leading-relaxed">
              Italian gastronomy is incomplete without the poetry of native grapes. Select any gourmet plate below and our cellar master, Matteo, will instantly pull open and pair the perfect complementary Italian vintage.
            </p>

            {/* Plate Selection Dropdown */}
            <div className="space-y-2 pt-2">
              <label className="block text-[10px] uppercase font-bold tracking-wider font-sans text-brand-charcoal">
                Select Your Desired Dish:
              </label>
              <select
                value={pairingDishId}
                onChange={(e) => setPairingDishId(e.target.value)}
                className="bg-brand-cream text-sm text-brand-charcoal border border-brand-gold py-2.5 px-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-terracotta w-full sm:max-w-md font-serif font-medium cursor-pointer"
                id="sommelier_dish_select"
              >
                {pairableDishes.map((dish) => (
                  <option key={dish.id} value={dish.id}>
                    {dish.name} (€{dish.price})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sommelier Pairing Outcome Display Card */}
          <div className="lg:w-5/12 w-full bg-brand-cream p-6 rounded-lg border border-brand-sand/50 shadow relative flex flex-col justify-between">
            <div className="absolute top-3 right-3 text-[10px] text-brand-gold font-sans uppercase tracking-[0.1em] font-semibold border border-brand-gold/30 px-2 py-0.5 rounded-sm">
              Premium Match
            </div>

            <div className="text-left space-y-4">
              <span className="text-[10px] text-brand-olive-medium font-sans uppercase tracking-wider font-bold">Recommended Vintage</span>
              
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-brand-olive-dark leading-tight pr-12">
                  {currentPairingInfo?.wine?.name}
                </h4>
                <p className="text-[11px] text-brand-terracotta font-sans font-semibold mt-1">
                  Sommelier Cellar Rating: 94 PTS Robert Parker
                </p>
              </div>

              <div className="w-full h-[1px] bg-brand-olive-light/50" />

              <p className="text-xs text-brand-charcoal/80 italic font-serif leading-relaxed font-light">
                "{currentPairingInfo?.wine?.ingredients || 'An ancient classic.'}"
              </p>

              <div className="bg-[#FAF6EE] p-3 rounded-sm border border-brand-sand flex items-center justify-between text-xs">
                <span className="font-sans text-brand-olive-medium font-light">Add glass to order:</span>
                <span className="font-serif font-bold text-brand-terracotta text-sm">€{currentPairingInfo?.wine?.price || 15}</span>
              </div>
            </div>

            <p className="text-[10px] text-brand-olive-medium text-center italic mt-4 font-sans font-light">
              "Il vino fa buon sangue — wine makes good blood."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
