import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/store/store";

export interface CartState {
  items: any;
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
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (itemInCartIndex === -1) {
        state.items.push({ ...action.payload, amount: 1 });
      } else {
        state.items[itemInCartIndex].amount++;
      }

      state.totalPrice += Number(
        action.payload.priceRange.minVariantPrice.amount
      );
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      state.totalPrice -=
        Number(state.items[itemIndex].priceRange.minVariantPrice.amount) *
        state.items[itemIndex].amount;

      state.items.splice(itemIndex, 1);
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.totalPrice;
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
