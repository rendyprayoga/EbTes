import Image from "next/image";
export default function Summary() {
  return (
    <section
      className="bg-white text-black rounded-b-lg"
      style={{
        // borderBottomLeftRadius: "30px",
        // borderBottomRightRadius: "30px",
        backgroundColor: "white",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex justify-center  grid-rows-3 grid-flow-col gap-4 p-10">
        <div className="row-span-2 mt-20 ">
          <h1>Hello</h1>
          <h2> Rendy Prayoga</h2>
          <p>im, interested to front-end web development</p>
        </div>

        <div className="row-span-3 ">
          <Image
            src="/myfoto.jpg"
            alt="Profile Image"
            width={200}
            height={220}
            // className="rounded-lg"
            style={{
              borderRadius: "80px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
