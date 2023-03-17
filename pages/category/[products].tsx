import Head from 'next/head'
import React, { useState } from 'react'
import TopAd from '../../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../../src/Components/Navbar/Navbar'
import FilterSection from '../../src/Components/ProductsComponents/Filter/FilterSection'
import ProductSection from '../../src/Components/ProductsComponents/ProductSection/ProductSection'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Pagination, Typography } from '@mui/material'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'
import QuickView from '../../src/Components/Dialog/QuickView'
import { getAll } from '..'
import { useRouter } from 'next/router'

const Index = ({data}:any) => {
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [products,setProducts] = useState([]);
  const handleQuickView = (id: string) => {
    if (setQuickView) {
        setQuickView({isOpen:true,productId: id})
    } 
 }
 if (data) {
  setProducts(data)
 }
 const  router= useRouter() 
  return (
    <>
    <Head>
      <title>Powerhouse-lb electronics | Shop Online Today</title>
      <meta name="description" content="Powerhouse-lb electronics | Shop Online Today | European products | We deliver everywhere in lebanon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <TopAd/>
    <Navbar/>

    <CategoryMenu category={undefined}/>
    <QuickView productId={quickView.productId} setQuickView={setQuickView} isOpen={quickView.isOpen}/>

  <Box sx={{margin:'0 auto',pt:'1.5em',maxWidth:'xl',mx:'3vw'}}>

<Box className='flexed' sx={{justifyContent:'space-between'}}>
<Breadcrumb params={[`${router.query?.products || 'products'}`]} sx={{margin:0,px:0,py:'1em'}}/>

    <Typography className=''>Showing {products?.length || '0'} products</Typography>
    </Box> 
    <Divider></Divider>
    <Box  sx={{display:'flex',flexWrap:'wrap'
    ,justifyContent:'space-between'
    ,alignItems:'flex-start'
    ,flexDirection:'row'}}>

    <Accordion sx={{display:{md:'none'},width:'100%'}}>
    <AccordionSummary>
        Open Filter
    </AccordionSummary>
    <AccordionDetails>

    <FilterSection/>
    </AccordionDetails>
    </Accordion>
    <Box sx={{display:{xs:'none',md:'block'},width:'20%'}}>
    <FilterSection sx={{width:'100%'}}/>
    </Box>
    <ProductSection data={products} setQuickView={handleQuickView}/>
    <Divider/>
  </Box>
    </Box>
  </>
  )
}

export default Index

export async function  getServerSideProps(context:any) {
  // console.log('context: ', );
  let category = context.query?.products || 'products'
  let search = context.query?.search 
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const data =  await getAll('getdata',12,category,search)

  if (!data) {
    return {
      props: {
        data: null,
      },
    }    
  }
  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 500, // In seconds
  }
}
catch(errr){
  console.log('errr: ', errr);

}
}
