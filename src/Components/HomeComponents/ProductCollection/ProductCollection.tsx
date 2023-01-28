import {Box, Button, Typography} from '@mui/material'
import ProductCard from '../Cards/ProductCard'
import SwiperCarousel from '../../SwiperCarousel/SwiperCarousel'
import { Dispatch, SetStateAction } from 'react'
import Btn from '../../Btn/Btn'

const ProductCollection = ({sx,title,setQuickView} : {
    title: string,
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    const handleQuickView = (id: string) => {
       if (setQuickView) {
           setQuickView({isOpen:true,productId: id})
       } 
    }
    return (
        <Box
            sx={{
            maxWidth: 'lg',
            margin: '1em auto',
            my: '3em',
            ...sx,
        }}>
            <Box
                sx={{
                padding: '.5em',
                fontSize: '1.75em',
                fontWeight: '500'
            }}>{title}</Box>
            <Box
                sx={{
                display: {
                    xs: "none",
                    md: 'flex'
                },
                gap: '1em',
                justifyContent: 'space-between'
            }}>
                {[1, 2, 3, 4].map(item => {

                    return <ProductCard
                    handleQuickView={handleQuickView}
                        sx={{
                        height: '100%'
                    }}
                        key={item}/>
                })
}
            </Box>
            <Box
                sx={{
                display: {
                    xs: "flex",
                    md: 'none'
                }
            }}>
                <SwiperCarousel/>
            </Box>
            <Btn v2={true}
                sx={{fontSize:'11px',margin:'1em auto'}}>View All</Btn>
        </Box>
    )
}

export default ProductCollection