import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Item = ({img,contain,href}:{contain?:boolean,img:string,href?:any}) => {
    return (
        <Box className='auto' sx={{height:'100%',maxHeight:'400px',width:{xs:'95%',sm:'31%',md:'32%'}}}>

        <Link href={'/category/products'}>
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
        <Item img={"https://ucarecdn.com/3502895c-910c-4441-a042-f1c96592a1c2/slide002.jpg"} contain/>
        {/* <Item img={"https://ucarecdn.com/5b188c8d-f471-43e2-9d64-6c1a00fa0a43/slide003.png"} /> */}
        <Item img={"https://ucarecdn.com/165bb13d-66d3-4dd9-9faa-edd4fbe27488/slide001.jpg"}/>

        
    </Box>
  )
}

export default CategoryImages