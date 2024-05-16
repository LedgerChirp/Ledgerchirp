import { createContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
// import { motion } from "framer-motion";
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
    link: "#Case",
  },
  {
    name: "Tech-Stack",
    link: "#tech-stack",
  },
  {
    name: "How it Works",
    link: "#Working",
  },
  {
    name: "Hire",
    link: "#Hire",
  },
];

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <nav
      // variants={containerVariants}
      // initial="hidden"
      // animate="visible"
      className="w-full backdrop-blur-xl z-50 fixed h-20 flex justify-between px-5 items-center"
    >
      <Link href={"/"} className="flex justify-center items-center">
        <Image
          src={"/logo.png"}
          alt=""
          width={100}
          height={100}
          className="md:w-12 w-10"
        />
        <h1 className="text-white">LedgerChirp</h1>
      </Link>
      <div className="lg:flex font-light justify-center items-center space-x-10 hidden">
        {Links &&
          Links.map((value, id) => {
            return (
              <div key={id} className="group">
                <Link href={value.link} className="hover:text-cyan-400">
                  {value.name}
                  <div className="rounded-full w-1 h-1 group-hover:visible invisible mx-auto bg-cyan-400" />
                </Link>
              </div>
            );
          })}
      </div>
      <button className="bg-gradient-to-tr from-[#6675F7] to-[#57007B] lg:flex hidden px-3 py-2 rounded-lg drop-shadow-sm">
        <Link href={"/contact"}>Contact Us</Link>
      </button>
      <div className="lg:hidden flex">
        <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
