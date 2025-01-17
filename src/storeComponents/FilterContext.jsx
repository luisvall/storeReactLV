import { createContext, useContext, useState } from "react";
const FilterContext = createContext();
function FilterProvider({ children }) {
  const [filter, setFilter] = useState({
    grados: "all",
    minPrice: 0,
  });
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, FilterContext };
