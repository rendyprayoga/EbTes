import Image from "next/image";

export default function SectionOne() {
  return (
    <section className="font-rubik">
      <div
        className="text-center mt-40 flex flex-col items-center"
        data-aos="fade-up"
      >
        <Image
          src="/coma.png"
          alt="coma"
          width={50}
          height={80}
          className="w-120 h-70 object-fill"
        />
        <p
          className="text-sm md:text-base mt-4 mb-20 font-medium text-center"
          style={{ width: "26rem", color: "#4F5665" }}
        >
          In just small steps you’ll connected directly to our technology.
          Knowledge about your own-power, your rivals, your voters, and your
          region in Election
        </p>
      </div>
      <div className="text-center mt-30 font-sans" data-aos="fade-up">
        <h1 className="text-4xl font-bold " style={{ color: "#1E0E62" }}>
          Our Advisiors
        </h1>
      </div>
      {/* Cards Section */}
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 md:grid-cols-3  p-6 mx-auto mt-4"
          data-aos="fade-up"
        >
          {/* Card 1 */}
          <div className="max-w-sm   rounded-lg hover:border hover:border-blue-600">
            <Image
              src="/xavier.png"
              alt="Productivity Image"
              width={320}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4 font-sans">
              <h2 className="text-black text-xl font-semibold mb-2 mx-5 text-center">
                Xavier Oswald
              </h2>
              <p className="text-gray-700 text-base mb-4 mx-5 text-center font-medium">
                CO-FOUNDER, DEVELOPER
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm   rounded-lg hover:border hover:border-blue-600">
            <Image
              src="/sara.png"
              alt="Productivity Image"
              width={320}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4 font-sans ">
              <h2 className="text-black text-xl font-semibold mb-2 mx-5 text-center ">
                Sara Creighton
              </h2>
              <p className="text-gray-700 text-base mb-4 mx-5 text-center font-medium">
                CO-FOUNDER, DEVELOPER
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm   rounded-lg hover:border hover:border-blue-600">
            <Image
              src="/branden.png"
              alt="Productivity Image"
              width={320}
              height={80}
              className="w-120 h-70 object-fill mt-10 mx-10"
            />

            <div className="p-4 text-center font-sans">
              <h2 className="text-black text-xl font-semibold mb-2 mx-5 text-center ">
                Brandon Ogden
              </h2>
              <p className="text-gray-700 font-medium text-base mb-4 mx-5 text-center">
                PROJECT MANAGER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
