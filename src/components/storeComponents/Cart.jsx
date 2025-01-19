import { useId, useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { CartIcon } from "../Icons";
import "./Cart.css";
//import { CartContext } from './cartContext'

export default function Cart() {
  const idCart = useId();
  const { cart, clearCart } = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const restTotalCart = () => {
      const totales = cart.map((element) => element.precio * element.quantity);
      if (cart.length > 0) {
        const newTotal = totales.reduce((n1, n2) => n1 + n2, 0);
        console.log(newTotal);
        setTotalCart(newTotal);
      } else {
        setTotalCart(0)
      }
    };
    restTotalCart();
  }, [cart]);

  return (
    <>
      <label htmlFor={idCart} className="cartBtn"><CartIcon className='iconCart' /></label>
      <input
        type="checkbox"
        id={idCart}
        className="cartCheckBox"
        hidden
        defaultChecked
      />
      <aside className="cartAside">
        <ul>
          {cart.map((product) => (
            <li className="cartItem" key={product.id}>
              <strong>{product.nombre}</strong>
              <span className="cartItem-price">${product.precio}</span>
              <div className="cartQtyContainer">
                <span>cant {product.quantity}</span>
              </div>
            </li>
          ))}
        </ul>
        <footer className="cartFooter">
          <span className="totalCart">TOTAL ${totalCart}</span>
          <button className="cartAside-cleanBtn" onClick={clearCart}>
            Limpiar carrito
          </button>
        </footer>
      </aside>
    </>
  );
}
