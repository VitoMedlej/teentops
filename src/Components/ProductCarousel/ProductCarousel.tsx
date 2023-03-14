import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Autoplay, Pagination} from "swiper";
import 'swiper/css';
import { Box } from '@mui/material';


const ProductCarousel = ({images,mw} : {images: string[],mw ?: string}) => {
   
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

            {images && images.length>0 && images.map(product => {

                return <SwiperSlide key={product}>
                            <Box sx={{display:'flex',margin:'0 auto',maxWidth:`${mw || '300px'}`}}>
                                <img className='img' src={product.length > 4 ? product :'https://img.kpopmap.com/2019/07/unnamed83.jpg' }alt=" product carousel img" />
                            </Box>
                </SwiperSlide>

            })
}

        </Swiper>
    );
};

export default ProductCarousel