import Subscribe from "@/components/home/Subscribe";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutUs from "@/components/about/AboutUs";
import SectionOne from "@/components/about/SectionOne";
import LastSection from "@/components/about/LastSection";
export default function AboutPage() {
  return (
    <section>
      <Navbar />
      <div>
        <AboutUs />
        <SectionOne />
        <LastSection />
        <Subscribe />
        <Footer />
      </div>
    </section>
  );
}
