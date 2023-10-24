import Navbar from "@/components/Navigation/Navbar";
import Landing from "@/components/Hero/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-br w-full h-full from-black to-gray-900">
      <Navbar />
      <Landing />
    </main>
  );
}
