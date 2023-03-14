import {useState} from 'react';
import SideBar from '../src/Components/Drawer/SideBar'
import '../styles/Styles.css'
import '../styles/qty.css'
import type {AppProps}
from 'next/app'
import {createContext} from "react";
import QuickCart from '../src/Components/Drawer/QuickCart';
import NextNProgress from 'nextjs-progressbar';
export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);

export default function App({Component, pageProps} : AppProps) {
    const [open,
        setOpen] = useState(false);
    const [cartOpen,
        setCartOpen] = useState(false);
        const [cates,
            setCates] = useState([]);

    return <DrawerContext.Provider value={[open, setOpen]}>
        <Categories.Provider value={[cates, setCates]}>
        <CartContext.Provider value={[cartOpen, setCartOpen]}>
        <SideBar cates={cates}/>
                <NextNProgress/>
            <QuickCart/>
        <Component {...pageProps}/>
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
}
