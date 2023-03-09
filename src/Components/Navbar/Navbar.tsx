import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from 'react';
import { CartContext, DrawerContext } from '../../../pages/_app';
import SearchModal from './SearchModal';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { Badge, Typography } from '@mui/material';
import { loadState } from '../../Utils/LocalstorageFn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/router';


export default function Navbar() {
    const [open, setOpen] = useContext(DrawerContext);
    const [openModal, setOpenModal] = useState(false);
    const [cartOpen, setCartOpen] = useContext(CartContext);
    // const localCart = loadState('usercart') || []
    const localCart = [1]
    const [q,setQ] = useState('')
   
    
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
                        width:'75px',height:'40px'
                    }}>
                        <Link href='/' color='inherit'>
                            <img
                            className='img'
                            src="https://ucarecdn.com/eb515ead-7f14-439e-b071-65b98433b4f8/312182473_6421594114522894_2354893828509446990_n.jpg"
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
                            onSubmit={()=>console.log('hi')}
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
                        <Badge badgeContent={`${localCart.length || '0'}`} color="error">

                            <LocalMallOutlinedIcon/>
                            </Badge>
                            <Typography sx={{display:{xs:'none',sm:'flex'}}} component='p'>
                            cart
                            </Typography>
                        </IconButton>


                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}
                        sx={{display:{xs:'none',sm:'flex'}}}
                        color='inherit'>
                        <Badge badgeContent={`0`} color="error">

                            <FavoriteBorderIcon/>
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