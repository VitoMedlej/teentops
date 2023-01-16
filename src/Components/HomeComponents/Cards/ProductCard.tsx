import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import {useState} from 'react'
import {useRef} from 'react'




const imgs = [`https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer8_a1d3ad3d-5aed-4ba0-9135-73c040341c7f.jpg?v=1671539980&width=360`, `https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer11.jpg?v=1671539939&width=360`]

const ProductCard = ({sx,className}:{className?:string,sx?:any}) => {

    const ref : any = useRef()
    const [currentImg,
        setCurrentImg] = useState(imgs[0])
    const handleonMouseIn = () => {
        if (ref
            ?.current && imgs.length > 1) {
            setCurrentImg(imgs[1]);
        }
    }
    const handleonMouseOut = () => {
        if (ref
            ?.current && imgs.length > 1) {
            setCurrentImg(imgs[0]);
        }
    }
  return (
    <Box
    onMouseOver={() => handleonMouseIn()}
    onMouseOut={() => handleonMouseOut()}
    
    sx={{
        maxHeight: '600px',
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden',
        ...sx,
}}>
    <Link className='link scale' href='/'>
        <img ref={ref} src={currentImg} className='img' alt="Product Image"/>
        <Typography
            sx={{
            py: '.25em',
            fontSize: '1.2em'
        }}>Some scam probably 100g</Typography>
    </Link>
    <Typography
        sx={{
        color: 'black',
        fontSize: '1.2em',
        fontWeight: '300'
    }}>$2.99</Typography>
</Box>
  )
}

export default ProductCard