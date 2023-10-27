import Navbar from "@/components/Navigation/Navbar";
import Landing from "@/components/Hero/Landing";
import Image from "next/image";
import Hire from "@/components/Hire/Hire";
import About from "@/components/About/About";
import CaseStudy from "@/components/Case-Study/Case-Study";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";
import TechStack from "@/components/Tech-Stack/TechStack";
import Resources from "@/components/Resources/Resources";
import Services from "@/components/Services/Services";
import Description from "@/components/Description/Description";
import Timeline from "@/components/Timeline/Timeline";
import Companies from "@/components/Companies/Companies";

export default function Home() {
  return (
    <main className="bg-gradient-to-br w-full h-full select-none from-black to-gray-900 font-[Inter]">
      <Navbar />
      <Landing />
      <Services />
      <About />
      <Companies />
      <CaseStudy />
      <Description />
      <Approach />
      <TechStack />
      <Timeline />
      <Resources />
      <Hire />
      <Footer />
    </main>
  );
}
