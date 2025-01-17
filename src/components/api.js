import { useEffect, useState } from "react";

export function consumoApi() {
  const [userApi, setUserApi] = useState([]);
  const [productApi, setProductApi] = useState([]);
  
  useEffect(() => {
    async function apiResponse() {
      try {
        const resp = await fetch("https://apimocha.com/licores/posts");
        const jsonRsp = await resp.json();
        setUserApi(jsonRsp.usuarios)
        setProductApi(jsonRsp.licores)
      } catch (err) {
        console.log(err);
      }
    }
    apiResponse();
  }, []);
  return [userApi, productApi]
}



