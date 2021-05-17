import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    open: false,
  },
};

const counterSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCart(state) {
      state.cart.open = true;
    },
    closeCart(state) {
      state.cart.open = false;
    },
    switchCart(state) {
      state.cart.open = !state.cart.open;
    },
  },
});

export const { openCart, closeCart, switchCart } = counterSlice.actions;
export default counterSlice.reducer;
