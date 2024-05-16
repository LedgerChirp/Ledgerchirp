import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    image: "/rocket.png",
    title: "UX Driven Engineering",
    description:
      "At LedgerChirp, we prioritize UX-driven engineering, seamlessly integrating user experience principles into every stage of the development process. From ideation to deployment, our team ensures that every feature and functionality is meticulously crafted with the end-user in mind. By combining cutting-edge technologies with human-centered design principles, we create intuitive and engaging experiences that delight users and drive business success.",
    color1: "#29272E",
    color2: "#27272E",
  },
  {
    image: "/code.png",
    title: "Developing Shared Understanding",
    description:
      "At LedgerChirp, we foster a culture of collaboration and communication, placing a strong emphasis on developing a shared understanding among all stakeholders. Through workshops, prototyping sessions, and regular feedback loops, we ensure that everyone involved in the project, from clients to developers, shares a common vision and goals. By aligning perspectives and expectations, we streamline the development process and deliver solutions that truly meet the needs of our clients and end-users.",
    color1: "#68DBF2",
    color2: "#509CF5",
  },
  {
    image: "/heart.png",
    title: "Proven Experience and Expertise",
    description:
      "At LedgerChirp, we bring a wealth of proven experience and expertise to every project we undertake. With a track record of successful implementations across various industries, our team of seasoned professionals leverages their in-depth knowledge and skills to deliver exceptional results. From complex web applications to innovative blockchain solutions, we combine our years of experience with a passion for innovation to exceed our clients' expectations and drive business growth.",
    color1: "#FF92AE",
    color2: "#FF3D9A",
  },
  {
    image: "/shield.png",
    title: "Security & Intellectual Property (IP)",
    description:
      "At LedgerChirp, we prioritize the security of your digital assets and intellectual property (IP) throughout the development process. Implementing industry-leading security measures and protocols, we safeguard your data against threats and vulnerabilities, ensuring confidentiality, integrity, and availability. Additionally, we respect and protect your intellectual property rights, adhering to strict confidentiality agreements and best practices to preserve the uniqueness and value of your innovations.",
    color1: "#67E9F1",
    color2: "#24E795",
  },
  {
    image: "/tick.png",
    title: "Code Reviews",
    description:
      "At LedgerChirp, we conduct thorough code reviews as an integral part of our development process. Our experienced team meticulously examines every line of code, ensuring adherence to coding standards, best practices, and security guidelines. Through collaborative peer reviews, we foster knowledge sharing, identify potential issues early on, and maintain code quality and consistency across projects. By prioritizing code reviews, we ensure that our solutions are robust, maintainable, and scalable, delivering long-term value to our clients.",
    color1: "#FFEF5E",
    color2: "#F7936F",
  },
  {
    image: "/lock.png",
    title: "Quality Assurance & Testing",
    description:
      "At LedgerChirp, we uphold the highest standards of quality assurance and testing throughout the development lifecycle. Our dedicated QA team employs a comprehensive suite of testing methodologies, including functional testing, performance testing, security testing, and user acceptance testing, to ensure that our solutions meet and exceed industry standards. By rigorously testing every aspect of our software, we mitigate risks, uncover defects, and deliver robust, reliable, and scalable products that exceed our clients' expectations.",
    color1: "#F76680",
    color2: "#57007B",
  },
];

const Approach = () => {
  return (
    <div
      className="flex flex-col my-10 p-10 bg-gradient-to-t from-slate-800 to-gray-900"
      id="Working"
    >
      <div className="flex flex-col mb-20 justify-center items-center">
        <Image
          src={"/deco-line.svg"}
          className="w-20 h-20"
          width={100}
          height={100}
          alt="line"
        />
        <h1 className="text-center font-extralight text-white drop-shadow-xl md:text-5xl text-3xl leading-normal">
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
