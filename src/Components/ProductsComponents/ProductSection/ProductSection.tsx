import {Box} from '@mui/material'
import React from 'react'
import ProductCard from '../../HomeComponents/Cards/ProductCard'

const ProductSection = () => {
    return (
        <Box sx={{width:{xs:'100%',md:'75%'}}}> 
            <Box sx={{maxWidth:'lg'}} className='productHolder'>
                      {[1,2,3,4,5].map(i=>{

                         return <ProductCard key={i} sx={{maxWidth:{xs:'95%',sm:'44%',md:'31%',lg:'23%'}}}/>
                      })}
            </Box>
        </Box>
    )
}

export default ProductSection