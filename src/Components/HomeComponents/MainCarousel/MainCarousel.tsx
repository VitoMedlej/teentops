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

                {[{img:`https://ucarecdn.com/cb04f440-c3b4-4943-9650-343d079f8667/49da7d1c9283e95770851ecada351a029f037a57_HMDWebsiteBanner01.png`},{img:'https://ucarecdn.com/a021bc32-1e3a-418d-905d-37c8236dd0dd/Banner.png',className:'contain'},
                // {img:'https://cdn.shopify.com/s/files/1/0549/1385/9821/files/Christmas_2022_Banner_1.jpg?v=1671886210'}
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
            
                                className={`img pointer ${item?.className}`}
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