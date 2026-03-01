import React from "react";
import Image from "next/image";

const clients = [
  {
    icon: "/images/icon/icon_03.svg",
    title: "Client-Centric",
    description: "Customized solution crafted for your unique success.",
  },
  {
    icon: "/images/icon/icon_04.svg",
    title: "Cross-Domain Expertise",
    description:
      "Experts in legal, finance, real estate, and marketing solutions.",
  },
  {
    icon: "/images/icon/icon_05.svg",
    title: "Strategic Location Insights",
    description:
      "Leverage location insights for success in Freezone or Mainland.",
  },
];

export default function Client() {
  return (
    <section data-aos="fade-right" className="bg-[var(--bg-light-red)] px-4 py-8 xl:px-30 2xl:px-60 border-b border-dotted">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {clients.map((item, idx) => (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 group p-5" key={idx}>
            <div data-aos="fade-left" className="bg-white rounded-full p-5 transition-colors duration-300 group-hover:bg-[var(--button-color)]">
              <Image
                src={item.icon}
                alt={item.title.toLowerCase()}
                width={50}
                height={50}
                className="w-10 md:w-10 h-auto "
              />
            </div>
            <div >
              <h2 className="text-[var(--bg-red)] text-xl md:text-lg xl:text-md 2xl:text-xl font-bold">
                {item.title}
              </h2>
              <p className="text-md font-light mt-2 xl:text-sm 2xl:text-xl ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
