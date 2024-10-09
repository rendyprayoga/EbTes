import Image from "next/image";
export default function Footers() {
  return (
    <footer className="bg-white mt-40">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/geolabs.png"
                width={40}
                height={10}
                className="h-8 me-3 object-fill"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                GEOLABS
              </span>
            </a>
            <p className="mt-6 text-gray-500 " style={{ width: "20rem" }}>
              <strong>Geolabs</strong> is a private virtual network that has
              unique features and has high security.
            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="flex items-center mb-2" // Add margin-bottom to separate from text
              >
                <div className="w-10 h-10 bg-white-200 rounded-full flex items-center justify-center shadow-lg mr-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <div className="w-10 h-10 bg-white-200 rounded-full flex items-center justify-center shadow-lg mr-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" // Update viewBox for Twitter
                  >
                    <path d="M23.953 4.569c-.885.392-1.83.654-2.825.775 1.013-.607 1.794-1.569 2.163-2.724-.949.564-2 1.026-3.127 1.256-.895-.952-2.171-1.544-3.595-1.544-2.715 0-4.916 2.2-4.916 4.916 0 .385.043.76.127 1.124-4.083-.205-7.698-2.155-10.115-5.126-.423.726-.666 1.568-.666 2.477 0 1.71.87 3.215 2.188 4.094-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.692 4.372 3.946 4.825-.413.112-.849.171-1.293.171-.316 0-.621-.031-.922-.089.622 1.94 2.434 3.352 4.582 3.393-1.678 1.316-3.786 2.098-6.079 2.098-.395 0-.785-.023-1.17-.067 2.174 1.394 4.755 2.207 7.526 2.207 9.045 0 13.988-7.487 13.988-13.955 0-.213-.005-.425-.014-.637.959-.694 1.79-1.56 2.448-2.548l-.047-.021z" />
                  </svg>
                </div>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="flex items-center mb-2">
                <div className="w-10 h-10 bg-white-200 rounded-full flex items-center justify-center shadow-lg mr-2">
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="blue"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.001 2.999h10c2.2 0 3.998 1.8 3.998 3.998v10c0 2.2-1.798 3.998-3.998 3.998h-10c-2.2 0-3.998-1.798-3.998-3.998v-10c0-2.198 1.798-3.998 3.998-3.998zm10 1.001h-10c-1.101 0-2 .899-2 2v10c0 1.101.899 2 2 2h10c1.101 0 2-.899 2-2v-10c0-1.101-.899-2-2-2zm-5 12.998c-2.206 0-4-1.794-4-4 0-2.206 1.794-4 4-4 2.206 0 4 1.794 4 4 0 2.206-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2 0 1.103.897 2 2 2 1.103 0 2-.897 2-2 0-1.103-.897-2-2-2zm4-5c-.733 0-1.338.605-1.338 1.338 0 .733.605 1.338 1.338 1.338.733 0 1.338-.605 1.338-1.338 0-.733-.605-1.338-1.338-1.338z" />
                  </svg>
                </div>
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
            <p className="mt-6 text-gray-500 ">
              ©2020<strong>EBDESK</strong>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                Product
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Download
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Location
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Server
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Countries
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Engage
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Geolabs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tutorials
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Terms Of Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                Earn Money
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Affiliate
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Become Partner
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
