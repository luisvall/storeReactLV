import { useContext } from "react";
import { FilterContext } from "./FilterContext";

function filterProducts(products) {
  const {filter} = useContext(FilterContext)
  return products.filter((product) => {
    return (
      product.precio >= filter.minPrice &&
      (filter.grados === "all" || product.grados === filter.grados)
    );
  });
}

function handlerFilters() {
  const {setFilter} = useContext(FilterContext)
   function handleFilter(event) {
    event.preventDefault()
    const newGrados = event.target.value;
    setFilter((prevState) => ({
      ...prevState,
      grados: newGrados,
      minPrice: 0,
    }));
  };
  return {handleFilter}
}

export { filterProducts, handlerFilters };
