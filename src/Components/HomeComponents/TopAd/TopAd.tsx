import { Box,Divider, Typography } from "@mui/material"

const TopAd = () => {
  return (
    <main style={{fontWeight:'300'}}>

    <Box
    // className='bg '
     
    sx={{
      borderBottom:'1px solid #404040',
      fontWeight:'300',
      textAlign:'center',fontSize:'.7em',py:'1em',
    background:'#172029',
    color:"white"}}>    
    🚛التوصيل مؤمن الى جميع المناطق اللبنانية عبر خدمة الديلفري
  |  📲whatsapp:76600541
    {/* Free delivery from LBP 200,000 and free returns | CASH ON DELIVERY - Returns extended to 60 days - DELIVERIES MAY TAKE UP TO 15 WORKING DAYS. */}
    </Box>
    {/* <Divider></Divider> */}
    </main>
  )
}

export default TopAd