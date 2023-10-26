import Image from "next/image";
interface Props {
  image: string;
  title: string;
  description: string;
  color1: string;
  color2: string;
}

const Card = ({ image, title, description, color1, color2 }: Props) => {
  return (
    <div className="w-full bg-gradient-to-t space-y-8 md:space-y-0 border md:p-10 p-5 flex md:flex-row rounded-md space-x-5 flex-col">
      <Image
        src={image}
        alt=""
        width={1000}
        className={`w-12 h-12 bg-gradient-to-tr from-[#29272E] to-[#27272E] rounded-lg p-2 mx-auto md:mx-0 `}
        height={1000}
      />
      <div className="flex flex-col space-y-3">
        <h1 className="font-[Inter] md:text-lg font-semibold mx-auto text-center md:text-left md:mx-0">
          {title}
        </h1>
        <p className="font-[Inter] md:text-sm text-xs font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
