import { createContext, useState } from "react";

export const CartContext = createContext();

const initialState = [];
const reduce = (state, action) => {
  switch (action.type) {
    case "add_to_cart": {
      console.log("Agregando");
    }
    case "remove_to_cart": {
      console.log("Eliminando");
    }
    case 'clean_cart': {
      console.log('Limpiando')
    }
  }
};

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
    const porductToDelete = cart.findIndex((item) => item.id === product.id);
    const newCartToDelete = structuredClone(cart);

    if (product.quantity > 1) {
      newCartToDelete[porductToDelete].quantity--;
      setCart(newCartToDelete);
    } else {
      newCartToDelete.splice(porductToDelete, 1);
      setCart(newCartToDelete);
    }
  };

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
