import React from 'react'
import Navbar from '../../src/Components/Navbar/Navbar'
import Head from 'next/head'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'
import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import ProductCarousel from '../../src/Components/ProductCarousel/ProductCarousel'
import SelectOneForm from '../../src/Components/ProductsComponents/Filter/Forms/SelectOneForm'
// import { QuantityPicker } from 'react-qty-picker';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCollection from '../../src/Components/HomeComponents/ProductCollection/ProductCollection'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Perks from '../../src/Components/HomeComponents/Perks/Perks'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ItemTabs from '../../src/Components/ItemComponents/ItemTabs'
import Link from 'next/link'
import Btn from '../../src/Components/Btn/Btn'
import { QuantityPicker } from '../../src/Components/QuantityPicker/QuantityPicker'
import useCart from '../../src/Hooks/useCart'
import { useRouter } from 'next/router'
import { server } from '../../src/Utils/Server'
import { getAll } from '..'




const btnStyle = {
  gap:'1em',fontSize:'12px',py:'.75em',display:'flex'
}


const Index = ({data,collection}:any) => {
  const {addToCart} = useCart()
  const router = useRouter()
  const item = router.query?.title || router.query?.productId|| 'Item'
  return (
  <>
     <Head>
     <title>Powerhouse electronics | View Product</title>
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
        Powerhouse electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
       <meta name="description" content={`
        Powerhouse electronics is your destination to buy european electronics and home appliances online in Lebanon. Best online shopping store for the latest electronics and home appliances from all brands. We Deliver anywhere in Lebanon
        `} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />   
    </Head>
    <Navbar/>
    <CategoryMenu category={undefined}/>

    <Breadcrumb params={[`${data.category}`,`${item}`]} sx={{mt:'2em'}} />
    <Divider/>
    <Box sx={{justifyContent:'space-between',margin:'0 auto',maxWidth:'lg',display:'flex',px:'1em',pt:'1em',gap:'2em',flexWrap:'wrap'}}>
      <Box sx={{width:{xs:'100%',md:'45%'},maxWidth:'600px'}}>
                <ProductCarousel images={data?.images} mw='600px'/>
      </Box>
      <Box sx={{width:{xs:'100%',md:'50%'}}}>
        <Typography sx={{fontSize:{xs:'1.8em',sm:'2.1em'},pb:'.5em',fontWeight:'500'}}>{data.title}</Typography>
        <Typography className='gray' sx={{fontSize:'.85em',pb:'.5em',fontWeight:'400'}}>Model Id : {data._id}</Typography>
        {
          data?.weight &&
        <Typography sx={{fontSize:'1em',py:'.25em',fontWeight:'500'}} >Items Color: {data.weight}</Typography>
        }
        <Typography sx={{fontSize:'1.25em',py:'.25em',fontWeight:'600'}} className='clr'>${data.price}</Typography>
        {/* <SelectOneForm/> */}
        {/* <SelectOneForm/> */}
      <Box className='flexed wrap' sx={{my:'2em'}}>
        <QuantityPicker min={1} max={20} value={1}/>
      <Btn
      onClick={()=>{addToCart(data?._id,{_id:data._id,price:data.price,img:data.images[0],title:data.title},false);router.push('/cart')}}
                            sx={{...btnStyle,mx:'.25em',minWidth:'150px'}}>Add To Cart
                        <ShoppingCartOutlinedIcon/>
                           </Btn>
                              
                        <Tooltip title='Add to favourites'>

                        <IconButton
                            sx={{
                            border: 'none',
                            ml:'.45em'
                        }}>
                            <FavoriteBorderIcon
                                sx={{
                                mr: '.1em',
                                color: 'red'
                            }}
                                fontSize={'small'}/>
                        </IconButton>
                        </Tooltip>

      </Box>
      <Typography className='gray' sx={{textAlign:'center'}}>or</Typography>
      <a href='https://wa.me/+96170873045' target='_blank'   rel="noreferrer"
      

    

style={{width:'max-content',margin: '0 auto',color:'green',display: 'flex'}}
      >
     <Box
     className='flexed'
     sx={{width:'max-content',gap:'.5em',
     justifyContent:'center', mx:0,padding: '.65em 1.63em',margin:'0 auto',background:'transparent',
     border:'none'}}>Order On WhatsApp
                    <WhatsAppIcon/>
                    </Box> 
                    </a>                          
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

      <Box sx={{mt:'2em',gap:'1em'}}>
    {/* <Box sx={{mt:'2em'}}>
    <Typography color='gray' sx={{pb:'.4em'}}>Delivery:</Typography>
    <Typography color='gray2'>
    Our service is available across Lebanon within 2 to 3 working days. You will receive a confirmation email, in case you couln't find it in your inbox kindly check your junk box.
    </Typography>                          
  </Box> */}
      </Box>
      </Box>
  <ItemTabs description={data?.description?.length> 0 ? data?.title : data?.description}/>
    </Box>
      <ProductCollection data={collection} sx={{my:'6em'}}  Collectiontitle={'Shop Similar Products'}/>
      <Perks/>
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
    }, // will be passed to the page component as props
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