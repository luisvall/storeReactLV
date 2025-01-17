import ProductCard from "../storeComponents/ProductCard";
import Filters from "../storeComponents/Filters";
import Cart from "../storeComponents/Cart";
import { CartContext } from "../storeComponents/CartContext";
import { filterProducts } from "../storeComponents/filterHook";
import "./StorePage.css";
import { useContext } from "react";

export default function StorePage({ products }) {
  const filteredProducts = filterProducts(products);
  const { addCart } = useContext(CartContext);

  return (
    <>
      <br /><br /><br />
      <Cart></Cart>
      <Filters products={products}></Filters>
      <div className="container containerProducts">
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              addCart={addCart}
            ></ProductCard>
          );
        })}
      </div>
    </>
  );
}
