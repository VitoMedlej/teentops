import { Box } from '@mui/material'
import React from 'react'

const ResponsiveImage = ({handleClick,defaultImg,img2}:any) => {
    return (
        <>
           {/* <Box
            onClick={handleClick}
           sx={{display:{xs:'none',sm:'block'}}}>
            <img className='img' src={defaultImg} alt="" />
           </Box>
           <Box 
            onClick={handleClick}
           
           sx={{display:{sm:'none'}}}>
            <img src={img2} className='img' alt="" />
           </Box> */}
           <picture className='img'>
  <source media="(min-width:600px)" srcSet={defaultImg}/>
  <img className='img' src={img2} />
</picture>
        </>

    )
}

export default ResponsiveImage