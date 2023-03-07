import {useState} from 'react';
import SideBar from '../src/Components/Drawer/SideBar'
import '../styles/Styles.css'
import '../styles/qty.css'
import type {AppProps}
from 'next/app'
import {createContext} from "react";
import QuickCart from '../src/Components/Drawer/QuickCart';

export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});

export default function App({Component, pageProps} : AppProps) {
    const [open,
        setOpen] = useState(false);
    const [cartOpen,
        setCartOpen] = useState(false);

    return <DrawerContext.Provider value={[open, setOpen]}>
        <CartContext.Provider value={[cartOpen, setCartOpen]}>
            <SideBar/>
            <QuickCart/>
        <Component {...pageProps}/>
        </CartContext.Provider>
    </DrawerContext.Provider>
}
