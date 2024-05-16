import React from "react";
import Image from "next/image";
const Hire = () => {
  return (
    <div
      id="Hire"
      className="w-[80%] h-[35vh] relative md:h-[50%] md:my-40 my-20 mx-auto bg-gradient-to-tl md:p-20 from-black to-gray-800 md:flex md:justify-between justify-center items-center rounded-2xl"
    >
      <h1 className="text-[#FAFAFA] text-center md:text-3xl font-bold py-10">
        Hire the best Developers and Designers around!
      </h1>
      <Image
        src={"/glare.svg"}
        width={100}
        height={100}
        className="md:w-40 md:h-40 w-20 h-20 absolute md:right-[6rem] right-[7rem]"
        alt="glare"
      />
      <button className="ml-[4.5rem] mt-6 md:ml-0 md:mt-0 bg-gradient-to-tr from-[#F16063] to-[#FFC656] rounded-lg text-xs md:text-base py-2 px-4 md:py-3 md:px-5">
        Hire Top Developers!
      </button>
    </div>
  );
};

export default Hire;
