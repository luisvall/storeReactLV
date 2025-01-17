import { useState, useRef } from "react";
import "./ProductCard.css";

export default function ProductCard({ img, tittle, desc, price, id }) {

  return (
    <article className="productCard">
      <div className="productImg">
        <img src={img} alt={`imagen de ${tittle}`} />
      </div>
      <h3 className="porductTittle">{tittle}</h3>
      <p className="productDesc">{desc}</p>
      <span className="productPrice">${price} CLP</span>
      <button value={id}>COMPRAR</button>
    </article>
  );
}
