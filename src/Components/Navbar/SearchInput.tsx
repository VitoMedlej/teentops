import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import {AiOutlineSearch} from 'react-icons/ai';
import { useRouter } from 'next/router';

export default function CustomizedInputBase({sx,onSubmit,value,setValue}:{onSubmit:(e: React.FormEvent<HTMLFormElement> )=>void,value:string,setValue:any,sx?:any}) {
  const router = useRouter()
  return (
    <Paper
    onSubmit={(e)=>onSubmit(e)}
      component="form"
      className='searchinput '
      sx={{
       
        boxShadow:'none',
        border:'1px solid #00000021',
        borderRadius:0,
        
         display: 'flex', alignItems: 'center', minWidth:200,width: {xs:'0',sm:'300px',md:'500px',lg:'600px'} 
         ,...sx
        }}
    >
   
      <InputBase
      value={value}
      onChange={(e)=>setValue(`${e.target.value}`)}
        sx={{
          display: 'flex',
          ml: 1,w:'100%', flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
        onClick={()=>        router.push(`/category/products?limit=10&search=${value}`)
      }
      type="submit" className='searchIcon bg white trans' sx={{borderRadius:0,p: '10px' }} aria-label="search">
        <AiOutlineSearch />
      </IconButton>
     
    </Paper>
  );
}