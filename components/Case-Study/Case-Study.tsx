import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
const CaseStudy = () => {
  return (
    <div className="h-fit w-full space-y-10" id="Case">
      <div className="relative flex">
        <Image
          src={"/arrowup.svg"}
          width={100}
          height={100}
          className="md:w-60 absolute -bottom-20"
          alt=""
        />
        <Image
          src={"/ellipse.svg"}
          width={100}
          height={100}
          className="absolute top-16 md:w-10 md:h-10 w-5 h-5 md:left-1/3 left-1/4"
          alt="ellipse"
        />
        <Image
          src={"/arrowdown.svg"}
          width={100}
          height={100}
          className="md:w-60 absolute md:right-20 right-5 md:-bottom-52"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/deco-line.svg"}
          width={10}
          height={10}
          className="w-20 h-20"
          alt="deco-line"
        />
        <h1 className="font-extralight text-center text-white md:text-5xl text-3xl leading-normal">
          Our recent <span className="block font-semibold">Case Studies</span>
        </h1>
      </div>
      <div className="md:w-[80vw] w-[90vw] flex flex-col space-y-10 mx-auto">
        <Card
          title={"Website Design for SCFC Canada"}
          description={
            "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
          }
          image={"/case1.png"}
          background={"#0B2447"}
        />
        <Card
          title={"Website Design for SCFC Canada"}
          description={
            "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
          }
          image={"/case2.png"}
          background={"#37306B"}
        />
        <Card
          title={"Website Design for SCFC Canada"}
          description={
            "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
          }
          image={"/case3.png"}
          background={"#13005A"}
        />
        <Link
          href={"/"}
          className="bg-clip-text self-end text-transparent bg-gradient-to-tr from-[#46C2CB] to-[#E7F6F2]"
        >
          Read More Case Studies &gt;
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;
