//card with photo on right side of screen
import React from "react";
import Image from "next/image";
interface Props {
  title: string;
  description: string;
  quote: string;
  name: string;
  position: string;
  image: string;
  profile: string;
  oneliner: string;
}

const Card1 = ({
  title,
  description,
  quote,
  oneliner,
  name,
  position,
  profile,
  image,
}: Props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-10">
      <div className="relative">
        <Image
          src={"/ellipse.svg"}
          width={100}
          height={100}
          alt="pink ellipse"
          className="absolute z-0 -top-10 -left-10"
        />
        <Image
          src={image}
          width={1000}
          height={1000}
          className="rounded-xl w-fit z-10 relative"
          alt="image"
        />
        <Image
          src={"/yellowellipse.svg"}
          width={100}
          height={100}
          className="w-16 absolute left-1/2 -bottom-8"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-10">
        <h1 className="font-bold md:text-4xl text-2xl">{title}</h1>
        <p className="font-base">{description}</p>
        <p>{oneliner}</p>
        <div className="flex space-x-5">
          <Image
            src={"/horizontalline.svg"}
            width={100}
            height={100}
            className="w-6 md:h-12 h-20"
            alt=""
          />
          <p className="italic bg-clip-text text-transparent bg-gradient-to-tr from-[#a444ce] to-[#F76680] text-sm">
            {quote}
          </p>
        </div>
        <div className="flex space-x-3">
          <Image
            src={profile}
            width={100}
            height={100}
            className="w-12 h-12 rounded-full"
            alt=""
          />
          <div className="flex flex-col ">
            <p className="">{name}</p>
            <p className="font-extralight">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
