import {Box} from '@mui/material'
import React from 'react'
// import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage'
import { useRouter } from 'next/router'

// https://www.azadea.com/dw/image/v2/BGHW_PRD/on/demandware.static/-/Library-Si
// tes-SharedLibrary-Azadea/en/v1673311545674/Week%2044/LEB-BB-1-WEB-100.jpg?sw=
// 4 50&sm=fit
const CategoryList = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/category/products')
    }
    return (
        <Box sx={{
            maxWidth: 'lg',
            margin: '0 auto',
             my: '4em',
        }}>
            {/* <h1 style={{marginBottom:'1em',marginLeft:'.25em',fontWeight:'400'}}>Shop By Category</h1> */}
            <Box
                sx={{
                display: 'flex',
               
                flexDirection: {
                    xs: 'row',
                    // md: 'row'
                },
                alignItems: {
                    xs: 'center',
                    md: 'initial'
                },
                flexWrap:'wrap',
                justifyContent: {
                    // xs: 'center',
                    xs: 'space-between'
                }
            }}>
{/* https://www.ishtari.com/image/data/system_banner/10000/1800/1675/shoes-web.png */}
                {[`https://ucarecdn.com/756a342f-effb-4a3f-b020-218b15df453f/Capture.jpg`, 'https://ucarecdn.com/551becf7-769d-4c74-8ae5-f37bbf337996/Capture.JPG'].map((i,index) => {
            
                    return  <Box key={i} className='pointer' sx={{
                        display : {xs: index == 0 ? 'none' : 'flex',sm:'flex'},
                        height:'300px',width:{sm:'49%'}}}>
                                <>
                                    {/* <img className='img' src="" alt="" /> */}
                                    <img
                                    onClick={()=>handleClick()}
                                        src={i}
                                        className='img cover'
                                        alt='Category Image'
                                        // img2={'https://www.ishtari.com/image/data/system_banner/10000/1800/1699/faucet-tools-app.png'}
                                    />
                                </>
                    </Box>
                })}

            </Box>
        </Box>

    )
}

export default CategoryList