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
            width: '100%',
            background: 'white',
                justifyContent:'space-evenly',
            display: 'flex',pb:'.25em',
            maxWidth: 'lg',margin: '0 auto',
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