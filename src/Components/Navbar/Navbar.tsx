import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { CartContext, DrawerContext } from '../../../pages/_app';

export default function Navbar() {
    const [open, setOpen] = useContext(DrawerContext);
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
                    }}>
                        <a href='/' color='inherit'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0549/1385/9821/files/65935021_2033944956913929_6548784430054375424_n-removebg-preview_fa7b73d7-3d6e-49e0-a024-66f13e0dac24_250x.png?v=1632751657"
                                alt=""/>
                        </a>
                    </Box>
                    <Box
                        sx={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        display: 'flex'
                    }}>

                        <IconButton color='inherit'>

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
        </Box>
    );
}