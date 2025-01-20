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

  return totalCart
}
