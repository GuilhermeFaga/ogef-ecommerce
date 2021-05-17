import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const counterSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateCart(state, action) {
      state.products = action.payload;
    },
  },
});

export const { updateCart } = counterSlice.actions;
export default counterSlice.reducer;
