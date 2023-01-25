import {Box, Button} from '@mui/material'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'

const CategoryMenu = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/shoes/products')
    }
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
            {[1, 2, 3, 4, 5].map((item) => {
                return <Box onClick={handleClick} key={item}>
                    <Link key={item} href='/'>
                        Home Applicants
                    </Link>
                </Box>
            })
}
        </Box>
    )
}

export default CategoryMenu