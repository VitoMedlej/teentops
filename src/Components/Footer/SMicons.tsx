import { Box } from '@mui/material';
import React from 'react'
import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
import {TfiFacebook} from 'react-icons/tfi';


const sm = [
    {
        Icon:FaInstagram,
        href:'https://www.instagram.com/teen__tops___electronic/'
    },
    {Icon:FaWhatsapp,href:'https://wa.me/76600541'},
    {

    Icon:TfiFacebook,   href:'https://www.facebook.com/profile.php?id=100076163602459/'
}]
const SMicons = () => {
  return (
    <Box className='row flex' sx={{mx:.15,mt:'.55em',maxWidth:'200px'}}>

    {sm.map((item)=>{
      return <a key={item.href}  className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>

            <item.Icon color='black' size='1.15em'/>
         </a>
    })}
    </Box>
  )
}

export default SMicons