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
            slidesPerView={1}
            modules={[FreeMode,Autoplay, Pagination]}
         >

            {[1,2,3,4].map(product => {

                return <SwiperSlide key={product}>
                            <Box sx={{display:'flex',margin:'0 auto',maxWidth:'300px'}}>
                                <img className='img' src="https://cdn.shopify.com/s/files/1/0549/1385/9821/products/ChristmasOffer11.jpg?v=1671539939" alt="" />
                            </Box>
                </SwiperSlide>

            })
}

        </Swiper>
    );
};

export default ProductCarousel