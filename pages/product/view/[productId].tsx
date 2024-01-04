"use client"
import React, { useState } from 'react'
import Head from 'next/head'
import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import {MdFavoriteBorder} from 'react-icons/md';
import {AiOutlineShoppingCart,AiOutlineWhatsApp} from 'react-icons/ai';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Breadcrumb } from 'semantic-ui-react';
import { getAll } from '../..';
import Btn from '../../../src/Components/Btn/Btn';
import CategoryMenu from '../../../src/Components/HomeComponents/CategoryMenu/CategoryMenu';
import Perks from '../../../src/Components/HomeComponents/Perks/Perks';
import ProductCollection from '../../../src/Components/HomeComponents/ProductCollection/ProductCollection';
import ItemTabs from '../../../src/Components/ItemComponents/ItemTabs';
import Navbar from '../../../src/Components/Navbar/Navbar';
import ProductCarousel from '../../../src/Components/ProductCarousel/ProductCarousel';
import { QuantityPicker } from '../../../src/Components/QuantityPicker/QuantityPicker';
import useCart from '../../../src/Hooks/useCart';
import { server } from '../../../src/Utils/Server';
import { IoBagOutline } from "react-icons/io5";

import { MdContactSupport } from "react-icons/md";
import { GiStarShuriken } from "react-icons/gi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import ProductImageCarousel from '../../../src/Components/ProductImageCarousel/ProductImageCarousel';


const btnStyle = {
  gap:'1em',fontSize:'12px',py:'.75em',display:'flex'
}


const Index = ({data,collection}:any) => {
  const {addToCart} = useCart()
  const router = useRouter()
  const item = router.query?.title || router.query?.productId|| 'Item'
  const [swiper, setSwiper] = useState<any>(null);

  const goToSlide  = (index: number) => {
    if (swiper) {
      swiper?.slideTo(index);
    }
  };

  return (
  <>
     <Head>
     <title>Teentops electronics | View Product</title>
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
<meta property="og:title" content="Teentops electronics | Buy Best electronics and home appliances in Lebanon" />
<meta property="og:url" content="https://teentops-lb.com/" />
<meta property="og:site_name" content="Teentops" />
<meta property="og:image" content="https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png" />
     
<meta name="og:description" content={`
        Teen Tops electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
       <meta name="description" content={`
        Teen Tops electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />   
    </Head>
    <Navbar/>
    <CategoryMenu category={undefined}/>

    {/* <Breadcrumb params={[`${data.category}`,`${item}`]} sx={{mt:'2em'}} /> */}
    <Divider/>
    <Box  sx={{justifyContent:'space-between',
    margin:'0 auto',maxWidth:'700px',display:'flex',px:'.0',pt:'0em',gap:'0em',
    flexWrap:'wrap'}}>
      {/* <Box sx={{width:{xs:'100%',md:'45%'},maxWidth:'700px'}}>
                <ProductCarousel images={data?.images} mw='600px'/>
      </Box> */}
        <ProductImageCarousel setSwiper={setSwiper} images={data?.images}/>
        <Box className="flex wrap justify-between between space-around" sx={{mt:1}}>

          {data?.product?.images?.map((i:any,index:number)=>{
            return <Box
            onClick={()=>goToSlide(Number(index))}
            className='cursor pointer' key={i} sx={{width:`${95 / data?.product?.images?.length}%` ,
            minHeight:'20%',
            minWidth:'20%',
         height: `${95 / data?.product?.images?.length}%` }}>
                <img src={i} alt="" className="img" />
              </Box>
          })}
        
                </Box>
      <Box className='bg2' sx={{px:1,width:{xs:'100%',md:'50%'}}}>
        <Typography sx={{pt:2,fontSize:{xs:'1.09em',sm:'1.1em'},
        pb:'.5em',color:'white',fontWeight:'500'}}>{data?.title}</Typography>
        {/* <Typography className='gray' sx={{fontSize:'.85em',pb:'.5em',fontWeight:'400'}}>
          Product Id : {data._id}</Typography> */}
        {/* {
          data?.weight &&
        <Typography sx={{fontSize:'1em',py:'.25em',fontWeight:'500'}} >Items Color: {data.weight}</Typography>
        } */}
        <Divider></Divider>

<Typography className='flex gap gap1 center auto white text-center items-center' 
sx={{py:2,fontSize:'1em',fontWeight:'600',color:'white'}}>
     <strong style={{color:'rgb(254, 231, 93)'}}>
      {data?.newPrice ? `${data?.newPrice} USD` : `${data?.price } USD` }
      </strong> :سعر القطعة
  </Typography>  
             
      {/* <Box className='flexed wrap' sx={{my:'2em'}}>
        <QuantityPicker min={1} max={20} value={1}/>
      <Btn
      onClick={()=>{addToCart(data?._id,{_id:data._id,price:data.price,img:data.images[0],title:data.title},false);router.push('/cart')}}
                            sx={{...btnStyle,mx:'.25em',minWidth:'150px'}}>Add To Cart
                        <AiOutlineShoppingCart/>
                           </Btn>
                              
                        <Tooltip title='Add to favourites'>

                        <IconButton
                            sx={{
                            border: 'none',
                            ml:'.45em',
                            mr:".1em"
                        }}>
                            <MdFavoriteBorder
                                  color= 'red'
                            //     sx={{
                            //     mr: '.1em',
                            // }}
                                fontSize={'small'}/>
                        </IconButton>
                        </Tooltip>

      </Box> */}
      {/* <Typography className='gray' sx={{textAlign:'center'}}>or</Typography>
      <a href='https://wa.me/+96176600541' target='_blank'   rel="noreferrer"
      

    

style={{width:'max-content',margin: '0 auto',color:'green',display: 'flex'}}
      >
     <Box
     className='flexed'
     sx={{width:'max-content',gap:'.5em',
     justifyContent:'center', mx:0,padding: '.65em 1.63em',margin:'0 auto',background:'transparent',
     border:'none'}}>Order On WhatsApp
                    <AiOutlineWhatsApp/>
                    </Box> 
                    </a>                           */}
      {/* <>
      <Typography color='gray' sx={{pt:'1em'}}>Description:</Typography>
      <Typography className='gray2' sx={{fontSize:'1em',pt:'.5em',pb:"1.5em",color:'#5c5c5c',fontWeight:'500'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, labore quae quos veniam, sapiente harum vitae molestias, ipsa possimus vel molestiae soluta placeat blanditiis sit doloremque. Esse deserunt quia suscipit autem qui, ipsam quidem, dolor debitis ipsum voluptatem ut aliquid?
        </Typography>
      <Typography color='gray'>Additinal Information:</Typography>
                            <ul>
                              <li>
                                Weight: 100g
                              </li>
                              <li>
                                Color: Red
                              </li>
                              <li>
                                Material: UI
                              </li>
                            </ul>
      </> */}

      <Box sx={{gap:'1em'}}>
    {/* <Box sx={{mt:'2em'}}>
    <Typography color='gray' sx={{pb:'.4em'}}>Delivery:</Typography>
    <Typography color='gray2'>
    Our service is available across Lebanon within 2 to 3 working days. You will receive a confirmation email, in case you couln't find it in your inbox kindly check your junk box.
    </Typography>                          
  </Box> */}
      </Box>
      </Box>

      <Box sx={{justifyContent:'space-around',width:'100%'}} className='flex row wrap  space-between justify-between'>
        <Box className='bg2 white' sx={{borderRadius:2,my:1,px:1.5,py:1,width:'90%',color:'white'}}>
          <MdOutlineCurrencyExchange color='yellow'/>
          FREE exchange and refund service within 30 days
        </Box>
        <Box className='bg2 white' sx={{borderRadius:2,width:'fit-content',px:1.5,py:1}}>
          Genuine Security
        </Box>
        <Box className='bg2 white' sx={{width:'fit-content',borderRadius:2,px:1.5,py:1}}>
          Support Cash Payment
        </Box>
      </Box>
      {data?.description && <Box sx={{px:1}}>
      <Typography    sx={{pt:2,flexDirection:'row-reverse',textAlign:'justify',color:'#5a5a5a',fontSize:'.9em',fontWeight:'400'}}>
      {data?.description}
          </Typography>
      </Box>}
     {data?.imagesArray && <Box sx={{px:1}}>
        {
          data?.imagesArray?.map((image:string)=>{
            return <Box>
              <img src={image} alt="" className="img" />
            </Box>
          })
        }
      </Box>}
  {/* <ItemTabs description={data?.description?.length> 0 ? data?.descriptionn : data?.title}/> */}
    </Box>

      {/* <ProductCollection delay={1100} data={collection} sx={{my:'6em'}}  Collectiontitle={'Shop Similar Products'}/> */}
      {/* <Perks/> */}
      <Box className='auto' sx={{maxWidth:'700px',pt:4,px:.5}}>
        <Box sx={{mt:4}}>

        <img src="https://see.saileeshop.com/osy/image/newEnOrder.jpg" alt="" className="img" />
        </Box>
        <Box sx={{padding:.5}}>
          <Typography  sx={{fontSize:'1.2em',textAlign:'end',fontWeight:'600'}}>
          {/* Return/Exchange process */}
          عملية الإرجاع / الصرف
          </Typography>
          <Typography    sx={{flexDirection:'row-reverse',textAlign:'end',color:'#5a5a5a',fontSize:'.9em',fontWeight:'400'}}>
          في غضون 30 يومًا بعد استلام البضائع. بدون التأثير على إعادة البيع ، نقدم لك خدمات الإرجاع / الاستبدال: يرجى الاتصال بخدمة العملاء في الموقع أو إرسال بريد إلكتروني لتقديم طلب إرجاع / استبدال ، والتحقق من حالة المنتج ، واختيار استلام البضائع من المنزل ، واسترداد الأموال المتأخرات أو شحن البضائع الجديدة
          </Typography>
        </Box>
        <Box sx={{py:4}}>
          <img src="https://see.saileeshop.com/osy/image/check.jpg" alt="" className="img" />
        </Box>
        <Box  sx={{mt:.5,flexDirection:'row-reverse',textAlign:'end'}} className='flex center gap items-center'>
        <GiStarShuriken color='#42a369' fontSize={'2em'}/>
          <Typography sx={{color:'#5a5a5a'}}>
          يرجى تقديم رقم الطلب / رقم الشحن والاسم ورقم الهاتف المحمول وسبب الخدمة
          </Typography>
        </Box>
        <Box sx={{pt:.5,px:.5,flexDirection:'row-reverse',textAlign:'end'}} className='flex center gap items-center'>
        <GiStarShuriken color='#42a369' fontSize={'2em'}/>
          <Typography sx={{color:'#5a5a5a'}}>
          يتحمل البائع أجرة النقل بسبب جودة المنتج: يتحمل المشتري أجرة النقل لأسباب شخصية
          </Typography>
        </Box>

      </Box>
      <Box sx={{border:'1px solid rgb(254, 231, 93)',maxWidth:'700px',justifyContent:'space-around'}} className="fixedComp gap justify-between gap1 flex auto">
    
      <Btn sx={{fontSize:'1.5em',width:'25%',color:'rgb(254, 231, 93)',background:'transparent',border:'1px solid rgb(254, 231, 93) !important',borderRadius:'5px'}}>
          <RiCustomerService2Fill fontSize={'1.5em'} color='rgb(254, 231, 93)'/>
        </Btn>

      <Btn sx={{gap:1,py:0,':hover':{background:'transparent'},fontWeight:600,fontSize:'1.5em',width:'68%',color:'rgb(254, 231, 93)',background:'transparent',border:'1px solid rgb(254, 231, 93) !important',borderRadius:'5000px'}}>
          اشتري الآن
          {' '}
          <IoBagOutline color='rgb(254, 231, 93)'/>
        </Btn>

       
      </Box>
  </>
  )
}

export default Index

export const getById = async (id:string) => {
  try {

    const req = await fetch(`${server}/api/get-item?pid=${id}`)
    const res = await req.json()
    
    if (res) {
      return res
    }
  }
  catch(er) { 
    console.log('er: ', er);

  }
}
export async function getServerSideProps(context:any) {
  try {
    const id = context.params.productId
    const category = context.query.category
    if (!id) {
      throw 'Error'
    }
    const data = await getById(`${id}`)
    let items = await getAll('getdata',4,`${category}`)
    if (!data || !items || !items.products) {
      throw 'No data'
    }
    // collection = collection.products
  return {
    props: {
      data,
      collection : items.products
      // will be passed to the page component as props
    },
  }
}
catch (e) {
  console.log('e: ', e);
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  } 
}
}