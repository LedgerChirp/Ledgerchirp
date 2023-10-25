import Navbar from "@/components/Navigation/Navbar";
import Landing from "@/components/Hero/Landing";
import Image from "next/image";
import Hire from "@/components/Hire/Hire";
import About from "@/components/About/About";
import CaseStudy from "@/components/Case-Study/Case-Study";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-br w-full h-full from-black to-gray-900 font-[Inter]">
      <Navbar />
      <Landing />
      <About />
      <CaseStudy />
      <Approach />
      <Hire />
      <Footer />
    </main>
  );
}
