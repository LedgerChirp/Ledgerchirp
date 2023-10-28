"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  background: string;
}

const Card = ({ title, description, image, background }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const dynamicClasses = `bg-[${background}]`;
  return (
    <div
      className={`grid md:grid-cols-2 grid-cols-1 ${dynamicClasses} rounded-xl`}
    >
      <div className="">
        <Image
          src={image}
          width={1000}
          height={1000}
          className="w-full h-full"
          alt=""
          onClick={handleOpen}
        />
      </div>
      {open && (
        <div className="md:hidden flex flex-col p-16 space-y-10">
          <h1 className="font-[Inter] font-semibold md:text-3xl text-xl text-[#A5D7E8]">
            {title}
          </h1>
          <p className="text-[#cccccc] font-light text-sm md:text-base">
            {description}
          </p>
          <Link
            href={"/"}
            className="bg-clip-text text-transparent bg-gradient-to-tr from-[#46C2CB] text-sm md:text-base to-[#E7F6F2]"
          >
            Read More &gt;
          </Link>
        </div>
      )}
      <div className="md:flex hidden flex-col p-16 space-y-10">
        <h1 className="font-[Inter] font-semibold md:text-3xl text-xl text-[#A5D7E8]">
          {title}
        </h1>
        <p className="text-[#cccccc] font-light text-sm md:text-base">
          {description}
        </p>
        <Link
          href={"/"}
          className="bg-clip-text text-transparent bg-gradient-to-tr from-[#46C2CB] text-sm md:text-base to-[#E7F6F2]"
        >
          Read More &gt;
        </Link>
      </div>
    </div>
  );
};

export default Card;
