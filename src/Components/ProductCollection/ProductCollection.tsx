import {Box, Button, Typography} from '@mui/material'
import Link from 'next/link'

const ProductCollection = ({title} : {
    title: string
}) => {
    return (
        <Box>
            <Box
                sx={{
                fontSize: '1.75em',
                fontWeight: '500'
            }}>{title}</Box>


            <Box sx={{maxHeight:'600px',textAlign:'center',height:'100%',maxWidth:'330px',width:'100%'}}>
            <Link className='link' href='/'>
                <img src="https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer11.jpg?v=1671539939&width=360" className='img' alt="" />
                <Typography sx={{py:'.25em',fontSize:'1.2em'}}>Some scam probably 100g</Typography>
            </Link>
                <Typography sx={{color:'black',fontSize:'1.2em',fontWeight:'300'}}>$2.99</Typography>
            </Box>

            <Button
                sx={{
                ':hover': {
                    border: '1px solid black',
                    color: 'black'
                },
                border: '1px solid',
                background: 'black',
                color: 'white',
                padding: '.75em 2.75em',
                borderRadius: 0
            }}>View All</Button>
        </Box>
    )
}

export default ProductCollection