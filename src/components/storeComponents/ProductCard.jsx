import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductCard.css";


export default function ProductCard({ product}) {
  const {addCart} = useContext(CartContext)
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
