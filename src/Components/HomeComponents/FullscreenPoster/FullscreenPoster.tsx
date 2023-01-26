import {Box, Button} from '@mui/material'

const FullscreenPoster = ({img} : {
    img: string
}) => {
    return (
        <Box className='pointer' sx={{margin:'0 auto',py:'1em',width:'100%',maxWidth:'lg'}}>
            <img className='img 'src={img} alt="" />
        </Box>
        // <Box
        //     sx={{
        //     background:'#f6f6f6',
        //     maxheight: '600px',
        //     textAlign: 'center',
        //     display: 'flex',
        //     flexDirection: {
        //         xs: 'column-reverse',
        //         md: reversed
        //             ? 'row'
        //             : 'row-reverse'
        //     }
        // }}>
        //     <Box
        //         sx={{
        //         display: 'flex',
        //         width: {
        //             md: '50%'
        //         },
        //         my: {
        //             xs: '2em',
        //             md: 0
        //         },
        //         justifyContent: {xs:'center',md:'end'}
        //     }}>
        //         <Box
        //             sx={{
        //             justifyContent: 'center',
        //             flexDirection: 'column',
        //             display: 'flex',
        //             alignItems: {
        //                 xs: 'center',
        //                 md: 'baseline'
        //             },
        //             width: {md:'90%'}
        //         }}>

        //             <h1 style={{fontWeight:'400'}}>
        //                 Some Text Blah Blah Blah
        //             </h1>
                      
        //             <Box
        //                 sx={{
        //                 display: 'flex',
        //                 alignItems: 'left'
        //             }}>

        //                 <Button
        //                     sx={{
        //                     ':hover': {
        //                         border: '1px solid black',
        //                         color: 'black'
        //                     },
        //                     margin: '0 auto',
        //                     display: 'flex',
        //                     justifyContent: 'center',
        //                     border: '1px solid black',
        //                     // background: 'red',
        //                     color: 'black',
        //                     padding: '.75em 2.75em',
        //                     borderRadius: 0
        //                 }}>View All</Button>
        //             </Box>

        //         </Box>
        //     </Box>
        //     <Box
        //         sx={{
        //         width: {
        //             md: '50%'
        //         }
        //     }}>
        //         <img
        //             style={{
        //             maxHeight: '450px'
        //         }}
        //             src="https://static1.s123-cdn-static-a.com/uploads/5265532/2000_63986e9a422a5.jpg"
        //             alt="Fullscreen Ad"
        //             className="img"/>

        //     </Box>
        // </Box>
    )
}

export default FullscreenPoster