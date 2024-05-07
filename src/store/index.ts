import { create } from "zustand";
import { CartState } from "./types";
import { filter, map, some } from "lodash";

export const useStore = create<CartState>((set) => ({
  cart: [], // inicializa o carrinho como um array vazio
  addToCart: (item) =>
    set((state) => {
      // Verifica se o item já está no carrinho usando o ID
      // const itemExists = state.cart.some(cartItem => cartItem.id === item.id);
      const itemExists = some(
        state.cart,
        (cartItem) => cartItem.id === item.id
      );
      if (!itemExists) {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
      return state;
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cart: filter(state.cart, (item) => item.id !== itemId),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      cart: map(state.cart, (item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    })),
  clearCart: () => set({ cart: [] }),
}));
