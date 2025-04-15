import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import filtersReducer from "./features/shop/filtersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      filters: filtersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
