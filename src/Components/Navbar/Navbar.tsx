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
        const cart = loadState('usercart') || []
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
        className='bg'
        sx={{
            // background: '#232323',

            flexGrow: 1
        }}>
            <AppBar
            className='bb bg'
                sx={{
                    maxWidth:'xl',
                    margin:'0 auto',
                // background: 'white',
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
                        width:'95px'
                    }}>
                        <Link href='/' color='inherit'>
                            <img
                            className='img'
                            src="https://scontent.fbey22-1.fna.fbcdn.net/v/t39.30808-6/332283481_557200736388103_8455728849948258771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GenbSrn9aNEAX_Kq0Dy&_nc_ht=scontent.fbey22-1.fna&oh=00_AfBTbHltR6y0ifLPlgDazEAaHOYenFmdN1w1BxlMTcHD6w&oe=642D2EFF"
                            alt="Powerhouse electronics eshop logo"/>
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
                            <Box 
                            sx={{    width: '100%',
                                justifyContent: 'end',}}
                            className='flex right'>

                            <IconButton
                             sx={{display:{xs:'flex'},color:'white'}}
                            onClick={()=>setOpenModal(!openModal)}
                            color='inherit'>
 
                             <AiOutlineSearch/>
                             {/* <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            Search
                            </Typography> */}
                         </IconButton> 


                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}
                        sx={{color:'white'}}
                        >
                        <Badge color='warning' badgeContent={`${localCart.length || '0'}`} >

                            <AiOutlineShoppingCart
                            color='white'
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

                            <FavoriteBorderIcon sx={{color:'white'}} />
                            </Badge>
                            <Typography sx={{color:'white',display:{xs:'none',sm:'flex'}}} component='p'>
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
                            color:'white',
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