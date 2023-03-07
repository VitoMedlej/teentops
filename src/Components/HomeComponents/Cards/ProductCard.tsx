import {Box, IconButton, Tooltip, Typography} from '@mui/material'
import {useContext, useState} from 'react'
import {useRef} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import {pushState, saveState} from '../../../Utils/LocalstorageFn';
import { CartContext } from '../../../../pages/_app';
const imgs = [`https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/318294245_876818139983894_753731711699002273_n.jpg?stp=c2.0.1196.1020a_dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-ZGFQyCq7RgAX8SeuBT&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=Mjk4NTA5Mzk3NTA2MDM4MTEzNQ%3D%3D.2-ccb7-5&oh=00_AfDBbidoFjer7cuMW7wU3JulYMhkYmW-oCThp_W2YV34Xw&oe=640A1CFD&_nc_sid=6136e7`, `https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/317994094_876128623386179_5518313291654859852_n.jpg?stp=c1.0.798.800a_dst-jpg_e15&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=VXmIdPnKDnYAX_xeCPf&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=Mjk4NDQ2OTg2NzA3MjUyNDE2OA%3D%3D.2-ccb7-5&oh=00_AfCPlvkaNuURKMX-TOi3UnZpYw5HJ69a9lX76u35d8wJ2w&oe=6409E10A&_nc_sid=6136e7`]

const ProductCard = ({sx, handleQuickView,className} : {
    className?: string,
    handleQuickView ?: (id: string)=> void;
    sx?: any
}) => {

    const ref : any = useRef()
    
    const [cartOpen, setCartOpen] = useContext(CartContext);
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
    const addToCart = () => {
        pushState('usercart',{qty:1,img:'https://burst.shopifycdn.com/photos/modern-time-pieces.jpg?width=1200&format=pjpg&exif=1&iptc=1'
        ,id:'myobjectid',name:'My Object Name',price:100,shortDesc:'foobarbaz'})
        setCartOpen(true)
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
                    ref={ref} src={currentImg} className='img contain pointer' alt="Product Image"/>
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
                className='titleMax'
                onClick={()=>handleClick()}
                    sx={{
                    
                    pt: '.25em',
                    cursor:'pointer',
                    width:'100%',
                    // wordBreak:'break-all',
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
                <IconButton
                onClick={()=>addToCart()}
                sx={{':hover':{background:'#eaeaea'}}}>
                    <ShoppingCartIcon />
                </IconButton>
                </Tooltip>
            </Box>

        </Box>
    )
}

export default ProductCard