import {Box, Button,  TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAccordion from '../FilterAccordion'
import Btn from '../../Btn/Btn';
import { server } from '../../../Utils/Server';

const FilterSection = ({handleReset,sx,setProducts}:any) => {
    const [options,setOptions] = useState({
        price : [1,100000],
        sort : 'products',
        // category : 'products',
        // query : '',
        
    })
    const handleSubmit = async () => {
        const url =  `/api/sort?min=${options.price[0]}&max=${options.price[1]}&order=${options.sort}`  ;
        const req = await fetch(`${server}${url}`)
        const res = await req.json()
        if (res) [

            setProducts(res)
        ]
    }
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

<TextField
onChange={(e)=>{console.log(e.target.value)}}
size='small' placeholder='Search By Name' sx={{width:'100%'}}/>
<SearchOutlinedIcon sx={{

position: 'absolute',
right: '2%',
}}/>
</Box>
                <FilterAccordion
                options={options}
                setOptions={setOptions}
                />
                <Box sx={{pt:'1.5em',display:'flex',gap:'.5em'}}>
                <Btn
                onClick={()=>handleSubmit()}
                v2={true} sx={{':hover':{background:'transparent'},margin:0}} >Confirm</Btn>
                <Btn
                
                onClick={()=>handleReset()}
                
                 v2={true} sx={{margin:0,border:'none',color:'red'}}>Reset</Btn>
                </Box>
        </Box>
    )
}

export default FilterSection