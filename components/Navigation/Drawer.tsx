"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Links = [
  {
    name: "About",
    link: "#About",
  },
  {
    name: "Services",
    link: "#Services",
  },
  {
    name: "Case Studies",
    link: "#case",
  },
  {
    name: "Blogs",
    link: "#blog",
  },
  {
    name: "How it Works",
    link: "#working",
  },
  {
    name: "Hire",
    link: "#hire",
  },
];
const Drawer = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <Image
          src={"/menu.svg"}
          width={100}
          height={100}
          className={`w-5 h-5 ${open == true ? "hidden" : "flex"}`}
          alt=""
          onClick={handleClick}
        />
      </div>
      <div className="font-light justify-center items-center">
        {open && (
          <div className="absolute top-0 right-0 w-fit px-10 flex flex-col duration-500 ease-in-out h-screen bg-gradient-to-tr from-gray-700 to-black ">
            <button onClick={handleClick} className="text-white self-end py-4">
              X
            </button>
            {Links &&
              Links.map((value, id) => {
                return (
                  <div key={id} className="my-5">
                    <Link href={value.link} className="text-white" onClick={handleClick}>
                      {value.name}
                    </Link>
                  </div>
                );
              })}
            <button className="bg-gradient-to-tr my-6 from-[#6675F7] to-[#57007B]  px-3 py-2 rounded-lg drop-shadow-sm">
              <Link href={"#contact"}>Contact Us</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
