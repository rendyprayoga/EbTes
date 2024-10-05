"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor CSS AOS

export default function Summary() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="text-white mt-4">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      />
      <div
        className="flex justify-center grid-rows-3 grid-flow-col gap-4 p-10"
        style={{
          backgroundColor: "#1e40af",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        }}
      >
        <div className="row-span-2 mt-20" data-aos="fade-up">
          <h1>Hello</h1>
          <h2>I'm Rendy Prayoga</h2>
          <p>I'm interested in front-end web development</p>
        </div>

        <div className="row-span-3" data-aos="fade-up">
          <Image
            src="/myfoto.jpg"
            alt="Profile Image"
            width={200}
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
