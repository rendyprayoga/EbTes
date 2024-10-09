export default function Subs() {
  return (
    <section className="p-4">
      {/* Container dengan background biru dan lebar terbatas */}
      <div
        className=" max-w-6xl mx-auto p-6 rounded-lg font-rubik"
        style={{ backgroundColor: "#2161D5" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-1">
          {/* Kolom untuk teks */}
          <div className="flex flex-col ">
            <h2 className="text-white text-4xl mb-2 mx-8">
              Subscribe Now For Get Special Features
            </h2>
            <p className="text-white mb-4 mx-8">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          {/* Kolom untuk tombol */}
          <div className="flex items-start justify-end mx-8 mt-10">
            <button
              className="text-blue-800 bg-white hover:bg-blue-600 shadow-md rounded-lg text-sm px-10 py-3 text-center font-bold"
              style={{ boxShadow: "5px 10px 10px rgba(255, 255, 255, 0.2)" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
