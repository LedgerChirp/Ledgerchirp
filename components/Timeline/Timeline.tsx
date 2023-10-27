import React from "react";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-center md:text-5xl text-3xl leading-normal">
          How Development{" "}
          <span className="font-semibold block">through LedgerChirp works</span>
        </h1>
      </div>
    </div>
  );
};

export default Timeline;