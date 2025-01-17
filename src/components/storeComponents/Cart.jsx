import { useId, useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";
//import { CartContext } from './cartContext'

export default function Cart() {
  const idCart = useId();
  const { cart, clearCart } = useContext(CartContext);

  return (
    <>
      <label htmlFor={idCart} className="cartBtn"></label>
      <input type="checkbox" id={idCart} className="cartCheckBox" hidden defaultChecked/>
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
        <button className="cartAside-cleanBtn" onClick={clearCart}>Limpiar carrito</button>
      </aside>
    </>
  );
}
