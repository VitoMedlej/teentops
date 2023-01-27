import {Box, Button,  TextField, Typography} from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
           
        }}>
           <Typography sx={{py:'.5em',fontWeight:'600',fontSize:'1.2em'}}>Filter By</Typography>
         
          
           <Box className="flexed" sx={{position:'relative',mt:1,width:'100%'}}>

<TextField size='small' placeholder='Search By Name' sx={{width:'100%'}}/>
<SearchOutlinedIcon sx={{

position: 'absolute',
right: '2%',
}}/>
</Box>
                <FilterAccordion/>
                <Box sx={{pt:'1.5em'}}>
                <Button sx={{color:'black'}}>Confirm</Button>
                <Button sx={{color:'red'}}>Reset</Button>
                </Box>
        </Box>
    )
}

export default FilterSection