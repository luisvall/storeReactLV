import { useId, useContext } from "react";
import { CartContext } from "./CartContext";
import { useCartHook } from "./CartHook";
import { CartIcon, TrashIcon } from "../Icons";
import "./Cart.css";
//import { CartContext } from './cartContext'

export default function Cart() {
  const idCart = useId();
  const { cart, clearCart, DtlProduct } = useContext(CartContext);
  const totalCart = useCartHook()

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
                <button className="cartQtyBtn" onClick={()=>{DtlProduct(product)}}><TrashIcon className='iconDlt'/></button>
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
