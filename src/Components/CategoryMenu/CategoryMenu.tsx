import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CategoryMenu = () => {
  return (
    <Box className='bb CategoryMenu' sx={{display:{xs:'none',sm:'flex'},px:'1.25em',maxWidth:'xl'}}>
       {[1,2,3,4,5].map((item)=>{
            return <Box>
             <Link key={item} href='/'>
            Home Applicants
        </Link>
            </Box>
       })
        
  }
    </Box>
  )
}

export default CategoryMenu