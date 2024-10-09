// import Link from "next/link";
import LandingPage from "../components/home/LandingHome";
import Navbar from "../components/Navbar";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/SectionThree";
import Question from "../components/home/Question";
import Subscribe from "@/components/home/Subscribe";
import Footers from "../components/Footer";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <section className="font-rubik">
      <Navbar />
      <div>
        <LandingPage />
        <SectionTwo />
        <SectionThree />
        <Question />
        <Subscribe />
        <Footers />
      </div>
    </section>
  );
}
