"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const slideData = [
  {
    title: "Web Design and Development",
    description:
      "React is a powerful JavaScript library for building interactive user interfaces, renowned for its efficiency and flexibility in crafting modern web applications.",
    image: "/react.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "Svelte is a revolutionary JavaScript framework that shifts the work of rendering from the browser to the build step, resulting in faster, leaner applications with minimal overhead.",
    image: "/svelte.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "Next.js is a versatile React framework that enables server-side rendering, static site generation etc. empowering high-performance web applications with ease.",
    image: "/next.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "TypeScript is a superset of JavaScript that adds static typing and other advanced features, enhancing code quality, maintainability, and scalability in large-scale projects.",
    image: "/typescript.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "JavaScript is the backbone of modern web development, powering dynamic and interactive experiences across browsers, servers, and mobile devices with its versatility and ubiquity.",
    image: "/javascript.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    image: "/astro.svg",
  },
  {
    title: "Web Design and Development",
    description:
      "Ethereum is a decentralized platform that enables the development of smart contracts and decentralized applications (DApps), leveraging blockchain technology for transactions.",
    image: "/ethereum.svg",
  },
];

const Services = () => {
  return (
    <div
      className="relative w-full flex flex-col justify-evenly md:py-10 py-6 items-center bg-[#06081c] h-screen z-10"
      id="Services"
    >
      <h1 className="font-semibold md:text-5xl text-3xl text-white">
        Services we offer
      </h1>
      <div className=" md:flex hidden overflow-hidden w-[99vw]">
        <Swiper
          slidesPerView={3.75}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          scrollbar={true}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            // modifierClass: "pagination",
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper md:h-fit overflow-hidden"
        >
          {slideData &&
            slideData.map((value, index) => {
              return (
                <SwiperSlide
                  className=" border inset-0 absolute bg-clip-border border-transparent bg-gradient-to-tr from-[#57007B] to-[#F76680]"
                  key={index}
                >
                  <div className="relative flex p-10 flex-col z-10 space-y-5 bg-slate-900 h-full w-full justify-start items-start">
                    <Image
                      src={value.image}
                      alt=""
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#57007B] font-bold to-[#F76680]">
                      {value.title}
                    </h1>
                    <p className="text-slate-500">{value.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="w-[90%] md:hidden flex overflow-hidden">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          scrollbar={true}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            // modifierClass: "pagination",
          }}
          loop={true}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper md:h-fit overflow-hidden"
        >
          {slideData &&
            slideData.map((value, index) => {
              return (
                <SwiperSlide
                  className=" border inset-0 absolute bg-clip-border border-transparent bg-gradient-to-tr from-[#57007B] to-[#F76680]"
                  key={index}
                >
                  <div className="relative flex p-10 flex-col z-10 space-y-5 bg-slate-900 h-full w-full justify-start items-start">
                    <Image
                      src={value.image}
                      alt=""
                      width={100}
                      height={100}
                      className="w-16 h-16"
                    />
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#57007B] font-bold to-[#F76680]">
                      {value.title}
                    </h1>
                    <p className="text-slate-500">{value.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
