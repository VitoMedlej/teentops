import {Box} from '@mui/material'
import React from 'react'

// https://www.azadea.com/dw/image/v2/BGHW_PRD/on/demandware.static/-/Library-Si
// tes-SharedLibrary-Azadea/en/v1673311545674/Week%2044/LEB-BB-1-WEB-100.jpg?sw=
// 4 50&sm=fit
const CategoryList = () => {
    return (
        <Box sx={{
            maxWidth: 'lg',
            margin: '0 auto',
             my: '4em',
        }}>
            <h1 style={{marginBottom:'1em',marginLeft:'.25em',fontWeight:'400'}}>Shop By Category</h1>
            <Box
                sx={{
                display: 'flex',
               
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                alignItems: {
                    xs: 'center',
                    md: 'initial'
                },
                justifyContent: {
                    xs: 'center',
                    md: 'space-between'
                }
            }}>

                {[1, 2, 3].map(i => {
                    return <Box
                        key={i}
                        sx={{
                        mb: '.5em',
                        width: {
                            xs: '95%',
                            md: '32%'
                        }
                    }}>
                        <a href='/'>

                            <Box
                                className='scale img2'
                                sx={{
                                maxHeight: {
                                    xs: '600px',
                                    md: 'auto'
                                }
                            }}>
                                <img
                                    className='img'
                                    src="https://www.azadea.com/dw/image/v2/BGHW_PRD/on/demandware.static/-/Library-Sites-SharedLibrary-Azadea/en/v1673311545674/Week%2044/LEB-BB-1-WEB-100.jpg?sw=450&sm=fit"
                                    alt="Category Image"/>
                            </Box>
                        </a>

                    </Box>
                })}

            </Box>
        </Box>

    )
}

export default CategoryList