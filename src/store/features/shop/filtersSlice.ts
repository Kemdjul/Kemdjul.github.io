import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/store/store";

export interface filtersState {
  category: string;
  size: string[];
  color: string[];
  price: number[];
  supplier: string[];
}

const initialState: filtersState = {
  category: "",
  size: [],
  color: [],
  price: [],
  supplier: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      switch (action.payload.filter) {
        case "category":
          if (state.category === action.payload.items) state.category = "";
          else state.category = action.payload.items;
          break;
        case "size":
          state.size = action.payload.items;
          break;
        case "color":
          state.color = action.payload.items;
          break;
        case "price":
          state.price = action.payload.items;
          break;
        case "supplier":
          state.supplier = action.payload.items;
          break;
      }
    },
    toggleFilter: (state, action) => {
      switch (action.payload.filter) {
        case "category":
          if (state.category === action.payload.item) state.category = "";
          else state.category = action.payload.item;
          break;
        case "size":
          if (state.size.includes(action.payload.item)) {
            state.size.push(action.payload.item);
          } else {
            state.size = state.size.filter(
              (value) => value !== action.payload.item
            );
          }
          break;
        case "color":
          if (state.color.includes(action.payload.item)) {
            state.color.push(action.payload.item);
          } else {
            state.color = state.color.filter(
              (value) => value !== action.payload.item
            );
          }
          break;
        case "supplier":
          if (state.supplier.includes(action.payload.item)) {
            state.supplier.push(action.payload.item);
          } else {
            state.supplier = state.supplier.filter(
              (value) => value !== action.payload.item
            );
          }
          break;
      }
    },
    clearAllFilters: (state) => {
      state = initialState;
    },
  },
});

export const selectAllFilters = (state: RootState) => state.filters;
export const selectFilterCategory = (state: RootState) =>
  state.filters.category;
export const selectFilterSize = (state: RootState) => state.filters.size;
export const selectFilterColor = (state: RootState) => state.filters.color;
export const selectFilterPrice = (state: RootState) => state.filters.price;
export const selectFilterSupplier = (state: RootState) =>
  state.filters.supplier;
export const { setFilter, toggleFilter, clearAllFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
