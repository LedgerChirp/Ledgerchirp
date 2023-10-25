import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:space-x-8 space-y-10 md:items-start md:justify-start w-[90vw] mx-auto md:flex-row">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-start items-center">
            <Image
              src={"/logo.png"}
              width={100}
              height={100}
              className="w-10 h-10"
              alt="logo"
            />
            <h1 className="font-bold">LedgerChirp</h1>
          </div>
          <p className="font-[Inter] font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, dolor?
          </p>
          <p>Rated ⭐⭐⭐⭐⭐ by our beloved customers</p>
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-semibold">Quick Links</h1>
          <ul className="font-extralight space-y-1 my-1">
            <li>About</li>
            <li>Services</li>
            <li>Case-Studies</li>
            <li>Blogs</li>
            <li>How It Works</li>
            <li>Hire</li>
            <li>Areas we Serve</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold">Contact Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, illum?
          </p>
          <p>+91 88151 69093</p>
        </div>
        <div className="flex space-x-5 md:h-48">
          <Link
            href={"/"}
            className="md:w-12 md:h-12 w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 shadow-lg"
          >
            <Image
              src={"/instagram.svg"}
              width={100}
              height={100}
              className="w-5 h-5"
              alt="insta"
            />
          </Link>
          <Link
            href={"/"}
            className="md:w-12 md:h-12 w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 shadow-lg"
          >
            <Image
              src={"/twitter.svg"}
              width={100}
              height={100}
              className="w-5 h-5"
              alt="insta"
            />
          </Link>
          <Link
            href={"/"}
            className="md:w-12 md:h-12 w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-tr from-slate-700 to-slate-900 shadow-lg"
          >
            <Image
              src={"/linkedin.svg"}
              width={100}
              height={100}
              className="w-5 h-5"
              alt="insta"
            />
          </Link>
          {/* <Link href={"/"}>
          <Image
            src={"/instagram.svg"}
            width={100}
            height={100}
            className="w-10 h-10"
            alt="insta"
          />
        </Link> */}
        </div>
      </div>
      <div className="border-t border-[#CBD5E0] flex items-center justify-center p-2 mt-5 text-center text-gray-500">
        © 2023 Copyright by LedgerChirp INC. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
