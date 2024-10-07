"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Summary() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="text-white mt-4">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 "
      />

      {/* Konten */}
      <div
        className="grid grid-cols-1 md:grid-cols-[auto,auto] gap-4 md:gap-10 p-10 items-center justify-center  md:h-screen "
        style={{
          backgroundColor: "#1C1A1F",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          // background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        }}
      >
        <div
          className="text-center md:text-left mt-10 md:mt-0"
          data-aos="fade-up"
        >
          <h1 className="text-2xl mb-5" style={{ fontWeight: 700 }}>
            Rendy Prayoga
          </h1>
          <h2 className="text-lg mb-5"> Front-End Web Development</h2>
          <p className="font-mono text-sm md:text-base max-w-lg">
            I have an interest in Front-End Web development. I have experience
            in using various programming languages, frameworks, and libraries in
            developing systems. I am committed to continue practicing and
            improving my skills to improve my abilities especially in the field
            of Front-End Web development.
          </p>
        </div>

        <div className="flex-shrink-0 justify-self-center" data-aos="fade-up">
          <Image
            src="/dummy.png"
            alt="Profile Image"
            width={340}
            height={200}
            style={{
              borderRadius: "50px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
