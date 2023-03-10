import { useContext } from "react";
import { CartContext } from "../../pages/_app";
import { loadState, saveState, pushState } from "../Utils/LocalstorageFn";
import { ICartItem } from "../Types/Types";

const useCart = () => {
    const [cartOpen, setCartOpen] = useContext(CartContext);
    const incrementQty = (id:string,newValue ?: number) => {
        const state = loadState('usercart') || [];
        let foundIndex = state.findIndex((value:ICartItem) => value.id === id);
        let selectedItem = state[foundIndex];
        if (foundIndex !== -1 && selectedItem) {
            if (newValue) {selectedItem.qty = newValue; }
            else {

                selectedItem.qty = selectedItem.qty + 1;
            }

            state[foundIndex] = selectedItem

           saveState('usercart', state)           
           return 
       }
    }
    const addToCart = (id:string,open=true) => {
        //1- get the cart from localstorage
         incrementQty(id)       

                
        
            //if we do not have the item in cart, insert it
        pushState('usercart',
        {qty:1,img:'https://burst.shopifycdn.com/photos/modern-time-pieces.jpg?width=1200&format=pjpg&exif=1&iptc=1'
        ,id,name:'My Object Name',price:100,shortDesc:'foobarbaz'})
        if(open) {
             
            setCartOpen(true)
        }
    }
    return {addToCart,incrementQty}
}

export default useCart