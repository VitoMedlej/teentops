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
            py:{md:4}
        }}>
            {/* <h1 style={{marginBottom:'1em',marginLeft:'.25em',fontWeight:'400'}}>Shop By Category</h1> */}
            <Box
                sx={{
                display: {xs:'flex',sm:'none'},
               
                flexDirection: {
                    xs: 'row',
                    // md: 'row'
                },
                my:1,
                alignItems: {
                    xs: 'center',
                    md: 'initial'
                },
                borderRadius:'20px',
                flexWrap:'wrap',
                justifyContent: {
                    // xs: 'center',
                    xs: 'space-between'
                }
            }}>
 <Box  className='pointer' sx={{
    // minWidth:'200px',
                        // display : {xs: index == 0 ? 'none' : 'flex',sm:'flex'},
                        // height:'300px'
                        width:{xs:'99%',md:'49%'}}}>
                                <a style={{width:'100%',height:'100%'}} href={`https://play.google.com/store/apps/details?id=com.teentops&pli=1`} target='_blank' rel='noreferrer' >
                                    {/* <img className='img' src="" alt="" /> */}
                                    <img
                                      style={{borderRadius:'10px'}}                                
                                        src={'https://ucarecdn.com/b577fefb-135c-450a-9a4e-f344d686fdd8/teenad3.JPG'}
                                        className='img contain'
                                        alt='Category Image'
                                        // img2={'https://www.ishtari.com/image/data/system_banner/10000/1800/1699/faucet-tools-app.png'}
                                    />
                                </a>
                    </Box>
            </Box>
            <Box
                sx={{
                display: {xs:'none',sm:'flex'},
               
                flexDirection: {
                    xs: 'row',
                    // md: 'row'
                },
                mx : {sm:1},
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
                {[`https://ucarecdn.com/20089da1-ef72-4847-a525-1d622518e600/BlueandTealHeadsetGamingInStreamAd.jpg`, 'https://ucarecdn.com/b577fefb-135c-450a-9a4e-f344d686fdd8/teenad3.JPG'].map((i,index) => {
            
                    return  <Box key={i} className='pointer' sx={{
                        display : {xs: index == 0 ? 'none' : 'flex',sm:'flex'},
                        height:'300px',minWidth:'200px', width:{xs:'99%',md:'49%'}}}>
                                <>
                                    {/* <img className='img' src="" alt="" /> */}
                                    <img
                                      style={{borderRadius:'20px'}}
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
