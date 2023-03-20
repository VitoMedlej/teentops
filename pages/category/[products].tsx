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

const Index = ({data,count}:any) => {
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [products,setProducts] = useState(data);
  const handleQuickView = (id: string) => {
    if (setQuickView) {
        setQuickView({isOpen:true,productId: id})
    } 
 }
 const router= useRouter()
 const category= router.query?.products || 'products';
 if (data && !products) {
  setProducts(data)
 }
 const handleReset = () => {
    setProducts(data)
 }
 const handlePagination =  async (val:number) => { 
 try {
  // router.push('/products')
  router.replace({
    query: { ...router.query, page: val },
 });
 const skip = val <= 1 ? 0 : (val - 1) * 12
//  console.log('skip: ', skip);
  if (val > 0) {
      const data =  await getAll('getdata',12,`${category}`,undefined,skip,false)
      // const res = await data.json()
      // console.log('res: ', res);
      if (data) {
        setProducts(data?.products)
      }
    }
  }
  catch(e) {
   console.log('e: ', e);
 
  }
  }
  return (
    <>
    <Head>
    <title>Powerhouse lb Electronics | Shop By Category </title>
        <meta name="robots" content="index,follow"/>
{/* <meta name="description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
<meta name="distribution" content="Global"/>
<meta name="keywords" content="e, electronic stores, lebanon, electronics store near me,  electronics, electronic, tv, tvs, electronic components,
 electrical, kitchens,  supply,  Engineering, washer, dryer, kneading, fridge, refrigerator, standing steam, pancake maker, Cotton candy machine, Electric kettle,
  Thermoelectric cool box, Ice Cube Machine,  Hot Air Fryer, stand mixer, Juicer, carpet cleaner , Espresso, cyclonic vacuum cleaner, vacuum, cleaner, steam iron
  , gas grill, gas, grill, cooker,Electric Pot, Electric fryer, Freezer, Inverter  "/>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta httpEquiv="content-language" content="en" />
<meta name="theme-color" content="#935525" />
<meta content="powerhouse-lb.com" name="author" />

<link rel="canonical" href="https://powerhouse-lb.com/" />
<link rel="alternate" href="https://powerhouse-lb.com/" hrefLang="en"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Powerhouse electronics | Buy European electronics and home appliances in Lebanon" />
<meta property="og:url" content="https://powerhouse-lb.com/" />
<meta property="og:site_name" content="Power house" />
<meta property="og:image" content="https://ucarecdn.com/efe1f0cd-cded-4213-a0b2-6daed82bd506/001.png" />
{/* <meta property="og:description" content="Power house provide a wide range of European electronics (stock and new)" /> */}
     
<meta name="og:description" content={`
        Shop different ${router?.query?.products} from Powerhouse-lb for the best european house appliances. We deliver anywhere in lebanon | Best online shop in lebanon.`} />
       <meta name="description" content={` Shop different ${router?.query?.products} from Powerhouse-lb for the best european house appliances. We deliver anywhere in lebanon | Best online shop in lebanon.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 

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

    <FilterSection handleReset={handleReset} setProducts={setProducts} />
    </AccordionDetails>
    </Accordion>
    <Box sx={{display:{xs:'none',md:'block'},width:'20%'}}>
    <FilterSection handleReset={handleReset} setProducts={setProducts} sx={{width:'100%'}}/>
    </Box>
    <ProductSection count={count} handlePagination={handlePagination}  data={products} setQuickView={handleQuickView}/>
    <Divider/>
  </Box>
    </Box>
  </>
  )
}

export default Index

export async function  getServerSideProps(context:any) {
  // console.log('context: ', );

  let search = context.query?.search;
  let page = context.query?.page ? Number(context.query?.page) : 0;

  let category = context.query?.products.replace(/-/g, ' ') || 'products'

  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const data =  await getAll('getdata',12,category,search,page,true)

  if (!data) {
    return {
      props: {
        data: null,
      },
    }    
  }
  return {
    props: {
      data : data.products
      ,count : data?.count
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
