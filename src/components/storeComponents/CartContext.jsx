import { createContext, useReducer, useState } from "react";
import { reduce } from "./CartHook";

export const CartContext = createContext();

export function CartProvider({ children }) {
 const [state, dispatch] = useReducer(reduce, [])

 const addCart = product => dispatch({type:"ADD_TO_CART", payload: product});
 const clearCart = () => dispatch({type:"CLEAN_CART"});
 const DtlProduct = product => dispatch({type:"DLT_TO_CART", payload: product});
 
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addCart,
        clearCart,
        DtlProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
