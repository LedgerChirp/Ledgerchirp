import React from "react";
import Image from "next/image";
import Tech from "./Tech";
const TechStack = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-center md:text-5xl text-white text-3xl leading-normal">
          Our <span className="font-semibold block">Tech Stack</span>
        </h1>
      </div>
      <Tech />
    </div>
  );
};

export default TechStack;
