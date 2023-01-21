import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Autoplay, Pagination} from "swiper";
import 'swiper/css';
import { Box } from '@mui/material';


const ProductCarousel = () => {
   
    return (
        <Swiper
            pagination={{
                clickable: true,
              }}
              autoplay={{
                delay:  3000,
                disableOnInteraction: false,
              }}
              navigation={true}
            spaceBetween={10}
            modules={[FreeMode,Autoplay, Pagination]}
            breakpoints={{
                
                200: {
                    width: 310,
                    slidesPerView: 1
                },
                768: {
                    width: 768,
                    slidesPerView: 2
                },
             
               
        }}>

            {[1,2,3,4].map(product => {

                return <SwiperSlide key={product}>
                            <Box>foo bar baz</Box>
                </SwiperSlide>

            })
}

        </Swiper>
    );
};

export default ProductCarousel