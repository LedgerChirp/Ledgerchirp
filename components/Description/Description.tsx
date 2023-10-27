import React from "react";
import Image from "next/image";
import Card1 from "./Card1";
import Card2 from "./Card2";
const Description = () => {
  return (
    <div className="flex flex-col md:space-y-16 space-y-5 md:py-10 py-5">
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-center md:text-5xl text-3xl leading-normal">
          Way of Building{" "}
          <span className="block font-semibold">Great Software</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto flex flex-col space-y-10">
        {/**
         * feed data one by one in every card here because the logic is complex.
         */}
        <Card1
          title="Build the right team to scale"
          description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          quote="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          name="jeena markram"
          position="CEO starbucks"
          image="/teammeeting.png"
          oneliner="Our delivery model helps you cut costs and deliver within budget."
          profile="/react.svg"
        />
        <Card2
          title="Build the right team to scale"
          description="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          quote="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
          name="jeena markram"
          position="CEO starbucks"
          image="/teammeeting.png"
          oneliner="Our delivery model helps you cut costs and deliver within budget."
          profile="/react.svg"
        />
      </div>
    </div>
  );
};

export default Description;
