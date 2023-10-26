"use client";
import Image from "next/image";
import Link from "next/link";
// import { Carousel } from "@trendyol-js/react-carousel";
import Marquee from "react-fast-marquee";

const CarouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Title",
    link: "/",
  },
];

const Resources = () => {
  return (
    <div>
      <div className="flex flex-col mb-20 justify-center items-center">
        <Image
          src={"/deco-line.svg"}
          className="w-20 h-20"
          width={100}
          height={100}
          alt="line"
        />
        <h1 className="text-center font-extralight drop-shadow-xl md:text-5xl text-3xl leading-normal">
          Featured <span className="block font-semibold">Resouces</span>
        </h1>
      </div>
      <div className="overflow-x-hidden block items-start space-x-10 w-[90%] mx-auto">
        <Marquee
          pauseOnHover={true}
          // show={4.75}
          // slide={3}
          // swiping={true}
          // responsive={true}
          // useArrowKeys={true}
          className="block"
        >
          {CarouselData &&
            CarouselData.map((value, id) => {
              return (
                <div className="mx-10 flex flex-col" key={id}>
                  <Image
                    src={value.image}
                    className="w-60 h-40 rounded-xl"
                    width={100}
                    height={100}
                    alt={value.image}
                  />
                  <h1 className="mx-2">{value.title}</h1>
                  <Link href={value.link} className="text-[#57007B] self-end">
                    Read More →
                  </Link>
                </div>
              );
            })}
        </Marquee>
      </div>
    </div>
  );
};

export default Resources;
