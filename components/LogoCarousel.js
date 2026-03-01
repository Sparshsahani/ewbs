"use client";
import Image from "next/image";

export default function LogoCarousel({ logos = [] }) {
  // Duplicate the logos array multiple times to ensure it fills wide screens and loops seamlessly
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="max-w-7xl mx-auto bg-white py-8 overflow-hidden relative flex items-center group">
      {/* 
        We duplicate 4 times. 
        Translating by -50% means it moves exactly 2 sets of logos.
        This ensures a seamless loop even on very wide screens.
      */}
      <div className="flex w-max animate-marquee">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={180}
              height={80}
              className="h-12 sm:h-16 md:h-20 2xl:h-30 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
