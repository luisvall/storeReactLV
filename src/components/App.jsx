import { lazy, Suspense, useState } from "react";
import DefaultComponent from "../pages/404";
import { Router } from "../router/Router";
import Route from "../router/Route";
import HomePage from "../pages/HomePage";

const StorePage = lazy(() => import("../pages/StorePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

export default function App() {
const [isLoged, setIsLoged] = useState(!true);
console.log(isLoged)
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router defaultComponent={DefaultComponent}>
          <Route path="/" Component={HomePage} />


          {isLoged ? (
            <Route path="/store" Component={StorePage} />
          ) : (
            <DefaultComponent />
          )}


          <Route path="/contact" Component={ContactPage} />
          <Route path="/login" Component={()=><LoginPage changeToken={setIsLoged} />} />
        </Router>
      </Suspense>
    </>
  );
}
