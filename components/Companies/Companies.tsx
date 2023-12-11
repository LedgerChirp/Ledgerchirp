import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const CompaniesLogo = [
  {
    image: "/react.svg",
  },
  { image: "/next.svg" },
  { image: "/vercel.svg" },
  { image: "/netlify.svg" },
  { image: "/docker.svg" },
  { image: "/digitalocean.svg" },
  { image: "/astro.svg" },
  { image: "/redux.svg" },
  { image: "/prometheus.svg" },
  { image: "/jenkins.svg" },
];

const Companies = () => {
  return (
    <div className=" flex relative flex-col space-y-20">
      <div className="flex flex-col w-[80vw] justify-start items-start mx-auto">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-start md:text-5xl text-3xl text-white leading-normal">
          Meet the People{" "}
          <span className="font-semibold block">We are Working With</span>
        </h1>
      </div>
      <Image
        src={"/ellipse.svg"}
        width={50}
        height={50}
        className="absolute md:top-36 left-2/3 z-0 top-44"
        alt=""
      />
      <div className="w-full relative z-10 h-fit bg-gradient-to-t from-gray-950 md:py-10 py-4 to-slate-900">
        <Marquee className="">
          {CompaniesLogo &&
            CompaniesLogo.map((value, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center md:mx-20 mx-10"
                >
                  <Image
                    src={value.image}
                    width={100}
                    height={100}
                    alt="company-logo"
                    className="md:w-20 md:h-20 w-10 h-10"
                  />
                </div>
              );
            })}
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
