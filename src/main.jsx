import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import NavBar from "./components/NavBar";
import { FilterProvider } from "./components/storeComponents/FilterContext";
import { LogProvider } from "./components/LogContext";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <LogProvider>
    <NavBar></NavBar>
    <FilterProvider>
      <App></App>
    </FilterProvider>
    <Footer></Footer>
  </LogProvider>
);
