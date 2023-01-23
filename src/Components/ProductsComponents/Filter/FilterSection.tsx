import {Box, Divider, Typography} from '@mui/material'
import React from 'react'
import CheckMarkForm from './Forms/CheckMarkForm'
import SelectOneForm from './Forms/SelectOneForm'
import CheckboxForm from './Forms/CheckboxForm'
import SliderForm from './Forms/SliderForm'
import RadioGroupForm from './Forms/RadioGroupForm'

const FilterSection = () => {
    return (
        <Box
            sx={{
            width: {
                xs: '100%',
                md: '25%'
            },
            background: 'white',
            maxWidth: {
                md: '200px'
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
            <Divider></Divider>
            <Box
                sx={{
                pt: '2em',
                display: 'flex',
                flexDirection: 'column',
                gap: '2em'
            }}>
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