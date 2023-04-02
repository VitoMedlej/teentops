import {Box, Button, Typography} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const CategoryMenu = ({category}:{category:string[] | undefined}) => {
    const router = useRouter()
    return (
        <Box
            className='bb CategoryMenu'
            sx={{
            display: {
                xs: 'none',
                sm: 'flex'
            },
            px: '1.25em',
            maxWidth: 'xl'
        }}>
            {[

'electronics','kitchen appliances','small kitchen appliances','vaccum cleaners','tvs'
       ,'heaters'
 ,      'fans'
,       'tools'

            ].map((item) => {
                return <Box  sx={{cursor:'pointer'}} key={item} onClick={()=>router.push(`/category/${item.replace(/\s+/g, '-')}`)}>
                    {/* <Link key={item} > */}
                        <Typography sx={{
                            fontWeight: '300',
                            fontSize:'.9em',
                            color:"black",
                        textTransform: 'capitalize'
                    }} component='h4'>
                        {item}
                        </Typography>

                    {/* </Link> */}
                </Box>
            })
}
        </Box>
    )
}

export default CategoryMenu