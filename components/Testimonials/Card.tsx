"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="h-screen w-[99%] mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full w-[99%] flex justify-center items-center">
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center px-[30%] pt-[20%]">Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</SwiperSlide>
      </Swiper>
    </div>
  );
}
