import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Item = ({img,contain,href}:{contain?:boolean,img:string,href?:any}) => {
    return (
        <Box className='auto' sx={{height:'100%',maxHeight:'400px',width:{xs:'95%',sm:'31%',md:'32%'}}}>

        <Link href='/'>
        <Box className='auto '  sx={{height:'250px',width:'100%'}}>
            <img src={img} alt="Category Image" className={`${contain ? 'contain' : '' } img` } />
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
        <Item img={"https://ucarecdn.com/c5254b11-11ee-4c2e-bd32-572db4e1527b/slide002.jpg"} contain/>
        <Item img={"https://ucarecdn.com/992063ac-167b-4c5c-8b97-054d528b80c2/slide003.png"} />
        <Item img={"https://ucarecdn.com/f15ac9e0-0e74-4f56-bb4d-441c81cf9edc/slide001.jpeg"}/>

        
    </Box>
  )
}

export default CategoryImages