import { lazy, Suspense, useState } from "react";
import DefaultComponent from "./pages/404";
import { Router } from "./router/Router";
import Route from "./router/Route";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./components/storeComponents/CartContext";
import { consumoApi } from "./components/api";
const StorePage = lazy(() => import("./pages/StorePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function App() {
  const licores = consumoApi()[1];
  const [isLoged, setIsLoged] = useState(!true);
  console.log(isLoged)

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router defaultComponent={DefaultComponent}>
          <Route type="Route" path="/" Component={HomePage} />

          {isLoged ? (
            <Route
              type="Route"
              path="/store"
              Component={() => {
                return (
                  <CartProvider>
                    <StorePage products={licores}></StorePage>
                  </CartProvider>
                );
              }}
            />
          ) : (
            <DefaultComponent />
          )}

          <Route type="Route" path="/contact" Component={ContactPage} />
          <Route
            type="Route"
            path="/login"
            Component={() => <LoginPage changeToken={() => setIsLoged} />}
          />
        </Router>
      </Suspense>
    </>
  );
}
