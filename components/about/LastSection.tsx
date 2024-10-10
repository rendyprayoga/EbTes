"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
export default function LastSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="font-rubik">
      <div className="text-center mt-20" data-aos="fade-up-right">
        <h1 className="text-4xl font-bold text-black">
          What Political Figures Say
        </h1>
        <p
          className="text-sm md:text-base text-gray-500 mt-6 mb-10 mx-auto"
          style={{ maxWidth: "31rem" }}
        >
          These are the stories of political figures who have joined us with
          great pleasure when using this crazy feature.
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mx-auto mt-4 mb-20">
          {/* Card 1 */}
          <div
            className="max-w-sm rounded-lg p-6 border hover:border hover:border-blue-600"
            data-aos="fade-up-right"
          >
            <div className="flex items-center mb-4" data-aos="fade-left">
              <Image
                className="w-12 h-12 rounded-full"
                src="/airlangga.png"
                width={48}
                height={48}
                alt="Airlanga Hartanto"
              />
              <div className="ml-3">
                <h3 className="text-lg md:text-lg font-semibold">
                  Airlanga Hartanto
                </h3>
                <p className="text-sm text-gray-500">
                  Menteri Koordinator dan Perekonomian RI
                </p>
              </div>
            </div>
            <p
              className="text-gray-700 font-medium"
              style={{ maxWidth: "23rem" }}
            >
              Saya minta kepada segenap pengurus DPD, provinsi, kabupaten dan
              kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan
              penggalangan opini masyarakat.
            </p>
          </div>
          {/* Card 2 */}
          <div
            className="max-w-sm rounded-lg p-6 border hover:border hover:border-blue-600"
            data-aos="fade-up-right"
          >
            <div className="flex items-center mb-4 " data-aos="fade-up">
              <Image
                className="w-12 h-12 rounded-full"
                src="/pakde.png"
                width={48}
                height={48}
                alt="Jokowi Dodo"
              />
              <div className="ml-3">
                <h3 className="text-lg md:text-lg font-semibold">
                  Jokowi Dodo
                </h3>
                <p className="text-sm text-gray-500">Presiden RI</p>
              </div>
            </div>
            <p
              className="text-gray-700 font-medium"
              style={{ maxWidth: "23rem" }}
            >
              Daerah merupakan bagian dari pemerintah yang langsung berinteraksi
              dengan masyarakat.
            </p>
          </div>
          {/* Card 3 */}
          <div
            className="max-w-sm border rounded-lg p-6 hover:border hover:border-blue-600"
            data-aos="fade-up-right"
          >
            <div className="flex items-center mb-4">
              <Image
                className="w-12 h-12 rounded-full"
                src="/puan.png"
                width={48}
                height={48}
                alt="Puan Maharani"
              />
              <div className="ml-3">
                <h3 className="text-lg md:text-lg font-semibold">
                  Puan Maharani
                </h3>
                <p className="text-sm text-gray-500">
                  Ketua DPR dan Fraksi PDI Perjuangan
                </p>
              </div>
            </div>
            <p
              className="text-gray-700 font-medium"
              style={{ maxWidth: "23rem" }}
            >
              Daerah merupakan bagian dari pemerintah yang langsung berinteraksi
              dengan masyarakat ketika proses demokratisasi berlangsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
