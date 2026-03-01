import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function WhatToChat() {
  return (
    <section data-aos="fade-up" className="relative w-full overflow-hidden bg-[#A71923] py-16 md:py-10">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full mix-blend-multiply opacity-50">
          <Image
            src="/images/media/chat-cta.png"
            alt="Team"
            fill
            className="object-cover object-top grayscale"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-20 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Want to Chat? Feel free to <br className="hidden md:block" /> Contact our Team.
            </h2>
            <p className="text-lg md:text-xl font-light text-white/90">
              If you have anything in mind just contact us with our expert.
            </p>
          </div>

          {/* Call To Action Button */}
          <div className="flex-shrink-0">
            <Link href="/contact" className="group relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 bg-[var(--button-color)] rounded-full transition-transform hover:scale-105 duration-300 shadow-lg text-black">

              {/* Rotating Text Container */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text fontSize="11.5" fontWeight="bold" letterSpacing="2px">
                    <textPath href="#circlePath" startOffset="0%">
                      GET A QUOTE • GET A QUOTE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Arrow */}
              <GoArrowUpRight className="text-6xl text-black transition-transform group-hover:rotate-45" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
