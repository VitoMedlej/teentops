import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/router';

const MainCarousel = () => {
    const router = useRouter()
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            width: '100%',
            maxWidth: 'lg',
            maxHeight:'450px',
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

                {[{img:`https://ucarecdn.com/96f3a42e-18bd-4871-92a5-4cb0ca861560/Capture.JPG`}
                ,
                  {img:`https://ucarecdn.com/a59f0de3-9255-44cd-b18c-c2347b684754/GrayandGreenElectronicAdvertisementBannerFacebookAds111.png`},
                {img:`https://ucarecdn.com/bd4333ac-e788-487f-b948-cddb3b76075f/fan.JPG`},
                {img:`https://ucarecdn.com/31b86d26-4306-43c4-88fb-931e581d2452/teenad2.JPG`}
                ,
                {img:`https://ucarecdn.com/9bab3ea9-88c5-4799-bbc4-476a8281ae7b/teenad.JPG`},
                {img:`https://ucarecdn.com/41daa33c-89a7-46f5-bef6-fc32122d3258/solar.JPG`},
                
            ].map((item) => {

                    return <SwiperSlide 
                        onClick={() => router.push('/category/products')}
                    className='ztop pointer ' key={item.img}>
                        <Box
                            sx={{
            borderRadius:{sm:'6px'},
                        
                                height: '100%',
                            width:'100%'
                        }}>

                            <img
            
                                className={`img pointer 
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                    </SwiperSlide>
                })
}

            </Swiper>

        </Box>
    )
}

export default MainCarousel
