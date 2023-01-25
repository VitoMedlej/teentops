import {Box, Divider, TextField, Typography} from '@mui/material'
import React from 'react'
import SliderForm from './Forms/SliderForm'
import RadioGroupForm from './Forms/RadioGroupForm'

const FilterSection = () => {
    return (
        <Box
            sx={{
            width: {
                xs: '100%',
                md: '22%'
            },
            background: 'white',
            maxWidth: {
                md: '300px'
            },
            pr: {
                md: '1.5em'
            },
            flexDirection: 'column',
            height: {
                md: '100vh'
            },
            display: 'flex',
            borderRight: {
                md: '1px solid #00000036'
            }
        }}>
            <Typography
                sx={{
                pt: '.5em',
                fontSize: '1.5em',
                fontWeight: '500'
            }}>
                Filter Options
            </Typography>
            {/* <Divider></Divider> */}
            <Box
                sx={{
                pt: '2em',
                display: 'flex',
                flexDirection: 'column',
                gap: '2em'
            }}>
                <Box>
                    Search
                    <TextField/>
                </Box>
                <Box>
                    Price:
                    <SliderForm/>
                </Box>
                <Divider/>
                <Box  sx={{display:'flex',flexDirection:'column'}}>
                    Status:
                    <RadioGroupForm/>
                </Box>
            </Box>

        </Box>
    )
}

export default FilterSection