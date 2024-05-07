import { create } from "zustand";
import { CartState } from "./types";

export const useStore = create<CartState>((set) => ({
  cart: [], // inicializa o carrinho como um array vazio
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item], // adiciona um novo item ao carrinho
    })),
}));
