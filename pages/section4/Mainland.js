import Image from "next/image";
import React from "react";

export default function Mainland() {
  return (
    <section data-aos="fade-up" className="py-10 md:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
        <div className="flex flex-col md:flex-row border-y border-dashed border-gray-300">
          {/* mainland card */}
          <div className="flex-1 p-8 md:p-12 space-y-5 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
            <Image
              src="/images/icon/icon_05.svg"
              alt="Mainland"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h3 className="text-[var(--bg-red)] text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl font-bold">
              Mainland
            </h3>
            <p className="text-lg md:text-xl xl:text-md 2xl:text-xl font-normal text-gray-600">
              Say goodbye to business setup hassles in Dubai Mainland. We make
              business incorporation easy.
            </p>
          </div>

          {/* freezone card */}
          <div className="flex-1 p-8 md:p-12 space-y-5 border-b md:border-b-0 md:border-r border-dashed border-gray-300">
            <Image
              src="/images/icon/icon_05.svg"
              alt="Freezone"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h3 className="text-[var(--bg-red)] text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl font-bold">
              Freezone
            </h3>
            <p className="text-lg md:text-xl xl:text-md 2xl:text-xl font-normal text-gray-600">
              Start strong in any Freezone. Transform your ideas into a
              profitable venture.
            </p>
          </div>

          {/* experience card */}
          <div className="flex-1 p-8 md:p-12 space-y-5 flex flex-col justify-center">
            <div className="text-[var(--bg-red)] text-4xl md:text-5xl bg-[var(--button-color)] rounded-full w-20 h-20 md:w-24 md:h-24 flex justify-center items-center font-bold mb-2">
              6+
            </div>
            <p className="text-lg md:text-xl xl:text-md 2xl:text-xl  font-normal text-gray-600">Years experience with pride.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
