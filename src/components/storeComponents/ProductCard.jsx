import { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "./CartContext";

export default function ProductCard({ product, addCart}) {
  const {restTotalCart, cart} = useContext(CartContext) 
  return (
    <>
      <div className="productCard">
        <div className="productImg">
          <img src={product.imagen} alt={`Imagen de ${product.nombre}`} />
        </div>
        <div className="productBody">
          <h3 className="productName">{product.nombre}</h3>
          <p className="productDesc">{product.descripcion}</p>
          <span className="productPrice">${product.precio} CLP</span>
        </div>
        <button value={product.id} className="productBtn" onClick={() => {addCart(product)}}>
          COMPRAR
        </button>
      </div>
    </>
  );
}
