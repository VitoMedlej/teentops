import { Box, IconButton } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsApp = () => {
    return (
        <a href='https://wa.me/+96170873045' target='_blank'   rel="noreferrer">
        <div
            style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.7em',
            zIndex: 125125,
            top: '88%',
            right: '2%',
            position: 'fixed'
        }}>

            <div
                className='shadow pointer'
                style={{
                background:'white',
                color:'black',
                boxShadow:'1px 1px 3px #00000033',
                padding: '1em.75em',
                borderRadius: '6px'
            }}>
                +961 70873045
            </div>
     


            <IconButton
                sx={{
                ':hover': {
                    background: 'green'
                },
                background: 'green',
                color: 'white'
            }}>
                <WhatsAppIcon fontSize='large'/>
            </IconButton>
            {/* <div style={{width:'60px',height:'60px'}}>
               
               <a href='https://wa.me/+96171283853' target='_blank'   rel="noreferrer">

                <img style={{width:'100%',height:'100%'}} src="https://img.icons8.com/color/480/null/whatsapp--v1.png" alt="" />
               </a>
            </div> */}
        </div>
        </a>

    )
}

export default WhatsApp