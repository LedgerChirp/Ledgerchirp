import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    image: "/rocket.png",
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#29272E",
    color2: "#29272E",
  },
  {
    image: "/code.png",
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#68DBF2",
    color2: "#509CF5",
  },
  {
    image: "/heart.png",
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#FF92AE",
    color2: "#FF3D9A",
  },
  {
    image: "/shield.png",
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#67E9F1",
    color2: "#24E795",
  },
  {
    image: "/tick.png",
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#FFEF5E",
    color2: "#F7936F",
  },
  {
    image: "/lock.png",
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    color1: "#F76680",
    color2: "#57007B",
  },
];

const Approach = () => {
  return (
    <div className="flex flex-col my-10 p-10 bg-gradient-to-t from-slate-700 to-gray-700">
      <div className="flex flex-col mb-20 justify-center items-center">
        <Image
          src={"/deco-line.svg"}
          className="w-20 h-20"
          width={100}
          height={100}
          alt="line"
        />
        <h1 className="text-center font-extralight drop-shadow-xl md:text-5xl text-3xl leading-normal">
          Our Design and{" "}
          <span className="block font-semibold">Developement Approach</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1 w-[80%] mx-auto">
        {data &&
          data.map((value, id) => {
            return (
              <Card
                title={value.title}
                key={id}
                description={value.description}
                image={value.image}
                color1={value.color1}
                color2={value.color2}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Approach;
