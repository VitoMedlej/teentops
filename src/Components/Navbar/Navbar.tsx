import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useEffect, useState } from 'react';
import { CartContext, DrawerContext } from '../../../pages/_app';
import SearchModal from './SearchModal';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { Badge, Typography } from '@mui/material';
import { loadState } from '../../Utils/LocalstorageFn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/router';
import SideBar from '../Drawer/SideBar';


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
        router.push(`/category/products?q=${q}`)
      }
    }
   
    
    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar
                className='bb'
                sx={{
                    maxWidth:'xl',
                    margin:'0 auto',
                background: 'white',
                color: 'black',
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
                            src="https://ucarecdn.com/811a2290-2fb1-434e-b3a4-07428e96ee98/001.png"
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
                            <SearchInput
                            onSubmit={handleSearch}
                            value={q}
                            setValue={setQ}
                            sx={{display:{xs:'none',sm:'flex'}}}/>
                            </Box>
                            <Box 
                            sx={{    width: '100%',
                                justifyContent: 'end',}}
                            className='flex right'>

                            <IconButton
                             sx={{display:{xs:'flex',sm:'none'}}}
                            onClick={()=>setOpenModal(!openModal)}
                            color='inherit'>
 
                             <SearchOutlinedIcon/>
 
                         </IconButton> 


                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}

                        color='inherit'>
                        <Badge color='warning' badgeContent={`${localCart.length || '0'}`} >

                            <LocalMallOutlinedIcon sx={{color:'black'}} />
                            </Badge>
                            <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            cart
                            </Typography>
                        </IconButton>


                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}
                        sx={{display:{xs:'none',sm:'flex'}}}
                        color='inherit'>
                        <Badge color='warning' badgeContent={`0`} >

                            <FavoriteBorderIcon sx={{color:'black'}} />
                            </Badge>
                            <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            favourites
                            </Typography>
                        </IconButton>
                        <IconButton
                        
                        onClick={()=>setOpen(!open)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            margin:'0.1em',
                            display:{sm:'none'},
                    }}>
                        <MenuIcon/>
                    </IconButton>
                    </Box>

                    </Box>
                </Toolbar>
            </AppBar>
            <SearchModal openModal={openModal} setOpenModal={setOpenModal}/>
        </Box>
    );
}