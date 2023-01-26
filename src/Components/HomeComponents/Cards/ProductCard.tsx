import {Box, IconButton, Tooltip, Typography} from '@mui/material'
import {useState} from 'react'
import {useRef} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Link from 'next/link';

const imgs = [`https://www.ishtari.com/image/cache/data/system_product/80000/72400/72369/01-192x264.jpg?207`, `https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer11.jpg?v=1671539939&width=360`]

const ProductCard = ({sx, handleQuickView,className} : {
    className?: string,
    handleQuickView ?: (id: string)=> void;
    sx?: any
}) => {

    const ref : any = useRef()
    const [currentImg,
        setCurrentImg] = useState(imgs[0])
        const router = useRouter()
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
    const handleClick = () => {
        router.push('/product/foo-bname')
    }
    return (
        <Box
        // onClick={()=>router.push('/product/product-name')}
            onMouseOver={() => handleonMouseIn()}
            onMouseOut={() => handleonMouseOut()}
            sx={{
            position: 'relative',
            maxHeight: '600px',
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
                    ref={ref} src={currentImg} className='img pointer' alt="Product Image"/>
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
                                onClick={()=>handleQuickView ? handleQuickView('someId') : ''}
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
                onClick={()=>handleClick()}
                    sx={{
                    pt: '.25em',
                    cursor:'pointer',
                    width:'max-content',
                    mt: '.25em',
                    fontSize: '1em'
                }}>Some scam probably 100g</Typography>

                <span className='gray' style={{fontSize:'.76em'}}>
                    Addidas
                    </span>
            <Box sx={{mx:'.15em',justifyContent:'space-between'}} className='flexed'>
                <Typography
                    className='clr'
                    sx={{
                    fontSize: '1em'
                }}>299.000 LBP</Typography>
                <Tooltip title='Add To Cart' placement='left'>
                {/* boxShadow:'1px 1px 3px #0000005e', */}
                <IconButton sx={{':hover':{background:'#eaeaea'}}}>
                    <ShoppingCartIcon/>
                </IconButton>
                </Tooltip>
            </Box>

        </Box>
    )
}

export default ProductCard