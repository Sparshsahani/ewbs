"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Achievements() {
  const stories = [
    {
      id: 1,
      title: "EWBS Group teams up with Deccan Gladiators",
      images: "/images/media/news1.jpeg",
    },
    {
      id: 2,
      title: "EWBS leadership recognised at Golden Excellence Awards",
      images: "/images/media/news2.jpeg",
    },
    {
      id: 3,
      title: "EWBS Announces Launch Of Pioneering Service To Assist ...",
      images: "/images/media/news3.jpeg",
    },
    {
      id: 4,
      title: "EWBS: Pioneering business expansion in the Emirates",
      images: "/images/media/news4.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const activeStory = stories[activeIndex];

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
    <section data-aos="zoom-in" className="bg-[#f4f4f4] pt-12 md:pt-20 pb-16 md:pb-20 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
        {/* Header */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-bold text-[var(--bg-red)]">
            Our New achievements.
          </h2>
          <a
            href="/AboutUs"
            className="flex items-center text-[var(--bg-red)] font-medium text-lg hover:underline underline-offset-4"
          >
            See all stories
            <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Top Section: Hero + List */}
        <div data-aos="fade-up" className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Hero Image */}
          <div className="w-full lg:w-2/3 relative rounded-xl overflow-hidden bg-gray-300 h-[300px] md:h-[400px]">
            <div  className="absolute inset-0 flex items-center justify-center text-gray-500">
              <Image
                key={activeStory.id} // Forces re-render for smooth image swap if needed, or just let src change
                src={activeStory.images}
                alt={activeStory.title}
                width={2000}
                height={2000}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex justify-between items-end">
              <h3 className="text-white text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-bold w-2/3 leading-tight">
                {activeStory.title}
              </h3>
              <button className="bg-white text-black px-3 py-1.5 rounded-full flex items-center text-sm font-bold">
                View
                <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>

          {/* List */}
          <div data-aos="fade-left" className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
            {stories.map((story, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-start gap-6 cursor-pointer group"
                >
                  <span
                    className={`text-5xl 2xl:text-6xl font-bold leading-none transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--bg-red)]"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {story.id}
                  </span>
                  <p
                    className={`text-sm md:text-xl xl:text-md 2xl:text-2xl pt-2 transition-colors duration-300 ${
                      isActive
                        ? "font-bold text-black"
                        : "text-gray-500 font-medium group-hover:text-gray-800"
                    }`}
                  >
                    {story.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stories.map((story, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={story.id}
                onClick={() => setActiveIndex(index)}
                className={`rounded-xl p-4 flex flex-col justify-between h-[280px] cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--bg-red)] text-white scale-[1.02] shadow-lg"
                    : "bg-white text-gray-600 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={story.images}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`text-lg md:text-xl xl:text-[16px] 2xl:text-xl ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {story.title}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  {isActive ? (
                    <button className="bg-white text-black px-3 py-1.5 rounded-full flex items-center text-sm font-bold">
                      View
                      <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <ArrowIcon />
                      </span>
                    </button>
                  ) : (
                    <button className="text-black flex items-center text-sm font-bold italic">
                      View
                      <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center not-italic">
                        <ArrowIcon />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
