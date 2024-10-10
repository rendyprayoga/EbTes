"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LandingOne() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center font-rubik"
      style={{ backgroundColor: "#2161D5" }}
    >
      <div className="container mx-auto px-6 lg:px-32 relative text-center">
        <div
          className="relative md:w-3/4 mx-auto flex flex-col items-center space-y-4"
          data-aos="fade-right"
        >
          {/* Adjusted Image Elements */}
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              top: "-10rem", // Adjusted position for mobile
              left: "50%",
              transform: "translateX(-50%)",
              width: "35rem", // Reduced width for mobile
            }}
          >
            <img
              src="/Ellipse228.png"
              alt="Icon 1"
              className="w-full h-auto" // Responsive styling
            />
          </div>
          <div
            className="absolute z-0 flex items-center justify-center"
            style={{
              top: "-20rem", // Adjusted position for mobile
              left: "50%",
              transform: "translateX(-50%)",
              width: "55rem", // Reduced width for mobile
            }}
          >
            <img
              src="/Ellipse228.png"
              alt="Icon 2"
              className="w-full h-auto" // Responsive styling
            />
          </div>

          <div className="z-1 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p
              className="text-lg md:text-xl mt-10"
              style={{ width: "100%", maxWidth: "44rem", marginTop: "3rem" }} // Ensured text is responsive
            >
              A small company offering data-driven solutions for campaign
              effectiveness using spatial data and detailed analysis of target
              audience (voters). Use technology that unites spatial data science
              and political science.
            </p>
          </div>
        </div>
        <button
          className="px-16 py-4 bg-white text-[#2161D5] rounded-full font-bold hover:bg-gray-200"
          style={{ marginTop: "5rem" }}
          data-aos="fade-up"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
