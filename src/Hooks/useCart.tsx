import { useContext } from "react";
import { CartContext } from "../../pages/_app";
import { loadState, saveState, pushState } from "../Utils/LocalstorageFn";

const useCart = () => {
    const [cartOpen, setCartOpen] = useContext(CartContext);
  
    const addToCart = (id:string) => {
        const state = loadState('usercart') || [];
        //1- get the cart from localstorage
        let foundIndex = state.findIndex((value:ICartItem) => value.id === id);
        // if we already have the item in the cart, just increase the qty    
        if (foundIndex !== -1 && state[foundIndex]) {
                 let selectedItem = state[foundIndex];
                 selectedItem.qty = selectedItem.qty + 1;
                 state[foundIndex] = selectedItem
                 
                saveState('usercart', state)
        setCartOpen(true)
                
                return
            }
            //if we do not have the item in cart, insert it
        pushState('usercart',
        {qty:1,img:'https://burst.shopifycdn.com/photos/modern-time-pieces.jpg?width=1200&format=pjpg&exif=1&iptc=1'
        ,id:'myobjectid',name:'My Object Name',price:100,shortDesc:'foobarbaz'})
        setCartOpen(true)
    }
    return {addToCart}
}

export default useCart