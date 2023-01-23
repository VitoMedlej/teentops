import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Autoplay, Pagination} from "swiper";
import 'swiper/css';
import { Box } from '@mui/material';


const ProductCarousel = ({mw} : {mw ?: string}) => {
   
    return (
        <Swiper
            pagination={{
                clickable: true,
              }}
              autoplay={{
                delay:  3000,
                disableOnInteraction: true,
              }}
              navigation={true}
            spaceBetween={10}
            slidesPerView={1}
            modules={[FreeMode,Autoplay, Pagination]}
         >

            {[1,2,3,4].map(product => {

                return <SwiperSlide key={product}>
                            <Box sx={{display:'flex',margin:'0 auto',maxWidth:`${mw || '300px'}`}}>
                                <img className='img' src="https://piecesnmore.com/wp-content/uploads/2023/01/Wild-Primrose.png" alt="" />
                            </Box>
                </SwiperSlide>

            })
}

        </Swiper>
    );
};

export default ProductCarousel