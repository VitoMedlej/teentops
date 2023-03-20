import {Box,Pagination} from '@mui/material'
import React, { useEffect } from 'react'
import ProductCard from '../../HomeComponents/Cards/ProductCard'
import { useRouter } from 'next/router'

const ProductSection = ({data,count,handlePagination,setQuickView}:{count:number,data:any,handlePagination:(val:number)=>void,setQuickView: (id: string) => void}) => {
    // const [page, setPage] = React.useState(1);
    // useEffect(() => {
    //     let length = Number(data.length / 12 > 1 ? data.length / 12 : 2 )
    //     if (length) {
    //         setPage(length)
    //     }
    // }, [])
    // useEffect(() => {
        // handlePagination
    // }, [third])
    const router = useRouter()
    const counter = router.query.products === 'products' 
    const counted = counter ? count / 12 < 0 ? 1 : Math.ceil(count / 12) : Math.ceil(data?.length / 12)
    return (
        <Box sx={{width:{xs:'100%',md:'80%'}}}> 
            <Box sx={{maxWidth:'lg'}} className='productHolder'>
                      {data && data.length > 0 ? data.map((i:any)=>{
   if (!i.title || !i.price) return;
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
    <Pagination
    onChange={(e,val)=>{
        // setPage(val)
        handlePagination(val)
    }}
    sx={{my:3}} count={counted > 1 ? counted : 1 } className='flex center ' />

        </Box>
    )
}

export default ProductSection