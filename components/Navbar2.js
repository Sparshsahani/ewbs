"use client";
import { useState, useEffect } from "react";
import LogoComp from "./LogoComp";
import Button from "./Button";
import Link from "next/link";

export default function Navbar2({
  bgcolor = "bg-white",
  items = [
    "Home",
    "Mainland",
    "Freezone",
    "Services",
    "Blog",
    "About Us",
    "Careers",
    "Contact",
  ],
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white ">
      <div className=" flex items-center justify-between px-3 py-2  xl:px-20 lg:py-3 2xl:py-6  ">
        <Link href="/#"><LogoComp /></Link>

        {/* desktop links */}
        {/* <nav className="hidden lg:flex space-x-10 2xl:space-x-16 font-medium lg:text-sm xl:text-sm 2xl:text-xl">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </a>
          ))}
        </nav> */}

        {/* mobile toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // hamburger
              }
            />
          </svg>
        </button>

        <Button
          href="/ContactUs"
          bgcolor={`bg-[var(--button-color)] `}
          className="hidden lg:block font-medium  xl:text-sm 2xl:text-xl"
        />
      </div>

      {/* mobile menu */}
      <nav
        className={`lg:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {/* <ul className="flex flex-col space-y-8 p-5">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block w-full text-left hover:underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul> */}
        <div className="p-4">
          {/* <Button bgcolor={`bg-[var(--button-color)]`} className="w-full" /> */}
        </div>
      </nav>
    </header>
  );
}
