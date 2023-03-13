import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Dispatch, SetStateAction, useEffect} from 'react';
import {Box,CircularProgress} from '@mui/material';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import useCart from '../../Hooks/useCart';
import Btn from '../Btn/Btn';
import { getById } from '../../../pages/product/[productId]';


export interface DialogTitleProps {
    id : string;
    children?: React.ReactNode;
    onClose : () => void;
}

export default function CustomizedDialogs({isOpen,productId, setQuickView} : {
    setQuickView: Dispatch < SetStateAction < {
        isOpen: boolean;
        productId: null | string;
    } >>,
    productId: string | null,
    isOpen: boolean;
}) {
    
    const [open,
        setOpen] = React.useState(false);
            
    const [item,
        setItem] = React.useState<any >(null);
        const {addToCart}= useCart()    
    const handleClose = () => {
        setOpen(false);
        setItem(null)
        setQuickView({isOpen: false, productId: null});
    };
    const getItem = async () => {
        if (!productId) return;
        const prod = await getById(`${productId}`)
        if (prod) {
            setItem(prod)
        }
        
    }
    useEffect(() => {
        setOpen(isOpen)
        getItem()
        }, [isOpen])

    return (

        <Dialog
            maxWidth='lg'
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}>
                {
productId && <>

                
            <DialogContent
                dividers
                sx={{
                maxWidth: '900px !important',
                display: 'flex',
                padding: {
                    xs: '1em',
                    sm: '3em'
                },
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>

            {item ?    <>
                    <Box
                    sx={{
                    width: {
                        xs: '100%',
                        sm: '45%'
                    }
                }}>
                    <ProductCarousel images={item?.images}/>
                </Box>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        sm: '50%'
                    }
                }}>
                    <Typography
                        sx={{
                        fontSize: '1.75em',
                        fontWeight: '600',
                        pt: '.15em'
                    }}>
                      {item.title}
                    </Typography>

                    <Typography
                        sx={{
                        py: '.75em',
                        color: 'gray'
                    }}>
                      {item.description}
                    </Typography>
                    <Typography
                        sx={{
                        py: '1em',
                        color: 'green'
                    }}>
                        ${item.price}
                        </Typography>
                    <Box>
                        {/* <Button
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
                        }}>Add To Cart</Button> */}
                        <Btn
                        onClick={()=>{handleClose(),addToCart(item._id,{
                            title: item?.title, _id: item?._id, category: item?.category, price: item.price,
                            img: item?.images && item.images?.length > 0 ? item.images[0] : null
                        })}}
                        >Add To Cart</Btn>
                    </Box>
                    <Box>

                        <IconButton
                            sx={{
                            border: 'none',
                            mt: '.25em'
                        }}>
                            <FavoriteBorderIcon
                                sx={{
                                mr: '.1em',
                                color: 'red'
                            }}
                                fontSize={'small'}/>
                            <Typography color='black' fontSize='.5em'>Add To Favorites</Typography>
                        </IconButton>

                    </Box>

                </Box>
            </> :
            <CircularProgress />
            }
        </DialogContent>
        <IconButton
            onClick={() => handleClose()}
            sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'red'
        }}>
            <CloseIcon/>
        </IconButton>
</>
}
    </Dialog>

    );
}