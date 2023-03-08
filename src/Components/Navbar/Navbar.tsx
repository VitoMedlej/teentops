import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useState } from 'react';
import { CartContext, DrawerContext } from '../../../pages/_app';
import SearchModal from './SearchModal';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useContext(DrawerContext);
    const [openModal, setOpenModal] = useState(false);
    const [cartOpen, setCartOpen] = useContext(CartContext);
    
    
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
                    <IconButton
                        onClick={()=>setOpen(!open)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                        mr: 2
                    }}>
                        <MenuIcon/>
                    </IconButton>
                    <Box
                        sx={{
                        position: 'absolute',
                        right: '50%',
                        transform: 'translateX(50%)'
                        ,width:'75px',height:'40px'
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
                        justifyContent: 'flex-end',
                        display: 'flex'
                    }}>

                        <IconButton
                           onClick={()=>setOpenModal(!openModal)}
                        color='inherit'>

                            <SearchOutlinedIcon/>

                        </IconButton>
                        <IconButton 
                        onClick={()=>setCartOpen(!cartOpen)}

                        color='inherit'>

                            <LocalMallOutlinedIcon/>

                        </IconButton>

                    </Box>
                </Toolbar>
            </AppBar>
            <SearchModal openModal={openModal} setOpenModal={setOpenModal}/>
        </Box>
    );
}