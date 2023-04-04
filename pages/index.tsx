import Head from 'next/head'
import CategoryMenu from '../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import MainCarousel from '../src/Components/HomeComponents/MainCarousel/MainCarousel';
import WhatsApp from '../src/Components/HomeComponents/SocialLinks/WhatsApp';
import ProductCollection from '../src/Components/HomeComponents/ProductCollection/ProductCollection';
import FullscreenPoster from '../src/Components/HomeComponents/FullscreenPoster/FullscreenPoster';
import CategoryList from '../src/Components/HomeComponents/CategoryList/CategoryList';
import Perks from '../src/Components/HomeComponents/Perks/Perks';
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd';
import Navbar from '../src/Components/Navbar/Navbar';
// import SideBar from '../src/Components/Drawer/SideBar';
// import { Dialog } from '@mui/material';
import QuickView from '../src/Components/Dialog/QuickView';
import { useContext, useEffect, useState } from 'react';
import {server} from '../src/Utils/Server' 
import CategoryImages from '../src/Components/HomeComponents/CategoryImages/CategoryImages';
import Btn from '../src/Components/Btn/Btn';
import { IProduct } from '../src/Types/Types';
import { Typography } from '@mui/material';
import { Categories } from './_app';

export default function Home({data :staticData,category}:{category:any,data:any}) {
  
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [data,setData] = useState<IProduct[]>(staticData)
  const [cates,setCates] = useContext(Categories);
  useEffect(() => {
    setCates(category);
  }, [])

    return (
    <>
      <Head>
        <title>TeenTops electronics | Buy Best Electronics and home appliances in Lebanon</title>
        <meta name="robots" content="index,follow"/>
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
<meta name="distribution" content="Global"/>
<meta name="keywords" content="e, electronic stores, lebanon, electronics store near me,  electronics, electronic, tv, tvs, electronic components,
 electrical, kitchens,  supply,  Engineering, washer, dryer, kneading, fridge, refrigerator, standing steam, pancake maker, Cotton candy machine, Electric kettle,
  Thermoelectric cool box, Ice Cube Machine,  Hot Air Fryer, stand mixer, Juicer, carpet cleaner , Espresso, cyclonic vacuum cleaner, vacuum, cleaner, steam iron
  , gas grill, gas, grill, cooker,Electric Pot, Electric fryer, Freezer, Inverter  "/>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<meta httpEquiv="content-language" content="en" />
<meta name="theme-color" content="#935525" />
<meta content="teen-tops.com" name="author" />

<link rel="canonical" href="https://teen-tops.com/" />
<link rel="alternate" href="https://teen-tops.com/" hrefLang="en"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Teen Tops electronics | Buy European electronics and home appliances in Lebanon" />
<meta property="og:url" content="https://teen-tops.com/" />
<meta property="og:site_name" content="Teen tops" />
<meta property="og:image" content="https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png" />
     
<meta name="og:description" content={`
        Teen Tops electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
       <meta name="description" content={`
        Teen Tops electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
      </Head>
      
      <TopAd/>
      <Navbar />
      <CategoryMenu category={category}/>
      <main>
      
      <MainCarousel/>
      <CategoryList/>
      {/* <CategoryImages/> */}
      <WhatsApp/>
      <ProductCollection delay={1000} data={data && data.slice(0,6)} setQuickView={setQuickView} Collectiontitle='Latest Products '/>      
      
     
      <ProductCollection delay={1200} data={data && data.slice(6,15)} setQuickView={setQuickView} Collectiontitle='Top Sellers'/>      
    
    
      { data && data?.slice(15,22)?.length > 0 &&
      <ProductCollection delay={1400} data={data && data.slice(15,22) } setQuickView={setQuickView} Collectiontitle='Recommended Products '/>      
}


        { data && data?.slice(22,35)?.length > 0 &&

          <ProductCollection delay={1500} data={data && data.slice(22,35)} setQuickView={setQuickView} Collectiontitle='Best Of The Best'/>      
        }

      {/* <FullscreenPoster img='https://cdn.shopify.com/s/files/1/0317/1831/0026/files/shop_now_1800_x600_b3aa621e-b818-4478-8679-7d16e108de14_1200x.png?v=1613728741'/> */}
<FullscreenPoster img='https://ucarecdn.com/96f3a42e-18bd-4871-92a5-4cb0ca861560/Capture.JPG'/>
     
        <QuickView setQuickView={setQuickView} productId={quickView.productId} isOpen={quickView.isOpen}/>
        </main>
      <Perks/>
    </>
  )
}
export const getAll = async (endpoint?:string,limit?:number,category?:string,search?:string,skip?:number,totalCount?:boolean) => {
  try {

    const req = await fetch(`${server}/api/${endpoint ? endpoint : 'home' }?limit=${limit || 100}&category=${category ? category : ''}&search=${search ? search : ''}&skip=${skip}&totalCount=${totalCount === true ? 'true' : 'false' }`)
    const res = await req.json()
  
    if (res) {
      return res
    }
    return null
  }
  catch(er) {
    console.log('er getAll: ', er);

  }
}
export async function  getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const res = await getAll()

  if (!res || !res?.data) {
    return {
      props: {
        data: null,
      },
    }    
  }
  return {
    props: {
        data : res.data.reverse(),
        category : res.category
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 400, // In seconds
  }
}
catch(errr){
  console.log('errr: ', errr);

}
}
