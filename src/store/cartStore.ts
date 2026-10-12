import { create } from "zustand";
import type { CartItem } from "../types";

interface CartStore {
  items: CartItem[];
  addItem: (carId: string) => void;
  removeItem: (carId: string) => void;
  clearCart: () => void;
  isInCart: (carId: string) => boolean;
  getTotal: () => number;
  getDeposit: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (carId: string) => {
    set((state) => {
      if (state.items.find((item) => item.carId === carId)) {
        return state; // Already in cart
      }
      return {
        items: [
          ...state.items,
          { carId, quantity: 1, addedAt: new Date().toISOString() },
        ],
      };
    });
  },

  removeItem: (carId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.carId !== carId),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  isInCart: (carId: string) => {
    return get().items.some((item) => item.carId === carId);
  },

  getTotal: () => {
    // This would need access to car data - we'll compute it in components
    return 0;
  },

  getDeposit: () => {
    return get().getTotal() * 0.10;
  },

  getItemCount: () => {
    return get().items.length;
  },
}));
