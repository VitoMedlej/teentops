import {Box, IconButton, Tooltip, Typography} from '@mui/material'
import Link from 'next/link'
import {useState} from 'react'
import {useRef} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const imgs = [`https://piecesnmore.com/wp-content/uploads/2023/01/Backstage-Angel.png`, `https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer11.jpg?v=1671539939&width=360`]

const ProductCard = ({sx, className} : {
    className?: string,
    sx?: any
}) => {

    const ref : any = useRef()
    const [currentImg,
        setCurrentImg] = useState(imgs[0])
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
    return (
        <Box
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
            <Link
                style={{
                position: 'relative'
            }}
                className='link scale'
                href='/'>
                <Box
                    sx={{
                    position: 'relative',
                   
                }}>
                    <img ref={ref} src={currentImg} className='img' alt="Product Image"/>
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
                                sx={{
                                ':hover': {
                                    background: 'white'
                                },
                                background: 'white',
                                color: '#333',
                                display: {
                                    xs: 'none',
                                    sm: 'flex'
                                }
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
                                color: '#333'
                            }}>
                                <FavoriteBorderIcon fontSize={'small'}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Box>

                <Typography
                    sx={{
                    py: '.25em',
                    mt: '.25em',
                    fontSize: '1.1em'
                }}>Some scam probably 100g</Typography>

            </Link>
            <Box sx={{mx:'.15em',justifyContent:'space-between'}} className='flexed'>
                <Typography
                    className='clr'
                    sx={{
                    fontSize: '1em'
                }}>299.000 LBP</Typography>
                <Tooltip title='Add To Cart' placement='left'>

                <IconButton sx={{boxShadow:'1px 1px 3px #0000005e',':hover':{background:'#eaeaea'}}}>
                    <ShoppingCartIcon/>
                </IconButton>
                </Tooltip>
            </Box>

        </Box>
    )
}

export default ProductCard