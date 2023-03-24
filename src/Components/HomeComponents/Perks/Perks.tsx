import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Perks = () => {
    return (
        <Box
            className='flexed bg'
            sx={{
                my: '3em',
                flexWrap: 'wrap',
                // background:'#f0f0f0',
                py: '1em',
                justifyContent: 'space-evenly',
                width: '100%',
                color: 'white'
            }}>
            <Box
                className='flexed'
                sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    pb: { xs: '1em', sm: 0 }
                }}>
                <span style={{
                    fontWeight: '600',
                    fontSize: '1.1em'
                }}>
                    We are Always Here To Help
                </span>
                <span
                    className='white'
                    style={{
                        fontSize: '.8em'
                    }}>Reach out to us through any of these support channels</span>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1em' }}>
                {/* {[{title:'Phone Number',value:"70873045",isLink:false}, {isLink:true,title:'Instagram',value:'https://www.instagram.com/power_house_european/'}, {isLink:true,title:'Facebook',value:'https://www.facebook.com/online.european.outlet/'}].map(i => {
                    return 
                })} */}

                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flexed'>
                        <InstagramIcon sx={{ color: '#fff' }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {<a className='white' target={`_blank`} rel='noreferrer' style={{textDecoration:"none"}} href={"https://www.instagram.com/power_house_european/"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Instagram</Typography>
                        </a>

                        }
                    </Box>

                </Box>





                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flexed'>
                        <FacebookIcon sx={{ color: '#fff' }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='white' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={"https://www.facebook.com/online.european.outlet/"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Facebook</Typography>
                        </a>

                        }
                    </Box>

                </Box>






                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flexed'>
                        <WhatsAppIcon sx={{ color: '#fff' }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='white' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={"https://wa.me/96170873045"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Whatsapp</Typography>
                        </a>

                        }
                    </Box>

                </Box>














            </Box>
        </Box>
    )
}

export default Perks