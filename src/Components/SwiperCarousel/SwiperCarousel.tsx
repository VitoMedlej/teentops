import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Autoplay, Pagination} from "swiper";
import 'swiper/css';
import { Box } from '@mui/material';
import ProductCard from '../HomeComponents/Cards/ProductCard';


const SwiperCarousel = ({data,      handleQuickView}:any) => {
   
    return (
        <Box
        sx={{
        py: {xs:'.5em',sm:'2em'},
        width: '100%',
        maxWidth: 'lg',
        margin: '1em auto',
        display: {
            xs: 'flex'
        },
        height: '100%'
    }}>

        <Swiper
            pagination={{
                clickable: true,
              }}
              autoplay={{
                delay:  3000883,
                disableOnInteraction: false,
              }}
              navigation={false}
            spaceBetween={8}
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

            {data && data.length>0 && data.map((item:any) => {
                    if (!item.title) return
                return <SwiperSlide className='swiper-wrapper1' style={{width:'100%',height:'100%'}} key={item._id}>
                    {/* <HouseCard
                        img={property.images[0] || property.images[1]}
                        width='95%'
                        id={property.id}
                        isFeatured={isFeatured !== undefined ? isFeatured : true}
                        propertySize={property.propertySize}
                        type={property.type}
                        baths={property.bathrooms}
                        rooms={property.rooms}
                        currency={property.currency}
                        price={property.price}
                        title={property.title}
                        location={property.location}/> */}
                         <ProductCard 
                        handleQuickView={handleQuickView}
                         title={item.title}
                         images={item.images}
                         price={item.price}
                         _id={item._id}
                         category={item.category}
                         />
                </SwiperSlide>

            })
}

        </Swiper>
        </Box>

    );
};

export default SwiperCarousel