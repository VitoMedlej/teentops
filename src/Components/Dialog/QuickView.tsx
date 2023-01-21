import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Dispatch, SetStateAction, useEffect} from 'react';
import {Box} from '@mui/material';
import ProductCarousel from '../ProductCarousel/ProductCarousel';



export interface DialogTitleProps {
    id : string;
    children?: React.ReactNode;
    onClose : () => void;
}



export default function CustomizedDialogs({isOpen, setQuickView} : {
    setQuickView: Dispatch < SetStateAction < {
        isOpen: boolean;
        productId: null | string;
    } >>,
    isOpen: boolean;
}) {
    const [open,
        setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setQuickView({isOpen: false, productId: null});
    };
    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    return (
            <Dialog
            maxWidth='lg'
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>

                <DialogContent
                    dividers
                    sx={{
                    maxWidth:'900px !important',
                    display: 'flex'
                }}>
                    <Box sx={{
                        width: '50%'
                    }}>
                        <ProductCarousel/>
                    </Box>
                    <Box sx={{
                        width: '50%'
                    }}>
                        <Typography sx={{fontSize:'1.75em',fontWeight:'600',pt:'.15em'}}>
                            Perfume blah of the almighty fart
                        </Typography>
                      
                        <Typography sx={{py:'.75em',color:'gray'}}>
                        Body Mists, Fragrances, Body Mists Fragrances Victoria Mists Fragrances Victoria
                        Mists Fragrances Victoria's Secret Mists, Fragrances, Victoria's Secret
                        </Typography>
                        <Typography sx={{py:'1em',color:'green'}}>
                            LBP 190,000
                        </Typography>
                        <Box>
                            <Button
                                sx={{
                                ':hover': {
                                    border: '1px solid black',
                                    color: 'black'
                                },
                                display: 'flex',
                                mt: '1em',
                                justifyContent: 'center',
                                border: '1px solid',
                                background: 'red',
                                color: 'white',
                                padding: '.65em 2.63em',
                                borderRadius: 0
                            }}>Add To Cart</Button>
                        </Box>
                    </Box>

                </DialogContent>

            </Dialog>
    );
}