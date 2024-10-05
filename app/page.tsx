// import Link from "next/link";
import Education from "../components/Education";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <Summary />
        <Projects />
        <Education />
      </div>
    </section>
  );
}
