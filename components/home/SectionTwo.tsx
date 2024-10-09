"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function LandingTwo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section>
      <div
        className="text-center mt-40 flex flex-col items-center"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-extrabold text-black">
          How it Works for you?
        </h1>
        <p
          className="text-sm md:text-base mt-4 text-center"
          style={{ width: "27rem", color: "#4F5665" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <button
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-7 py-3 text-center mt-5"
          style={{ boxShadow: "10px 10px 20px rgba(0, 0, 255, 0.4)" }}
        >
          See a Demo
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-24 p-6 mx-auto mt-20">
          {/* Card 1 */}
          <div
            className="max-w-sm rounded overflow-hidden bg-white"
            data-aos="fade-left"
          >
            <Image
              src="/geographic.png"
              alt="Productivity Image"
              width={300}
              height={300}
              className="w-full h-50 object-cover"
            />
            <div className="p-4 text-center w-full">
              <h2 className="text-black text-2xl font-bold mb-2 mx-auto ">
                Geographic Segmentation
              </h2>
              <p
                className=" text-center mb-4 mx-auto"
                style={{ width: "19rem", color: "#4F5665" }}
              >
                Consist of creating different groups of customers based on
                geographic boundaries
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="max-w-sm rounded overflow-hidden bg-white"
            data-aos="fade-right"
          >
            <Image
              src="/demographic.png"
              alt="Productivity Image"
              width={400}
              height={250}
              className="w-full h-50 object-cover"
            />
            <div className="p-4 text-center w-full">
              <h2 className="text-black text-2xl font-bold mb-2 mx-auto">
                Demographic Segmentation
              </h2>
              <p
                className="text-center mb-4 mx-auto"
                style={{ color: "#4F5665" }}
              >
                Consist of dividing the market through different variables such
                as age, gender, income, etc
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="max-w-sm rounded overflow-hidden bg-white"
            data-aos="fade-left"
          >
            <Image
              src="/psycho.png"
              alt="Productivity Image"
              width={400}
              height={250}
              className="w-full h-50 object-cover"
            />
            <div className="p-4 text-center w-full flex flex-col items-center">
              <h2 className="text-black text-2xl font-bold mb-2">
                Psychographic Segmentation
              </h2>
              <p
                className="text-center mb-4"
                style={{ width: "19rem", color: "#4F5665" }}
              >
                Consist of creating different groups of customers based on
                geographic boundaries.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="max-w-sm rounded overflow-hidden bg-white"
            data-aos="fade-right"
          >
            <Image
              src="/behavor.png"
              alt="Productivity Image"
              width={400}
              height={250}
              className="w-full h-50 object-cover"
            />
            <div className="p-4 text-center w-full flex flex-col items-center">
              <h2 className="text-black text-2xl font-bold mb-2">
                Behavioral Segmentation
              </h2>
              <p
                className="text-center mb-4"
                style={{ width: "19rem", color: "#4F5665" }}
              >
                Consist of creating different groups of customers based on
                geographic boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
