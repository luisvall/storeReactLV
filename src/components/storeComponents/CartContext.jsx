import { createContext, useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const DtlProduct = (product) => {
    const porductToDelete = cart.findIndex((item) => item.id === product.id)
    const newCartToDelete = structuredClone(cart)

    console.log(newCartToDelete[porductToDelete])
    if (product.quantity > 1){
      newCartToDelete[porductToDelete].quantity--;
      setCart(newCartToDelete)
    } else {
      newCartToDelete.splice(porductToDelete,1)
      setCart(newCartToDelete)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        clearCart,
        DtlProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
