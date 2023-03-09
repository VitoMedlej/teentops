import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../src/Components/Navbar/Navbar'
import CategoryMenu from '../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import {Box, Divider, Typography} from '@mui/material'
import {NextSeo} from 'next-seo';
import Link from 'next/link'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Btn from '../src/Components/Btn/Btn'
import CartProduct from '../src/Components/Products/CartProduct'
import Perks from '../src/Components/HomeComponents/Perks/Perks'
import { loadState, saveState } from '../src/Utils/LocalstorageFn'
import { ICartItem } from '../src/Types/Types'
import { useRouter } from 'next/router'

const titleStyle = {
    fontSize: '1.3em',
    fontWeight: '600 !Important',
    
}
const textStyle = {
    color: '#000000b8'
}
const EmptyCartAlert = () => {
    return (
        <Box sx={{
            py: 10
        }}>
            <Box
                className='flexed'
                sx={{
                flexDirection: 'column',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                <Typography fontSize='2em' fontWeight='bold'>
                    Your Cart Is Empty!
                </Typography>
                <Typography fontSize='1em' fontWeight='500'>
                    what are you waiting for?
                </Typography>
                <Link className='flexed decor-none gap' href='/'>
                    <Btn sx={{
                        mt: 3
                    }}>
                        Shop Products
                        <ShoppingBasketIcon/>
                    </Btn>
                </Link>
            </Box>
        </Box>
    )
}

const Cart = () => {
    const [cartItems,setCartItems] = useState<ICartItem[]>([])
    const router= useRouter()
    useEffect(() => {
        let localCart : ICartItem[] = loadState('usercart') || []
        if (localCart) {
            
            setCartItems(localCart)
    }
      
    }, [])
    const remove = (id:string) => {
        let state = cartItems.filter(x => `${x.id}` !== id);
         saveState('usercart', state);
         // console.log('state: ', state);
         setCartItems(state);
     }
    return (
        <Box sx={{
            py: 5,
            maxWidth:'xl',
            margin:'0 auto',
            px: 1
        }}>
            <Typography
                sx={{
                fontSize: '1.5em',
                padding: 1,
                fontWeight: '600'
            }}>My Cart</Typography>
            <Box  sx={{
                display: 'flex',
               flexWrap: 'wrap'
            }}>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '70%'
                    }
                }}>
                    {cartItems && cartItems.length > 0 ?
                    cartItems.map(item=>{
                        return <CartProduct img={item.img} qty={item.qty} remove={remove} name={item.name} id={item.id} price={item.price}/>
                    }) :
                    <EmptyCartAlert/>     
                }
                                         {/* <CartProduct/> */}
                    {/* <CartProduct/> */}
                </Box>
               
                <Box
                    sx={{
                    padding: '1em',
                    mt:{xs:'2em',sm:0},
                    height: 'fit-content',
                    width: {
                        xs: '100%',
                        md: '25%'
                    },
                    // boxShadow:'1px 1px 3px #0000002b'
                }}>
                  
                    <Typography sx={{
                        ...titleStyle
                    }}>Order Summary</Typography>
                    <Box
                        className='flexed'
                        sx={{
                        mt:1,
                        justifyContent: 'space-between'
                    }}>

                        <Typography sx={textStyle}>Order Summary</Typography>
                        <Typography sx={textStyle}>$400</Typography>
                    </Box>
                    <Box
                        className='flexed'
                        sx={{
                        mt: '.25em',
                        mb:'1em',
                        justifyContent: 'space-between'
                    }}>

                        <Typography sx={textStyle}>Order Summary</Typography>
                        <Typography sx={textStyle}>$400</Typography>
                    </Box>
                    <Divider></Divider>
                    <Box 
                    sx={{
                      mt:1,
                      justifyContent: 'space-between'
                  }}
                    className='flexed'> 

                    <Typography sx={{
                      ...titleStyle
                    }}>Order Totals</Typography>
                    <Typography sx={{
                      fontWeight: '600'
                    }}>450$</Typography>
                    
                    </Box>
                    <Link href='/checkout'
                    
                    className='decor-none'>

                    <Btn
                    sx={{width:'100%',mt:2.5}}>Checkout Now</Btn>
                    </Link>

                    <Link href='/category/products' className='decor-none'>

                    <Btn
                    
                    v2={true} sx={{mx:0,width:'100%',mt:1}}>Continue Shopping</Btn>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

const Index = () => {
    return ( <>
     <Head>
        <NextSeo
            title="Simple Usage Example"
            description="A short description goes here."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head> < TopAd /> <Navbar/> < CategoryMenu /> {
        false
            ? <EmptyCartAlert/>
            : <Cart/>

    } 
    
    {/* <Divider></Divider> */}
    <Perks/>
    </>
  )
}

export default Index