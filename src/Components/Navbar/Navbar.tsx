import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useContext, useEffect, useState } from 'react';
import { CartContext, DrawerContext } from '../../../pages/_app';
import SearchModal from './SearchModal';
import Link from 'next/link';
// import SearchInput from './SearchInput';
import { Badge, Typography } from '@mui/material';
import { loadState } from '../../Utils/LocalstorageFn';
import { useRouter } from 'next/router';
// import SideBar from '../Drawer/SideBar';
import {AiOutlineShoppingCart,AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
    const [open, setOpen] = useContext(DrawerContext);
    const [openModal, setOpenModal] = useState(false);
    const [localCart, setLocalCart] = useState([]);
    const [q,setQ] = useState('')
    const [cartOpen, setCartOpen] = useContext(CartContext);
    
    // const localCart = [1]
    useEffect(() => {
        const cart = loadState('usercart2') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])
    
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      if (q.length > 2) {
        router.push(`/category/products?limit=80&search=${q}`)
      }
    }
   
    
    return (
        <Box 
        className=''
        sx={{
            background: 'white',
border:'none',
            flexGrow: 1
        }}>
            <AppBar
            // className='bb '
                sx={{
            background: 'white',

                    maxWidth:'xl',
                    margin:'0 auto',
                // background: 'black',
                // color: '#232323',
            // background: '#232323',

                boxShadow: 'none'
            }}position="static">
                <Toolbar sx={{
                    position: 'relative'
                }}>
               
                    <Box
                        sx={{
                        mx:{sm:'1em'},
                        // position: 'absolute',
                        // right: '50%',
                        // transform: 'translateX(50%)'
                        // ,
                        width:'75px'
                    }}>
                        <Link href='/' color='inherit'>
                            <img
                            className='img'
                            src={`https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png`}
                            alt="Teen Tops electronics eshop logo"/>
                        </Link>
                    </Box>
                  
                    <Box
                        sx={{
                        width: '100%',
                        // justifyContent: 'flex-end',
                        justifyContent: {xs:'right',sm:'left'},
                        display: 'flex',
                    }}>
                        
                        <Box >
                            {/* <SearchInput
                            onSubmit={handleSearch}
                            value={q}
                            setValue={setQ}
                            sx={{display:{xs:'none',sm:'flex'}}}/> */}
                            </Box>
                            <Box sx={{display:{xs:'none',sm:'flex'},justifyContent:'center',alignItems:'center',color:'black',flex:1,gap:'1.25em'}}>
                            <Box  sx={{cursor:'pointer'}}  onClick={()=>router.push(`/`)}>
                        <Typography sx={{
                            fontWeight: '600',
                            color:"black",
                        textTransform: 'capitalize'
                    }} component='h4'>
                        Home
                        </Typography>

                </Box>
                <Box  sx={{cursor:'pointer'}}  onClick={()=>router.push(`/category/products`)}>
                        <Typography sx={{
                            fontWeight: '600',
                            color:"black",
                        textTransform: 'capitalize'
                    }} component='h4'>
                        Products
                        </Typography>

                </Box>
                <Box  sx={{cursor:'pointer'}}  onClick={()=>router.push(`/checkout`)}>
                        <Typography sx={{
                            fontWeight: '600',
                            color:"black",
                        textTransform: 'capitalize'
                    }} component='h4'>
                        Checkout
                        </Typography>

                </Box>
                    </Box>
                            <Box 
                            sx={{    
                                // width: '100%',
                                justifyContent: 'end',}}
                            className='flex right'>

                            <IconButton
                             sx={{display:{xs:'flex'},color:'black'}}
                            onClick={()=>setOpenModal(!openModal)}
                            color='inherit'>
 
                             <AiOutlineSearch/>
                             {/* <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            Search
                            </Typography> */}
                         </IconButton> 


                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}
                        sx={{color:'black'}}
                        >
                        <Badge color='primary' badgeContent={`${localCart.length || '0'}`} >

                            <AiOutlineShoppingCart
                            color='black'
                            //  sx={{}}
                              />
                            </Badge>
                            {/* <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            Cart
                            </Typography> */}
                        </IconButton>

                        {/* <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}
                        sx={{display:{xs:'none',sm:'flex'}}}
                        >
                        <Badge color='warning' badgeContent={`0`} >

                            <FavoriteBorderIcon sx={{color:'black'}} />
                            </Badge>
                            <Typography sx={{color:'black',display:{xs:'none',sm:'flex'}}} component='p'>
                            favourites
                            </Typography>
                        </IconButton> */}
                        <IconButton
                        
                        onClick={()=>setOpen(!open)}
                        size="large"
                        edge="start"
                        // color="inherit"
                        aria-label="menu"
                        sx={{
                            color:'black',
                            margin:'0.1em',
                            display:{sm:'none'},
                    }}>
                        <AiOutlineMenu/>
                    </IconButton>
                    </Box>

                    </Box>
                </Toolbar>
            </AppBar>
            <SearchModal openModal={openModal} setOpenModal={setOpenModal}/>
        </Box>
    );
}