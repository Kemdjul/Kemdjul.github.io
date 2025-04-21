import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "~/store/store";
import { Cart, CartEdge } from "~/types/cart";

/* interface FetchProductsFromShopifyProps {
  endpoint: string;
  token: string;
  cartId: string;
}

export const fetchProductsFromShopify = createAsyncThunk(
  "cart/fetchProducts",
  async ({ endpoint, token, cartId }: FetchProductsFromShopifyProps) => {
    const response = await retrieveCart(endpoint, token, cartId);
    return response;
  }
); */

const initialState: Cart = {
  id: "",
  lines: {},
  cost: {
    subtotalAmount: { amount: "0.00", currencyCode: "EUR" },
    totalAmount: { amount: "0.00", currencyCode: "EUR" },
  },
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const productInCartIndex = state.lines.edges?.findIndex(
        (edge: CartEdge) => edge.node.id === action.payload.id
      );

      if (
        productInCartIndex === -1 ||
        productInCartIndex === undefined ||
        !state.lines.edges
      ) {
        state.lines.edges?.push(action.payload);
      } else {
        if (state.lines.edges[productInCartIndex].node.quantity)
          state.lines.edges[productInCartIndex].node.quantity++;
      }

      state.cost.totalAmount.amount = (
        parseFloat(state.cost.totalAmount.amount) +
        parseFloat(action.payload.node.cost.totalAmount.amount)
      ).toString();
    },
    removeItem: (state, action) => {
      const edgeIndex = state.lines.edges?.findIndex(
        (edge: CartEdge) => edge.node.id === action.payload.node.id
      );
      if (edgeIndex === -1 || edgeIndex === undefined || !state.lines.edges)
        return;

      state.cost.totalAmount.amount = (
        parseFloat(state.cost?.totalAmount?.amount ?? "") -
        parseFloat(
          state.lines.edges[edgeIndex].node.cost?.totalAmount?.amount ?? ""
        )
      ).toString();

      state.lines.edges?.splice(edgeIndex, 1);
    },
    setCart: (state, action) => {
      state.id = action.payload.id;
      state.cost = action.payload.cost;
      state.createdAt = action.payload.createdAt;
      state.lines = action.payload.lines;
      state.totalQuantity = action.payload.totalQuantity;
      state.updatedAt = action.payload.updatedAt;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const { addItem, removeItem, setCart } = cartSlice.actions;

export default cartSlice.reducer;
