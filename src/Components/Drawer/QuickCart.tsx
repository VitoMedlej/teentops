import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {CartContext} from '../../../pages/_app';
import {IconButton} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CartProduct from '../Products/CartProduct';


export default function TemporaryDrawer() {

    const [cartOpen,
        setCartOpen] = useContext(CartContext);

    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setCartOpen(open);
    };

    return (
        <div>
            <Drawer anchor={'top'} open={cartOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                    maxWidth: 'lg',
                    width: '100%',
                    margin: '0 auto'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mx: '1em',
                        borderBottom : '1px solid #00000014',
                        justifyContent: 'space-between'
                    }}>
                        <h2
                            style={{
                            fontWeight: '500',
                        }}>
                            Your Cart
                        </h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CancelPresentationIcon
                                sx={{
                                color: 'red'
                            }}/>
                        </IconButton>
                    </Box>
                    <Box sx={{maxHeight:'400px',overflowY:'scroll'}} >
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                            <CartProduct/>
                    </Box>
 
                </Box>
            </Drawer>
        </div>
    );
}