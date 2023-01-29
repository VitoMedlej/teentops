import Head from 'next/head'
import React from 'react'
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../src/Components/Navbar/Navbar'
import CategoryMenu from '../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import { Box, Typography } from '@mui/material'
import { NextSeo } from 'next-seo';

const cart = () => {
  return (
    <>
        <Head>
       <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAd/>
      <Navbar/>
      <CategoryMenu/>

      <main>
        <Box sx={{px:1,maxWidth:'xl'}}>
             <Box>
               <h3 className='gray2'>{`My Cart (0)`}</h3>
               <Box sx={{fontSize:'.8em',fontWeight:'300'}}>
                <Typography>Your cart is empty</Typography>
                
                <a href="/">Shop pro2ducts</a>
               </Box>
            </Box>
              </Box>
      </main>
    </>
  )
}

export default cart