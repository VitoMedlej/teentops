import Head from 'next/head'
import Navbar from '../src/Components/Navbar/Navbar'
import TopAd from '../src/Components/TopAd/TopAd'
import CategoryMenu from '../src/Components/CategoryMenu/CategoryMenu'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, IconButton } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>FAT SALE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <TopAd></TopAd>
      <Navbar></Navbar>
      <CategoryMenu/>
      <main>
            Hello World
            
            <Box>

            <Box>
              +961 81826445
            </Box>
      <IconButton sx={{
        ':hover':{background:'green'},
            zIndex: 125125,
            top: '88%',
            position: 'fixed',
            right: '2%',
            
            background:'green',color:'white'}}>
          <WhatsAppIcon fontSize='large'/>
      </IconButton>
          </Box>
      </main>
    </>
  )
}
