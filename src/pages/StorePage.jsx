import ProductCard from "../components/storeComponents/ProductCard";
import Filters from "../components/storeComponents/Filters";
import Cart from "../components/storeComponents/Cart";
import { CartContext } from "../components/storeComponents/CartContext";
import { filterProducts } from "../components/storeComponents/filterHook";
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
