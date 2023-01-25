import { Box } from '@mui/material'
import React from 'react'

const ResponsiveImage = ({handleClick,defaultImg,img2}:any) => {
    return (
        <>
           <Box
            onClick={handleClick}
           sx={{display:{xs:'none',sm:'block'}}}>
            <img className='img' src={defaultImg} alt="" />
           </Box>
           <Box 
            onClick={handleClick}
           
           sx={{display:{sm:'none'}}}>
            <img src={img2} className='img' alt="" />
           </Box>
        </>

    )
}

export default ResponsiveImage