import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: '#1a4671',
    ':hover': {
        background: '#1a4671'
    },
    display: 'flex',
    borderRadius: '0',
    py: 1,
    px: 2,
    fontSize: '10px'
}
let style2 = {
    color: '#1a4671',
    borderRadius: '0',
    display: 'flex',

    ml: 1,
    py: .9,
    px: 2,
    ':hover':{  borderColor: ' #1a4671',background:'#cf3030',color:'white'},
    fontSize: '10px',
    border:'1px solid #1a4671'
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