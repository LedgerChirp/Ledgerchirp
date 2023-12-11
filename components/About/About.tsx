import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id="About" className="">
      <Image
        src={"/ellipse.svg"}
        width={100}
        height={100}
        className="relative md:left-40 left-10 w-10 h-10"
        alt="ellipse"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-[80%] mx-auto md:py-20">
        <div className="flex flex-col">
          <Image
            src={"/deco-line.svg"}
            width={500}
            height={1}
            alt="deco-line"
            className="w-20 h-10"
          />
          <div className="flex flex-col md:space-y-16 space-y-5">
            <h1 className="font-extralight md:text-4xl text-xl text-white leading-normal">
              Leading companies trust us{" "}
              <span className="font-bold block text-white">
                {" "}
                to develop software{" "}
              </span>
            </h1>
            <p className="font-[Inter] font-extralight text-[#7f8fa7] md:w-3/4">
              We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#c94bff] to-[#F76680]">
                add development capacity
              </span>{" "}
              to tech teams. Our value isn&apos;t limited to building teams but
              is equally distributed across the project lifecycle. We are a
              custom software development company that guarantees the successful
              delivery of your project.
            </p>
            <Link href={"/"} className="text-[#57007B]">
              See More Information →
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <video
            width="640"
            height="360"
            controls
            className="rounded-xl w-full h-full"
          />
          <source src="" type="video/mp4" />
        </div>
      </div>
    </div>
  );
};

export default About;
