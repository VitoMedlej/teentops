import { Box, IconButton } from "@mui/material"
import {AiOutlineWhatsApp} from 'react-icons/ai';


const WhatsApp = () => {
    return (
        <a href='https://wa.me/+96176600541' target='_blank'   rel="noreferrer">

        <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1em',
            zIndex: 125125,
            top: '88%',
            right: '2%',
            position: 'fixed'
        }}>

            <Box
                className='shadow pointer'
                sx={{
                    background:'white',
                py: '.75em',
                px: '1em',
                borderRadius: '6px'
            }}>
                +961 76600541
            </Box>
            <IconButton
                sx={{
                ':hover': {
                    background: 'green'
                },
                background: 'green',
                color: 'white'
            }}>
                <AiOutlineWhatsApp fontSize='large'/>
            </IconButton>
        </Box>
        </a>

    )
}

export default WhatsApp