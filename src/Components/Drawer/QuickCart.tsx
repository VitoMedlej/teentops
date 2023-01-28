import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';

import {CartContext} from '../../../pages/_app';
import {IconButton} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CartProduct from '../Products/CartProduct';

import Btn from '../Btn/Btn';
import { useRouter } from 'next/router';

export default function TemporaryDrawer() {
    const router = useRouter()
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
                        borderBottom: '1px solid #00000014',
                        justifyContent: 'space-between'
                    }}>
                        <h2 
                        onClick={()=>router.push('/cart')}
                            style={{
                            cursor:'pointer',
                            fontWeight: '500',
                            textDecoration: 'underline'
                        }}>
                            View Cart
                        </h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CancelPresentationIcon
                                sx={{
                                color: 'red'
                            }}/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                        maxHeight: '350px',
                        overflowY: 'scroll'
                    }}>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        my: 2,
                        mx: 1,
                        display:'flex'
                    }}>
                       <Btn>
                            Checkout
                       </Btn>
                        <Btn v2={true}>
                        Continue Shopping
                        </Btn>
                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}