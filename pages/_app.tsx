import { useState } from 'react';
import SideBar from '../src/Components/Drawer/SideBar'
import '../styles/Styles.css'
import type { AppProps } from 'next/app'
import { createContext } from "react";
import QuickCart from '../src/Components/Drawer/QuickCart';

export const DrawerContext = createContext<any>({});
export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  
  return <DrawerContext.Provider value={[open,setOpen]}>
      <SideBar />
      <QuickCart/>
  <Component {...pageProps} />
  </DrawerContext.Provider>
}
