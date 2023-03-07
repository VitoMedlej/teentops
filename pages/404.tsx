import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'

const Index = () => {
  return (
    <Box sx={{minHeight:"400px"}}>
        <Navbar/>
        <Box className='flex col auto center' sx={{fontSize:'1.5em',alignItems:'center',py:4}}>
        <Typography component='h1'>

        Sorry! This page was either removed or not found.
        </Typography>
        <Link href='/'>Go Home</Link>
        </Box>
    </Box>
  )
}

export default Index