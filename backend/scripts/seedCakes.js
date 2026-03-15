import dotenv from 'dotenv';
import connectDB from '../config/DB.js';
import Cake from '../models/Cake.js';

dotenv.config();

const cakes = [
  {
    title: 'Chocolate Fudge Cake',
    description: 'Rich and moist chocolate fudge cake topped with chocolate ganache.',
    image: null,
    priceVariants: [
      { label: '500g', price: 499 },
      { label: '1kg', price: 899 }
    ]
  },
  {
    title: 'Strawberry Cream Cake',
    description: 'Light sponge layered with fresh strawberries and whipped cream.',
    image: null,
    priceVariants: [
      { label: '500g', price: 549 },
      { label: '1kg', price: 999 }
    ]
  },
  {
    title: 'Red Velvet Cake',
    description: 'Classic red velvet with cream cheese frosting.',
    image: null,
    priceVariants: [
      { label: '500g', price: 599 },
      { label: '1kg', price: 1099 }
    ]
  },
  {
    title: 'Black Forest Cake',
    description: 'Chocolate sponge with cherries and whipped cream.',
    image: null,
    priceVariants: [
      { label: '500g', price: 649 },
      { label: '1kg', price: 1199 }
    ]
  },
  {
    title: 'Rainbow Celebration Cake',
    description: 'Vibrant layers of rainbow sponge with buttercream.',
    image: null,
    priceVariants: [
      { label: '1kg', price: 1299 },
      { label: '2kg', price: 2399 }
    ]
  },
  {
    title: 'Cookies Cream Cake',
    description: 'Creamy cookies and cream layered delight.',
    image: null,
    priceVariants: [
      { label: '500g', price: 499 },
      { label: '1kg', price: 949 }
    ]
  },
  {
    title: 'ChocoBerry Lava Dome',
    description: 'Molten chocolate centre with tangy berry compote.',
    image: null,
    priceVariants: [
      { label: 'Individual Dome', price: 799 }
    ]
  }
];

const seed = async () => {
  try {
    await connectDB();
    console.log('Clearing existing cakes...');
    await Cake.deleteMany({});
    console.log('Inserting seed cakes...');
    await Cake.insertMany(cakes);
    console.log('Seeding complete.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();
