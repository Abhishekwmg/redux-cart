import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = [
  {
    id: 1,
    title: "iPhone 18 Pro Max",
    price: "$999.69",
    description: "The New iPhone 18 Prox Max is Wow!",
  },
  {
    id: 2,
    title: "Microsoft Windows 11",
    price: "$199.9",
    description: "Windows 11 is just the next-big-thing in the industry:)",
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: initialCartItems,
    quantity: 0,
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find((item) => {
        item.id === action.payload.id;
      });

      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.quantity--;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
