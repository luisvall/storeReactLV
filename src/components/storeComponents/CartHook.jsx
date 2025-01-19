import { useContext } from "react";
import { CartContext } from "./CartContext";

export function useCartHook () {
    const cartContext = useContext(CartContext)

    if (cartContext === undefined){
        conosle.log('ERROR al usar CartContext')
    }
    
    return cart
}