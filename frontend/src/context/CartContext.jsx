import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";

import cartSlice from "../cart/cartSlice";
const CartContext = createContext();

export default function CartProvider({ children }) {
  const dispatch = useDispatch();

  const [openCart, isOpenCart] = useState(false);
  return (
    <CartContext.Provider value={{ openCart, isOpenCart, cartSlice, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("ciitesContext was use outside the citiesProvider");
  return context;
}

export { CartProvider, useCart };
