import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import NavBar from "./components/NavBar";
import { FilterProvider } from "./components/storeComponents/FilterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <NavBar></NavBar>
      <FilterProvider>
      <App></App>
      </FilterProvider>
    </>
  </StrictMode>
);
