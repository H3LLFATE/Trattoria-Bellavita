export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  category: 'pasta' | 'pizza' | 'main' | 'dessert' | 'wine' | 'coffee';
  tags?: ('Vegetarian' | 'Gluten-Free' | 'Vegan' | 'Chef Selection' | 'Nuts' | 'Spicy')[];
  image?: string;
  pairing?: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'Main Dining Room' | 'Cozy Fireside Alcove' | 'Garden Terrace (Outdoor)' | 'Chef\'s Tapestry Table';
  occasion?: string;
  specialRequests?: string;
  createdAt: string;
}

export interface WinePairingSolution {
  dishId: string;
  dishName: string;
  wineName: string;
  wineDescription: string;
  winePrice: number;
}
