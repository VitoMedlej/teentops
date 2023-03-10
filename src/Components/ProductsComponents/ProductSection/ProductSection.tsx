import {Box,Pagination} from '@mui/material'
import React from 'react'
import ProductCard from '../../HomeComponents/Cards/ProductCard'

const ProductSection = ({setQuickView}:{setQuickView: (id: string) => void}) => {
      
    return (
        <Box sx={{width:{xs:'100%',md:'80%'}}}> 
            <Box sx={{maxWidth:'lg'}} className='productHolder'>
                      {[1,2,3,4,5].map(i=>{

                         return <ProductCard
                         handleQuickView={setQuickView}
                         key={i} sx={{maxWidth:{xs:'95%',sm:'44%',md:'31%',lg:'23%'}}}/>
                      })}
            </Box>
    <Pagination sx={{my:3}} count={3} className='flex center ' />

        </Box>
    )
}

export default ProductSection