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
// import CategoryImages from '../src/Components/HomeComponents/CategoryImages/CategoryImages';
// import Btn from '../src/Components/Btn/Btn';
import { IProduct } from '../src/Types/Types';
import { Typography ,Container } from '@mui/material';
// import { Categories } from './_app';


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
export default function Home({data :staticData,data2,category}:{data2:any,category:any,data:any}) {
  
  const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  const [data,setData] = useState<{staticData:IProduct[],data2:IProduct[]}>({staticData,data2})
    const coldStart = async () => {
      if (!data || data2) {
           const fetchedData : any = await getAll()
           setData({staticData: fetchedData?.data,data2:fetchedData?.data2})
          return
          }
    const req = await fetch(`${server}/api/cold`);
    const res = await req.json();

}
useEffect(() => {
  coldStart()
  }, [])


    return (
    <>
      <Head>
        <title>Teentops Electronics | Shop Applicances & Tech Accessories</title>
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
<meta content="teentops-lb.com" name="author" />

<link rel="canonical" href="https://teentops-lb.com/" />
<link rel="alternate" href="https://teentops-lb.com/" hrefLang="en"/>

<meta property="og:type" content="website" />
<meta property="og:title" content="Teentops Electronics | Shop Applicances & Tech Accessories" />
<meta property="og:url" content="https://teentops-lb.com/" />
<meta property="og:site_name" content="Teen tops" />
<meta property="og:image" content="https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png" />
     
<meta name="og:description" content={`
        Teen Tops electronics is your destination to buy the best electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
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
      
      <ProductCollection delay={1600} data={data && data.staticData?.slice(0,25)} setQuickView={setQuickView} Collectiontitle='Latest Products - أحدث المنتجات'/>      
      { data && data?.staticData?.slice(15,22)?.length > 0 &&
      <ProductCollection delay={2000} data={data && data.staticData?.slice(25,35) } setQuickView={setQuickView} Collectiontitle='Best Products - أفضل المنتجات '/>      
}
        { data && data?.data2?.length > 0 &&

          <ProductCollection delay={2100} data={data.data2} setQuickView={setQuickView} Collectiontitle='Kitchen Appliances - أدوات المطبخ'/>      
        } 
      <ProductCollection delay={1900} data={data?.staticData && data.staticData?.slice(15,25)} setQuickView={setQuickView} Collectiontitle='More Deals - المزيد من العروضات'/>      
     
    
<FullscreenPoster img='https://ucarecdn.com/96f3a42e-18bd-4871-92a5-4cb0ca861560/Capture.JPG'/>

  
      {/* <FullscreenPoster img='https://cdn.shopify.com/s/files/1/0317/1831/0026/files/shop_now_1800_x600_b3aa621e-b818-4478-8679-7d16e108de14_1200x.png?v=1613728741'/> */}
     
        <QuickView setQuickView={setQuickView} productId={quickView.productId} isOpen={quickView.isOpen}/>
        </main>
      <Perks/>
            <Container className='bg py2' sx={{textAlign:"center",margin:'0 auto',maxWidth:'100vw !important',width:'100%'}}>
        <Typography component='h1' sx={{textAlign:"center",margin:'0 auto',maxWidth:'600px',fontSize:{xs:'1.75em',sm:'2em',md:'2.4em'},fontWeight:'900'}} className='white auto'>
        About Us. The Ultimate Online Destination for Electronics in Lebanon
        </Typography>
        <Typography  sx={{maxWidth:'md',fontWeight:'300',textAlign:"center",margin:1}} component='p' className='white auto'>
          

 In today&apos;s fast-paced world, technology and electronics are an integral part of our lives. As the demand for the latest gadgets continues to grow,
  finding a reliable online store that offers a wide range of high-quality electronics at competitive prices becomes crucial. 
  Enter Teentops, a Lebanon-based online store specializing in electronics.
       
        </Typography>
        </Container>
    </>
  )
}

// export async function  getStaticProps() {
  export async function  getServerSideProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  try {

 
  const res = await getAll()
    // const res = require('../dummy.json')
    if (!res || !res?.data || !res.data2) {
    return {
      props: {
        data: null,
      },
    }    
  }
  return {
    props: {
        // data : res.data
        data :res.data,
        data2 : res.data2
        // category : res?.category
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 40, // In seconds
  }
}
catch(errr){
  console.log('errr: ', errr);

}
}
