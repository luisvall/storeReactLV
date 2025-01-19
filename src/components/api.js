import { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";

export function consumoApi() {
  const [userApi, setUserApi] = useState([]);
  const [productApi, setProductApi] = useState([]);
  const [bannerApi, setBannerApi] = useState([]);

  useEffect(() => {
    async function apiResponse() {
      try {
        const resp = await fetch("https://apimocha.com/produclicores/posts");
        const jsonRsp = await resp.json();
          setUserApi(jsonRsp.usuarios);
          setProductApi(jsonRsp.licores);
          setBannerApi(jsonRsp.nosotros.carrousel);
      } catch (err) {
        console.log(err);
      }
    }
    apiResponse();

  }, [HomePage, LoginPage, StorePage]);
  return [userApi, productApi, bannerApi];
}
