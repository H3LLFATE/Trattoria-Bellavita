import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // PASTAS
  {
    id: 'pasta-carbonara',
    name: 'Spaghetti Carbonara (Authentic Style)',
    price: 24,
    ingredients: 'Bronze-die spaghetti, cured crispy pork guanciale, pecorino romano D.O.P, pastured egg yolks, freshly cracked coarse black pepper. Unscrambled, rich, and velvety.',
    category: 'pasta',
    tags: ['Chef Selection'],
    image: '/src/assets/images/dish_carbonara_1781244438724.jpg',
    pairing: 'Pinot Grigio delle Venezie'
  },
  {
    id: 'pasta-bolognese',
    name: 'Tagliatelle alla Bolognese',
    price: 26,
    ingredients: 'Fresh egg tagliatelle, slow-simmered rich beef, veal, and pork ragù, soffritto, tomato reduction, finished with Parmigiano-Reggiano aged 24 months.',
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    pairing: 'Chianti Classico Riserva'
  },
  {
    id: 'pasta-pesto',
    name: 'Trofie al Pesto Genovese',
    price: 22,
    ingredients: 'Traditional ligurian trofie twisted pasta, hand-crushed sweet basil leaves, toasted Italian pine nuts, garlic, pecorino, extra virgin olive oil.',
    category: 'pasta',
    tags: ['Vegetarian', 'Nuts'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
    pairing: 'Pinot Grigio delle Venezie'
  },
  {
    id: 'pasta-ravioli',
    name: 'Ravioli di Ricotta e Spinaci',
    price: 25,
    ingredients: 'House-folded egg ravioli stuffed with sweet cow milk ricotta, organic spinach, brown butter sauce, crispy sage leaves, freshly grated nutmeg.',
    category: 'pasta',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop',
    pairing: 'Prosecco Superiore'
  },

  // PIZZAS
  {
    id: 'pizza-margherita',
    name: 'Margherita D.O.P.',
    price: 19,
    ingredients: 'Crushed San Marzano tomatoes, fresh buffalo mozzarella D.O.P., wild organic sweet basil, extra virgin olive oil drizzle, wood-fired airy crust.',
    category: 'pizza',
    tags: ['Vegetarian', 'Chef Selection'],
    image: '/src/assets/images/dish_margherita_1781244456250.jpg',
    pairing: 'Prosecco Superiore'
  },
  {
    id: 'pizza-prosciutto',
    name: 'Prosciutto e Funghi',
    price: 23,
    ingredients: 'San Marzano tomato base, fresh fior di latte mozzarella, roasted cremini woodland mushrooms, thinly sliced 18-month Prosciutto di Parma, fresh oregano.',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1541745711172-6df17e2576fda?q=80&w=800&auto=format&fit=crop',
    pairing: 'Chianti Classico Riserva'
  },
  {
    id: 'pizza-formaggi',
    name: 'Quattro Formaggi Bianca',
    price: 22,
    ingredients: 'Artisanal white pizza: premium gorgonzola dolce D.O.P, sweet fontina, creamy cow ricotta, aged Parmigiano-Reggiano, hint of aromatic wild honey.',
    category: 'pizza',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    pairing: 'Prosecco Superiore'
  },

  // MAIN COURSES
  {
    id: 'main-ossobuco',
    name: 'Osso Buco alla Milanese',
    price: 42,
    ingredients: 'Braised tender cross-cut veal shanks simmered in white wine and rich meat broth, served over saffron-infused Risotto alla Milanese, sprinkled with fresh lemon citrus gremolata.',
    category: 'main',
    tags: ['Chef Selection'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    pairing: 'Chianti Classico Riserva'
  },
  {
    id: 'main-parmigiana',
    name: 'Chicken Parmigiana Classica',
    price: 32,
    ingredients: 'Crispy herb-breaded pasture chicken breast topped with marinara sauce, melted buffalo mozzarella, parmigiano, served with a side of nest spaghettini.',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8cdca3e8?q=80&w=800&auto=format&fit=crop',
    pairing: 'Chianti Classico Riserva'
  },
  {
    id: 'main-seabass',
    name: 'Grilled Mediterranean Sea Bass',
    price: 38,
    ingredients: 'Wild Branzino fillet pan-seared with infused garlic oil, oven-roasted heirloom cherry tomatoes, Sicilian capers, kalamata olives, steamed wild asparagus.',
    category: 'main',
    tags: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    pairing: 'Pinot Grigio delle Venezie'
  },

  // DESSERTS
  {
    id: 'dessert-tiramisu',
    name: 'Tiramisu Tradizionale',
    price: 12,
    ingredients: 'Espresso-soaked Italian savoiardi ladyfingers layered with rich whipped mascarpone cream, dark rum essence, dusted cocoa powder.',
    category: 'dessert',
    tags: ['Vegetarian', 'Chef Selection'],
    image: '/src/assets/images/dish_tiramisu_1781244470922.jpg',
    pairing: 'Affogato al Caffè'
  },
  {
    id: 'dessert-pannacotta',
    name: 'Vanilla Bean Panna Cotta',
    price: 11,
    ingredients: 'Silky cooked double cream infused with organic Madagascar vanilla bean, finished with a tart raspberry wild berry coulis reduction, fresh mint.',
    category: 'dessert',
    tags: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop',
    pairing: 'Prosecco Superiore'
  },
  {
    id: 'dessert-cannoli',
    name: 'Cannoli Siciliani Artigianali',
    price: 10,
    ingredients: 'Crisp pastry shells filled with sweet sheep milk ricotta, bittersweet dark chocolate chips, candied orange peel, rolled in crushed Sicilian pistachios.',
    category: 'dessert',
    tags: ['Vegetarian', 'Nuts'],
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    pairing: 'Espresso Romano'
  },

  // WINES
  {
    id: 'wine-chianti',
    name: 'Chianti Classico Riserva D.O.C.G.',
    price: 16,
    ingredients: 'Dry, full-bodied Tuscan red wine with deep wild cherry, leather, and aromatic cedar notes. Aged 24 months in oak casks.',
    category: 'wine',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'wine-prosecco',
    name: 'Prosecco Superiore di Valdobbiadene D.O.C.G.',
    price: 14,
    ingredients: 'Lively, crisp sparkling white wine from Veneto. Expresses notes of green apple, white peach flora, and fine persistent perlage.',
    category: 'wine',
    tags: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'wine-pinot',
    name: 'Pinot Grigio delle Venezie D.O.C.',
    price: 13,
    ingredients: 'Elegant, light-bodied Italian white wine. Expresses straw yellow hues with dry, crisp mineral elements and light pear zest.',
    category: 'wine',
    tags: ['Gluten-Free']
  },

  // COFFEE
  {
    id: 'coffee-espresso',
    name: 'Espresso Napoletano',
    price: 4,
    ingredients: 'Traditional intense dark roast pull, thick hazelnut crema, served with a complimentary glass of sparkling water cleansing palate.',
    category: 'coffee',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Free']
  },
  {
    id: 'coffee-cappuccino',
    name: 'Cappuccino Classico',
    price: 5.5,
    ingredients: 'Perfect equal parts of standard espresso, hot steamed organic milk, and rich thick milk foam, dusted with biological cocoa peel shavings.',
    category: 'coffee',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 'coffee-affogato',
    name: 'Affogato al Caffè',
    price: 8,
    ingredients: 'Bespoke Madagascar vanilla bean gelato drowning in a boiling shot of dark, freshly pulled house espresso blend, served in chilled glass.',
    category: 'coffee',
    tags: ['Vegetarian', 'Gluten-Free']
  }
];

export const STORIES = {
  header: 'An Authentic Culinary Legacy',
  philosophy: 'Our culinary philosophy is rooted in simple, high-quality, seasonal ingredients. Guided by ancestral wisdom and refined in our hearth, we deliver memories wrapped in olive oil and aged parmigiano.',
  paragraphs: [
    'Trattoria Bellavita was born in the heart of Rome in 1974, initially as a small, bustling bread bakery managed by the Bellavita family. For three generations, we have carried the fiery passion of authentic Italian cooking across continents. We pride ourselves on crafting our pasta dough fresh daily—mixing premium semolina with organic pasture eggs by hand, just as Nonna Beatrice taught us.',
    'In our modern home, we seamlessly weave Italian history with contemporary dining standards. Every ingredient tells a story: our wild olives are picked in Liguria, San Marzano tomatoes harvested directly under Mount Vesuvius slopes, and our organic wheat sourced from ancient Sicilian plains. Welcome to our table, where every dining guest is embraced as beloved family.'
  ]
};

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Eleonora Rossi',
    rating: 5,
    text: 'The Spaghetti Carbonara brought me immediately back to my childhood years in Trastevere. The sauce is flawlessly emulsified and the guanciale boasts the perfect crisp. Bellissimo atmosphere!'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    rating: 5,
    text: 'Stunning rustic dining hall. The wine cellar provides an intimate feel that is hard to find in modern sterile restaurants. The Grilled Sea Bass was incredibly flaky and fresh.'
  },
  {
    id: 'rev-3',
    author: 'Chef Giovanni Pincente',
    rating: 5,
    text: 'An outstanding dedication to the Neapolitan pizza art. The leopard spotting crust, the perfect acidity in the marinara, and fresh D.O.P. buffalo mozzarella. Highly recommended.'
  }
];

export const PRIVATE_EVENTS = {
  title: 'Unforgettable Private Celebrations',
  tagline: 'Host your special occasions inside our medieval stone vaults or our enclosed botanical terrace.',
  description: 'Whether planning a romantic candlelit wedding reception, a premium corporate banquet, or an intimate birthday gathering, Trattoria Bellavita provides bespoke custom menus, dedicated somatic sommeliers, and flawless rustic decor.',
  image: '/src/assets/images/event_cellar_1781244485067.jpg',
  amenities: [
    'Custom multi-course pairing menu tailored by our Executive Chef',
    'Private access to our ancient stone fireplace and vintage rustic wine cellar',
    'Full acoustic arrangements, micro-sound integration, and warm lighting setups',
    'Somatic sommelier curation with high-end Italian wine pairings for each plate'
  ]
};
