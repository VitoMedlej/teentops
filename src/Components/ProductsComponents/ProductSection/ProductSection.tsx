import {Box,Pagination} from '@mui/material'
import React from 'react'
import ProductCard from '../../HomeComponents/Cards/ProductCard'

const ProductSection = ({data,setQuickView}:{data:any,setQuickView: (id: string) => void}) => {
      
    return (
        <Box sx={{width:{xs:'100%',md:'80%'}}}> 
            <Box sx={{maxWidth:'lg'}} className='productHolder'>
                      {data && data.length > 0 ? data.map((i:any)=>{

                         return <ProductCard
                         _id={i._id}
                         images={i.images}
                         title={i.title}
                        price={i.price}
                        category={i.category}
                        handleQuickView={setQuickView}
                         key={i._id} sx={{maxWidth:{xs:'95%',sm:'44%',md:'31%',lg:'23%'}}}/>
                      })
                    : <h1>No products found</h1>
                    }
            </Box>
    <Pagination sx={{my:3}} count={1} className='flex center ' />

        </Box>
    )
}

export default ProductSection