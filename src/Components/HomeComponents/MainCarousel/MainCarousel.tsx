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
            maxHeight:'400px',
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

                {[{img:`https://ucarecdn.com/50c157b2-c1b4-42f8-b766-03c6f424c42b/Capture1.jpg`}
                ,
                {img:`https://ucarecdn.com/7d1ad969-6fd1-4010-b54f-905a25a5e4c7/WhiteElegantKitchenSuppliesAndToolsBanner1.png`},
                {img:'https://ucarecdn.com/7e0cff24-4faa-44b5-9e5f-94eb78b5db6e/BlackYellowBoldBagFashionSaleBanner2.jpg'}
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