import React from "react";
import Image from "next/image";
import Card from "./Card";
const Testimonials = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-center md:text-5xl text-3xl leading-normal">
          Why Customers love{" "}
          <span className="font-semibold block">Working with Us</span>
        </h1>
      </div>
      <Card />
    </div>
  );
};

export default Testimonials;
