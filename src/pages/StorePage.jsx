import ProductCard from "../components/storeComponents/ProductCard";
import Filters from "../components/storeComponents/Filters";
import Cart from "../components/storeComponents/Cart";
import { filterProducts } from "../components/storeComponents/filterHook";
import "./StorePage.css";


export default function StorePage({ products }) {
  const filteredProducts = filterProducts(products);
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
            ></ProductCard>
          );
        })}
      </div>
    </>
  );
}
