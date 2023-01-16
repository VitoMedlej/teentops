import {Box, Button, Typography} from '@mui/material'
import ProductCard from '../Cards/ProductCard'
import SwiperCarousel from '../../SwiperCarousel/SwiperCarousel'


const ProductCollection = ({title} : {
    title: string
}) => {

    return (
        <Box sx={{
            maxWidth: 'lg',
            margin: '1em auto',
            my:'3em',
        }}>
            <Box
                sx={{
                padding:'.5em',
                fontSize: '1.75em',
                fontWeight: '500'
            }}>{title}</Box>
        <Box sx={{display:{xs:"none",md:'flex'},gap:'1em',justifyContent:'space-between'}}>
           {[1,2,3,4].map(item=>{
    
               return <ProductCard  sx={{height:'100%'}} key={item}/>
            })
            
}
            </Box>
            <Box sx={{display:{xs:"flex",md:'none'}}}>
            <SwiperCarousel/>
            </Box>
            <Button
                sx={{
                ':hover': {
                    border: '1px solid black',
                    color: 'black'
                },
                margin: '0 auto',
                display: 'flex',
                mt: '3em',
                justifyContent: 'center',
                border: '1px solid',
                background: 'red',
                color: 'white',
                padding: '.75em 2.75em',
                borderRadius: 0
            }}>View All</Button>
        </Box>
    )
}

export default ProductCollection