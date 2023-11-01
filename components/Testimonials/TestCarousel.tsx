"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function TestCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = 10;

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (!swiperRef.current) return;
    // @ts-ignore
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    // @ts-ignore
    swiperRef.current.slideNext();
  };

  useEffect(() => {
    return () => {
      swiperRef.current = null;
    };
  }, []);
  useEffect(() => {
    return () => {
      swiperRef2.current = null;
    };
  }, []);

  const swiperRef2 = useRef(null);

  const [activeIndex2, setActiveIndex2] = useState(0);

  const handlePrev2 = () => {
    if (swiperRef2.current !== null) {
      // @ts-ignore
      swiperRef2.current.slidePrev();
    }
  };

  const handleNext2 = () => {
    if (swiperRef2.current !== null) {
      // @ts-ignore
      swiperRef2.current.slideNext();
    }
  };
  const slides = [
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
    "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
  ];
  const data = [
    {
      id: 1,
      heading: "Blockchain",
      Image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Supply Chain",
      rating: "⭐⭐⭐⭐⭐",
      name: "Imran Khan",
      position: "Software Engineer",
      content:
        "Unleash the power of transparency and security with blockchain technology, revolutionizing industries across the globe.",
      link: "https://www.linkedin.com/posts/alessandro-benigni_transforming-supply-chains-with-nfts-activity-7070308222485618688-0lNc",
    },
    {
      id: 2,
      heading: "Cryptocurrency",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Business Use Cases",
      content:
        "Dive into the world of digital currencies, explore the potential for financial innovation, and embrace the future of money.",
      link: "https://youtube.com/watch?v=KCbTOxC7iLo",
    },
    {
      id: 3,
      heading: "NFT",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Blockchain-based Tokenization",
      content:
        "Explore the booming world of non-fungible tokens (NFTs), where digital assets are transformed into unique, collectible, and provably scarce assets.",
      link: "https://youtube.com/watch?v=eZf2B12t8dA",
    },
    {
      id: 4,
      heading: "Metaverse",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "NFT Applications in Supply Chains",
      content:
        "Step into the immersive realm of the metaverse, where virtual reality and blockchain converge, creating boundless opportunities for social interaction and commerce.",
      link: "https://cointelegraph.com/explained/what-are-the-applications-of-nfts-in-supply-chains",
    },
    {
      id: 5,
      heading: "DeFi",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Art and NFTs",
      content:
        "Unlock the potential of decentralized finance (DeFi) and discover a new era of open, permissionless financial systems that empower individuals worldwide.",
      link: "https://www.youtube.com/watch?v=xTyGb50ui1g",
    },
    {
      id: 6,
      heading: "DAO",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Art and NFTs",
      content:
        "Embrace the power of decentralized autonomous organizations (DAOs) and witness the rise of community-driven decision-making and governance structures.",
      link: "https://www.youtube.com/watch?v=xTyGb50ui1g",
    },
    {
      id: 7,
      heading: "DApps",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Blockchain-based Tokenization",
      content:
        "Explore the vast ecosystem of decentralized applications (DApps) that are reshaping industries and empowering users with increased control over their data and digital experiences.",
      link: "https://youtube.com/watch?v=KCbTOxC7iLo",
    },
    {
      id: 8,
      heading: "Stablecoin & CBDCs",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Supply Chain Management",
      content:
        "Discover the stability and efficiency of stablecoins and the potential impact of central bank digital currencies (CBDCs) on the future of global finance.",
      link: "https://cointelegraph.com/explained/what-are-the-applications-of-nfts-in-supply-chains",
    },
    {
      id: 9,
      heading: "Creator Economy",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "NFT Applications in Supply Chains",
      content:
        "Join the thriving creator economy, where individuals leverage blockchain technology to monetize their digital content and engage with their communities in innovative ways.",
      link: "https://cointelegraph.com/explained/what-are-the-applications-of-nfts-in-supply-chains",
    },
    {
      id: 10,
      heading: "Privacy & Digital Infrastructure",
      image:
        "https://images.unsplash.com/photo-1585328000852-779be6a6582b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80",
      topic: "Business Use Cases",
      content:
        "Delve into the critical topics of privacy and digital infrastructure, understanding the challenges and opportunities presented by emerging technologies in a connected world.",
      link: "https://www.techtarget.com/whatis/feature/5-business-use-cases-for-NFTs",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={5}
          initialSlide={2}
          coverflowEffect={{
            slideShadows: false,
            rotate: 10,
            depth: -20,
            modifier: 1,
            stretch: 1,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full my-4 p-0 h-fit overflow-hidden"
          roundLengths={true}
          spaceBetween={20}
          //   @ts-ignore
          loopedSlides={2}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
          //   @ts-ignore
          onSwiper={(swiper) => (swiperRef2.current = swiper)}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide}
              className={` ${
                index !== activeIndex2
                  ? ""
                  : "rounded-[6px]  p-[14px] bg-right-bottom bg-fixed bg-no-repeat h-[50vh]"
              }`}
              style={{
                backgroundColor: `${index === activeIndex2 ? "" : ""}`,
              }}
            >
              <div>
                <Image
                  alt="etc"
                  src={slide}
                  width={100}
                  height={100}
                  className={` w-40 h-40 mx-auto ${
                    index === activeIndex2 && "rounded-full"
                  }`}
                />
                <div className="flex flex-col justify-center items-center">
                  {data.map((value, id) => {
                    return (
                      <div key={id} className="flex flex-col justify-center items-center">
                        <p className="flex">{value.rating}</p>
                        <p className="flex">{value.name}</p>
                        <p className="flex">{value.position}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {index == activeIndex2 && (
                <div className="text-center mt-[2rem] flex flex-row justify-center  items-center">
                  <div className="flex flex-col gap-[2rem]">
                    <p className="text-[#C3C5C4] text-[14px] font-[400]">
                      {data[activeIndex2].content}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/*  */}
        </Swiper>
        <div className="relative right-[100%] top-[10rem]">
          <div className="absolute left-40 z-40 flex justify-between w-[80vw]">
            <div
              onClick={handlePrev2}
              className="justify-start flex flex-col border-[1px] rounded-full p-[0.4rem] cursor-pointer "
            >
              <IoIosArrowBack size={30} className=" " />
            </div>
            <div
              onClick={handleNext2}
              className="justify-center flex flex-col border-[1px] cursor-pointer rounded-full p-[0.4rem] "
            >
              <IoIosArrowForward size={30} className=" " />
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-[#000] sm:hidden overflow-hidden pb-20">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          initialSlide={2}
          coverflowEffect={{
            slideShadows: false,
            rotate: 0,
            depth: 10,
            stretch: 0,
          }}
          modules={[EffectCoverflow]}
          className="w-[90%] my-4 p-0 h-fit overflow-hidden mx-auto"
          roundLengths={true}
          spaceBetween={0}
          //   @ts-ignore
          loopedSlides={2}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          //   @ts-ignore
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={slide}
              className={` ${
                index !== activeIndex
                  ? ""
                  : "rounded-[6px] border-[1px] border-[#7F8B83] p-[14px] bg-[#184534] bg-[url('/carousalgradient.svg')] bg-right-bottom bg-fixed bg-no-repeat h-[50vh]"
              }`}
              style={{
                backgroundColor: `${index === activeIndex ? "#184534" : ""}`,
                height: "85vh",
                paddingBottom: "2rem",
              }}
            >
              <Image
                alt="etc"
                width={100}
                height={100}
                src={slide}
                className={` w-full sm:h-auto h-[56%] ${
                  index === activeIndex && "rounded-lg"
                }`}
              />
              {index == activeIndex && (
                <div className="text-center mt-[2rem] flex flex-row justify-center  items-center">
                  <div className="flex flex-col gap-[2rem]">
                    <p className="text-[#81EBAA] text-[20px] font-[700]">
                      {data[activeIndex].heading}
                    </p>
                    <p className="text-[#C3C5C4] text-[14px] font-[400]">
                      {data[activeIndex].content}
                    </p>
                    <div
                      className="underline underline-offset-4 text-white"
                      onClick={() =>
                        window.open(data[activeIndex].link, "_blank")
                      }
                    >
                      Read More
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/*  */}
        </Swiper>
        <div className="relative right-[75%] top-[95vh]">
          <div className="absolute z-40 flex justify-between w-[50vw]">
            <div
              onClick={handlePrev}
              className="justify-center flex flex-col border-[1px] rounded-full p-[0.4rem] cursor-pointer border-[#46DE84]"
            >
              <IoIosArrowBack size={20} className="text-[#46DE84] " />
            </div>
            <div
              onClick={handleNext}
              className="justify-center flex flex-col border-[1px] cursor-pointer rounded-full p-[0.4rem] border-[#46DE84]"
            >
              <IoIosArrowForward size={20} className="text-[#46DE84] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
