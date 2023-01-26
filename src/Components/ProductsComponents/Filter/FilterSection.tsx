import {Box, Button, Divider, TextField, Typography} from '@mui/material'
import React from 'react'
import SliderForm from './Forms/SliderForm'
import RadioGroupForm from './Forms/RadioGroupForm'
import FilterAccordion from '../FilterAccordion'

const FilterSection = ({sx}:any) => {
    return (
        <Box
            sx={{
            width: {
                xs: '100%',
                md: '20%'
            },
            background: 'white',
            maxWidth: {
                md: '300px'
            },
            flexDirection: 'column',
            height: {
                md: '100vh'
            },
            display: 'flex',
            ...sx,
            // borderRight: {
            //     md: '1px solid #00000036'
            // }
        }}>
           <Typography sx={{py:'.5em',fontWeight:'600',fontSize:'1.2em'}}>Filter By</Typography>
         
          
                <TextField sx={{my:'.5em'}} variant='standard' size='small' placeholder='Search Products'/>
                <FilterAccordion/>
                <Box sx={{pt:'1.5em'}}>
                {/* <Divider/> */}
                <Button sx={{color:'black'}}>Confirm</Button>
                <Button sx={{color:'red'}}>Reset</Button>
                </Box>
        </Box>
    )
}

export default FilterSection