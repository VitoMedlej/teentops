import React from 'react'
import Navbar from '../../src/Components/Navbar/Navbar'
import Head from 'next/head'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'
import { Box, Button, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import ProductCarousel from '../../src/Components/ProductCarousel/ProductCarousel'
import SelectOneForm from '../../src/Components/ProductsComponents/Filter/Forms/SelectOneForm'
import { QuantityPicker } from 'react-qty-picker';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCollection from '../../src/Components/HomeComponents/ProductCollection/ProductCollection'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Perks from '../../src/Components/HomeComponents/Perks/Perks'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ItemTabs from '../../src/Components/ItemComponents/ItemTabs'
import Link from 'next/link'
import Btn from '../../src/Components/Btn/Btn'




const btnStyle = {
  gap:'1em',fontSize:'12px',py:'.75em',display:'flex'
}


const Index = () => {
  return (
  <>
     <Head>
      <title>FAT SALE</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
        
    </Head>
    <Navbar/>
    <CategoryMenu/>

    <Breadcrumb sx={{mt:'2em'}} />
    <Divider/>
    <Box sx={{justifyContent:'space-between',margin:'0 auto',maxWidth:'lg',display:'flex',px:'1em',pt:'1em',gap:'2em',flexWrap:'wrap'}}>
      <Box sx={{width:{xs:'100%',md:'45%'},maxWidth:'600px'}}>
                <ProductCarousel mw='600px'/>
      </Box>
      <Box sx={{width:{xs:'100%',md:'50%'}}}>
        <Typography sx={{fontSize:{xs:'1.8em',sm:'2.1em'},pb:'.5em',fontWeight:'500'}}>Some BBIBBLE FAITWT TIQWTJ TIQW 02</Typography>
        <Typography className='gray' sx={{fontSize:'.85em',pb:'.5em',fontWeight:'400'}}>Model Number : tvx5704</Typography>
        
        <Typography sx={{fontSize:'1.25em',py:'.25em',fontWeight:'600'}} className='clr'>LBP 900,000</Typography>
        {/* <SelectOneForm/> */}
        <SelectOneForm/>
      <Box className='flexed' sx={{my:'2em'}}>
        <QuantityPicker min={1} max={10} value={1}/>
      <Btn
                            sx={btnStyle}>Add To Cart
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
<Link href='/' style={{width:'max-content',margin: '0 auto',color:'green',display: 'flex'}}>
     <Box
     className='flexed'
     sx={{width:'max-content',gap:'.5em',
     justifyContent:'center', mx:0,padding: '.65em 1.63em',margin:'0 auto',background:'transparent',
     border:'none'}}>Order On WhatsApp
                    <WhatsAppIcon/>
                    </Box> 
     </Link>                            
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
  <ItemTabs/>
    </Box>
      <ProductCollection sx={{my:'6em'}}  title={'Shop Similar Products'}/>
      <Perks/>
  </>
  )
}

export default Index