import {Box} from '@mui/material'
import SwiperCarousel from '../../SwiperCarousel/SwiperCarousel'
import { Dispatch, SetStateAction } from 'react'
import Btn from '../../Btn/Btn'
import Link from 'next/link'
import { IProduct } from '../../../Types/Types'
import {BsArrowUpRight} from 'react-icons/bs'
const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    data: IProduct[] | null,
    
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
                textAlign:'center',
            
                fontWeight: '300'
            }}>{Collectiontitle}</Box>
                  <Link  href='/category/products' className="decor-none">
<Btn
className='clr2'
    sx={{
        backgroundColor:'white',
        color:'black !important',
        borderBottom:'1px solid #00000026',gap:'.5em',fontSize:'11px',padding:'.75em 3.5em',margin:'0em auto',':hover':{color:'black !important'}}}>View All
    <BsArrowUpRight/>
    </Btn>
    </Link>
            {/* <Box
                sx={{
                display: {
                    xs: "none",
                    md: 'flex'
                },
                gap: '1em',
                justifyContent: 'space-between'
            }}>
            
                {data && data.length > 0 ? data.map(item => {
                        if (!item._id || !item?.title) return;
                    return <ProductCard
                        title={item.title}
                        images={item.images}
                        price={item.price}
                        _id={item._id}
                        category={item.category}
                        handleQuickView={handleQuickView}
                        sx={{
                        height: '100%'
                    }}
                        key={item._id}/>
                })
:
<Typography>
    No products found!
</Typography>
}
            </Box> */}
            <Box
                sx={{
                display: {
                    xs: "flex",
                    // md: 'none'
                }
            }}>
                <SwiperCarousel
                delay={delay}
                      handleQuickView={handleQuickView}
                data={data && data.length >0 && data?.slice(0,25)}/>
            </Box>
      
        
                </Box>
                
                )
                
            }

export default ProductCollection