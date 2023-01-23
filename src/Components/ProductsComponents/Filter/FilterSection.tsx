import {Box} from '@mui/material'
import React from 'react'
import CheckMarkForm from './Forms/CheckMarkForm'
import SelectOneForm from './Forms/SelectOneForm'
import CheckboxForm from './Forms/CheckboxForm'
import SliderForm from './Forms/SliderForm'

const FilterSection = () => {
    return (
        <Box
            sx={{
            width: {xs:'100%',md:'20%'},
            background: 'white',
            maxWidth:{md:'200px'},
            flexDirection:'column',
        height:{md:'100vh'},
            // justifyContent:'space-evenly',
            display: 'flex',
            pr:'.15em',
            borderRight:{md:'1px solid #00000036'},
        }}>
            <SelectOneForm/>
            <SelectOneForm/>
            <SelectOneForm/>
            <SelectOneForm/>
            <SelectOneForm/>
            {/* <CheckMarkForm/> */}
            {/* <SliderForm/> */}
            {/* <CheckboxForm/> */}
        </Box>
    )
}

export default FilterSection