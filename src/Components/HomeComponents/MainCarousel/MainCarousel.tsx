import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MainCarousel = () => {
    return (
        <Box
            sx={{
            py: {xs:'.75em',sm:'2em',md:'3em'},
            width: '100%',
            maxWidth: 'lg',
            borderRadius:{sm:'6px'},
            margin: '0 auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
                modules={[Autoplay, Navigation]}
                className="mySwiper swiper">

                {[{img:'http://hamdanelectronics.com/modules/dor_imageslider/images/49da7d1c9283e95770851ecada351a029f037a57_HMD%20Website%20Banner-01.png',className:'contain'},
                // {img:'https://cdn.shopify.com/s/files/1/0549/1385/9821/files/Christmas_2022_Banner_1.jpg?v=1671886210'}
            ].map((item) => {

                    return <SwiperSlide className='ztop cursor ' key={item.img}>
                        <Box
                        
                            sx={{
            borderRadius:{sm:'6px'},
                        
                                height: '100%',
                            width:'100%'
                        }}>

                            <img
            
                                className={`img ${item?.className}`}
                                src={`${item.img}`}
                                alt=""/>
                        </Box>
                    </SwiperSlide>
                })
}

            </Swiper>

        </Box>
    )
}

export default MainCarousel