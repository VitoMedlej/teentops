import { Box, IconButton } from '@mui/material'
import {RemoveRedEye,DeleteForever} from '@mui/icons-material';

const CartProduct = () => {
    return (
    <Box sx={{flex:1}}>

        <Box
            className="trans"
            sx={{
                display:'flex',
                gap:'1em',
            flex:1,
            padding: '1em',
            ':hover': {
                backgroundColor: '#0000000f',
                borderRadius: '6px'
            }
        }}>
            <Box
                sx={{
                mr: '.5em',
                width: '100px',
                height: '100px',
                borderRadius: '6px'
            }}>
                <img
                    style={{
                    borderRadius: '6px'
                }}
                    src="https://ucarecdn.com/7749acdb-9ab3-4411-8a1d-c0c0b5749a2f/"
                    className='img'
                    alt=""/>
            </Box>
            <Box sx={{display:'flex',width:'100%'}}>

                <Box>

                    <h2
                        style={{
                        margin: 0,
                        fontWeight: '600',
                        fontSize:'1.3em'
                    }}>
                        Addidas shoes 40e
                    </h2>
                    <h2
                        style={{
                        fontSize: '1.2em',
                        color: 'gray',
                        fontWeight: '500',
                        margin: ' .25em 0 0 0'
                    }}>
                        Qty: 1
                    </h2>
                    <h2
                        style={{
                        fontSize: '1em',
                        fontWeight: '500',
                        color: 'green',
                        margin: ' .35em 0 0 0'
                    }}>
                        $200
                    </h2>

                </Box>
                <Box
                    sx={{
                    flex: 1,
                    flexGrow: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    flexDirection: 'column',
                    alignItems: 'end'
                }}>
                    <IconButton>
                        <DeleteForever
                            fontSize='medium'
                            sx={{
                            color: '#ff2b2b'
                        }}/>
                    </IconButton>
                    <IconButton>
                        <RemoveRedEye
                            fontSize='medium'
                            sx={{
                            color: '#373737'
                        }}/>

                    </IconButton>
                </Box>
            </Box>
        </Box>
    </Box>

    )
}

export default CartProduct