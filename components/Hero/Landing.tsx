import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div
      id="home"
      className="md:h-screen h-fit z-0 py-20 lg:py-0 grid md:grid-cols-2 lg:gap-16 grid-cols-1 w-[80%] items-center mx-auto"
    >
      <div className=" space-y-12 flex justify-center items-center md:items-start flex-col md:mt-0 mt-16">
        <h1 className="md:text-6xl text-3xl md:leading-tight text-center md:text-left">
          <span className="font-extralight text-white">
            Great{" "}
            <span className="bg-gradient-to-b text-transparent bg-clip-text from-[#DE4396] to-blue-200 font-bold">
              Products
            </span>{" "}
            are
          </span>
          <br />
          <span className="font-bold text-white">
            Built By Great{" "}
            <span className="bg-gradient-to-bl text-transparent bg-clip-text from-[#F7666F] to-[#406AFF]">
              Teams
            </span>
          </span>
        </h1>
        <p className="text-[#4A5568] font-[Inter] md:text-lg text-sm text-justify">
          We specialize in web development, application development, blockchain
          development, and cybersecurity. Our expert team delivers cutting-edge
          solutions tailored to your business needs, ensuring you stay ahead in
          the digital landscape.
        </p>
        <button className="drop-shadow-sm w-fit bg-[#3D63EA] md:px-5 md:py-3 text-sm md:text-base py-2 px-3 rounded-md font-semibold text-[#FAFAFA]">
          <Link href={"/contact"}>Let&apos;s Get Started!</Link>
        </button>
        <Image
          src={"/ellipse.svg"}
          width={100}
          height={100}
          className="md:w-16 md:h-16 w-8 h-8 absolute -bottom-40 md:-bottom-10 left-1/3 -z-0 "
          alt="ellipse"
        />
      </div>
      <div>
        <Image
          src={"/landing-image.png"}
          alt="landing-figure"
          width={10000}
          height={10000}
          className="md:w-full md:h-full my-10 md:my-0"
        />
      </div>
    </div>
  );
};

export default Landing;
