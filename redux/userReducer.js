import { createSlice } from "@reduxjs/toolkit";

const initialState = { visitorId: null };

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setVisitorId(state, action) {
      state.visitorId = action.payload;
    },
  },
});

export const { setVisitorId } = counterSlice.actions;
export default counterSlice.reducer;
