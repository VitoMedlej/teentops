import { Box, TextField } from '@mui/material'
import React from 'react'

const Searchbar = () => {
  return (
    <Box>
        <TextField
        placeholder='Search'
        id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  )
}

export default Searchbar