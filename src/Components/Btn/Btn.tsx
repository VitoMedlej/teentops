import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white',
    background: '#c57540',
    ':hover': {
        background: '#c57540'
    },
    display: 'flex',
    borderRadius: '6px',
    py: 1,
    px: 2,
    fontSize: '10px'
}
let style2 = {
    color: '#c57540',
    borderRadius: '6px',
    display: 'flex',

    ml: 1,
    py: .9,
    px: 2,
    ':hover':{  borderColor: ' #c57540',background:'#cf3030',color:'white'},
    fontSize: '10px',
    border:'1px solid #c57540'
}

const Btn = ({v2,disabled,onClick,children,sx}:{disabled?:boolean,onClick?:()=>void,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn