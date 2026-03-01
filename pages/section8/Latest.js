import React from "react";
import Image from "next/image";

export default function Latest() {
  const news = [
    {
      id: 1,
      date: "November 22, 2024",
      title: "The Role of Technology in the Growth of UAE's Business Sector",
      image: "/latest-news-img-1.png",
    },
    {
      id: 2,
      date: "November 22, 2024",
      title: "The role of businesses in growing the sustainability in the UAE",
      image: "/latest-news-img-2.png",
    },
  ];

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );

  return (
    <>
      {/* Background split: top is light gray, bottom is white */}
      <section className="relative font-sans" data-aos="fade-up">
        {/* Background colors */}
        <div className="absolute inset-0 z-0 flex flex-col">
          <div className="h-[60%] bg-[#f4f4f4]"></div>
          <div className="h-[40%] bg-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-12 md:pt-20 pb-16 md:pb-20">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4" data-aos="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-bold text-[var(--bg-red)] mb-2">
                  Latest News.
                </h2>
                <p className="text-gray-500 text-lg md:text-xl xl:text-lg 2xl:text-xl">
                  Get the latest update, trips & tricks from our expert.
                </p>
              </div>
              <a
                href="/Blog"
                className="flex items-center text-[var(--bg-red)] font-medium text-lg md:text-xl xl:text-lg 2xl:text-xl hover:underline underline-offset-4 italic"
              >
                See all Blogs
                <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center not-italic">
                  <ArrowIcon />
                </span>
              </a>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-left">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col group cursor-pointer"
                >
                  {/* Card Text Area */}
                  <div className="p-6 md:p-8 pb-4 md:pb-6">
                    <p className="text-gray-400 text-base md:text-lg xl:text-base 2xl:text-lg mb-3">{item.date}</p>
                    <h3 className="text-[var(--bg-red)] text-2xl md:text-3xl xl:text-2xl 2xl:text-4xl font-medium leading-snug group-hover:underline decoration-2 underline-offset-4">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Image Area */}
                  <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-200 mt-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {/* Circular Arrow Button overlaying the image */}
                    <div className="absolute bottom-6 right-6 bg-white text-[var(--bg-red)] rounded-full w-10 h-10 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
