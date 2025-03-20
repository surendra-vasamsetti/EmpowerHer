import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.qty;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;