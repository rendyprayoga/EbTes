// components/Projects.jsx
import Image from "next/image";

export default function Projects() {
  return (
    <section className="max-w-screen-lg mx-auto grid grid-cols-5 gap-2 p-5 justify-center items-center">
      <div className="flex justify-center items-center">
        <Image
          src="/vuejs.png"
          alt="Vue"
          width={100}
          height={100}
          className="opacity-20 transition-all duration-300 hover:opacity-60"
        />
      </div>
      <div className="flex justify-center  items-center">
        <Image
          src="/nextjs.jpeg"
          alt="Next"
          width={100}
          height={100}
          className="opacity-20 transition-all duration-300 hover:opacity-60"
        />
      </div>
      <div className="flex justify-center  items-center">
        <Image
          src="/HTML.jpg"
          alt="HTML 5"
          width={100}
          height={100}
          className="opacity-20 transition-all duration-300 hover:opacity-60"
        />
      </div>
      <div className="flex justify-center  items-center">
        <Image
          src="/tailwind.png"
          alt="Tailwind"
          width={100}
          height={100}
          className="opacity-20 transition-all duration-300 hover:opacity-60"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Bootstrap.png"
          alt="Bootstrap"
          width={100}
          height={100}
          className="opacity-20 transition-all duration-300 hover:opacity-60"
        />
      </div>
    </section>
  );
}
