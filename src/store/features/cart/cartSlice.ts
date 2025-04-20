import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/store/store";
import { Product } from "~/types/products";

export interface CartState {
  items: Product[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const itemInCartIndex = state.items.findIndex(
        (item: Product) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (itemInCartIndex === -1) {
        state.items.push({ ...action.payload, amount: 1 });
      } else {
        if (state.items[itemInCartIndex].quantity)
          state.items[itemInCartIndex].quantity++;
      }

      state.totalPrice += Number(
        action.payload.priceRange.minVariantPrice.amount
      );
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item: Product) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      state.totalPrice -=
        Number(state.items[itemIndex].priceRange?.minVariantPrice?.amount) *
        (state.items[itemIndex].quantity ?? 1);

      state.items.splice(itemIndex, 1);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.totalPrice;
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
