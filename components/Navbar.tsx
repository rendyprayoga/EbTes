"use client"; // Add this at the top of the file

import { useState } from "react";
import Link from "next/link"; // Ensure you import Link for navigation

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="block w-full px-4 py-2 mx-auto bg-white bg-opacity-60 backdrop-blur-md  rounded-md lg:px-8 lg:py-3 sticky top-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          Logo Ipsum
        </a>
        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2 text-slate-600"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Menu Items */}
        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="#">Product</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="#">Blog</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="#">Pricing</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="#">Contact</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center gap-3">
          <Link href="/auth">
            <button className="px-4 py-2 font-weightL:400">Sign In</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
