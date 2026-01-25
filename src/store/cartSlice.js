import { createSlice } from "@reduxjs/toolkit";

const cartItems = [
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
    items: cartItems,
    quantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      //addition of the items
    },
    removeItem: (state, action) => {
      //removal of the item
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
