import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import NavBar from "./components/NavBar";
import { FilterProvider } from "./components/storeComponents/FilterContext";
import { LogProvider } from "./components/LogContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogProvider>
      <NavBar></NavBar>
      <FilterProvider>
        <App></App>
      </FilterProvider>
    </LogProvider>
  </StrictMode>
);
