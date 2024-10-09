"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeMain() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="text-white mt-4 font-rubik">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[auto,auto] gap-4 md:gap-10 p-10 items-center justify-center">
        <div className="container mx-auto p-8 text-left ">
          <div
            className="text-left md:text-left mt-10 md:mt-0 text-black"
            data-aos="fade-up"
          >
            <h1 className=" md:text-5xl mb-5  font-bold ">
              Observe Your <br />
              Power
            </h1>
            <p className="text-sm md:text-base max-w-md md:max-w-lg p-6 md:p-0 text-start">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone.
            </p>
          </div>
          <div className="flex items-center md:justify-start mt-10">
            <button
              className="text-white bg-blue-700 hover:bg-blue-600 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-7 py-3 text-center"
              style={{ boxShadow: "20px 10px 20px rgba(0, 0, 255, 0.2)" }}
            >
              See a Demo
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0 mt-10" data-aos="fade-up">
          <Image
            src="/awal.png"
            alt="Profile Image"
            width={540}
            height={500}
            className="rounded-2xl object-cover mb-20"
          />
          {/* Icon 1 */}
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="text-center mt-60 " data-aos="fade-up">
        <h1 className="text-2xl font-bold text-black">Why choose us?</h1>
        <p
          className="text-sm md:text-base text-gray-500 mt-4  mx-auto"
          style={{ width: "25rem" }}
        >
          We provide you with the best choices. The leading political campaign
          intelligence platform.
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mx-auto mt-4">
          {/* Card 1 */}
          <div
            className="max-w-sm  border rounded-lg hover:border hover:border-blue-600"
            data-aos="fade-right"
          >
            <Image
              src="/dataone.png"
              alt="Productivity Image"
              width={100}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4">
              <h2 className="text-black text-xl font-bold mb-2 mx-5">Data</h2>
              <p
                className="text-gray-700 text-base mb-4 mx-5"
                style={{ width: "17rem" }}
              >
                The biggest regional data, development, and POI data.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="max-w-sm  border rounded-lg hover:border hover:border-blue-600"
            data-aos="flip-up"
          >
            <Image
              src="/dataone.png"
              alt="Productivity Image"
              width={100}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4">
              <h2 className="text-black text-xl font-bold mb-2 mx-5">
                Tecnology
              </h2>
              <p
                className="text-gray-700 text-base mb-4 mx-5"
                style={{ width: "17rem" }}
              >
                Geospatial platform with advanced analysis that suit your
                neetds.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="max-w-sm  border rounded-lg hover:border hover:border-blue-600"
            data-aos="fade-left"
          >
            <Image
              src="/dataone.png"
              alt="Productivity Image"
              width={100}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4">
              <h2 className="text-black text-xl font-bold mb-2 mx-5">
                Services
              </h2>
              <p
                className="text-gray-700 text-base mb-4 mx-5"
                style={{ width: "17rem" }}
              >
                An expert team help you to analyze your poltical power.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 border border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white transition duration-200 rounded-full font-bold">
          Learn More
        </button>
      </div>
      {/* Section 3 */}

      <div className="bg-blue-600 min-h-screen p-24 mt-[200px] ">
        <div className="container mx-auto px-6 lg:px-32  ">
          {/* Row 1: App Overview 1 */}
          <div
            className="relative md:w-3/4 mx-auto flex flex-col md:flex-row items-center md:space-y-0 md:space-x-6"
            data-aos="fade-right"
          >
            {/* Icon 1 */}

            <div className="absolute mt-60 left-[-80px] z-1 flex items-center justify-center">
              <img src="/overview1.png" alt="Icon 1" width={380} height={100} />
            </div>
            {/* Image Section */}
            <div className="absolute ">
              <Image
                src="/app.png"
                alt="App Overview 1"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Text Section) */}

          <div className=" flex justify-center p-12" data-aos="fade-up">
            <div className="z-20  md:pl-12 text-white  ">
              <h2 className="text-2xl font-bold mb-4">App Overview 1</h2>

              <p className=" text-sm leading-6 " style={{ width: "24rem" }}>
                Advanced spatial analysis to understand where and why things
                happen, identify the target constituency, and optimize the
                campaign.
              </p>

              <button className="px-4 py-2 border border-white rounded-2xl text-white hover:bg-white hover:text-black transition duration-200 mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/*App overview 2) */}
        <div
          className="relative md:w-3/4 mx-auto flex flex-col md:flex-row justify-center md:space-x-6"
          style={{ marginTop: "10rem" }}
        >
          {/* Text Section */}
          <div
            className="flex-col justify-between p-12 text-white"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">App Overview 2</h2>
            <p className="text-sm leading-6" style={{ width: "24rem" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="px-4 py-2 border border-white rounded-2xl text-white hover:bg-white hover:text-black transition duration-200 mt-6">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div
            className="relative mt-18 z-20 flex-row justify-center"
            data-aos="fade-left"
          >
            <Image
              src="/app2.png"
              alt="App Overview 1"
              width={450}
              height={500}
              className="rounded-lg"
            />

            {/* Icon 2 (Placed behind the image) */}
            <div className="absolute z-1 left-[70px] top-[-80px] opacity-50">
              <img src="/overview2.png" alt="Icon 1" width={420} height={400} />
            </div>
          </div>
        </div>
        {/* overview 3*/}
        <div
          className="relative md:w-3/4 mx-auto flex flex-col md:flex-row justify-between md:space-x-6"
          style={{ marginTop: "10rem" }}
        >
          {/* Image Section */}
          <div
            className="relative flex items-center justify-center md:w-1/2 mb-50 z-20"
            data-aos="fade-right"
          >
            <Image
              src="/app3.png"
              alt="App Overview 1"
              width={450}
              height={450}
              className="rounded-lg mb-35"
            />
            {/* Icon 2 (Placed behind the image) */}
            <div className="absolute z-1 left-[120px] bottom-[-100px] opacity-50">
              <img src="/hori2.png" alt="Icon 1" width={380} height={400} />
            </div>
          </div>

          {/* Text Section */}
          <div
            className="flex-col justify-center p-12 text-white md:w-1/2"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">App Overview 3</h2>
            <p
              className="text-sm text-white-200 leading-6 "
              style={{ width: "24rem" }}
            >
              Advanced spatial analysis to understand where and why things
              happen, identify the target constituency, and optimize the
              campaign.
            </p>
            <button className="px-4 py-2 border border-white rounded-2xl text-white hover:bg-white hover:text-black transition duration-200 mt-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
