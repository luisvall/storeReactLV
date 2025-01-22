import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function useCartHook() {
  const { cart } = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const restTotalCart = () => {
      const totales = cart.map((element) => element.precio * element.quantity);
      if (cart.length > 0) {
        const newTotal = totales.reduce((n1, n2) => n1 + n2, 0);
        setTotalCart(newTotal);
      } else {
        setTotalCart(0);
      }
    };
    restTotalCart();
  }, [cart]);
  return totalCart;
}

export const reduce = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      )
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      } else {
        const product = { ...actionPayload, quantity: 1 };
        return [...state, product];
      }
    }

    case "CLEAN_CART": {
      return [];
    }

    case "DLT_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      )
      if (actionPayload.quantity > 1){
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity -= 1;
        console.log(state)
        return newCart;
      } else {
        const newCartToDelete = state.filter(
          (item) => item.id !== actionPayload.id
        );
        console.log(state)
        return newCartToDelete;
      }
    }
    default:
      return state;
  }
};
