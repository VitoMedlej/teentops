import {Box, Typography} from '@mui/material'
import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';
const Perks = () => {
    return (
        <Box
        className='flexed bg'
        sx={{
            my:'3em',
            flexWrap:'wrap',
            // background:'#f0f0f0',
            py:'1em',
            justifyContent: 'space-evenly',
            width: '100%',
            color:'white'
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
                    fontWeight:'600',
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
            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent: 'center',gap:'1em'}}>
                {[{title:'Phone Number',value:"70464748",isLink:false}, {isLink:true,title:'Instagram',value:'https://www.instagram.com/power_house_european/'}, {isLink:true,title:'Facebook',value:'https://www.facebook.com/online.european.outlet/'}].map(i => {
                    return <Box 
                    key={i.title}
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
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            {i.isLink? <a className='white' target={`_blank`} rel='noreferrer' href={i.value}>
                                
                            
                            <Typography
                            sx={{
                                fontSize: '1.1em'
                            }}>{i.title}</Typography>
                            </a> 
                        :
                        <>
                        <Typography
                            sx={{
                                fontSize: '.75em'
                            }}>{i.title}</Typography>
                        
                        <Typography fontSize='1.1em' fontWeight='600'>{i.value}</Typography>
                            </>
                        }
                        </Box>

                    </Box>
                })}
            </Box>
        </Box>
    )
}

export default Perks