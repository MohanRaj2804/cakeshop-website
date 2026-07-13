export interface CartItem {
  id: string;
  cakeId: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  note?: string;
  badge?: string;
}

const CART_KEY = 'cakeshop_cart';

export const getCart = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse cart from localStorage', error);
    return [];
  }
};

export const saveCart = (items: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addCartItem = (item: CartItem): CartItem[] => {
  const cart = getCart();
  const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id && cartItem.size === item.size);

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  return cart;
};

export const removeCartItem = (id: string): CartItem[] => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  return cart;
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};
