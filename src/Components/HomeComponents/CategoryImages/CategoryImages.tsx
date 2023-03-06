import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Item = ({img,href}:{img:string,href?:any}) => {
    return (
        <Box className='auto' sx={{height:'100%',maxHeight:'400px',width:{xs:'95%',sm:'31%',md:'32%'}}}>

        <Link href='/'>
        <Box className='auto '  sx={{width:'100%'}}>
            <img src={img} alt="Category Image" className="img" />
        </Box>
        </Link>
        </Box>
    )
}
const CategoryImages = () => {
  return (
    <Box
    className='auto between wrap flex'
    sx={{
        maxWidth: 'lg',
        // gap:{xs:'.5em',sm:'.35em'}

    }}>
        <Item img={"http://hamdanelectronics.com/img/cms/HMD_Website_Banners_040320-01.png"}/>
        <Item img={"http://hamdanelectronics.com/img/cms/HMD_Website_Banners_040320-02.png"}/>
        <Item img={"http://hamdanelectronics.com/img/cms/HMD_Website_Banners_040320-03.png"}/>

        
    </Box>
  )
}

export default CategoryImages