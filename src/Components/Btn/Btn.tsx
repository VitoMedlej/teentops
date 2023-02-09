import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white',
    background: '#cf3030',
    ':hover': {
        background: '#cf3030'
    },
    display: 'flex',
    borderRadius: '6px',
    py: 1,
    px: 2,
    fontSize: '10px'
}
let style2 = {
    color: '#cf3030',
    borderRadius: '6px',
    display: 'flex',

    ml: 1,
    py: .9,
    px: 2,
    ':hover':{  borderColor: ' #cf3030',background:'#cf3030',color:'white'},
    fontSize: '10px',
    border:'1px solid #cf3030'
}

const Btn = ({v2,children,sx}:{sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn