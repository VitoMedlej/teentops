"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";
import { Box } from "@mui/material";

export default function App({images,index,setSwiper}:{setSwiper?:any,index?:number,images:string[] | []| undefined}) {
  return (
    <>
      <Swiper
      onSwiper={setSwiper}
        spaceBetween={30}
        effect={"fade"}
        autoplay={
          {delay:2000}
        }
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
{
          images && images.map(img=>{
            return    <SwiperSlide key={img}>
              <Box sx={{height:{xs:'400px',md:'500px'}}}>

            <img className='img' src={`${img}`} alt={'Product Image'} />
              </Box>
          </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}