import {Box, IconButton, Tooltip, Typography} from '@mui/material'
import {useContext, useState} from 'react'
import {useRef} from 'react'
import {MdFavoriteBorder} from 'react-icons/md';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useRouter } from 'next/router';
// import Link from 'next/link';
// import {loadState, pushState, saveState} from '../../../Utils/LocalstorageFn';
// import { CartContext } from '../../../../pages/_app';
import useCart from '../../../Hooks/useCart';
import Btn from '../../Btn/Btn';
const defaultImages = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTvTcD234f-GRtvhN-xdfrqckgfNZbgS6fRdIeAQ-vBdHlkvqjmM6MZQfmFBHpjxoc1Q&usqp=CAU']
const ProductCard = ({title,_id,price,images,newPrice,category,sx, handleQuickView,className} : {
    className?: string,
    handleQuickView ?: (id: string)=> void;
    sx?: any,
    title: string;
    price: number;
    _id: string;
    newPrice ?: number;
    images: string[] | any[];
    category: string;
}) => {
    let img = images?.length > 0 ? images[0] : defaultImages
    const ref : any = useRef()
    const {addToCart}= useCart()    
    const [currentImg,
        setCurrentImg] = useState(img)
        const router = useRouter()
    const handleonMouseIn = () => {
        if (ref
            ?.current && images?.length > 1) {
            setCurrentImg(images[1]);
        }
    }
    const handleonMouseOut = () => {
        if (ref
            ?.current && images?.length > 1) {
            setCurrentImg(images[0]);
        }
    }
    const handleClick = () => {
        router.push(`/product/${_id}?title=${`${title}`.substring(0,100).replace(/\s+/g, '-')}&category=${category ? category : 'products'}`)
        
    }

    function getDiscountPercentage(oldPrice: number, newPrice?: number): number | undefined {
        if (!oldPrice || !newPrice || !Number(oldPrice) || !Number(newPrice)) {
          return undefined;
        }
        const discount = Number(oldPrice) - Number(newPrice);
        const discountPercentage = (discount / oldPrice) * 100;
        return Number(discountPercentage.toFixed(1)) || undefined;
      }
      
    return (
        <Box
        // onClick={()=>router.push('/product/product-name')}
            onMouseOver={() => handleonMouseIn()}
            onMouseOut={() => handleonMouseOut()}
            sx={{
                boxShadow:'1px 1px 3px #eeeeee',
            position: 'relative',
            minHeight: '440px',
            maxHeight: '640px',
            maxWidth:'500px',
            width: '100%',
            overflow: 'hidden',
            ...sx,
            ':hover': {
                '& .productOptions': {
                    display: 'flex'
                }
            }
        }}>
            {/* <Link
                style={{
                position: 'relative'
            }}
                className='link scale'
                href='/'> */}
                <Box
                    sx={{
                    position: 'relative',
                   
                }}>
                <Box sx={{height:'350px'}}>
                    <img
                    onClick={handleClick}
                    style={{maxHeight:'400px'}}
                    ref={ref} src={ currentImg} className='img contain pointer' alt="Product Image"/>
                    </Box>
                  {getDiscountPercentage(price,newPrice) &&  <Box sx={{position:'absolute',borderRadius:'50%',top:'0%',left:'1%',zIndex:3123, width:'50px',height:'50px',background:'red'}}>
                  <Typography className='flex center items-center' sx={{fontSize:'.75em',alignItems:'center',justifyContent:'center',height:'100%',color:'white'}}>

                      -{getDiscountPercentage(price,newPrice) }%
                  </Typography>
                    </Box>}
                    <Box
                        className='productOptions'
                        sx={{
                        bottom: {
                            xs: '85%',
                            sm: '50%'
                        },
                        right: '2%',
                        transform: {
                            sm: 'translateY(50%)'
                        },
                        top : {
                            xs:'8%',
                            sm:'auto'
                        },
                        display: {
                            xs: 'flex',
                            sm: ' none'
                        },
                        flexDirection: 'column',
                        position: 'absolute',
                        gap: '.15em'
                    }}>
                        <Tooltip placement='left' title={'Quick View'}>
                            <IconButton
                                onClick={()=>handleQuickView && _id ? handleQuickView(`${_id}`) : ''}
                                sx={{
                                ':hover': {
                                    background: 'white'
                                },
                                background: 'white',
                                color: '#333',
                                width:'40px',
                                height:'40px',
                                display: {
                                    // xs: 'none',
                                    sm: 'flex'
                                },
                                boxShadow: '1px 1px 3px grey'

                            }}>
                                <AiOutlineEye fontSize={'.8em'}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip placement='left' title={'Add To Favourites'}>
                            <IconButton
                                sx={{
                                ':hover': {
                                    background: 'white'
                                },
                                width:'40px',
                                height:'40px',
                                background: 'white',
                                color: '#333',
                                boxShadow: '1px 1px 3px grey'
                            }}>
                                <MdFavoriteBorder fontSize={'.8em'}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Box>
                <Box sx={{width:'100%',textAlign:'center'}}>

                <span className='gray' style={{fontSize:'.76em'}}>
                    {category}
                    </span>
                </Box>
                <Typography
                className='titleMax'
                onClick={()=>handleClick()}
                    sx={{
                    
                    pt: '.25em',
                    textAlign:'center',
                    cursor:'pointer',
                    width:'100%',
                    fontWeight:'600',
                    mt: '.25em',
                    fontSize: '.98em'
                }}>{title ? title : 'Product' }</Typography>

                
            <Box sx={{mx:'.15em',display:'flex',justifyContent:'space-between'}} className='flexed col'>
       {newPrice ? <Typography
                    className={'clr2'}
                    sx={{
                    textAlign:'center',
                        pb:1,
                        fontWeight:'600',
                        width:'100%',
                    fontSize: '1em'
                }}>
                    <s>
                    ${price}
                    </s>
                    {' '}
                    <span style={{color:'red'}}>${newPrice}</span>
                    
                     </Typography>
                     
                    : 

                    <Typography
                    className={'clr2'}
                    sx={{
                    textAlign:'center',
                        pb:1,
                        fontWeight:'600',
                        width:'100%',
                    fontSize: '1em'
                }}>
                 
                   ${price || 0}
                   
                    
                     </Typography>
                    }
             
            


                <Tooltip title='Add To Cart' placement='left'>
                <Btn
                onClick={()=>addToCart(_id,{price,img,title,_id})}
                sx={{
                    background:'#0068db',
                    border:'1px solid #0068db',
                    borderRadius:2,
                    width:'90%',mt:'.5em',':hover':{background:'#0068db',color:'white',border:'1px solid #0068db'}}}>
                       <Typography
                   className='flex items-center'
                   sx={{fontSize:'.85em',gap:'.3em'}}>

                   add to cart <AiOutlineShoppingCart fontSize='2em'  />
                   </Typography>
                </Btn>
                </Tooltip>
            </Box>

        </Box>
    )
}

export default ProductCard