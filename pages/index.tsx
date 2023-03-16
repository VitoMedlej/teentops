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
        <title>Powerhouse electronics | Buy European electronics and home appliances in Lebanon</title>
        <meta name="description" content={`
        Powerhouse electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <TopAd/>
      <Navbar />
      <CategoryMenu category={category}/>
      <main>
      
      <MainCarousel/>
      <CategoryImages/>
      <WhatsApp/>
      <ProductCollection data={data} setQuickView={setQuickView} Collectiontitle='Latest Products '/>      
      <FullscreenPoster img='https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/SBS22-ASP-Hero-DSK-A.png'/>
      <ProductCollection data={data && data.slice(3)} setQuickView={setQuickView} Collectiontitle='Top Sellers'/>      
      <CategoryList/>
      <ProductCollection data={data} setQuickView={setQuickView} Collectiontitle='Recommended Products '/>      
      <ProductCollection data={data} setQuickView={setQuickView} Collectiontitle='Best Of The Best'/>      
    

      {/* <FullscreenPoster img='https://cdn.shopify.com/s/files/1/0317/1831/0026/files/shop_now_1800_x600_b3aa621e-b818-4478-8679-7d16e108de14_1200x.png?v=1613728741'/> */}
     
        <QuickView setQuickView={setQuickView} productId={quickView.productId} isOpen={quickView.isOpen}/>
        </main>
      <Perks/>
    </>
  )
}
export const getAll = async (endpoint?:string,limit?:number,category?:string,search?:string) => {
  try {

    const req = await fetch(`${server}/api/${endpoint ? endpoint : 'home' }?limit=${limit || 100}&category=${category ? category : ''}&search=${search ? search : ''}`)
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
        data : res.data,
        category : res.category
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 500, // In seconds
  }
}
catch(errr){
  console.log('errr: ', errr);

}
}
