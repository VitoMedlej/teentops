import {Box} from '@mui/material'
import React from 'react'
import CheckMarkForm from './Forms/CheckMarkForm'
import SelectOneForm from './Forms/SelectOneForm'

const FilterSection = () => {
    return (
        <Box
            sx={{
            width: '100%',
            background: 'white',
            borderBottom: '1px solid gray',
            display: 'flex',
            maxWidth: 'lg'
        }}>
            <SelectOneForm/>
            <CheckMarkForm/>
        </Box>
    )
}

export default FilterSection