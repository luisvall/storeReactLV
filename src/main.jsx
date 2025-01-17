import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import NavBar from "./components/NavBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <NavBar></NavBar>
      <App></App>
    </>
  </StrictMode>
);
