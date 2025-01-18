import { useEffect, useState, Children } from "react";
import navigationEvent from "../components/const";

export const routes = [];

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(navigationEvent.pushState, onLocChange);
    window.addEventListener(navigationEvent.popState, onLocChange);
    return () => {
      window.removeEventListener(navigationEvent.pushState, onLocChange);
      window.removeEventListener(navigationEvent.popState, onLocChange);
    };
  }, []);
  //Leer las rutas que vienen del children de un componente
  const routesFromChildren = Children.map(children, ({ props }) => {
    const { type } = props;
    const isRoute = type === "Route";
    return isRoute ? props : null;
  });
  
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);
  const Page = routesToUse.find(({ path }) => path === currentPath)?.Component;
  //console.log(routesFromChildren)
  return Page ? <Page/> : <DefaultComponent />;
}
