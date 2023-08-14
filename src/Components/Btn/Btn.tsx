import { Button } from '@mui/material'
import React from 'react'

let style1 = {
    color: 'white !important',
    background: '#0068db',
    ':hover': {
        background: '#0068db'
    },
    display: 'flex',
    borderRadius: 2,
    py: 1,
    px: 3,
    fontSize: '10px'
}
let style2 = {
    color: 'white',
    borderRadius: 2,
    display: 'flex',
    background:'#0068db',
    ml: 1,
    py: .9,
    px: 3,
    ':hover':{  borderColor: ' #0068db',background:'#0068db',color:'white'},
    fontSize: '10px',
    border:'1px solid #0068db'
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>void,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
    className={className ? className : ''}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn