import {Box, Typography} from '@mui/material'
import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
const Perks = () => {
    return (
        <Box
        className='flexed'
        sx={{
            my:'3em',
            flexWrap:'wrap',
            background:'#f0f0f0',
            py:'1em',
            justifyContent: 'space-evenly',
            width: '100%',
        }}>
            <Box
            className='flexed'
                sx={{
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                pb:{xs:'1em',sm:0}
            }}>
                <span style={{
                    fontSize: '1.1em'
                }}>
                    We are Always Here To Help
                </span>
                <span
                    className='gray'
                    style={{
                    fontSize: '.8em'
                }}>Reach out to us through any of these support channels</span>
            </Box>
            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent: 'center',gap:'1em'}}>
                {[1, 2, 3].map(i => {
                    return <Box
                        sx={{
                        display: 'flex',
                        gap:'.5em',
                        flexDirection: 'row'
                    }}>
                        <Box className='flexed'>
                            <HeadphonesIcon sx={{color:'#00000073'}}/>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography
                                sx={{
                                fontSize: '.75em'
                            }}>Phone Support</Typography>
                            <Typography fontSize='1.1em' fontWeight='600'>70464748</Typography>
                        </Box>

                    </Box>
                })}
            </Box>
        </Box>
    )
}

export default Perks