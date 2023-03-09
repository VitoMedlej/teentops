import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase({sx}:{sx?:any}) {
  return (
    <Paper
      component="form"
      className='searchinput'
      sx={{
       
        boxShadow:'none',
        border:'1px solid #00000021',
        borderRadius:0,
        
         display: 'flex', alignItems: 'center', minWidth:200,maxWidth: 400 
         ,...sx
        }}
    >
   
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
      
      type="button" className='searchIcon bg white trans' sx={{borderRadius:0,p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}