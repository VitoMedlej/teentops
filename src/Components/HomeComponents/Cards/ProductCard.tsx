import {Box, IconButton, Tooltip, Typography} from '@mui/material'
import {useContext, useState} from 'react'
import {useRef} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
// import Link from 'next/link';
// import {loadState, pushState, saveState} from '../../../Utils/LocalstorageFn';
// import { CartContext } from '../../../../pages/_app';
import useCart from '../../../Hooks/useCart';
import Btn from '../../Btn/Btn';
const defaultImages = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTvTcD234f-GRtvhN-xdfrqckgfNZbgS6fRdIeAQ-vBdHlkvqjmM6MZQfmFBHpjxoc1Q&usqp=CAU']
const ProductCard = ({title,_id,price,images,category,sx, handleQuickView,className} : {
    className?: string,
    handleQuickView ?: (id: string)=> void;
    sx?: any,
    title: string;
    price: number;
    _id: string;
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
                                display: {
                                    xs: 'none',
                                    sm: 'flex'
                                },
                                boxShadow: '1px 1px 3px grey'

                            }}>
                                <RemoveRedEyeIcon fontSize={'small'}/>
                            </IconButton>
                        </Tooltip>

                        <Tooltip placement='left' title={'Add To Favourites'}>
                            <IconButton
                                sx={{
                                ':hover': {
                                    background: 'white'
                                },
                                background: 'white',
                                color: '#333',
                                boxShadow: '1px 1px 3px grey'
                            }}>
                                <FavoriteBorderIcon fontSize={'small'}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Box>
                
                <Typography
                className='titleMax'
                onClick={()=>handleClick()}
                    sx={{
                    
                    pt: '.25em',
                    cursor:'pointer',
                    width:'100%',
                    // wordBreak:'break-all',
                    mt: '.25em',
                    fontSize: '1em'
                }}>{title}</Typography>

                <span className='gray' style={{fontSize:'.76em'}}>
                    {category}
                    </span>
            <Box sx={{mx:'.15em',justifyContent:'space-between'}} className='flexed'>
                <Typography
                    className='clr'
                    sx={{
                    fontSize: '1em'
                }}>${price}</Typography>
                {/* boxShadow:'1px 1px 3px #0000005e', */}
                {/* <IconButton
                onClick={()=>addToCart(_id,{price,img,title,_id})}
                sx={{':hover':{background:'#eaeaea'}}}>
                    <ShoppingCartIcon />
                </IconButton> */}
                <Tooltip title='Add To Cart' placement='left'>
                <Btn
                v2={true}
                onClick={()=>addToCart(_id,{price,img,title,_id})}
                sx={{':hover':{background:'#935525',color:'white',border:'1px solid #935525'}}}>
                       <Typography
                   className='flex items-center'
                   sx={{fontSize:'.75em',gap:'.3em'}}>

                   add to cart <ShoppingCartIcon fontSize='small' />
                   </Typography>
                </Btn>
                </Tooltip>
            </Box>

        </Box>
    )
}

export default ProductCard