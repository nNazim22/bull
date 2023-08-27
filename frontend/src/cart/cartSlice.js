import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      const item = state.cart.find(
        (item) => item.itemId === action.payload.itemId
      );

      if (item) {
        // console.log("kayen deja");
        toast.warning("Le produit existe deja");
      } else {
        state.cart.push(action.payload);
        toast.success("Produit ajouter au panier");
      }
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.itemId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.itemId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
  },
});

export const { addItem, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
