"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionThree() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="py-20 font-rubik ">
      <div
        className="text-center flex flex-col items-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-extrabold text-black">
          Plans and Pricing
        </h1>
        <p
          className="text-sm md:text-base mt-4 text-center  text-gray-500"
          style={{ width: "24rem" }}
        >
          We provide you with the best choices. The leading political campaign
          intelligence platform.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Individual Plan Card */}
          <div
            className="p-8 rounded-lg hover:border hover:border-blue-600  flex flex-col"
            data-aos="fade-left"
          >
            <Image
              src="/individual.png"
              alt="Individual Plan"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h2 className="text-center text-2xl font-bold mt-6 font-rubik">
              Individual Plan
            </h2>
            <ul className="text-gray-600 mt-10 space-y-2 flex-grow ">
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                1 User
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                1 Basic Analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                Unlimited Select Services
              </li>
            </ul>

            {/* Separate Price and Button */}
            <div className="mt-40 text-center">
              <div className="text-3xl font-bold font-rubik">$99 / mo</div>
              <button className=" mt-4 w-full border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white">
                Select
              </button>
            </div>
          </div>

          {/* Parties Plan Card */}
          <div
            className="p-8 rounded-lg  hover:border hover:border-blue-600  flex flex-col"
            data-aos="fade-right"
          >
            <Image
              src="/individual.png"
              alt="Parties Plan"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h2 className="text-center text-2xl font-bold mt-6">
              Parties Plan
            </h2>
            <ul className="text-gray-600 mt-10 space-y-2 flex-grow">
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                Unlimited Users
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                Basic Analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                Unlimited Select Services
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#2FAB73"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="m19.75 7.018l-9.257 9.257a1 1 0 0 1-1.414 0L4.25 11.446"
                    ></path>
                  </svg>
                </span>
                Free extend 1 month
              </li>
            </ul>

            {/* Separate Price and Button */}
            <div className="mt-6 text-center">
              <div className="text-3xl font-bold">$500 / mo</div>
              <button className=" mt-4 w-full border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
